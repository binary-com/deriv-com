import semver from 'semver'
import { browserName, browserVersion } from 'react-device-detect'

const minimum_required_browsers_versions = {
    Chrome: '70.0.0',
    Firefox: '44.0.0',
    Opera: '44.0.0',
    Yandex: '19.0.0',
    Safari: '11.1.0',
    Edge: '17.0.0',
    MobileSafari: '11.3.0',
    SamsungBrowser: '9.0.0',
    UCBrowser: '13.0.0',
    'MIUI Browser': '11.0.0',
}

/** Check if the browser supports service worker */
const isServiceWorkerSupported = () => {
    const user_browser_name = browserName || ''
    const user_browser_version = semver.coerce(browserVersion)?.version || '1.0.0'
    const minimum_required_browsers_version = minimum_required_browsers_versions[user_browser_name]

    // if the browser is in the list , check if the version is greater than the minimum required
    if (minimum_required_browsers_version)
        return semver.gt(user_browser_version, minimum_required_browsers_version)

    return true
}

export default isServiceWorkerSupported
