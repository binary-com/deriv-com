import { SmartOsApp } from './types'
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

export const os_apps: SmartOsApp[] = [
    {
        id: 0,
        data: {
            icon_src: GPlayIcon,
            text: '_t_Google Play_t_',
            url: {
                type: 'non-company',
                href: p2p_playstore_url,
            },
        },
    },
    {
        id: 1,
        data: {
            icon_src: AppStoreIcon,
            text: '_t_App Store_t_',
            url: {
                type: 'non-company',
                href: p2p_applestore_url,
            },
        },
    },
    {
        id: 2,
        data: {
            icon_src: AppGalleryIcon,
            text: '_t_AppGallery_t_',
            url: {
                type: 'non-company',
                href: p2p_huawei_appgallery_url,
            },
        },
    },
    {
        id: 3,
        data: {
            icon_src: WebBrowserIcon,
            text: '_t_Use it on your_t_',
            smallText: '_t_Web Browser_t_',
            url: {
                type: 'non-company',
                href: deriv_dp2p_app_url,
            },
        },
    },
]
