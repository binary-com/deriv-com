import AppleIcon from 'images/svg/apple-icon.svg'
import AppGalleryIcon from 'images/svg/appGallery-icon.svg'
import AndroidIcon from 'images/svg/android-icon.svg'
import derivEZLogo from 'images/svg/deriv-ez/deriv-ez-logo-red.svg'
import derivEZQR from 'images/svg/deriv-ez/derivez-qr.svg'
import InfoIcon from 'images/svg/info-icon.svg'
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'
import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'

export const apps_data: BannerType = {
    information: {
        icon: derivEZLogo,
        heading: '_t_Get trading with Deriv EZ_t_',
    },
    scan_box: {
        icon: derivEZQR,
        heading_one: '_t_Scan to download Deriv GO_t_',
        heading_two: '_t_Android, iOS & Huawei_t_',
        heading_three: '_t_Android and iOS_t_',
    },
    extra_info: {
        where: '_t_Deriv EZ is available on <0>Deriv GO.<0>_t_',
        icon: InfoIcon,
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
