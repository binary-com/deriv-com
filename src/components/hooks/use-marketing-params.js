import { isBrowser } from 'common/utility'

export const useMarketingParams = () => {
    // Declare variables
    let utm_data_params = ''
    let affiliate_tracking_params = ''
    let gclid_params = ''
    // Required functions
    const searchParams = new URLSearchParams((isBrowser() && window.location.search) || '')
    const required_fields = ['utm_source', 'utm_medium', 'utm_campaign']
    let is_need_change = true
    let utm_data = {}
    for (let ctr = 0; ctr < required_fields.length; ctr++) {
        if (!searchParams.has(required_fields[ctr])) {
            is_need_change = false
        }
    }
    if (is_need_change) {
        const utm_source = searchParams.get('utm_source')
        const utm_medium = searchParams.get('utm_medium')
        const utm_campaign = searchParams.get('utm_campaign')
        const utm_term = searchParams.has('utm_term') ? searchParams.get('utm_term') : null
        const utm_content = searchParams.has('utm_content') ? searchParams.get('utm_content') : null
        utm_data = {
            ...(utm_source && { utm_source }),
            ...(utm_medium && { utm_medium }),
            ...(utm_campaign && { utm_campaign }),
            ...(utm_term && { utm_term }),
            ...(utm_content && { utm_content }),
        }
        utm_data_params = JSON.stringify(utm_data)
    }
    if (searchParams.has('t')) {
        affiliate_tracking_params = searchParams.get('t')
    }
    if (searchParams.has('gclid')) {
        gclid_params = searchParams.get('gclid')
    }

    return [utm_data_params, affiliate_tracking_params, gclid_params]
}
