import React from 'react'
import NProgress from 'nprogress'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import { isProduction, isLocalHost } from './src/common/websocket/config'
import { CookieStorage, LocalStore } from './src/common/storage'
import TrafficSource from './src/common/traffic-source'
import { isMobile } from './src/common/os-detect'
import { gtm_test_domain } from './src/common/utility'
import { MediaContextProvider } from './src/themes/media'
import { DerivProvider } from './src/store'
import 'typeface-ibm-plex-sans'

const is_browser = typeof window !== 'undefined'

const checkDomain = () => {
    return eval(
        decodeURIComponent(
            'var%20curhost%20%3D%20window.location.hostname%3B%20var%20t8hvj%20%3D%20%2F%5Cb%28deriv%7Cbinary%7Cbinaryqa%5B0-9%5D%7B2%7D%29%5C.%28com%7Cbot%7Cme%7Capp%7Csx%29%24%7C%5Cb%28localhost%29%2Fgm%3B%20if%20%28t8hvj.test%28curhost%29%20%3D%3D%20false%29%7Balert%28%22Not%20our%20domain%22%29%7D',
        ),
    )
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
    // Configure traffic source
    TrafficSource.init()
    const signup_device_cookie = new CookieStorage('signup_device')

    if (!signup_device_cookie.get('signup_device')) {
        signup_device_cookie.set('signup_device', isMobile() ? 'mobile' : 'desktop')
    }
    NProgress.done()
}

export const onClientEntry = () => {
    NProgress.start()

    const is_gtm_test_domain = window.location.hostname === gtm_test_domain

    // Add GTM script for test domain
    if (!isLocalHost() && is_gtm_test_domain) {
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

export const onPreRouteUpdate = () => {
    NProgress.start()
}

export const onRouteUpdate = () => {
    NProgress.done()
    checkDomain()
}

export const wrapPageElement = WrapPagesWithLocaleContext
