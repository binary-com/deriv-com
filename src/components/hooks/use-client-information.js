import { useState, useEffect } from 'react'
import { getClientInformation, getDomain } from 'common/utility'

export const useClientInformation = () => {
    const [client_information, setClientInformation] = useState(false)
    const [current_client_information, setCurrentClientInformation] = useState(false)

    useEffect(() => {
        setCurrentClientInformation(getClientInformation(getDomain()))
    }, [])

    useEffect(() => {
        if (current_client_information) {
            if (JSON.stringify(current_client_information) != JSON.stringify(client_information)) {
                setClientInformation(current_client_information)
            }
        } else {
            setClientInformation(false)
        }
    }, [current_client_information])

    return client_information
}
