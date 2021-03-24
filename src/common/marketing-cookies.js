function getDomain() {
    const domain = location.hostname
    if (domain.includes('deriv.com')) {
        return 'deriv.com'
    }
    return domain.includes('binary.sx') ? 'binary.sx' : domain
}
function eraseCookie(name) {
    document.cookie = `${name}=; Max-Age=-99999999; domain=${getDomain()}; path=/;`
}
function getCookie(name) {
    const dc = document.cookie
    const prefix = name + '='
    let begin = dc.indexOf('; ' + prefix)
    if (begin == -1) {
        begin = dc.indexOf(prefix)
        if (begin != 0) return null
    } else {
        begin += 2
    }
    let end = document.cookie.indexOf(';', begin)
    if (end == -1) {
        end = dc.length
    }
    return decodeURI(dc.substring(begin + prefix.length, end))
}
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
    )
}
function toISOFormat(date) {
    if (date instanceof Date) {
        const utc_year = date.getUTCFullYear()
        const utc_month = (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
        const utc_date = (date.getUTCDate() < 10 ? '0' : '') + date.getUTCDate()
        return `${utc_year}-${utc_month}-${utc_date}`
    }
    return ''
}
(function initMarketingCookies() {
    const searchParams = new URLSearchParams(window.location.search)
    const brand_name = 'deriv'
    const app_id = 11780
    const required_fields = ['utm_source', 'utm_medium', 'utm_campaign']
    let is_need_change = true
    let utm_data = {}
    for (let ctr = 0; ctr < required_fields.length; ctr++) {
        if (!searchParams.has(required_fields[ctr])) {
            is_need_change = false
        }
    }
    if (is_need_change) {
        eraseCookie('utm_data')
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
        const utm_data_cookie = JSON.stringify(utm_data)
            .replace(',', '%2C')
            .replace('%7B', '{')
            .replace('%7D', '}')
        document.cookie = `utm_data=${utm_data_cookie}; domain=${getDomain()}; path=/;`
    }
    if (searchParams.has('t')) {
        eraseCookie('affiliate_tracking')
        document.cookie = `affiliate_tracking=${searchParams.get(
            't',
        )};domain=${getDomain()}; path=/;`
    }
    const signup_device_cookie_unparsed = getCookie('signup_device') || '{}'
    const signup_device_cookie = JSON.parse(
        decodeURI(signup_device_cookie_unparsed).replaceAll('%2C', ','),
    )
    if (!signup_device_cookie.signup_device) {
        const signup_data = { signup_device: isMobile() ? 'mobile' : 'desktop' }
        const signup_data_cookie = JSON.stringify(signup_data)
            .replace(',', '%2C')
            .replace('%7B', '{')
            .replace('%7D', '}')
        document.cookie = `signup_device=${signup_data_cookie};domain=${getDomain()}; path=/;`
    }
    const date_first_contact_cookie_unparsed = getCookie('date_first_contact') || '{}'
    const date_first_contact_cookie = JSON.parse(
        decodeURI(date_first_contact_cookie_unparsed).replaceAll('%2C', ','),
    )
    if (!date_first_contact_cookie.date_first_contact) {
        const ws = new WebSocket(
            `wss://green.binaryws.com/websockets/v3?app_id=${app_id}&brand=${brand_name}`,
        )
        ws.onopen = function () {
            ws.send(JSON.stringify({ time: 1 }))
        }
        ws.onmessage = function (msg) {
            const date_first_contact_response = JSON.parse(msg.data)
            const date_first_contact_data = {
                date_first_contact: toISOFormat(new Date(date_first_contact_response.time * 1000)),
            }
            const date_first_contact_data_cookie = encodeURI(
                JSON.stringify(date_first_contact_data),
            )
                .replace(',', '%2C')
                .replace('%7B', '{')
                .replace('%7D', '}')
            document.cookie = `date_first_contact=${date_first_contact_data_cookie};domain=${getDomain()}; path=/;`
            ws.close()
        }
    }
    if (searchParams.has('gclid')) {
        eraseCookie('gclid')
        document.cookie = `gclid=${searchParams.get('gclid')};domain=${getDomain()}; path=/;`
    }
})()
