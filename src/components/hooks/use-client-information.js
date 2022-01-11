import { useState, useEffect, useRef } from 'react'
import { getClientInformation, getDomain } from 'common/utility'

export const useClientInformation = () => {
    const [client_information, setClientInformation] = useState(false)
    const callback_ref = useRef()

    const setCurrentClientInformation = () => {
        const current_client_information = getClientInformation(getDomain())
        if (JSON.stringify(current_client_information) != JSON.stringify(client_information)) {
            setClientInformation(current_client_information)
        }
    }

    useEffect(() => {
        callback_ref.current = setCurrentClientInformation
    })

    useEffect(() => {
        const cookie_interval = setInterval(() => {
            callback_ref.current()
        }, 1000)

        return () => clearInterval(cookie_interval)
    }, [])

    return client_information
}
