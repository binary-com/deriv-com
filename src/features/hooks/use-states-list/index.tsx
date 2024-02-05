import { useEffect, useMemo } from 'react'
import useWS from '../../../components/hooks/useWS'

export type ResidenceType = {
    text: string
    value: string
}

const isAlphanumeric = (str: string): boolean => /^[a-zA-Z0-9]+$/.test(str)

const formatStatesList = (states) => {
    if (!states.length) {
        return []
    }

    return states.reduce((acc, { text }) => {
        if (text && isAlphanumeric(text)) {
            acc.push({
                name: text,
                display_name: text,
            })
        }
        return acc
    }, [])
}

export const useStatesList = (country_code) => {
    const { send, data } = useWS('states_list')

    useEffect(() => {
        send({ states_list: country_code })
    }, [country_code])

    const states_list = useMemo(() => formatStatesList(data || []), [data])
    return [states_list]
}
