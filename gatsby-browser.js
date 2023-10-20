import React from 'react'
import { createRoot } from 'react-dom/client'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import { isProduction } from './src/common/websocket/config'
import { LocalStore } from './src/common/storage'
import GlobalProvider from './src/store/global-provider'
import { checkLiveChatRedirection } from './src/common/live-chat-redirection-checking'
import {
    addScript,
    getClientInformation,
    getDomain,
    getLanguage,
    updateURLAsPerUserLanguage,
} from 'common/utility'
import './static/css/ibm-plex-sans-var.css'
import './static/css/noto-sans-arabic.css'
import './static/css/ubuntu.css'

const is_browser = typeof window !== 'undefined'

const checkDomain = () => {
    return eval(
        decodeURIComponent(
            'var%20curhost%20%3D%20window.location.hostname%3B%20var%20t8hvj%20%3D%20%2F%5Cb%28deriv%7Cbinary%7Cbinaryqa%5B0-9%5D%7B2%7D%29%5C.%28com%7Cbot%7Cme%7Cbe%7Capp%7Csx%29%24%7C%5Cb%28localhost%29%7C%28%5Cbderiv-com-preview-links.pages.dev%29%2Fgm%3B%20if%20%28t8hvj.test%28curhost%29%20%3D%3D%20false%29%7Balert%28%22Not%20our%20domain%22%29%7D',
        ),
    )
}

const bug_bounty_path = '/bug-bounty'
const hacker_one_url = 'https://hackerone.com/deriv?type=team'

if (is_browser) {
    if (window.location.pathname.includes(bug_bounty_path)) window.location.href = hacker_one_url
}

export const wrapRootElement = ({ element }) => {
    return <GlobalProvider>{element}</GlobalProvider>
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
    //datadog
    const dd_options = {
        clientToken: process.env.GATSBY_DATADOG_CLIENT_TOKEN,
        applicationId: process.env.GATSBY_DATADOG_APPLICATION_ID,
        site: 'datadoghq.com',
        service: 'deriv.com',
        env: 'production',
        version: '1.0.6',
        sessionSampleRate: 10,
        sessionReplaySampleRate: 10,
        trackResources: true,
        trackLongTasks: true,
        trackUserInteractions: true,
        trackFrustrations: true,
        enableExperimentalFeatures: ['clickmap'],
        defaultPrivacyLevel: 'mask-user-input',
    }
    const dd_script = document.createElement('script')
    dd_script.type = 'text/javascript'
    dd_script.text = `!function(e,a,t,n,s){e=e[s]=e[s]||{q:[],onReady:function(a){e.q.push(a)}},(s=a.createElement(t)).async=1,s.src=n,(n=a.getElementsByTagName(t)[0]).parentNode.insertBefore(s,n)}(window,document,"script","https://www.datadoghq-browser-agent.com/us1/v4/datadog-rum.js","DD_RUM"),window.DD_RUM.onReady(function(){window.DD_RUM.init(${JSON.stringify(
        dd_options,
    )})});`
    document.head.appendChild(dd_script)
    // Start session replay recording
    window.DD_RUM.onReady(function () {
        window.DD_RUM.startSessionReplayRecording()
    })

    addScript({
        src: 'https://static.deriv.com/scripts/cookie.js',
        async: true,
        strategy: 'off-main-thread',
    })

    checkLiveChatRedirection()

    updateURLAsPerUserLanguage()
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

export const replaceHydrateFunction = () => {
    return (element, container) => {
        const root = createRoot(container)
        root.render(element)
    }
}

export const wrapPageElement = WrapPagesWithLocaleContext
