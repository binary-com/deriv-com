import { CookieStorage } from './storage'

export const getCookiesObject = (cookies) => {
    const cookies_objects = {}

    cookies.forEach((cookie_name) => {
        const cookie_object = new CookieStorage(
            cookie_name.includes('utm') ? 'utm_data' : cookie_name,
        )
        cookies_objects[cookie_name] = cookie_object
    })

    return cookies_objects
}

export const getDataObjFromCookies = (cookies, fields) => {
    const data = {}
    fields.forEach((elem) => {
        if (cookies[elem].get(elem)) {
            data[elem] = cookies[elem].get(elem)
        }
    })
    return data
}

export const getDataLink = (data) => {
    let data_link = ''

    Object.keys(data).forEach((elem) => {
        data_link += `&${elem}=${data[elem]}`
    })

    return data_link
}

export const getCookiesFields = () => [
    'date_first_contact',
    'signup_device',
    'gclid',
    'utm_source',
    'utm_ad_id',
    'utm_adgroup_id',
    'utm_adrollclk_id',
    'utm_campaign',
    'utm_campaign_id',
    'utm_content',
    'utm_fbcl_id',
    'utm_gl_client_id',
    'utm_medium',
    'utm_msclk_id',
    'utm_term',
]
