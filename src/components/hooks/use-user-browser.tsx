import { useEffect, useState } from 'react'
import { browserName, browserVersion } from 'react-device-detect'
import { browsers_minimum_required_version as default_versions } from 'common/constants'

export const useUserBrowser = (
    browsers_minimum_required_version: typeof default_versions = default_versions,
) => {
    const [browser, setBrowser] = useState({
        browser_name: '',
        browser_version: 0,
    })

    const is_outdated =
        browsers_minimum_required_version[browser.browser_name] &&
        browser.browser_version < browsers_minimum_required_version[browser.browser_name]

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
