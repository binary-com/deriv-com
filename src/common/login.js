import Cookies from 'js-cookie'
import { isStorageSupported, LocalStore } from './storage'
import TrafficSource from './traffic-source'
import isMobile from './os-detect'
import { brand_name } from './utility'
import { getAppId } from './websocket/config'

const Login = (() => {
    const redirectToLogin = () => {
        if (isStorageSupported(sessionStorage)) {
            window.location.href = loginUrl()
        }
    }

    const loginUrl = () => {
        const server_url = localStorage.getItem('config.server_url')
        const language = localStorage.getItem('i18n')
        const signup_device = LocalStore.get('signup_device') || (isMobile() ? 'mobile' : 'desktop')
        const date_first_contact = LocalStore.get('date_first_contact')
        const marketing_queries = `&signup_device=${signup_device}${
            date_first_contact ? `&date_first_contact=${date_first_contact}` : ''
        }`
        const affiliate_tracking = Cookies.getJSON('affiliate_tracking')
        const utm_data = TrafficSource.getData()
        const utm_source = TrafficSource.getSource(utm_data)
        const utm_source_link = utm_source ? `&utm_source=${utm_source}` : ''
        const utm_medium_link = utm_data.utm_medium ? `&utm_medium=${utm_data.utm_medium}` : ''
        const utm_campaign_link = utm_data.utm_campaign
            ? `&utm_campaign=${utm_data.utm_campaign}`
            : ''
        const affiliate_token_link = affiliate_tracking
            ? `&affiliate_token=${affiliate_tracking}`
            : ''
        const deriv_app_app_id = 16929

        return server_url && /qa/.test(server_url)
            ? `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${utm_source_link}${utm_medium_link}${utm_campaign_link}`
            : `https://oauth.deriv.com/oauth2/authorize?app_id=${deriv_app_app_id}&l=${language}${marketing_queries}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${utm_source_link}${utm_medium_link}${utm_campaign_link}`
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
