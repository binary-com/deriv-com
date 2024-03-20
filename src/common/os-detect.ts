export const mobileOSDetect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone'
    }
    if (/iPad|iPhone|iPod|Mac/.test(userAgent) && !window.MSStream) {
        return 'iOS'
    }

    if (/android/i.test(userAgent)) {
        if (/huawei/.test(userAgent)) {
            return 'Huawei'
        } else {
            return 'Android'
        }
    }
    return 'unknown'
}
