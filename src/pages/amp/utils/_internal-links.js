import Cookies from 'js-cookie'
import Traffic from './_traffic'

const is_browser = typeof window !== 'undefined'

const signupUrl = () => {
    if (is_browser) {
        const signup_device = localStorage.getItem('signup_device')
        const date_first_contact = localStorage.getItem('date_first_contact')
        const marketing_queries = `&signup_device=${signup_device}${
            date_first_contact ? `&date_first_contact=${date_first_contact}` : ''
        }`
        const affiliate_tracking = Cookies.getJSON('affiliate_tracking')
        const utm_data = Traffic.getData()
        const utm_source = Traffic.getSource(utm_data)
        const utm_source_link = utm_source ? `&utm_source=${utm_source}` : ''
        const utm_medium_link = utm_data.utm_medium ? `&utm_medium=${utm_data.utm_medium}` : ''
        const utm_campaign_link = utm_data.utm_campaign
            ? `&utm_campaign=${utm_data.utm_campaign}`
            : ''
        const affiliate_token_link = affiliate_tracking
            ? `&affiliate_token=${affiliate_tracking}`
            : ''

        return `https://deriv.com/signup/?brand=deriv${marketing_queries}${affiliate_token_link}${utm_source_link}${utm_medium_link}${utm_campaign_link}`
    }

    return ''
}

export default {
    signupUrl,
}
