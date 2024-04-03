import GPlayIcon from 'images/svg/p2p/gplay_icon.svg'
import AppStoreIcon from 'images/svg/p2p/apple_store_icon.svg'
import AppGalleryIcon from 'images/svg/p2p/app_gallery_icon.svg'
import WebBrowserIcon from 'images/svg/p2p/web_browser_icon.svg'
import {
    p2p_playstore_url,
    p2p_applestore_url,
    p2p_huawei_appgallery_url,
    deriv_dp2p_app_url,
} from 'common/constants'
import P2PImage from 'images/svg/p2p/deriv_p2p.svg'
import p2pQrImage from 'images/svg/p2p/p2p_qr.svg'
import type { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'

export const banner_data: BannerType = {
    information: {
        icon: P2PImage,
        heading: '_t_Make hassle-free deposits and withdrawals today_t_',
    },
    scan_box: {
        icon: p2pQrImage,
        heading_one: '_t_Scan to download Deriv P2P_t_',
        heading_two: '_t_Android, iOS, and Huawei_t_',
        heading_three: '_t_Android and iOS_t_',
    },
    os_apps: [
        {
            id: 0,
            data: {
                icon: GPlayIcon,
                text: 'Google Play',
                url: {
                    type: 'non-company',
                    href: p2p_playstore_url,
                    target: '_blank',
                },
            },
        },
        {
            id: 1,
            data: {
                icon: AppStoreIcon,
                text: 'App Store',
                url: {
                    type: 'non-company',
                    href: p2p_applestore_url,
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
                    href: p2p_huawei_appgallery_url,
                    target: '_blank',
                },
            },
        },
        {
            id: 3,
            data: {
                icon: WebBrowserIcon,
                text: 'Web Browser',
                smallText: '_t_Use it on your_t_',
                url: {
                    type: 'non-company',
                    href: deriv_dp2p_app_url,
                    target: '_blank',
                },
            },
        },
    ],
}