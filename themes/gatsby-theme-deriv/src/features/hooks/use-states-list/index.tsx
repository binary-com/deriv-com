import { useEffect, useMemo } from 'react'
import useWS from '../../../components/hooks/useWS'

export type ResidenceType = {
    text: string
    value: string
}

const formatStatesList = (states) => {
    if (!states.length) {
        return []
    }

    return states?.map(
        ({ text, value }) =>
            typeof text !== undefined && {
                symbol: value,
                name: text,
                display_name: text,
            },
    )
}

export const useStatesList = (country_code) => {
    const { send, data } = useWS('states_list')

    useEffect(() => {
        send({ states_list: country_code })
    }, [country_code])

    const states_list = useMemo(() => formatStatesList(data || []), [data])
    return [states_list]
}
