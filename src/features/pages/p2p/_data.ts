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
import type { BannerType } from 'features/components/organisms/banner/blade-shape-banner/types'
import type { RoadmapType } from 'features/components/organisms/roadmap'

export const banner_data: BannerType = {
    information: {
        img_src: P2PImage,
        heading: '_t_Make hassle-free deposits and withdrawals today_t_',
    },
    scanbox: {
        img_src: p2pQrImage,
        heading_one: '_t_Scan to download Deriv P2P_t_',
        heading_two: '_t_Android, iOS, and Huawei_t_',
    },
    os_apps: [
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
    ],
}

export const portalData: RoadmapType = {
    paragraph:
        '_t_Take a look at Deriv P2P’s product roadmap, give us your feedback on what we’re building and suggestions on what to build next._t_',
    frame: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m?hide_header=1',
    link: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m',
}
