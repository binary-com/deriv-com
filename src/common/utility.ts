import { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import Cookies from 'js-cookie'
import extend from 'extend'
import {
    deriv_cookie_domain,
    deriv_app_languages,
    smart_trader_languages,
    live_chat_redirection_link,
    live_chat_key,
    domains,
    eu_domains,
} from './constants'
import { localize } from 'components/localization'

export const trimSpaces = (value: string): string => value?.trim()

export const isBrowser = () => typeof window !== 'undefined'

export const isEmptyObject = (obj: unknown): boolean => {
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
export const checkElemInArray = (tab_list: string[], tab: string): boolean => tab_list.includes(tab)

export const getWindowWidth = () => (isBrowser() && window.screen ? window.screen.width : '')

export const getLanguage = () =>
    isBrowser() ? localStorage.getItem('i18n') || navigator.language : null

export const getDerivAppLocalizedURL = (link: string, locale: string, to = '') => {
    const lang = deriv_app_languages.includes(locale) ? locale : 'en'
    return `${link}${to}?lang=${lang.toUpperCase()}`
}
export const getSmartTraderLocalizedURL = (link: string, locale: string) => {
    const lang = smart_trader_languages.includes(locale) ? locale : 'en'
    return `${link}/${lang}/trading`
}

export const getThaiExcludedLocale = (locale: string): string => (locale === 'th' ? 'en' : locale)

export const getCrowdin = (): string | null =>
    isBrowser() ? localStorage.getItem('jipt_language_code_deriv-com') || navigator.language : null

type TClientInformation = {
    residence: string
    loginid: string
    first_name: string
    last_name: string
    email: string
    landing_company_shortcode: string
    currency: string
}
export const getClientInformation = (domain: string): TClientInformation =>
    Cookies.getJSON('client_information', { domain })

type TUTMData = {
    utm_source: string
    utm_medium: string
    utm_campaign: string
}

export const getUTMData = (domain: string): TUTMData => Cookies.getJSON('utm_data', { domain })

export const isLoggedIn = () => {
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    return !!client_information
}

export const isIndexEven = (index: number, reverse?: boolean) =>
    reverse ? (index + 1) % 2 : index % 2

export const sanitize = (input: string): string => input.replace(/[.*+?^${}()|[\]\\]/g, '')

export const sentenceCase = (input: string): string =>
    input.charAt(0).toUpperCase() + input.slice(1)

// This function is created to back traverse an array of style values
export const responsiveFallback = (
    prop: string | string[],
    start_from?: number | boolean,
    fallback?: number | 'auto',
): string | number | undefined => {
    let index: number = (start_from as number) ?? prop?.length ?? 0
    while (prop && index > 0) {
        if (prop[index]) {
            return prop[index]
        }
        --index
    }

    return prop ? prop[index] : fallback || undefined
}

// populate style by traversing keys of props
export const populateStyle = <Props, DefaultProps>(
    props: Props,
    default_props_object: DefaultProps,
    curr_index?: number,
): string => {
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

export const applyDefaultValues = <Props, DefaultProps>(
    props: Props,
    default_props_object: DefaultProps,
) => {
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

export const getLocalizedUrl = (path: string, is_index: boolean, to: string) =>
    `/${path}${is_index ? `/` : to}`

export const nonENLangUrlReplace = (current_path: string): string => {
    const path_with_or_without_slash = /\/.+?(\/)|(\/[a-zA-Z'-]+)/u
    return current_path.replace(path_with_or_without_slash, '')
}

export const isNullUndefined = (value: unknown) => value === null || typeof value === 'undefined'

export const isJSONString = (value: string) => {
    try {
        return JSON.parse(value) && !!value
    } catch (e) {
        return false
    }
}

export const parseJSONString = (value: string) => (isJSONString(value) ? JSON.parse(value) : value)

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
export const redirectOpenLiveChatBox = (is_redirect: boolean) => {
    const live_chat_status = getLiveChatRedirectStatus(is_redirect)

    removeLocalStorage(live_chat_key)
    if (live_chat_status) {
        navigate(live_chat_redirection_link, { replace: true })
    }
}

// remove spaces before appending "..." on truncated strings
const getLimit = (input: string, limit: number) => {
    if (input[limit - 1] === ' ') {
        return limit - 1
    }
    return limit
}
export const truncateString = (input: string, limit: number) =>
    input.length > limit ? `${input.substring(0, getLimit(input, limit))}...` : input
// Function which returns sub path to the specific trading platform
const supported_platforms = ['mt5', 'bot', 'derivx']
export const redirectToTradingPlatform = () =>
    supported_platforms.filter(
        (platform) => window.location.pathname.includes(platform) && platform,
    )

// Function to manually add external js files.
type TSettings = {
    src?: 'https://static.deriv.com/scripts/cookie.js'
    text?: string
    async: boolean
    strategy?: 'off-main-thread'
}
export const addScript = (settings: TSettings) => {
    const script = document.createElement('script')

    Object.keys(settings).forEach((key) => {
        if (key === 'text') {
            script.text = settings['text']
        } else {
            script.setAttribute(key, settings[key])
        }
    })
    document.body.appendChild(script)
}

// Function to manually replace server's locale ("zh_tw" or "zh_cn") to "zh-tw"/"zh-cn"
export const replaceLocale = (url: string): string => {
    let checked_locale = url
    const excluded_paths = ['smarttrader']
    if (!excluded_paths.some((path) => url.includes(path))) {
        domains.forEach((domain) => {
            if (url.includes(domain) && url.includes('zh_tw'))
                checked_locale = url.replace(/(zh_tw)/g, 'zh-tw')
            if (url.includes(domain) && url.includes('zh_cn'))
                checked_locale = url.replace(/(zh_cn)/g, 'zh-cn')
        })
    }
    return checked_locale
}
// 3 functions below can be removed after academy migration
const stripHTML = (str: string): string => str?.replace(/<[^>]*>?/gm, '')
const calculateReadTime = (text: string) => {
    const wpm = 275 // adjusted to fit the average reading speed of a person
    const content_without_HTML = stripHTML(text)
    const words = content_without_HTML?.trim().split(/\s+/).length
    return Math.ceil(words / wpm)
}
export const getMinRead = (text) => calculateReadTime(text).toString() + ' ' + localize('min read')

export const slugify = (text: string): string =>
    text &&
    text
        .toString()
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .replace(/[\u0300-\u036f]/g, '') // Remove all previously split accents
        .toLowerCase()
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/--+/g, '-') // Replace multiple - with single -

export const unslugify = (slug) => {
    if (slug) {
        const result = slug.replace(/-/g, ' ')
        return result.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }
}
export const removeSpecialCharacterUrl = (url) =>
    url &&
    slugify(url)
        .replace(/\?+/g, '') // Replace question mark with empty value
        .replace(/[/]/g, '-') //Replace '/' with single -

// 2 functions below can be removed after academy migration                                      make an object, include all the missing parameters and try to fix it
export const queryParams = {
    get: (key) => {
        const params = new URLSearchParams(isBrowser() && location.search)
        const param_values = {}
        //To get the params from the url

        if (typeof key === 'string') {
            return params.get(key)
        } else {
            key.forEach((k) => {
                param_values[key] = params.get(k)
            })
        }
        return param_values
    },
    set: (objects) => {
        // To set the params from the url
        const url = new URL(location.href)

        Object.keys(objects).forEach((k) => {
            const value = objects[k]
            url.searchParams.set(k, value)
        })

        return window.history.replaceState(null, null, url)
    },
    delete: (key) => {
        //To delete the params from the url
        const url = new URL(location.href)
        if (typeof key === 'string') {
            url.searchParams.delete(key)
        } else {
            key.forEach((k) => {
                url.searchParams.delete(k)
            })
        }

        return history.replaceState(null, null, url)
    },
}

export const redirectWithParamReference = (url = '', param = null) => {
    const param_value = queryParams.get(param)
    const new_url = new URL(location.href)

    if (param) {
        new_url.searchParams.delete(param) // Remove the param reference so it will not be included on the final redirection link

        const param_string = new_url.searchParams.toString()
        const param_settings = `${param_string === '' ? '' : '?'}${param_string}`
        const final_url = `${url}${param ? `/${param_value}` : ''}`
        navigate(`${final_url}/${param_settings}`)
    }
}

export const getBaseRef = (ref) => {
    // this is intended to solve a problem of preact that
    // in some cases element api's are in the ref.current.base and
    // in other cases they are in ref.current
    return ref?.current?.base?.style ? ref?.current?.base : ref?.current
}

export const useCallbackRef = (callback: () => void) => {
    const callback_ref = useRef<() => void>()

    useEffect(() => {
        callback_ref.current = callback
    }, [callback])

    return callback_ref
}

const getSubdomain = () => isBrowser() && window.location.hostname.split('.')[0]

export const isEuDomain = () =>
    !!eu_domains.some((eu_sub_domain) => eu_sub_domain.test(getSubdomain()))

export const isLocalhost = () => !!(isBrowser() && process.env.NODE_ENV === 'development')

export const isTestlink = () => !!(isBrowser() && window.location.hostname.includes('binary.sx'))

export const PlatformQueryParam = () => {
    if (isBrowser()) {
        const is_deriv_go = window.location.href.indexOf('?platform=derivgo') > -1
        const is_deriv_p2p = window.location.href.indexOf('?platform=p2p') > -1
        const has_platform = is_deriv_go ? 'derivgo' : is_deriv_p2p ? 'p2p' : undefined

        return { has_platform, is_deriv_p2p, is_deriv_go }
    }

    return {}
}
