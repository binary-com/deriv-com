import { WrapPagesWithLocaleContext } from './src/components/localization'
import { isProduction } from './src/common/websocket/config'
import { LocalStore } from './src/common/storage'
import TrafficSource from './src/common/traffic-source'
import isMobile from './src/common/os-detect'
import 'typeface-ibm-plex-sans'

const is_browser = typeof window !== 'undefined'

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
    // Configure traffic source
    TrafficSource.init()

    if (!LocalStore.get('signup_device')) {
        LocalStore.set('signup_device', isMobile() ? 'mobile' : 'desktop')
    }
}

export const onClientEntry = () => {
    LocalStore.set('window_loaded', '')
    window.onload = () => {
        LocalStore.set('window_loaded', 'true')
    }

    const gtm_test_domain = 'deriv-com.binary.sx'
    if (window.location.hostname === gtm_test_domain) {
        const gtm = document.createElement('script')
        gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TNX2ZKH'
        gtm.id = 'gtm-test-container'
        document.body.appendChild(gtm)

        const datalayer = document.createElement('script')
        datalayer.text = `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TNX2ZKH');
        `
        document.body.appendChild(datalayer)
    }
}

export const wrapPageElement = WrapPagesWithLocaleContext
