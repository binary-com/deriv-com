import { useEffect, useMemo } from 'react'
import useWS from '../../../components/hooks/useWS'

export type ResidenceType = {
    text: string
    value: string
}

const formatResidenceList = ({
    residences,
    restricted,
}: {
    residences: any[]
    restricted: string[]
}) => {
    if (!residences.length) {
        return []
    }
    return residences?.map(
        ({ text: display_name, text: name, value: symbol, phone_idd: prefix }) => {
            if (restricted?.includes(name)) return {}
            else
                return {
                    name,
                    display_name,
                    symbol,
                    prefix,
                }
        },
    )
}

export const useResidenceList = ({
    restricted_countries = [],
}: {
    restricted_countries?: string[]
} = {}) => {
    const { send, data } = useWS('residence_list')
    useEffect(() => {
        send()
    }, [send])

    const residence_list = useMemo(
        () => formatResidenceList({ residences: data || [], restricted: restricted_countries }),
        [data],
    )
    return [residence_list]
}
