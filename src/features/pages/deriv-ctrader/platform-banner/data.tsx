import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'
import CTraderLogo from 'images/svg/trading-platforms/ctrader/ctrader-main-logo.svg'
import derivEZQR from 'images/svg/trading-platforms/deriv-ez/derivez-qr.svg'
import AndroidIcon from 'images/svg/android-icon.svg'
import AppleIcon from 'images/svg/apple-icon.svg'
import AppGalleryIcon from 'images/svg/appGallery-icon.svg'

export const trading_platform_banner: BannerType = {
    information: {
        icon: CTraderLogo,
        heading: '_t_Get trading with Deriv cTrader_t_',
    },
    scan_box: {
        icon: derivEZQR,
        heading_one: '_t_Scan to download Deriv cTrader_t_',
        heading_two: 'Android, IOS & Huawei',
    },

    os_apps: [
        {
            id: 0,
            data: {
                icon: AndroidIcon,
                text: 'Google Play',
                url: {
                    type: 'non-company',
                    href: deriv_go_playstore_url,
                    target: '_blank',
                },
            },
        },
        {
            id: 1,
            data: {
                icon: AppleIcon,
                text: 'App Store',
                url: {
                    type: 'non-company',
                    href: deriv_go_ios_url,
                    target: '_blank',
                },
            },
        },
        {
            id: 2,
            data: {
                icon: AppGalleryIcon,
                text: 'AppGallery',
                url: {
                    type: 'non-company',
                    href: deriv_go_huaweiappgallery_url,
                    target: '_blank',
                },
            },
        },
    ],
}
