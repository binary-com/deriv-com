import type { CSSProperties } from 'react'
import React from 'react'
import styled from 'styled-components'
import { DerivEzLogoRed } from 'images/svg/deriv-ez'
import {
    binary_bot_url,
    deriv_api_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
    derivx_android_url,
    derivx_ios_url,
    dmt5_android_url,
    dmt5_app_gallery,
    dmt5_ios_url,
    dmt5_linux_url,
    dmt5_mac_app_url,
    dmt5_windows_download_url,
    smarttrader_url,
} from 'common/constants'
import { Header, StyledLink } from 'components/elements'
import { Flex } from 'components/containers'
import { Localize } from 'components/localization'
// SVG Icons
import DTraderIcon from 'images/svg/dtrader/dtrader-icon.svg'
import DMT5Icon from 'images/svg/dmt5/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/deriv-go/deriv-go-logo.svg'
import DerivXIcon from 'images/svg/deriv-x/derivx-logo.svg'
import DBotIcon from 'images/svg/dbot/dbot-icon.svg'
import BinaryBotIcon from 'images/svg/binarybot-icon.svg'
import SmartTraderIcon from 'images/svg/custom/smarttrader.svg'
import APIIcon from 'images/svg/api-logo.svg'
import Browser from 'images/svg/app-download/web-browser.svg'
import AppStore from 'images/svg/app-download/app-store.svg'
import GooglePlay from 'images/svg/app-download/google-play.svg'
import Linux from 'images/svg/app-download/linux.svg'
import APK from 'images/svg/app-download/apk.svg'
import Windows from 'images/svg/dmt5/dmt5_app_gallery_windows_exe.svg'
import MacAppStore from 'images/svg/dmt5/dmt5_app_gallery_mac_dmg.svg'
import AppGallery from 'images/svg/app-download/app-store-app-gallery.svg'
import { TString } from 'types/generics'

export const PLATFORMS_CAROUSEL_DELAY = 3000

export const getOSIcon = (type: string) => {
    if (type === 'browser') return Browser
    else if (type === 'app_store') return AppStore
    else if (type === 'google_play') return GooglePlay
    else if (type === 'linux') return Linux
    else if (type === 'apk') return APK
    else if (type === 'windows') return Windows
    else if (type === 'mac_app_store') return MacAppStore
    else if (type === 'app_gallery') return AppGallery
}

type TDownloadLinks = Array<{ type: string; url?: string; link_type?: string }>

export type TPlatformDetails = {
    id?: number
    title: string
    icon: string
    image_key: string
    description: TString
    learn_more_link: string
    download_links: { is_desktop: TDownloadLinks }
}

export type PlatformDetailsProps = {
    title: string
    description: TString
    learn_more_link: string
    icon?: string
    style?: CSSProperties
    is_from_slider?: boolean
}

export const platform_details_row: TPlatformDetails[] = [
    {
        title: 'Deriv GO',
        icon: DerivGOIcon,
        image_key: 'platforms_deriv_go',
        description: '_t_Our best trading experience on your mobile._t_',
        learn_more_link: '/deriv-go/',
        download_links: {
            is_desktop: [
                { type: 'app_store', url: deriv_go_ios_url },
                { type: 'google_play', url: deriv_go_playstore_url },
            ],
        },
    },
    {
        title: 'Deriv EZ',
        icon: DerivEzLogoRed,
        image_key: 'platforms_derivez',
        description: '_t_Our mobile-first CFD trading platform_t_',
        learn_more_link: '/deriv-ez/',
        download_links: {
            is_desktop: [
                { type: 'app_store', url: deriv_go_ios_url },
                { type: 'google_play', url: deriv_go_playstore_url },
            ],
        },
    },
    {
        title: 'Deriv MT5',
        icon: DMT5Icon,
        image_key: 'platforms_mt5',
        description: '_t_The all-in-one CFD trading platform._t_',
        learn_more_link: '/dmt5/',
        download_links: {
            is_desktop: [
                { type: 'mac_app_store', url: dmt5_mac_app_url },
                { type: 'windows', url: dmt5_windows_download_url },
                { type: 'linux', url: dmt5_linux_url },
                { type: 'browser', link_type: 'mt5' },
                { type: 'google_play', url: dmt5_android_url },
                { type: 'app_store', url: dmt5_ios_url },
                { type: 'app_gallery', url: dmt5_app_gallery },
            ],
        },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader',
        description: '_t_Our flagship app for trading options and multipliers._t_',
        learn_more_link: '/dtrader/',
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'deriv_app' }],
        },
    },
    {
        title: 'Deriv X',
        icon: DerivXIcon,
        image_key: 'platforms_derivx',
        description: '_t_The CFD trading platform to fit your style._t_',
        learn_more_link: '/derivx/',
        download_links: {
            is_desktop: [
                { type: 'browser', link_type: 'derivx' },
                { type: 'app_store', url: derivx_ios_url },
                { type: 'google_play', url: derivx_android_url },
            ],
        },
    },
    {
        title: 'DBot',
        icon: DBotIcon,
        image_key: 'platforms_dbot',
        description: '_t_Automate your trading. No coding required._t_',
        learn_more_link: '/dbot/',
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'dbot' }],
        },
    },
    {
        title: 'SmartTrader',
        icon: SmartTraderIcon,
        image_key: 'platforms_smarttrader',
        description: '_t_Our legacy options trading platform._t_',
        learn_more_link: smarttrader_url,
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'smart_trader', url: 'trading' }],
        },
    },
    {
        title: 'Binary Bot',
        icon: BinaryBotIcon,
        image_key: 'platforms_binary_bot',
        description: '_t_Our classic bot builder and automated trading platform._t_',
        learn_more_link: binary_bot_url,
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'binary_bot' }],
        },
    },
    {
        title: 'API',
        icon: APIIcon,
        image_key: 'platforms_api',
        description: '_t_Build your own apps with our API._t_',
        learn_more_link: deriv_api_url,
        download_links: {
            is_desktop: [{ type: 'browser', url: deriv_api_url }],
        },
    },
]

export const platform_details_eu: TPlatformDetails[] = [
    {
        title: 'Deriv MT5',
        icon: DMT5Icon,
        image_key: 'platforms_mt5_eu',
        description: '_t_The all-in-one CFD trading platform._t_',
        learn_more_link: '/dmt5/',
        download_links: {
            is_desktop: [
                { type: 'mac_app_store', url: dmt5_mac_app_url },
                { type: 'windows', url: dmt5_windows_download_url },
                { type: 'linux', url: dmt5_linux_url },
                { type: 'browser', link_type: 'mt5' },
                { type: 'google_play', url: dmt5_android_url },
                { type: 'app_store', url: dmt5_ios_url },
                { type: 'app_gallery', url: dmt5_app_gallery },
            ],
        },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader_eu',
        description: '_t_Our flagship app for trading multipliers._t_',
        learn_more_link: '/dtrader/',
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'deriv_app' }],
        },
    },
]

export const ImageTag = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 16px;
`

const LearnMoreLink = styled(StyledLink)`
    span {
        font-size: 16px;
    }
`

export const PlatformContent = ({
    title,
    description,
    learn_more_link,
    is_from_slider = false,
}: PlatformDetailsProps) => {
    return (
        <>
            <Header type={is_from_slider ? 'subtitle-1' : 'subtitle-2'} tablet={{ mb: '8px' }}>
                {title}
            </Header>
            <Header
                as="p"
                type="paragraph-1"
                weight="normal"
                mb={is_from_slider ? 'unset' : '16px'}
                laptopL={{ max_width: is_from_slider ? '288px' : '' }}
            >
                <Localize translate_text={description} />
            </Header>
            <Flex jc="flex-start" tabletL={{ jc: 'center' }}>
                <LearnMoreLink
                    to={learn_more_link}
                    external={learn_more_link.includes('https')}
                    mb="9px"
                >
                    <span>
                        <Localize translate_text="_t_Learn more_t_" />
                    </span>
                </LearnMoreLink>
            </Flex>
        </>
    )
}
