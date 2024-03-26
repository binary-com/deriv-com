import React, { useEffect } from 'react'
import { getClientInformation, getDomain, getLanguage, isBrowser } from 'common/utility'

const useGTMData = () => {
    const [gtm_data, setGTMData] = React.useState(null)
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    const has_dataLayer = isBrowser() && window.dataLayer
    const is_logged_in = !!client_information

    useEffect(() => {
        if (gtm_data) {
            has_dataLayer &&
                window.dataLayer.push({
                    ...gtm_data,
                    loggedIn: is_logged_in,
                    language: getLanguage(),
                    ...(is_logged_in && {
                        visitorId: client_information.loginid,
                        currency: client_information.currency,
                        email: client_information.email,
                    }),
                })
        }
    }, [gtm_data])

    return [gtm_data, setGTMData]
}

export default useGTMData
