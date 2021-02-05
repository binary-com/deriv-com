import React, { useEffect } from 'react'
import { getClientInformation, getDomain, getLanguage, isBrowser } from 'common/utility'

const useGTMData = () => {
    const [gtm_data, setGTMData] = React.useState(null)
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    const has_dataLayer = isBrowser() && window.dataLayer

    useEffect(() => {
        if (gtm_data) {
            has_dataLayer &&
                window.dataLayer.push({
                    ...gtm_data,
                    loggedIn: !!client_information,
                    language: getLanguage(),
                    visitorId: client_information?.loginid,
                    currency: client_information?.currency,
                })
        }
    }, [gtm_data])

    return [gtm_data, setGTMData]
}

export default useGTMData
