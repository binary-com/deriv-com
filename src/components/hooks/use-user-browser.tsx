import { useEffect, useState } from 'react'
import { browserName, browserVersion } from 'react-device-detect'

export const useUserBrowser = () => {
    const [browser, setBrowser] = useState({
        browser_name: '',
        browser_version: 0,
    })
    useEffect(() => {
        setBrowser({
            browser_name: browserName,
            browser_version: Number(browserVersion),
        })
    }, [])

    return browser
}
