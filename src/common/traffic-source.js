import queryString from 'query-string'
import Cookies from 'js-cookie'
import { CookieStorage, LocalStore } from './storage'

const TrafficSource = (() => {
    let cookie, existing_utm_cookie

    const init = () => {
        TrafficSource.initUtmCookie()
        TrafficSource.setData()
        TrafficSource.setAffiliateData()
    }

    const initUtmCookie = () => {
        existing_utm_cookie = Cookies.get('utm_data')
        cookie = new CookieStorage('utm_data')
        cookie.remove()
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
        const max_token_length = 32

        // allow token length from zero until maximum token length
        if (token_length > max_token_length) {
            return false
        }

        const affiliate_token = affiliate_cookie.get('affiliate_tracking')
        if (affiliate_token) {
            // Affiliate token already exists in the cookies
            if (affiliate_token === token) {
                return false
            }
        }

        affiliate_cookie.write(token, 365, true, 'none')
        return true
    }

    const getData = () => {
        const data = cookie.value
        Object.keys(data).map((key) => {
            data[key] = (data[key] || '').replace(/[^a-zA-Z0-9\s-._]/gi, '').substring(0, 100)
        })
        return data
    }

    // get source in order of precedence
    const getSource = (utm_data = getData()) => utm_data.utm_source || utm_data.referrer || 'direct'

    const setData = () => {
        const params = queryString.parseUrl(window.location.href).query
        const param_keys = ['utm_source', 'utm_medium', 'utm_campaign']
        const makeSetCookie = (object) => (key) => object[key] && cookie.set(key, object[key])

        if (params.utm_source || params.utm_medium || params.utm_campaign || params.t) {
            const setParamCookie = makeSetCookie(params)
            param_keys.forEach(setParamCookie)
        } else if (existing_utm_cookie) {
            const parsed_cookie_values = JSON.parse(existing_utm_cookie)
            const setOldCookie = makeSetCookie(parsed_cookie_values)
            Object.keys(parsed_cookie_values).forEach(setOldCookie)
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
        if (referrer) {
            cookie.set('referrer', new URL(window.location.href).hostname)
        }
    }

    return {
        getData,
        setAffiliateData,
        setData,
        getSource,
        initUtmCookie,
        init,
    }
})()

export default TrafficSource
