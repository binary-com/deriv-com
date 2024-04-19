import Cookies from 'js-cookie'
import { isStorageSupported } from './storage'
import { getCookiesFields, getCookiesObject, getDataLink, getDataObjFromCookies } from './cookies'
import { getAppId } from './websocket/config'
import { isBrowser, redirectToTradingPlatform } from './utility'
import { brand_name, deriv_app_id, deriv_bot_app_id, oauth_url } from 'common/constants'

export type TSocialProvider = 'google' | 'facebook' | 'apple'

const Login = (() => {
    const url = isBrowser() && window.location.href
    const is_academy = isBrowser() && url.includes('academy')

    const redirectToLogin = () => {
        if (isStorageSupported(sessionStorage)) {
            window.location.href = loginUrl()
        }
    }

    const loginUrl = () => {
        const server_url = localStorage.getItem('config.server_url')
        const language = localStorage.getItem('i18n')?.replace('-', '_')

        const cookies = getCookiesFields()
        const cookies_objects = getCookiesObject(cookies)
        const cookies_value = getDataObjFromCookies(cookies_objects, cookies)
        const cookies_link = getDataLink(cookies_value)

        const affiliate_tracking = Cookies.getJSON('affiliate_tracking')

        const affiliate_token_link = affiliate_tracking
            ? `&affiliate_token=${affiliate_tracking}`
            : ''

        const sub_url = redirectToTradingPlatform()

        const mutated_deriv_app_id = sub_url[0] === 'bot' ? deriv_bot_app_id : deriv_app_id

        if (is_academy) {
            if (server_url && /qa/.test(server_url)) {
                return `https://${server_url}/oauth2/authorize?app_id=37228&l=${language}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${cookies_link}&platform=${sub_url}`
            }
            return `${oauth_url}/oauth2/authorize?app_id=37228&l=${language}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${cookies_link}&platform=${sub_url}`
        } else {
            if (server_url && /qa/.test(server_url)) {
                return `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${cookies_link}&platform=${sub_url}`
            }
            return `${oauth_url}/oauth2/authorize?app_id=${mutated_deriv_app_id}&l=${language}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${cookies_link}&platform=${sub_url}`
        }
    }

    const initOneAll = (provider: TSocialProvider, utm_content?: string): void => {
        const utm_content_string = utm_content ? `&utm_content=${utm_content}` : ''
        const social_login_url = `${loginUrl()}&social_signup=${provider}${utm_content_string}`

        window.location.href = social_login_url
    }

    return {
        redirectToLogin,
        initOneAll,
        loginUrl,
    }
})()

export default Login
