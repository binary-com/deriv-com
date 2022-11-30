import { useEffect, useState } from 'react'
import { browserName, browserVersion } from 'react-device-detect'

export const useUserBrowser = () => {
    const minimum_required_versions = {
        chrome: '105',
    }

    const [browser, setBrowser] = useState({
        name: '',
        version: 0,
    })
    useEffect(() => {
        setBrowser({
            name: browserName,
            version: Number(browserVersion),
        })
    }, [])

    return browser
}
