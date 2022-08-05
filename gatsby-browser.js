import React from 'react'
import { Pushwoosh } from 'web-push-notifications'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import { isProduction, isLive, isLocalHost } from './src/common/websocket/config'
import { LocalStore } from './src/common/storage'
import { MediaContextProvider } from './src/themes/media'
import { DerivProvider } from './src/store'
import { checkLiveChatRedirection } from './src/common/live-chat-redirection-checking.js'
import { getClientInformation, getDomain, getLanguage, addScript } from 'common/utility'
import { gtm_test_domain, pushwoosh_app_code } from 'common/constants'
import './static/css/ibm-plex-sans-var.css'

const is_browser = typeof window !== 'undefined'

const checkDomain = () => {
    return eval(
        decodeURIComponent(
            'var%20curhost%20%3D%20window.location.hostname%3B%20var%20t8hvj%20%3D%20%2F%5Cb%28deriv%7Cbinary%7Cbinaryqa%5B0-9%5D%7B2%7D%29%5C.%28com%7Cbot%7Cme%7Cbe%7Capp%7Csx%29%24%7C%5Cb%28localhost%29%2Fgm%3B%20if%20%28t8hvj.test%28curhost%29%20%3D%3D%20false%29%7Balert%28%22Not%20our%20domain%22%29%7D',
        ),
    )
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
        },
    ])

    push_woosh.push([
        'onReady',
        function (api) {
            try {
                push_woosh.isSubscribed().then((is_subscribed) => {
                    if (!is_subscribed) {
                        push_woosh.subscribe()
                    }
                })
                // eslint-disable-next-line no-empty
            } catch {}

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
    if (is_browser) {

        // Check for PerformanceLongTaskTiming compatibility before collecting measurement
        const tti_script = document.createElement('script')
        tti_script.type = 'text/javascript'
        tti_script.text = `!(function () {
                if ('PerformanceLongTaskTiming' in window) {
                    var g = (window.__tti = { e: [] });
                    g.o = new PerformanceObserver(function (l) {
                        g.e = g.e.concat(l.getEntries());
                    });
                    g.o.observe({ entryTypes: ['longtask'] });
                }
            })();`
        document.head.appendChild(tti_script)

        // Enable translation
        // Check if not production and match ach or ach/
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
}

export const onClientEntry = () => {
    const is_gtm_test_domain = window.location.hostname === gtm_test_domain
    const push_woosh = new Pushwoosh()
    if (isLive()) {
        pushwooshInit(push_woosh)
    }

    // Add VWO script
    addScript({
        text: `window._vwo_code=window._vwo_code||function(){var b="body",c=!1,d=document,a={use_existing_jquery:function(){return!1},library_tolerance:function(){return 2500},finish:function(){if(!c){c=!0;var a=d.getElementById("_vis_opt_path_hides");a&&a.parentNode.removeChild(a)}},finished:function(){return c},load:function(b){var a=d.createElement("script");a.src=b,a.type="text/javascript",a.innerText,a.onerror=function(){_vwo_code.finish()},d.getElementsByTagName("head")[0].appendChild(a)},init:function(){window.settings_timer=setTimeout(function(){_vwo_code.finish()},2e3);var a=d.createElement("style"),c=b?b+"{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}":"",e=d.getElementsByTagName("head")[0];return a.setAttribute("id","_vis_opt_path_hides"),a.setAttribute("type","text/css"),a.styleSheet?a.styleSheet.cssText=c:a.appendChild(d.createTextNode(c)),e.appendChild(a),this.load("https://dev.visualwebsiteoptimizer.com/j.php?a=629574&u="+encodeURIComponent(d.URL)+"&f=1&r="+Math.random()),settings_timer}};return window._vwo_settings_timer=a.init(),a}()`,
    })

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

    checkLiveChatRedirection()
}

export const onRouteUpdate = () => {
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
                userId: client_information.user_id,
            }),
        })
    }, 1500)
}

export const wrapPageElement = WrapPagesWithLocaleContext
