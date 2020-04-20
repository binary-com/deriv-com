import Cookies from 'js-cookie'
import queryString from 'query-string'

const TrafficSource = (() => {
    const setAffiliateData = () => {
        const url_params = queryString.parseUrl(window.location.href).query
        const token = url_params.t

        if (!token) return false

        const token_length = token.length
        const max_token_length = 32

        // allow token length from zero until maximum token length
        if (token_length > max_token_length) {
            return false
        }

        const affiliate_token = Cookies.get('affiliate_tracking')
        if (affiliate_token) {
            // Affiliate token already exists in the cookies
            if (affiliate_token === token) {
                return false
            }
        }

        const domain = window.location.hostname

        Cookies.set('affiliate_tracking', token, {
            expires: 365,
            path: '/',
            domain,
            secure: true,
        })
        return true
    }

    const getData = () => {
        const data = Cookies.get('utm_data') || {}
        if (data) {
            Object.keys(data).forEach((key) => {
                data[key] = (data[key] || '').replace(/[^a-zA-Z0-9\s-._]/gi, '').substring(0, 100)
            })
        }

        return data
    }

    // get source in order of precedence
    const getSource = (utm_data = getData()) => utm_data.utm_source || utm_data.referrer || 'direct'

    const setData = () => {
        const params = queryString.parseUrl(window.location.href).query
        const param_keys = ['utm_source', 'utm_medium', 'utm_campaign']
        const value = {}
        const now = new Date()
        const expires = now.setMonth(now.getMonth() + 3)

        if (params.utm_source) {
            // url params can be stored only if utm_source is available
            param_keys.forEach((key) => {
                if (params[key]) {
                    value[key] = params[key]
                    Cookies.set('utm_data', value, { expires, sameSite: 'none', secure: true })
                }
            })
        }

        // Store gclid
        if (params.gclid) {
            localStorage.setItem('gclid', params.gclid)
        }

        const doc_ref = document.referrer
        let referrer = localStorage.getItem('index_referrer') || doc_ref
        localStorage.removeItem('index_referrer')
        if (doc_ref && !new RegExp(window.location.hostname, 'i').test(doc_ref)) {
            referrer = doc_ref
        }
        if (referrer) {
            value['referrer'] = window.location.hostname

            Cookies.set('utm_data', value, {
                expires,
                sameSite: 'none',
                secure: true,
            })
        }
    }

    return {
        getData,
        setAffiliateData,
        setData,
        getSource,
    }
})()

export default TrafficSource
