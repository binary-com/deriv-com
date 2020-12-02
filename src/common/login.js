import Cookies from 'js-cookie'
import { CookieStorage, isStorageSupported } from './storage'
import { brand_name, getUTMData } from './utility'
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
        const utm_data_cookies = new CookieStorage('utm_data')
        const utm_data_value = utm_data_cookies.get('utm_data')
        const utm_data = utm_data_value ? getUTMData(utm_data_value) : {}
        const utm_source = utm_data.utm_source || utm_data.referrer || 'direct'
        const utm_source_link = utm_source ? `&utm_source=${utm_source}` : ''
        const utm_ad_id_link = utm_data.utm_ad_id ? `&utm_medium=${utm_data.utm_ad_id}` : ''
        const utm_adgroup_id_link = utm_data.utm_adgroup_id
            ? `&utm_medium=${utm_data.utm_adgroup_id}`
            : ''
        const utm_adrollclk_id_link = utm_data.utm_adrollclk_id
            ? `&utm_medium=${utm_data.utm_adrollclk_id}`
            : ''
        const utm_campaign_id_link = utm_data.utm_campaign_id
            ? `&utm_medium=${utm_data.utm_campaign_id}`
            : ''
        const utm_content_link = utm_data.utm_content ? `&utm_medium=${utm_data.utm_content}` : ''
        const utm_fbcl_id_link = utm_data.utm_fbcl_id ? `&utm_medium=${utm_data.utm_fbcl_id}` : ''
        const utm_gl_client_id_link = utm_data.utm_gl_client_id
            ? `&utm_medium=${utm_data.utm_gl_client_id}`
            : ''
        const utm_msclk_id_link = utm_data.utm_msclk_id
            ? `&utm_medium=${utm_data.utm_msclk_id}`
            : ''
        const utm_term_link = utm_data.utm_term ? `&utm_medium=${utm_data.utm_term}` : ''
        const utm_medium_link = utm_data.utm_medium ? `&utm_medium=${utm_data.utm_medium}` : ''
        const utm_campaign_link = utm_data.utm_campaign
            ? `&utm_campaign=${utm_data.utm_campaign}`
            : ''
        const affiliate_token_link = affiliate_tracking
            ? `&affiliate_token=${affiliate_tracking}`
            : ''
        const deriv_app_app_id = 16929

        return server_url && /qa/.test(server_url)
            ? `https://${server_url}/oauth2/authorize?app_id=${getAppId()}&l=${language}${marketing_queries}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${utm_source_link}${utm_medium_link}${utm_campaign_link}${utm_ad_id_link}${utm_adgroup_id_link}${utm_adrollclk_id_link}${utm_campaign_id_link}${utm_content_link}${utm_fbcl_id_link}${utm_gl_client_id_link}${utm_msclk_id_link}${utm_term_link}`
            : `https://oauth.deriv.com/oauth2/authorize?app_id=${deriv_app_app_id}&l=${language}${marketing_queries}&brand=${brand_name.toLowerCase()}${affiliate_token_link}${utm_source_link}${utm_medium_link}${utm_campaign_link}${utm_ad_id_link}${utm_adgroup_id_link}${utm_adrollclk_id_link}${utm_campaign_id_link}${utm_content_link}${utm_fbcl_id_link}${utm_gl_client_id_link}${utm_msclk_id_link}${utm_term_link}`
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
