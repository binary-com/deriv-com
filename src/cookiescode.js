/* utility functions */
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

    // check begin index
    let begin = dc.indexOf('; ' + prefix)
    if (begin == -1) {
        begin = dc.indexOf(prefix)
        // cookie not available
        if (begin != 0) return null
    } else {
        begin += 2
    }

    // check end index
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
/* end utility functions */

// eslint-disable-next-line no-extra-semi
;(function initMarketingCookies() {
    const searchParams = new URLSearchParams(window.location.search)
    const brand_name = 'deriv'
    const app_id = 11780

    /* start handling UTMs */
    const required_fields = ['utm_source', 'utm_medium', 'utm_campaign']
    let utm_data = {}

    // When the user comes to the site with URL params
    if (
        searchParams.has('utm_source') ||
        searchParams.has('utm_medium') ||
        searchParams.has('utm_campaign')
    ) {
        // if url is missing one of required fields, do nothing
        const has_all_params = required_fields.every((field) => field in searchParams)

        if (has_all_params) {
            eraseCookie('utm_data')
            const utm_source = searchParams.get('utm_source')
            const utm_medium = searchParams.get('utm_medium')
            const utm_campaign = searchParams.get('utm_campaign')
            const utm_term = searchParams.has('utm_term') ? searchParams.get('utm_term') : null
            const utm_content = searchParams.has('utm_content')
                ? searchParams.get('utm_content')
                : null

            utm_data = {
                ...(utm_source && { utm_source }),
                ...(utm_medium && { utm_medium }),
                ...(utm_campaign && { utm_campaign }),
                ...(utm_term && { utm_term }),
                ...(utm_content && { utm_content }),
            }
            // eslint-disable-next-line no-console
            console.log(utm_data)

            const utm_data_cookie = encodeURI(JSON.stringify(utm_data))
                .replace(',', '%2C')
                .replace('%7B', '{')
                .replace('%7D', '}')

            document.cookie = `utm_data=${utm_data_cookie}; domain=${getDomain()}; path=/; SameSite=None; Secure;`
        }
    } else {
        // If the user comes to the site for the first time without any URL params
        // Only set the utm_data to deriv_direct if the user does not have utm_data cookies stored
        if (!getCookie('utm_data')) {
            const utm_source = 'deriv_direct'

            utm_data = {
                ...(utm_source && { utm_source }),
            }

            const utm_data_cookie = encodeURI(JSON.stringify(utm_data))
                .replace(',', '%2C')
                .replace('%7B', '{')
                .replace('%7D', '}')

            document.cookie = `utm_data=${utm_data_cookie}; domain=${getDomain()}; path=/; SameSite=None; Secure;`
        }
    }
    /* end handling UTMs */

    /* start handling affiliate tracking */
    if (searchParams.has('t')) {
        eraseCookie('affiliate_tracking')
        document.cookie = `affiliate_tracking=${searchParams.get(
            't',
        )};domain=${getDomain()}; path=/; SameSite=None; Secure;`
    }
    /* end handling affiliate tracking */

    /* start handling signup device */
    const signup_device_cookie_unparsed = getCookie('signup_device') || '{}'
    const signup_device_cookie = JSON.parse(
        decodeURI(signup_device_cookie_unparsed).replaceAll('%2C', ','),
    )
    if (!signup_device_cookie.signup_device) {
        const signup_data = {
            signup_device: isMobile() ? 'mobile' : 'desktop',
        }
        const signup_data_cookie = encodeURI(JSON.stringify(signup_data))
            .replace(',', '%2C')
            .replace('%7B', '{')
            .replace('%7D', '}')

        document.cookie = `signup_device=${signup_data_cookie};domain=${getDomain()}; path=/; SameSite=None; Secure;`
    }
    /* end handling signup device */

    /* start handling date first contact */
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

            document.cookie = `date_first_contact=${date_first_contact_data_cookie};domain=${getDomain()}; path=/; SameSite=None; Secure;`

            ws.close()
        }
    }
    /* end handling date first contact */

    /* start handling gclid */
    if (searchParams.has('gclid')) {
        eraseCookie('gclid')
        document.cookie = `gclid=${searchParams.get(
            'gclid',
        )};domain=${getDomain()}; path=/; SameSite=None; Secure;`
    }
    /* end handling gclid */
})()
