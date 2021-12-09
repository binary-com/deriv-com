import { navigate } from 'gatsby'
import Cookies from 'js-cookie'
import extend from 'extend'
import {
    cms_assets_end_point,
    deriv_cookie_domain,
    deriv_app_languages,
    live_chat_redirection_link,
    live_chat_key,
} from './constants'
import { isUK } from 'common/country-base'
import { localize } from 'components/localization'

export const trimSpaces = (value) => value?.trim()

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

export const getWindowWidth = () => (isBrowser() && window.screen ? window.screen.width : '')

export const getLanguage = () =>
    isBrowser() ? localStorage.getItem('i18n') || navigator.language : null

export const getDerivAppLocalizedURL = (link, locale, to = '') => {
    const lang = deriv_app_languages.includes(locale) ? locale : 'en'
    return `${link}${to}?lang=${lang.toUpperCase()}`
}

export const getThaiExcludedLocale = (locale) => (locale === 'th' ? 'en' : locale)

export const getCrowdin = () =>
    isBrowser() ? localStorage.getItem('jipt_language_code_deriv-com') || navigator.language : null

export const getClientInformation = (domain) => Cookies.getJSON('client_information', { domain })

export const getUTMData = (domain) => Cookies.getJSON('utm_data', { domain })

export const isLoggedIn = () => {
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    return !!client_information
}

//This function returns true if user's location (IP address) is Uk or user's account is MX account (Uk resident)
export const isUKOrMXAccount = (current_client_country) => {
    const domain = getDomain()
    const { residence } = getClientInformation(domain) || {
        residence: '',
    }

    const isuk = residence === 'gb' || isUK(current_client_country)

    return isuk
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

export const getLocalizedUrl = (path, is_index, to) => `/${path}${is_index ? `/` : to}`

export const nonENLangUrlReplace = (current_path) => {
    const path_with_or_without_slash = /\/.+?(\/)|(\/[a-zA-Z'-]+)/u
    return current_path.replace(path_with_or_without_slash, '')
}
export const getDateFromToday = (num_of_days) => {
    const today = new Date()
    const end_date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + num_of_days)

    return end_date
}

export const isNullUndefined = (value) => value === null || typeof value === 'undefined'

export const isObject = (value) => typeof value === 'object'

export const isJSONString = (value) => {
    try {
        return JSON.parse(value) && !!value
    } catch (e) {
        return false
    }
}

export const parseJSONString = (value) => (isJSONString(value) ? JSON.parse(value) : value)

export const getLiveChatStorage = () =>
    isBrowser() ? localStorage.getItem('live_chat_redirection') : null

export const removeLocalStorage = (prop) => localStorage.removeItem(prop)

export const getLiveChatRedirectStatus = (lang_status) => {
    const lang = getLanguage()
    const live_chat_enable = getLiveChatStorage()

    return (lang_status && live_chat_enable) || (lang == 'en' && live_chat_enable)
}

// set lang to true to allow all lang to redirect, default is en,
// and pass to getLiveChatRedirectStatus
export const redirectOpenLiveChatBox = (is_redirect) => {
    const live_chat_status = getLiveChatRedirectStatus(is_redirect)

    removeLocalStorage(live_chat_key)
    if (live_chat_status) {
        navigate(live_chat_redirection_link, { replace: true })
    }
}

export const convertDate = (date) => {
    const newdate = new Date(date)
    return (
        newdate.toLocaleString('en', { day: 'numeric' }) +
        ' ' +
        newdate.toLocaleString('en', { month: 'short' }) +
        ' ' +
        newdate.toLocaleString('en', { year: 'numeric' })
    )
}

// CMS Related Utilities
export const getAssetUrl = (id) => `${cms_assets_end_point}${id}`

export const getVideoObject = (video_data) => {
    const {
        published_date,
        video_file,
        video_thumbnail,
        video_title,
        video_duration,
        video_description,
        featured,
        tags,
    } = video_data
    const { id: video_id } = video_file
    const { id: thumbnail_id, title: alt } = video_thumbnail

    return {
        published_date,
        thumbnail_img: getAssetUrl(thumbnail_id),
        thumbnail_img_alt: alt,
        video_title,
        video_description,
        video_url: getAssetUrl(video_id),
        video_duration,
        featured,
        types: tags.map((t) => t.tags_id.tag_name),
    }
}

// remove spaces before appending "..." on truncated strings
const getLimit = (input, limit) => {
    if (input[limit - 1] === ' ') {
        return limit - 1
    }
    return limit
}

export const truncateString = (input, limit) =>
    input.length > limit ? `${input.substring(0, getLimit(input, limit))}...` : input
// Function which returns sub path to the specific trading platform
const supported_platforms = ['mt5', 'bot', 'derivx']
export const redirectToTradingPlatform = () =>
    supported_platforms.filter(
        (platform) => window.location.pathname.includes(platform) && platform,
    )

// Function to manually add external js files.
export const addScript = (settings) => {
    const script = document.createElement('script')

    Object.keys(settings).forEach((key) => {
        script.setAttribute(key, settings[key])
    })

    document.body.appendChild(script)
}

// Function to get the user selected language, can be used in the future once need to check other languages
export const isChoosenLanguage = () => ({ english: getLanguage() === 'en' })

// Function to manually replace server's locale ("zh_tw" or "zh_cn") to "zh-tw"/"zh-cn"
export const replaceLocale = (locale) => {
    let checked_locale = locale
    if (locale === 'zh_tw') {
        checked_locale = 'zh-tw'
    } else if (locale === 'zh_cn') {
        checked_locale = 'zh-cn'
    }
    return checked_locale
}

export const stripHTML = (str) => str?.replace(/<[^>]*>?/gm, '')

export const calculateReadTime = (text) => {
    const wpm = 275 // adjusted to fit the average reading speed of a person
    const content_without_HTML = stripHTML(text)
    const words = content_without_HTML?.trim().split(/\s+/).length
    return Math.ceil(words / wpm)
}

export const getMinRead = (text) => calculateReadTime(text).toString() + ' ' + localize('min read')

export const slugify = (text) =>
    text
        .toString()
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .replace(/[\u0300-\u036f]/g, '') // Remove all previously split accents
        .toLowerCase()
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
