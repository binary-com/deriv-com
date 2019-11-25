import Cookies from 'js-cookie'
import queryString from 'query-string'
import { CookieStorage, LocalStore } from './storage'

const TrafficSource = (() => {
    let cookie

    const initCookie = () => {
        if (!cookie) {
            cookie = new CookieStorage('utm_data')
            cookie.read()
            // expiration date is used when writing cookie
            const now = new Date()
            cookie.expires = now.setMonth(now.getMonth() + 3)
        }
    }

    const setAffiliateData = () => {
        const url_params = queryString.parseUrl(window.location.href).query
        const token = url_params.t
        if (!token || token.length !== 32) {
            return false
        }

        const token_length = token.length
        const is_subsidiary = /\w{1}/.test(url_params.s)

        const cookie_token = Cookies.getJSON('affiliate_tracking')
        if (cookie_token) {
            // Already exposed to some other affiliate.
            if (is_subsidiary && cookie_token && cookie_token.t) {
                return false
            }
        }

        // Record the affiliate exposure. Overwrite existing cookie, if any.
        const cookie_hash = {}
        if (token_length === 32) {
            cookie_hash.t = token.toString()
        }
        if (is_subsidiary) {
            cookie_hash.s = '1'
        }

        Cookies.write('affiliate_tracking', cookie_hash, {
            expires: 365, // expires in 365 days
            path: '/',
            domain: `.${location.hostname
                .split('.')
                .slice(-2)
                .join('.')}`,
        })
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
            param_keys.map(key => {
                if (params[key] && !current_values[key]) {
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
