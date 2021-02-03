import React, { useEffect } from 'react'
import { getClientInformation, getDomain, getLanguage, isBrowser } from 'common/utility'

const useGTMData = () => {
    const [gtm_data, setGTMData] = React.useState(null)
    const domain = getDomain()
    const is_logged_in = getClientInformation(domain)
    const has_dataLayer = isBrowser() && window.dataLayer

    useEffect(() => {
        if (gtm_data) {
            has_dataLayer &&
                window.dataLayer.push({
                    ...gtm_data,
                    loggedIn: is_logged_in,
                    language: getLanguage(),
                })
        }
    }, [gtm_data])

    return [gtm_data, setGTMData]
}

export default useGTMData
