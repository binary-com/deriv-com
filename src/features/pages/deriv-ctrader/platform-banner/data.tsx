import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'
import {
    ctrader_google_play_url,
    ctrader_app_store_url,
    ctrader_web_browser_url,
    ctrader_windows_url,
} from 'common/constants'
import CTraderLogo from 'images/svg/ctrader/ctrader_main_logo.svg'
import derivCTraderQR from 'images/svg/ctrader/ctrader_qr_code.svg'
import AndroidIcon from 'images/svg/android_icon.svg'
import AppleIcon from 'images/svg/apple_icon.svg'
import BrowserIcon from 'images/svg/browser_icon.svg'
import WindowsIcon from 'images/svg/windows_icon.svg'

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
                    href: ctrader_google_play_url,
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
                    href: ctrader_app_store_url,
                    target: '_blank',
                },
            },
        },
    ],
}
