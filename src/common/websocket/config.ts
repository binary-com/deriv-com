/*
 * Configuration values needed in js codes
 *
 * NOTE:
 * Please use the following command to avoid accidentally committing personal changes
 * git update-index --assume-unchanged src/javascript/config.js
 *
 */
import { isBrowser } from '../utility'
import {
    default_server_url,
    deriv_com_app_id,
    deriv_me_app_id,
    deriv_be_app_id,
} from '../constants'

export const domain_config = {
    production: [
        {
            hostname: 'deriv.com',
            app_id: deriv_com_app_id,
        },
        {
            hostname: 'deriv.me',
            app_id: deriv_me_app_id,
        },
        {
            hostname: 'deriv.be',
            app_id: deriv_be_app_id,
        },
        {
            hostname: 'eu.deriv.com',
            app_id: deriv_com_app_id,
        },
    ],
    staging: {
        hostname: 'staging.deriv.com',
        app_id: 16303,
    },
    test: {
        app_id: 11780,
    },
    local: {
        hostname: 'localhost',
        app_id: 10613,
    },
}

const isProduction = () =>
    isBrowser() &&
    domain_config.production.some((prod) => prod.hostname === window.location.hostname)
const production_app_id_array =
    isBrowser() &&
    domain_config.production.filter((prod) => prod.hostname === window.location.hostname)
const prod_app_id = production_app_id_array[0]?.app_id
const isStaging = () => isBrowser() && domain_config.staging.hostname === window.location.hostname
const isLive = () => isProduction() || isStaging()
const isLocalHost = () => isBrowser() && domain_config.local.hostname === window.location.hostname

const getAppId = () => {
    let app_id = null
    const user_app_id = '' // you can insert Application ID of your registered application here
    if (isBrowser()) {
        const config_app_id = window.localStorage.getItem('config.app_id')
        if (config_app_id) {
            app_id = config_app_id
        } else if (isStaging()) {
            window.localStorage.removeItem('config.default_app_id')
            app_id = domain_config.staging.app_id
        } else if (user_app_id.length) {
            window.localStorage.setItem('config.default_app_id', user_app_id) // it's being used in endpoint chrome extension - please do not remove
            app_id = user_app_id
        } else if (isLocalHost()) {
            app_id = domain_config.local.app_id
        } else {
            window.localStorage.removeItem('config.default_app_id')
            app_id = isProduction() ? prod_app_id : domain_config.test.app_id
        }
    }
    return app_id
}

const getSocketURL = () => {
    let server_url

    if (isBrowser()) {
        server_url = window.localStorage.getItem('config.server_url')
    }
    if (!server_url) {
        server_url = default_server_url
    }
    return `wss://${server_url}/websockets/v3`
}

export { getAppId, getSocketURL, isProduction, isLive, isLocalHost }
