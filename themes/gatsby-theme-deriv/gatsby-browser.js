import React from 'react'
import Cookies from 'js-cookie'
import { isMobile } from 'react-device-detect'
import { Analytics } from '@deriv-com/analytics'
import { navigate } from 'gatsby'
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
import 'swiper/swiper-bundle.min.css'
import 'features/styles/app.scss'
import './static/css/global.css'
import './static/css/google-fonts.css'
import '@deriv-com/blocks/style.css'
import 'react-modal-video/scss/modal-video.scss'

const is_browser = typeof window !== 'undefined'

const checkDomain = () => {
    return eval(
        decodeURIComponent(
            'var%20curhost%20%3D%20window.location.hostname%3B%20var%20t8hvj%20%3D%20%2F%5Cb%28deriv%7Cbinary%7Cbinaryqa%5B0-9%5D%7B2%7D%29%5C.%28com%7Cbot%7Cme%7Cbe%7Capp%7Csx%29%24%7C%5Cb%28localhost%29%7C%28%5Cbderiv-com-preview-links.pages.dev%29%7C%28row-deriv-com-pages%29%7C%28eu-deriv-com-pages%29%2Fgm%3B%20if%20%28t8hvj.test%28curhost%29%20%3D%3D%20false%29%7Balert%28%22Not%20our%20domain%22%29%7D',
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

export const onClientEntry = async () => {
    // @deriv-com/analytics
    Analytics?.initialise({
        growthbookKey: process.env.GATSBY_GROWTHBOOK_CLIENT_KEY,
        growthbookDecryptionKey: process.env.GATSBY_GROWTHBOOK_DECRYPTION_KEY,
        rudderstackKey: ['.pages.dev', 'git-fork', 'localhost', 'staging'].some((condition) =>
            window.location.hostname.includes(condition),
        )
            ? process.env.GATSBY_RUDDERSTACK_STAGING_KEY
            : process.env.GATSBY_RUDDERSTACK_PRODUCTION_KEY,
        growthbookOptions: {
            navigate: (url) => navigate(url, { replace: true }),
            antiFlicker: false,
            navigateDelay: 0,
        },
    })
    await Analytics?.getInstances()?.ab?.GrowthBook?.loadFeatures()

    const utm_data = JSON?.parse(
        Cookies?.get('utm_data') ||
            `{"utm_source":"common","utm_medium":"common","utm_campaign":"common"}`,
    )
    Analytics?.setAttributes({
        country: Cookies?.get('clients_country') || Cookies?.getJSON('website_status'),
        user_language: Cookies?.get('user_language') || getLanguage(),
        device_language: navigator?.language || ' ',
        device_type: isMobile ? 'mobile' : 'desktop',
        utm_source: utm_data?.['utm_source'],
        utm_medium: utm_data?.['utm_medium'],
        utm_campaign: utm_data?.['utm_campaign'],
        is_authorised: !!Cookies?.get('client_information'),
        url: window.location.href
    })
    //datadog
    const dd_options = {
        clientToken: process.env.GATSBY_DATADOG_CLIENT_TOKEN,
        applicationId: process.env.GATSBY_DATADOG_APPLICATION_ID,
        site: 'datadoghq.com',
        service: 'deriv.com',
        env: 'production',
        version: '1.0.6',
        sessionSampleRate: 10,
        sessionReplaySampleRate: 0,
        trackResources: true,
        trackLongTasks: true,
        trackUserInteractions: true,
        trackFrustrations: true,
        enableExperimentalFeatures: ['clickmap'],
        defaultPrivacyLevel: 'mask-user-input',
    }
    const dd_script = document.createElement('script')
    dd_script.type = 'text/javascript'
    dd_script.text = `!function(e,a,t,n,s){e=e[s]=e[s]||{q:[],onReady:function(a){e.q.push(a)}},(s=a.createElement(t)).async=1,s.src=n,(n=a.getElementsByTagName(t)[0]).parentNode.insertBefore(s,n)}(window,document,"script","https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js","DD_RUM"),window.DD_RUM.onReady(function(){window.DD_RUM.init(${JSON.stringify(
        dd_options,
    )})});`
    document.head.appendChild(dd_script)

    addScript({
        src: 'https://static.deriv.com/scripts/cookie.js',
        async: true,
        strategy: 'off-main-thread',
    })

    checkLiveChatRedirection()

    updateURLAsPerUserLanguage()
}

export const onRouteUpdate = ({ location }) => {
    Analytics.pageView(location.pathname, 'Deriv.com')

    checkDomain()

    Analytics?.getInstances()?.ab?.GrowthBook?.setURL(window.location.href)

    const dataLayer = window.dataLayer
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    const is_logged_in = !!client_information

    const path = location.pathname;

    if (path === '/mn') {
        navigate('/', { replace: true });
    } else if (path.startsWith('/mn/')) {
        const newPath = path.replace(/^\/mn/, '');
        navigate(newPath || '/', { replace: true });
    }

    if (path === '/km') {
        navigate('/', { replace: true });
      } else if (path.startsWith('/km/')) {
        const newPath = path.replace(/^\/km/, '');
        navigate(newPath || '/', { replace: true });
      }

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
