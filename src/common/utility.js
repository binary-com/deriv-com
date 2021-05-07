import Cookies from 'js-cookie'
import extend from 'extend'
import { deriv_cookie_domain, deriv_app_languages } from './constants'

export const trimSpaces = (value) => value.trim()

export const toISOFormat = (date) => {
    if (date instanceof Date) {
        const utc_year = date.getUTCFullYear()
        const utc_month = (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
        const utc_date = (date.getUTCDate() < 10 ? '0' : '') + date.getUTCDate()

        return `${utc_year}-${utc_month}-${utc_date}`
    }

    return ''
}

export const toHashFormat = (string) => string.replace(/\s+/g, '-').toLowerCase() // change space to dash then lowercase all

export const isBrowser = () => typeof window !== 'undefined'

export const isEmptyObject = (obj) => {
    let is_empty = true
    if (obj && obj instanceof Object) {
        Object.keys(obj).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(obj, key)) is_empty = false
        })
    }
    return is_empty
}

export const scrollTop = () => {
    if (isBrowser()) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}

export const cloneObject = (obj) =>
    !isEmptyObject(obj) ? extend(true, Array.isArray(obj) ? [] : {}, obj) : obj

export const getPropertyValue = (obj, k) => {
    let keys = k
    if (!Array.isArray(keys)) keys = [keys]
    if (!isEmptyObject(obj) && keys[0] in obj && keys && keys.length > 1) {
        return getPropertyValue(obj[keys[0]], keys.slice(1))
    }
    // else return clone of object to avoid overwriting data
    return obj ? cloneObject(obj[keys[0]]) : undefined
}
export const getLocationHash = () =>
    isBrowser() && location.hash ? location.hash.slice(1).replace(/(\/)$/g, '') : ''

export const setLocationHash = (tab) => {
    if (isBrowser()) {
        location.hash = `#${tab}`
    }
}

export const getLocationPathname = () => (isBrowser() && location ? location.pathname : '')

export const routeBack = () => {
    if (isBrowser) {
        window.history.back()
    }
}
export const checkElemInArray = (tab_list, tab) => tab_list.includes(tab)

// Formats number to comma separated string
export const getCommaSeparatedNumber = (input) =>
    input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const getWindowWidth = () => (isBrowser() && window.screen ? window.screen.width : '')

export const getLanguage = () =>
    isBrowser() ? localStorage.getItem('i18n') || navigator.language : null

export const getDerivAppLocalizedURL = (link, locale) => {
    const lang = deriv_app_languages.includes(locale) ? locale : 'en'
    return `${link}?lang=${lang.toUpperCase()}`
}

export const getCrowdin = () =>
    isBrowser() ? localStorage.getItem('jipt_language_code_deriv-com') || navigator.language : null

export const getClientInformation = (domain) => Cookies.getJSON('client_information', { domain })

export const getUTMData = (domain) => Cookies.getJSON('utm_data', { domain })

export const isLoggedIn = () => {
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    return !!client_information
}

export const isIndexEven = (index, reverse) => (reverse ? (index + 1) % 2 : index % 2)

export const sanitize = (input) => input.replace(/[.*+?^${}()|[\]\\]/g, '')

export const sentenceCase = (input) => input.charAt(0).toUpperCase() + input.slice(1)

export const getCryptoDecimals = (input) =>
    input.toFixed(1 - Math.floor(Math.log(input) / Math.log(10)))

export function debounce(func, wait, immediate) {
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

// This function is created to back traverse an array of style values
export const responsiveFallback = (prop, start_from, fallback) => {
    let index = start_from ?? prop?.length ?? 0
    while (prop && index > 0) {
        if (prop[index]) {
            return prop[index]
        }
        --index
    }

    return prop ? prop[index] : fallback || undefined
}

// populate style by traversing keys of props
export const populateStyle = (props, default_props_object, curr_index) => {
    let style = ''

    Object.keys(props).forEach((prop) => {
        if (['children', 'theme'].includes(prop)) {
            return
        }

        const current_prop = prop.replace(/_/g, '-')
        style += `${current_prop}: ${
            Array.isArray(props[prop])
                ? responsiveFallback(props[prop], curr_index, default_props_object[prop])
                : props[prop]
        };`
    })

    style += applyDefaultValues(props, default_props_object)
    return style
}

export const applyDefaultValues = (props, default_props_object) => {
    let style = ''

    Object.keys(default_props_object).forEach((prop) => {
        if (!(prop in props)) {
            const current_prop = prop.replace(/_/g, '-')
            style += `${current_prop}: ${default_props_object[prop]};`
        }
    })

    return style
}

export const getDomain = () =>
    isBrowser() && window.location.hostname.includes(deriv_cookie_domain)
        ? deriv_cookie_domain
        : 'binary.sx'

export const getLocalizedUrl = (path, is_index, to) => `/${path}${is_index ? `` : to}`

export const nonENLangUrlReplace = (current_path) => {
    const path_with_or_without_slash = /\/.+?(\/)|(\/\w+)/u
    return current_path.replace(path_with_or_without_slash, '')
}