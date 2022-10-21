import React, { ReactElement } from 'react'
import type { CSSProperties } from 'react'
import styled from 'styled-components'
import {
    deriv_api_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
    derivx_android_url,
    derivx_ios_url,
    dmt5_android_url,
    dmt5_linux_url,
    dmt5_macos_url,
    smarttrader_url,
    binary_bot_url,
    dmt5_mac_app_url,
    dmt5_windows_download_url,
    dmt5_app_gallery,
} from 'common/constants'
import { Header, StyledLink } from 'components/elements'
import { Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
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
import Windows from 'images/svg/app-download/app-store-windows.svg'
import MacAppStore from 'images/svg/app-download/app-store-mac.svg'
import AppGallery from 'images/svg/app-download/app-store-app-gallery.svg'

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
    description: ReactElement
    learn_more_link: string
    download_links: { is_desktop: TDownloadLinks }
}
export const platform_details_cr: TPlatformDetails[] = [
    {
        title: 'Deriv GO',
        icon: DerivGOIcon,
        image_key: 'platforms_deriv_go',
        description: <Localize translate_text="Our best trading experience on your mobile." />,
        learn_more_link: '/deriv-go/',
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
        description: <Localize translate_text="The all-in-one CFD trading platform." />,
        learn_more_link: '/dmt5/',
        download_links: {
            is_desktop: [
                { type: 'mac_app_store', url: dmt5_mac_app_url },
                { type: 'windows', url: dmt5_windows_download_url },
                { type: 'linux', url: dmt5_linux_url },
                { type: 'browser', link_type: 'mt5' },
                { type: 'google_play', url: dmt5_android_url },
                { type: 'app_gallery', url: dmt5_app_gallery },
            ],
        },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader',
        description: (
            <Localize translate_text="Our flagship app for trading options and multipliers." />
        ),
        learn_more_link: '/dtrader/',
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'deriv_app' }],
        },
    },
    {
        title: 'Deriv X',
        icon: DerivXIcon,
        image_key: 'platforms_derivx',
        description: <Localize translate_text="The CFD trading platform to fit your style." />,
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
        description: <Localize translate_text="Automate your trading. No coding required." />,
        learn_more_link: '/dbot/',
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'dbot' }],
        },
    },
    {
        title: 'SmartTrader',
        icon: SmartTraderIcon,
        image_key: 'platforms_smarttrader',
        description: <Localize translate_text="Our legacy options trading platform." />,
        learn_more_link: smarttrader_url,
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'smart_trader', url: 'trading' }],
        },
    },
    {
        title: 'Binary Bot',
        icon: BinaryBotIcon,
        image_key: 'platforms_binary_bot',
        description: (
            <Localize translate_text="Our classic bot builder and automated trading platform." />
        ),
        learn_more_link: binary_bot_url,
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'binary_bot' }],
        },
    },
    {
        title: 'API',
        icon: APIIcon,
        image_key: 'platforms_api',
        description: <Localize translate_text="Build your own apps with our API." />,
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
        description: <Localize translate_text="The all-in-one CFD trading platform." />,
        learn_more_link: '/dmt5/',
        download_links: {
            is_desktop: [
                { type: 'mac_app_store', url: dmt5_mac_app_url },
                { type: 'windows', url: dmt5_windows_download_url },
                { type: 'linux', url: dmt5_linux_url },
                { type: 'browser', link_type: 'mt5' },
                { type: 'google_play', url: dmt5_android_url },
                { type: 'app_gallery', url: dmt5_app_gallery },
            ],
        },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader_eu',
        description: <Localize translate_text="Our flagship app for trading multipliers." />,
        learn_more_link: '/dtrader/',
        download_links: {
            is_desktop: [{ type: 'browser', link_type: 'deriv_app' }],
        },
    },
]

export const platform_details_uk: TPlatformDetails[] = [
    {
        title: 'Deriv MT5',
        icon: DMT5Icon,
        image_key: 'platforms_mt5_uk',
        description: <Localize translate_text="The all-in-one CFD trading platform." />,
        learn_more_link: '/dmt5/',
        download_links: {
            is_desktop: [
                { type: 'mac_app_store', url: dmt5_mac_app_url },
                { type: 'windows', url: dmt5_windows_download_url },
                { type: 'linux', url: dmt5_linux_url },
                { type: 'browser', link_type: 'mt5' },
                { type: 'google_play', url: dmt5_android_url },
                { type: 'app_gallery', url: dmt5_app_gallery },
            ],
        },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader_uk',
        description: <Localize translate_text="Our flagship app for trading multipliers." />,
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

export type PlatformDetailsProps = {
    title: string
    description: ReactElement
    learn_more_link: string
    icon?: string
    style?: CSSProperties
    is_from_slider?: boolean
}

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
                {description}
            </Header>
            <Flex jc="flex-start" tabletL={{ jc: 'center' }}>
                <LearnMoreLink
                    to={learn_more_link}
                    external={learn_more_link.includes('https')}
                    mb="9px"
                >
                    <span>{`${localize('Learn more')} >`}</span>
                </LearnMoreLink>
            </Flex>
        </>
    )
}
