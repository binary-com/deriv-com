import Cookies from 'js-cookie'
import { CookieStorage, isStorageSupported } from './storage'
import { brand_name, getDataObjFromCookie, getUTMFields } from './utility'
import { getAppId } from './websocket/config'

const Login = (() => {
    const redirectToLogin = () => {
        if (isStorageSupported(sessionStorage)) {
            window.location.href = loginUrl()
        }
    }

    const loginUrl = () => {
        const server_url = localStorage.getItem('config.server_url')
        const language = localStorage.getItem('i18n')?.replace('-', '_')
        const signup_device_cookie = new CookieStorage('signup_device')
        const signup_device = signup_device_cookie.get('signup_device')
        const date_first_contact_cookie = new CookieStorage('date_first_contact')
        const date_first_contact = date_first_contact_cookie.get('date_first_contact')
        const marketing_queries = `&signup_device=${signup_device}${
            date_first_contact ? `&date_first_contact=${date_first_contact}` : ''
        }`
        const affiliate_tracking = Cookies.getJSON('affiliate_tracking')
        const utm_data_cookie = new CookieStorage('utm_data')
        const utm_data = getDataObjFromCookie(utm_data_cookie, getUTMFields())
        let utm_data_link = ''

        Object.keys(utm_data).forEach((elem) => {
            utm_data_link += `&${elem}=${utm_data[elem]}`
        })

        const affiliate_token_link = affiliate_tracking
            ? `&affiliate_token=${affiliate_tracking}`
            : ''
        const deriv_app_app_id = 16929

        return server_url && /qa/.test(server_url)
            ? `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${utm_data_link}`
            : `https://oauth.deriv.com/oauth2/authorize?app_id=${deriv_app_app_id}&l=${language}${marketing_queries}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${utm_data_link}`
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
