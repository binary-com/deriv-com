import { WrapPagesWithLocaleContext } from './src/components/localization'
import { isProduction } from './src/common/websocket/config'
import { LocalStore } from './src/common/storage'
import TrafficSource from './src/common/traffic-source'
import isMobile from './src/common/os-detect'
import './src/components/localization/config'
import 'typeface-ibm-plex-sans'

const is_browser = typeof window !== 'undefined'

export const onRouteUpdate = ({ location }) => {
    anchorScroll(location)
    return true
}
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
    anchorScroll(location)
    return true
}

function anchorScroll(location) {
    // Check for location so build does not fail
    if (location.hash) {
        setTimeout(() => {
            document
                .querySelector(`${location.hash}`)
                .scrollIntoView({ behavior: 'smooth', block: 'start' })
            // const item = document.querySelector(`${location.hash}`).offsetTop
            // const mainNavHeight = document.querySelector(`nav`).offsetHeight
            // window.scrollTo({
            //     top: item - mainNavHeight,
            //     left: 0,
            //     behavior: 'smooth',
            // })
        }, 100)
    }
}

export const onInitialClientRender = () => {
    // Enable translation
    // Check if not production and match ach or ach/

    if (is_browser) {
        if (
            !isProduction() &&
            window.location.pathname.match(/^(ach\/)|ach$/)
        ) {
            LocalStore.set('i18n', 'ach')
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
    TrafficSource.setData()

    if (!LocalStore.get('signup_device')) {
        LocalStore.set('signup_device', isMobile() ? 'mobile' : 'desktop')
    }
}

export const wrapPageElement = WrapPagesWithLocaleContext
