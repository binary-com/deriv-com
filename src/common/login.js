import Cookies from 'js-cookie'
import { isStorageSupported } from './storage'
import { getDataObjFromCookies, getDataLink, getCookiesFields, getCookiesObject } from './cookies'
import { getAppId } from './websocket/config'
import { redirectToTradingPlatform } from './utility'
import { brand_name, deriv_app_id, oauth_url } from 'common/constants'

const Login = (() => {
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

        return server_url && /qa/.test(server_url)
            ? `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${cookies_link}&platform=${sub_url}`
            : `${oauth_url}/oauth2/authorize?app_id=${deriv_app_id}&l=${language}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${cookies_link}&platform=${sub_url}`
    }

    const initOneAll = (provider) => {
        const social_login_url = `${loginUrl()}&social_signup=${provider}`
        window.location.href = social_login_url
    }

    return {
        redirectToLogin,
        initOneAll,
        loginUrl,
    }
})()

export default Login
