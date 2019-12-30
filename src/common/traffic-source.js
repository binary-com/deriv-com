import queryString from 'query-string'
import { CookieStorage, LocalStore } from './storage'

const TrafficSource = (() => {
    let cookie

    const initCookie = () => {
        cookie = new CookieStorage('utm_data')
        cookie.remove()
        cookie.read()
        // expiration date is used when writing cookie
        const now = new Date()
        cookie.expires = now.setMonth(now.getMonth() + 3)
    }

    const setAffiliateData = () => {
        const url_params = queryString.parseUrl(window.location.href).query
        const token = url_params.t
        const affiliate_cookie = new CookieStorage('affiliate_tracking')

        if (!token) return false

        const token_length = token.length
        const binary_token_length = 32

        // Check if token length is correct
        if (token_length !== binary_token_length) {
            return false
        }

        const affiliate_token = affiliate_cookie.get('affiliate_tracking')
        if (affiliate_token) {
            // Affiliate token already exists in the cookies
            if (affiliate_token === token) {
                return false
            }
        }

        affiliate_cookie.write(token, 365)
        return true
    }

    const getData = () => {
        initCookie()
        const data = cookie.value
        Object.keys(data).map(key => {
            data[key] = (data[key] || '').replace(/[^a-zA-Z0-9\s-._]/gi, '').substring(0, 100)
        })
        return data
    }

    // get source in order of precedence
    const getSource = (utm_data = getData()) => utm_data.utm_source || utm_data.referrer || 'direct'

    const setData = () => {
        const current_values = getData()
        const params = queryString.parseUrl(window.location.href).query
        const param_keys = ['utm_source', 'utm_medium', 'utm_campaign']

        if (params.utm_source) {
            // url params can be stored only if utm_source is available
            param_keys.forEach(key => {
                if (params[key]) {
                    cookie.set(key, params[key])
                }
            })
        }

        // Store gclid
        if (params.gclid) {
            LocalStore.set('gclid', params.gclid)
        }

        const doc_ref = document.referrer
        let referrer = localStorage.getItem('index_referrer') || doc_ref
        localStorage.removeItem('index_referrer')
        if (doc_ref && !new RegExp(window.location.hostname, 'i').test(doc_ref)) {
            referrer = doc_ref
        }
        if (
            referrer &&
            !current_values.referrer &&
            !params.utm_source &&
            !current_values.utm_source
        ) {
            cookie.set('referrer', new URL(window.location.href).hostname)
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
