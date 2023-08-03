/**
 * Requests detailed data with User-Agent Client Hints
 *
 * @see https://wicg.github.io/ua-client-hints/
 * @returns {Promise<UADataValues | null>} Promise with detailed data or null if not supported
 * **/
const getUserAgentData = () => {
    let user_agent_data: UADataValues = null
    if ('userAgentData' in navigator) {
        navigator.userAgentData
            .getHighEntropyValues([
                'architecture',
                'bitness',
                'model',
                'platform',
                'platformVersion',
                'fullVersionList',
                'wow64',
            ])
            .then((ua_data) => {
                user_agent_data = ua_data
            })
            .catch(() => {
                user_agent_data = null
            })
    }
    return user_agent_data
}
export const isMobile = () => {
    const user_agent_data = getUserAgentData()
    return user_agent_data
        ? user_agent_data.mobile
        : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const mobileOSDetect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone'
    }

    if (/android/i.test(userAgent)) {
        return 'Android'
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS'
    }

    return 'unknown'
}
