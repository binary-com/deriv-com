import { useEffect, useState } from 'react'
import { browserName, browserVersion } from 'react-device-detect'

export const minimum_required_versions = {
    Chrome: 107,
    Firefox: 116,
    Opera: 107,
    Yandex: 108,
    Safari: 109,
    'Internet Explorer': 110,
    Edge: 111,
    Chromium: 112,
    IE: 113,
    'Mobile Safari': 114,
    'Edge Chromium': 115,
    'MIUI Browser': 116,
    'Samsung Browser': 117,
}

export const useUserBrowser = () => {
    const [browser, setBrowser] = useState({
        browser_name: '',
        browser_version: 0,
    })

    const is_outdated =
        minimum_required_versions[browser.browser_name] &&
        browser.browser_version < minimum_required_versions[browser.browser_name]

    useEffect(() => {
        setBrowser({
            browser_name: browserName,
            browser_version: Number(browserVersion),
        })
    }, [])

    return {
        ...browser,
        is_outdated,
    }
}
