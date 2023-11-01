import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'
import {
    ctrader_android_url,
    ctrader_ios_url,
    ctrader_web_browser_url,
    ctrader_windows_url,
} from 'common/constants'
import CTraderLogo from 'images/svg/trading-platforms/ctrader/ctrader-main-logo.svg'
import derivCTraderQR from 'images/svg/trading-platforms/ctrader/ctrader-qr-code.svg'
import AndroidIcon from 'images/svg/android-icon.svg'
import AppleIcon from 'images/svg/apple-icon.svg'
import BrowserIcon from 'images/svg/browser-icon.svg'
import WindowsIcon from 'images/svg/windows-icon.svg'

export const trading_platform_banner: BannerType = {
    information: {
        icon: CTraderLogo,
        heading: '_t_Get trading with Deriv cTrader_t_',
    },
    scan_box: {
        icon: derivCTraderQR,
        heading_one: '_t_Scan to download Deriv cTrader_t_',
        heading_two: 'Android & ios',
    },

    os_apps: [
        {
            id: 0,
            data: {
                icon: AndroidIcon,
                text: 'Google Play',
                url: {
                    type: 'non-company',
                    href: ctrader_android_url,
                    target: '_blank',
                },
            },
        },
        {
            id: 1,
            data: {
                icon: BrowserIcon,
                text: 'Web browser',
                url: {
                    type: 'non-company',
                    href: ctrader_web_browser_url,
                    target: '_blank',
                },
            },
        },
        {
            id: 2,
            data: {
                icon: WindowsIcon,
                text: 'Windows',
                url: {
                    type: 'non-company',
                    href: ctrader_windows_url,
                    target: '_blank',
                },
            },
        },
        {
            id: 3,
            data: {
                icon: AppleIcon,
                text: 'App Store',
                url: {
                    type: 'non-company',
                    href: ctrader_ios_url,
                    target: '_blank',
                },
            },
        },
    ],
}
