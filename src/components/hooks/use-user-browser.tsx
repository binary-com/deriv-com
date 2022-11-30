import { useEffect, useState } from 'react'

export const useUserBrowser = () => {
    const minimum_required_versions = {
        chrome: '105',
    }
    function getBrowserName(userAgent) {
        // The order matters here, and this may report false positives for unlisted browsers.
        console.log(userAgent)
        if (userAgent.includes('Firefox')) {
            return 'Firefox'
        } else if (userAgent.includes('SamsungBrowser')) {
            return 'Samsung Internet'
        } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
            return 'Opera'
        } else if (userAgent.includes('Trident')) {
            return 'IE'
        } else if (userAgent.includes('Edge')) {
            return 'Edge (Legacy)'
        } else if (userAgent.includes('Edg')) {
            return 'Edge (Chromium)'
        } else if (userAgent.includes('Chrome')) {
            return 'Chrome'
        } else if (userAgent.includes('Safari')) {
            return 'Safari'
        } else {
            return 'unknown'
        }
    }

    const [browser, setBrowser] = useState({
        name: '',
        version: 0,
    })
    useEffect(() => {
        setBrowser({
            name: getBrowserName(navigator.userAgent),
            version: 12,
        })
    }, [])

    return browser
}
