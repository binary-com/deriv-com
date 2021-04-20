import React from 'react'
import NProgress from 'nprogress'
import { datadogRum } from '@datadog/browser-rum'
import { Pushwoosh } from 'web-push-notifications'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import { isProduction, isLive, isLocalHost } from './src/common/websocket/config'
import { LocalStore } from './src/common/storage'
import { MediaContextProvider } from './src/themes/media'
import { DerivProvider } from './src/store'
import { getClientInformation, getDomain, getLanguage } from 'common/utility'
import {
    application_id,
    client_token,
    gtm_test_domain,
    sample_rate,
    pushwoosh_app_code,
} from 'common/constants'
import './static/css/ibm-plex-sans-var.css'

const is_browser = typeof window !== 'undefined'

const checkDomain = () => {
    return eval(
        decodeURIComponent(
            'var%20curhost%20%3D%20window.location.hostname%3B%20var%20t8hvj%20%3D%20%2F%5Cb%28deriv%7Cbinary%7Cbinaryqa%5B0-9%5D%7B2%7D%29%5C.%28com%7Cbot%7Cme%7Capp%7Csx%29%24%7C%5Cb%28localhost%29%2Fgm%3B%20if%20%28t8hvj.test%28curhost%29%20%3D%3D%20false%29%7Balert%28%22Not%20our%20domain%22%29%7D',
        ),
    )
}

const addScript = (settings) => {
    const script = document.createElement('script')
    const { async, text, src, id } = settings

    if (async) script.async = settings['async']
    if (text) script.text = settings['text']
    if (src) script.src = settings['src']
    if (id) script.id = settings['id']

    document.body.appendChild(script)
}

const sendTags = (api) => {
    const language = LocalStore.get('i18n') || ''
    const domain = getDomain()
    const { loginid, residence } = getClientInformation(domain) || {
        loginid: '',
        residence: '',
    }
    api.getTags()
        .then((result) => {
            if (
                !result.result['Login ID'] ||
                !result.result['Site Language'] ||
                !result.result.Residence
            ) {
                return api.setTags({
                    'Login ID': loginid,
                    'Site Language': language.toLowerCase(),
                    Residence: residence,
                })
            }
            return null
        })
        .catch((e) => {
            // eslint-disable-next-line no-console
            console.error(e)
            return null
        })
}

const pushwooshInit = (push_woosh) => {
    push_woosh.push([
        'init',
        {
            logLevel: 'error', // or info or debug
            applicationCode: pushwoosh_app_code,
            safariWebsitePushID: 'web.com.deriv',
            defaultNotificationTitle: 'Deriv.com',
            defaultNotificationImage: 'https://deriv.com/favicons/favicon-192x192.png',
            autoSubscribe: true,
        },
    ])

    push_woosh.push([
        'onReady',
        function (api) {
            push_woosh.isSubscribed().then((is_subscribed) => {
                if (!is_subscribed) {
                    push_woosh.subscribe()
                }
            })
            sendTags(api)
        },
    ])
}

export const wrapRootElement = ({ element }) => {
    return (
        <DerivProvider>
            <MediaContextProvider>{element}</MediaContextProvider>
        </DerivProvider>
    )
}

export const onInitialClientRender = () => {
    // Enable translation
    // Check if not production and match ach or ach/
    if (is_browser) {
        const match_ach = window.location.pathname.match(/^(\/ach\/)|\/ach$/)

        if (match_ach) {
            // TODO: remove this line when production ready for translation
            if (!isProduction()) LocalStore.set('i18n', 'ach')
        }

        const i18n = LocalStore.get('i18n')

        if (!isProduction() && i18n && i18n.match('ach')) {
            const jipt = document.createElement('script')
            jipt.type = 'text/javascript'
            jipt.text = `
                var _jipt = []; _jipt.push(['project', 'deriv-com']);
                var crowdin = document.createElement("script");
                crowdin.setAttribute('src', '//cdn.crowdin.com/jipt/jipt.js');
                document.head.appendChild(crowdin);
            `
            document.head.appendChild(jipt)
        }
    }

    NProgress.done()
}

export const onClientEntry = () => {
    NProgress.start()

    const is_gtm_test_domain = window.location.hostname === gtm_test_domain
    const push_woosh = new Pushwoosh()
    if (isLive()) {
        pushwooshInit(push_woosh)
    }

    // Add GTM script for test domain
    if (!isLocalHost() && is_gtm_test_domain) {
        addScript({
            src: 'https://www.googletagmanager.com/gtm.js?id=GTM-TNX2ZKH',
            id: 'gtm-test-container',
        })
        addScript({
            text: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TNX2ZKH');`,
        })
    }

    addScript({
        src: 'https://static.deriv.com/scripts/cookie.js',
        async: true,
    })

    if (window.location.hostname === 'deriv.com') {
        datadogRum.init({
            clientToken: client_token,
            applicationId: application_id,
            sampleRate: sample_rate,
        })
    }
}

export const onPreRouteUpdate = () => {
    NProgress.start()
}

export const onRouteUpdate = () => {
    NProgress.done()
    checkDomain()

    const dataLayer = window.dataLayer
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    const is_logged_in = !!client_information

    // wrap inside a timeout to ensure the title has properly been changed
    setTimeout(() => {
        const eventName = 'page_load'

        dataLayer?.push({
            event: eventName,
            loggedIn: is_logged_in,
            language: getLanguage(),
            ...(is_logged_in && {
                visitorId: client_information.loginid,
                currency: client_information.currency,
                email: client_information.email,
            }),
        })
    }, 50)
}

export const wrapPageElement = WrapPagesWithLocaleContext
