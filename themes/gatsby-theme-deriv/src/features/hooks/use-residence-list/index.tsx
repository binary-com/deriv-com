import { useEffect, useMemo } from 'react'
import useWS from 'components/hooks/useWS'

export type ResidenceType = {
    text: string
    value: string
}

const formatResidenceList = ({
    residences,
    restricted = [],
}: {
    residences: any[]
    restricted: ['Iran', 'North Korea', 'Myanmar (Burma)', 'Syria', 'Cuba'] | string[]
}) => {
    if (!residences.length) {
        return []
    }
    return residences
        .filter(({ text: name }) => !restricted.includes(name))
        .map(
            ({
                text: display_name,
                text: name,
                value: symbol,
                phone_idd: prefix,
                disabled: disabled,
            }) => {
                return {
                    name,
                    display_name,
                    symbol,
                    prefix,
                    disabled,
                }
            },
        )
}

export const useResidenceList = ({
    restricted_countries,
}: {
    restricted_countries?: ['Iran', 'North Korea', 'Myanmar (Burma)', 'Syria', 'Cuba']
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
