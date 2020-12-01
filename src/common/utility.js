import extend from 'extend'

const toISOFormat = (date) => {
    if (date instanceof Date) {
        const utc_year = date.getUTCFullYear()
        const utc_month = (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
        const utc_date = (date.getUTCDate() < 10 ? '0' : '') + date.getUTCDate()

        return `${utc_year}-${utc_month}-${utc_date}`
    }

    return ''
}

const toHashFormat = (string) => string.replace(/\s+/g, '-').toLowerCase() // change space to dash then lowercase all

const isBrowser = () => typeof window !== 'undefined'

const isEmptyObject = (obj) => {
    let is_empty = true
    if (obj && obj instanceof Object) {
        Object.keys(obj).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(obj, key)) is_empty = false
        })
    }
    return is_empty
}

const scrollTop = () => {
    if (isBrowser()) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}

const cloneObject = (obj) =>
    !isEmptyObject(obj) ? extend(true, Array.isArray(obj) ? [] : {}, obj) : obj

const getPropertyValue = (obj, k) => {
    let keys = k
    if (!Array.isArray(keys)) keys = [keys]
    if (!isEmptyObject(obj) && keys[0] in obj && keys && keys.length > 1) {
        return getPropertyValue(obj[keys[0]], keys.slice(1))
    }
    // else return clone of object to avoid overwriting data
    return obj ? cloneObject(obj[keys[0]]) : undefined
}
const getLocationHash = () =>
    isBrowser() && location.hash ? location.hash.slice(1).replace(/(\/)$/g, '') : ''

const setLocationHash = (tab) => {
    if (isBrowser()) {
        location.hash = `#${tab}`
    }
}
const routeBack = () => {
    if (isBrowser) {
        window.history.back()
    }
}
const checkElemInArray = (tab_list, tab) => tab_list.includes(tab)

const getWindowWidth = () => (isBrowser() && window.screen ? window.screen.width : '')

const getLanguage = () => (isBrowser() ? localStorage.getItem('i18n') || navigator.language : null)

const getCrowdin = () =>
    isBrowser() ? localStorage.getItem('jipt_language_code_deriv-com') || navigator.language : null

class PromiseClass {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject
            this.resolve = resolve
        })
    }
}

const sanitize = (input) => input.replace(/[.*+?^${}()|[\]\\]/g, '')

const sentenceCase = (input) => input.charAt(0).toUpperCase() + input.slice(1)

const getCryptoDecimals = (input) => input.toFixed(1 - Math.floor(Math.log(input) / Math.log(10)))

function debounce(func, wait, immediate) {
    let timeout
    return function () {
        const context = this
        const args = arguments

        const later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const trimSpaces = (value) => value.trim()

const deriv_app_url = 'https://app.deriv.com'
const deriv_bot_app_url = 'https://app.deriv.com/bot'
const deriv_dp2p_app_url = 'https://app.deriv.com/cashier/p2p'
const smarttrader_url = 'https://smarttrader.deriv.com'
const binary_url = 'https://binary.com'
const deriv_cookie_domain = 'deriv.com'
const affiliate_signup_url = 'https://login.deriv.com/signup.php'
const affiliate_signin_url = 'https://login.deriv.com/signin.php'
const community_url = 'https://community.deriv.com/'
const zoho_url = 'https://deriv.zohorecruit.com/'
const brand_name = 'Deriv'
const map_api_key = 'AIzaSyAEha6-HeZuI95L9JWmX3m6o-AxQr_oFqU'
const gtm_test_domain = 'deriv-com.binary.sx'
const p2p_playstore_url = 'https://play.google.com/store/apps/details?id=com.deriv.dp2p'
const mga_link_url =
    'https://authorisation.mga.org.mt/verification.aspx?lang=EN&company=a5fd1edc-d072-4c26-b0cd-ab3fa0f0cc40&details=1'

const dmt5_windows_url = 'https://download.mql5.com/cdn/web/deriv.limited/mt5/deriv5setup.exe'
const dmt5_linux_url = 'https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux'
const dmt5_android_url =
    'https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server'
const dmt5_ios_url = 'https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server'
const dp2p_google_play_url =
    'https://play.google.com/store/apps/details?id=com.deriv.dp2p&hl=en&gl=US'

export {
    affiliate_signin_url,
    affiliate_signup_url,
    binary_url,
    deriv_cookie_domain,
    dmt5_windows_url,
    dmt5_linux_url,
    dmt5_android_url,
    dmt5_ios_url,
    community_url,
    deriv_app_url,
    deriv_bot_app_url,
    deriv_dp2p_app_url,
    dp2p_google_play_url,
    mga_link_url,
    debounce,
    brand_name,
    isEmptyObject,
    cloneObject,
    isBrowser,
    getCrowdin,
    getCryptoDecimals,
    getPropertyValue,
    getLanguage,
    getLocationHash,
    setLocationHash,
    routeBack,
    checkElemInArray,
    getWindowWidth,
    gtm_test_domain,
    map_api_key,
    PromiseClass,
    sanitize,
    scrollTop,
    sentenceCase,
    smarttrader_url,
    toISOFormat,
    toHashFormat,
    zoho_url,
    trimSpaces,
    p2p_playstore_url,
}
