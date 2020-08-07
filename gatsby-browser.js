import NProgress from 'nprogress'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import { isProduction } from './src/common/websocket/config'
import { LocalStore } from './src/common/storage'
import TrafficSource from './src/common/traffic-source'
import isMobile from './src/common/os-detect'
import { gtm_test_domain } from 'common/utility'
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
    NProgress.done()
}

export const onClientEntry = () => {
    LocalStore.set('window_loaded', '')
    NProgress.start()
    window.onload = () => {
        // Add LiveChat script
        const livechat_script = document.createElement('script')
        livechat_script.innerHTML = `
            window.__lc = window.__lc || {};
            window.__lc.license = 12049137;
            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
        `
        document.body.appendChild(livechat_script)
        LocalStore.set('window_loaded', 'true')
    }

    // Add GTM script for test domain
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

export const onPreRouteUpdate = () => {
    NProgress.start()
}

export const onRouteUpdate = () => {
    NProgress.done()
}

export const wrapPageElement = WrapPagesWithLocaleContext
