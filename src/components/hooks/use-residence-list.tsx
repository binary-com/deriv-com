import { useEffect, useMemo } from 'react'
import useWS from './useWS'

export type ResidenceType = {
    text: string
    value: string
}

const formatResidenceList = (residences) => {
    if (!residences.length) {
        return []
    }
    return residences?.map(({ text: display_name, text: name, value: symbol }) => ({
        name,
        display_name,
        symbol,
    }))
}

export const useResidenceList = () => {
    const { send, data } = useWS('residence_list')

    useEffect(() => {
        send()
    }, [send])

    const residence_list = useMemo(() => formatResidenceList(data || []), [data])
    return [residence_list]
}
