import { SmartOsApp } from './types'
import GPlayIcon from 'images/svg/p2p/gplay_icon.svg'
import AppStoreIcon from 'images/svg/p2p/apple_store_icon.svg'
import AppGalleryIcon from 'images/svg/p2p/app_gallery_icon.svg'
import WebBrowserIcon from 'images/svg/p2p/web_browser_icon.svg'

export const os_apps: SmartOsApp[] = [
    {
        id: 0,
        data: {
            icon_src: GPlayIcon,
            link: 'https://play.google.com/store/apps/details?id=com.deriv.app',
            text: '_t_Google Play_t_',
        },
    },
    {
        id: 1,
        data: {
            icon_src: AppStoreIcon,
            link: 'https://apps.apple.com/my/app/deriv-go/id1550561298',
            text: '_t_App Store_t_',
        },
    },
    {
        id: 2,
        data: {
            icon_src: AppGalleryIcon,
            link: 'https://apps.apple.com/my/app/deriv-go/id1550561298',
            text: '_t_AppGallery_t_',
        },
    },
    {
        id: 3,
        data: {
            icon_src: WebBrowserIcon,
            link: '',
            text: '_t_Use it on your_t_',
            smallText: '_t_Web Browser_t_',
        },
    },
]
