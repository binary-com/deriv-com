import Cookies from 'js-cookie'
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

const getLocationPathname = () => (isBrowser() && location ? location.pathname : '')

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

const getClientInformation = (domain) => Cookies.getJSON('client_information', { domain })

const isLoggedIn = () => {
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    return !!client_information
}

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

// This function is created to back traverse an array of style values
const responsiveFallback = (prop, start_from, fallback) => {
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
const populateStyle = (props, default_props_object, curr_index) => {
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

const applyDefaultValues = (props, default_props_object) => {
    let style = ''

    Object.keys(default_props_object).forEach((prop) => {
        if (!(prop in props)) {
            const current_prop = prop.replace(/_/g, '-')
            style += `${current_prop}: ${default_props_object[prop]};`
        }
    })

    return style
}

const livechat_client_id = '66aa088aad5a414484c1fd1fa8a5ace7'
const livechat_license_id = 12049137
const trimSpaces = (value) => value.trim()

const application_id = 'f0aef779-d9ec-4517-807e-a84c683c4265'
const client_token = 'pubc42fda54523c5fb23c564e3d8bceae88'
const sample_rate = 25
const besquare_signup_url =
    'https://deriv.zohorecruit.com/jobs/Careers/590522000011882533/BeSquare-Graduate-Trainee?source=CareerSite'
const deriv_app_url = 'https://app.deriv.com'
const deriv_bot_app_url = 'https://app.deriv.com/bot'
const deriv_blog_url = 'https://blog.deriv.com'
const deriv_dp2p_app_url = 'https://app.deriv.com/cashier/p2p'
const deriv_status_page_url = 'https://deriv.statuspage.io'
const smarttrader_url = 'https://smarttrader.deriv.com'
const binary_url = 'https://binary.com'
const blog_url = 'https://blog.deriv.com'
const deriv_cookie_domain = 'deriv.com'
const affiliate_signup_url = 'https://login.deriv.com/signup.php'
const affiliate_signin_url = 'https://login.deriv.com/signin.php'
const community_url = 'https://community.deriv.com'
const zoho_url = 'https://deriv.zohorecruit.com'
const brand_name = 'Deriv'
const map_api_key = 'AIzaSyAEha6-HeZuI95L9JWmX3m6o-AxQr_oFqU'
const gtm_test_domain = 'deriv-com.binary.sx'
const p2p_playstore_url = 'https://play.google.com/store/apps/details?id=com.deriv.dp2p'
const mga_link_url =
    'https://authorisation.mga.org.mt/verification.aspx?lang=EN&company=a5fd1edc-d072-4c26-b0cd-ab3fa0f0cc40&details=1'
const dmt5_macos_url =
    'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg'
const dmt5_windows_url = 'https://download.mql5.com/cdn/web/deriv.limited/mt5/deriv5setup.exe'
const dmt5_linux_url = 'https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux'
const dmt5_android_url =
    'https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server'
const dmt5_ios_url = 'https://download.mql5.com/cdn/mobile/mt5/ios?server=Deriv-Demo,Deriv-Server'
const dp2p_google_play_url =
    'https://play.google.com/store/apps/details?id=com.deriv.dp2p&hl=en&gl=US'
const cfd_warning_height = {
    desktop: 8,
    tablet: 12,
}
const pushwoosh_app_code = 'DD293-35A19'

const getDomain = () =>
    isBrowser() && window.location.hostname.includes(deriv_cookie_domain)
        ? deriv_cookie_domain
        : 'binary.sx'

export {
    affiliate_signin_url,
    affiliate_signup_url,
    applyDefaultValues,
    besquare_signup_url,
    binary_url,
    brand_name,
    application_id,
    client_token,
    checkElemInArray,
    cloneObject,
    blog_url,
    cfd_warning_height,
    deriv_cookie_domain,
    dmt5_windows_url,
    dmt5_linux_url,
    dmt5_android_url,
    dmt5_ios_url,
    community_url,
    deriv_app_url,
    deriv_blog_url,
    deriv_bot_app_url,
    deriv_dp2p_app_url,
    deriv_status_page_url,
    dmt5_macos_url,
    dp2p_google_play_url,
    mga_link_url,
    debounce,
    isEmptyObject,
    isBrowser,
    getCrowdin,
    getCryptoDecimals,
    getClientInformation,
    getDomain,
    getPropertyValue,
    getLanguage,
    getLocationHash,
    setLocationHash,
    getLocationPathname,
    routeBack,
    getWindowWidth,
    gtm_test_domain,
    isLoggedIn,
    livechat_client_id,
    livechat_license_id,
    map_api_key,
    populateStyle,
    PromiseClass,
    pushwoosh_app_code,
    responsiveFallback,
    sanitize,
    scrollTop,
    sentenceCase,
    smarttrader_url,
    toISOFormat,
    toHashFormat,
    zoho_url,
    trimSpaces,
    p2p_playstore_url,
    sample_rate,
}
