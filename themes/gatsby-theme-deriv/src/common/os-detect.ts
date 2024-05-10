export const mobileOSDetect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone'
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !window.MSStream) {
        return 'iOS'
    }

    if (/android/i.test(userAgent)) {
        if (/huawei/i.test(userAgent)) {
            return 'Huawei'
        } else {
            return 'Android'
        }
    }

    return 'unknown'
}
