/*
 * Configuration values needed in js codes
 *
 * NOTE:
 * Please use the following command to avoid accidentally committing personal changes
 * git update-index --assume-unchanged src/javascript/config.js
 *
 */
const domain_app_ids = {
    // these domains as supported "production domains"
    'deriv.com': 11780,
}

const getCurrentProductionDomain = () =>
    !/^staging\./.test(window.location.hostname) &&
    Object.keys(domain_app_ids).find(domain =>
        new RegExp(`.${domain}$`, 'i').test(window.location.hostname),
    )

const isProduction = () => {
    const all_domains = Object.keys(domain_app_ids).map(
        domain => `www\\.${domain.replace('.', '\\.')}`,
    )
    return new RegExp(`^(${all_domains.join('|')})$`, 'i').test(
        window.location.hostname,
    )
}

const getAppId = () => {
    let app_id = null
    const user_app_id = '' // you can insert Application ID of your registered application here
    const config_app_id = window.localStorage.getItem('config.app_id')
    if (config_app_id) {
        app_id = config_app_id
    } else if (/staging\.deriv\.com/i.test(window.location.hostname)) {
        window.localStorage.removeItem('config.default_app_id')
        app_id = 16303
    } else if (user_app_id.length) {
        window.localStorage.setItem('config.default_app_id', user_app_id) // it's being used in endpoint chrome extension - please do not remove
        app_id = user_app_id
    } else if (/localhost/i.test(window.location.hostname)) {
        app_id = 17044
    } else {
        window.localStorage.removeItem('config.default_app_id')
        const current_domain = getCurrentProductionDomain()
        app_id = domain_app_ids[current_domain] || 16929
    }
    return app_id
}

const getSocketURL = () => {
    let server_url = window.localStorage.getItem('config.server_url')
    if (!server_url) {
        const loginid = window.localStorage.getItem('active_loginid')
        const is_real = loginid && !/^VRT/.test(loginid)
        const server = isProduction() && is_real ? 'green' : 'blue'

        server_url = `${server}.binaryws.com`
    }
    return `wss://${server_url}/websockets/v3`
}

export {
    domain_app_ids,
    getCurrentProductionDomain,
    isProduction,
    getAppId,
    getSocketURL,
}
