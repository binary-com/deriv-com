import { useState, useEffect } from 'react'
import { getClientInformation, getDomain, useCallbackRef } from 'common/utility'

export const useClientInformation = () => {
    const [client_information, setClientInformation] = useState(null)

    const setCurrentClientInformation = () => {
        const current_client_information = getClientInformation(getDomain())
        const is_client_information_updated =
            current_client_information &&
            JSON.stringify(current_client_information) != JSON.stringify(client_information)

        if (is_client_information_updated) setClientInformation(current_client_information)
    }

    const callback_ref = useCallbackRef(setCurrentClientInformation)

    useEffect(() => {
        const cookie_interval = setInterval(() => {
            callback_ref.current()
        }, 1000)

        return () => clearInterval(cookie_interval)
    }, [callback_ref])

    return client_information
}
