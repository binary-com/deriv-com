import extend from 'extend'

const toISOFormat = date => {
    if (date instanceof Date) {
        const utc_year = date.getUTCFullYear()
        const utc_month =
            (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
        const utc_date = (date.getUTCDate() < 10 ? '0' : '') + date.getUTCDate()

        return `${utc_year}-${utc_month}-${utc_date}`
    }

    return ''
}

const isBrowser = () => typeof window !== 'undefined'

const isEmptyObject = obj => {
    let is_empty = true
    if (obj && obj instanceof Object) {
        Object.keys(obj).forEach(key => {
            if (Object.prototype.hasOwnProperty.call(obj, key)) is_empty = false
        })
    }
    return is_empty
}

const cloneObject = obj =>
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
const getLocationHash = () => (location.hash ? location.hash.substring(1) : '')

const getLanguage = () =>
    typeof localStorage !== 'undefined' ? localStorage.getItem('i18n') : 'en'

class PromiseClass {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.reject = reject
            this.resolve = resolve
        })
    }
}

const sanitize = input => input.replace(/[.*+?^${}()|[\]\\]/g, '')

const deriv_app_url = 'https://deriv.app'
const brand_name = 'Deriv'

export {
    deriv_app_url,
    brand_name,
    isEmptyObject,
    cloneObject,
    isBrowser,
    getPropertyValue,
    getLanguage,
    getLocationHash,
    PromiseClass,
    sanitize,
    toISOFormat,
}
