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
    isBrowser() && (location.hash ? location.hash.substring(1).replace(/\/$/, '') : '')

const getLanguage = () => (isBrowser() ? localStorage.getItem('i18n') || 'en' : null)

const getCrowdin = () =>
    isBrowser() ? localStorage.getItem('jipt_language_code_deriv-com') || 'en' : null

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

const deriv_app_url = 'https://app.deriv.com'
const deriv_bot_app_url = 'https://app.deriv.com/bot'
const smarttrader_url = 'https://smarttrader.deriv.com'
const binary_url = 'https://binary.com'
const affiliate_signup_url = 'https://login.binary.com/signup.php'
const affiliate_signin_url = 'https://login.binary.com/signin.php'
const brand_name = 'Deriv'
const map_api_key = 'AIzaSyAEha6-HeZuI95L9JWmX3m6o-AxQr_oFqU'

export {
    affiliate_signin_url,
    affiliate_signup_url,
    binary_url,
    deriv_app_url,
    deriv_bot_app_url,
    debounce,
    brand_name,
    isEmptyObject,
    cloneObject,
    isBrowser,
    getCrowdin,
    getPropertyValue,
    getLanguage,
    getLocationHash,
    map_api_key,
    PromiseClass,
    sanitize,
    scrollTop,
    sentenceCase,
    smarttrader_url,
    toISOFormat,
    toHashFormat,
}
