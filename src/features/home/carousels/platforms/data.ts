import { TPlatformSmartContent } from './types'
import {
    deriv_api_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
    derivx_android_url,
    derivx_ios_url,
    dmt5_android_url,
    dmt5_linux_url,
    smarttrader_url,
    binary_bot_url,
    dmt5_mac_app_url,
    dmt5_windows_download_url,
    dmt5_app_gallery,
} from 'common/constants'
// SVG Icons
import DTraderIcon from 'images/svg/dtrader/dtrader-icon.svg'
import DMT5Icon from 'images/svg/dmt5/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/deriv-go/deriv-go-logo.svg'
import DerivXIcon from 'images/svg/deriv-x/derivx-logo.svg'
import DBotIcon from 'images/svg/dbot/dbot-icon.svg'
import BinaryBotIcon from 'images/svg/binarybot-icon.svg'
import SmartTraderIcon from 'images/svg/custom/smarttrader.svg'
import APIIcon from 'images/svg/api-logo.svg'

export const platforms_data: TPlatformSmartContent[] = [
    {
        id: 0,
        data: {
            title: '_t_Deriv GO_t_',
            icon: DerivGOIcon,
            image_key: 'platforms_deriv_go',
            description: '_t_Our best trading experience on your mobile._t_',
            learn_more_link: '/deriv-go/',
            download_links: [
                { type: 'app_store', url: deriv_go_ios_url },
                { type: 'google_play', url: deriv_go_playstore_url },
            ],
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_Deriv MT5_t_',
            icon: DMT5Icon,
            image_key: (region) => {
                if (region.is_eu) {
                    return 'platforms_mt5_eu'
                } else if (region.is_uk) {
                    return 'platforms_mt5_uk'
                } else {
                    return 'platforms_mt5'
                }
            },
            description: '_t_The all-in-one CFD trading platform._t_',
            learn_more_link: '/dmt5/',
            download_links: (is_mobile) => {
                return is_mobile
                    ? [
                          { type: 'browser', link_type: 'mt5' },
                          { type: 'google_play', url: dmt5_android_url },
                          { type: 'app_gallery', url: dmt5_app_gallery },
                      ]
                    : [
                          { type: 'mac_app_store', url: dmt5_mac_app_url },
                          { type: 'windows', url: dmt5_windows_download_url },
                          { type: 'linux', url: dmt5_linux_url },
                          { type: 'browser', link_type: 'mt5' },
                          { type: 'google_play', url: dmt5_android_url },
                          { type: 'app_gallery', url: dmt5_app_gallery },
                      ]
            },
        },
        visiblity: {},
    },

    {
        id: 2,
        data: {
            title: '_t_DTrader_t_',
            icon: DTraderIcon,
            image_key: (region) => {
                if (region.is_eu) {
                    return 'platforms_dtrader_eu'
                } else if (region.is_uk) {
                    return 'platforms_dtrader_uk'
                } else {
                    return 'platforms_dtrader'
                }
            },
            description: '_t_Our flagship app for trading options and multipliers._t_',
            learn_more_link: '/dtrader/',
            download_links: [{ type: 'browser', link_type: 'deriv_app' }],
        },
        visiblity: {},
    },
    {
        id: 3,
        data: {
            title: '_t_Deriv X_t_',
            icon: DerivXIcon,
            image_key: 'platforms_derivx',
            description: '_t_The CFD trading platform to fit your style._t_',
            learn_more_link: '/derivx/',
            download_links: [
                { type: 'browser', link_type: 'derivx' },
                { type: 'app_store', url: derivx_ios_url },
                { type: 'google_play', url: derivx_android_url },
            ],
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
    {
        id: 4,
        data: {
            title: '_t_DBot_t_',
            icon: DBotIcon,
            image_key: 'platforms_dbot',
            description: '_t_Automate your trading. No coding required._t_',
            learn_more_link: '/dbot/',
            download_links: [{ type: 'browser', link_type: 'dbot' }],
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
    {
        id: 5,
        data: {
            title: '_t_SmartTrader_t_',
            icon: SmartTraderIcon,
            image_key: 'platforms_smarttrader',
            description: '_t_Our legacy options trading platform._t_',
            learn_more_link: smarttrader_url,
            download_links: [{ type: 'browser', link_type: 'smart_trader', url: 'trading' }],
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
    {
        id: 6,
        data: {
            title: '_t_Binary Bot_t_',
            icon: BinaryBotIcon,
            image_key: 'platforms_binary_bot',
            description: '_t_Our classic bot builder and automated trading platform._t_',
            learn_more_link: binary_bot_url,
            download_links: [{ type: 'browser', link_type: 'binary_bot' }],
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
    {
        id: 7,
        data: {
            title: '_t_API_t_',
            icon: APIIcon,
            image_key: 'platforms_api',
            description: '_t_Build your own apps with our API._t_',
            learn_more_link: deriv_api_url,
            download_links: [{ type: 'browser', url: deriv_api_url }],
        },
        visiblity: {
            is_eu: false,
            is_uk: false,
        },
    },
]
