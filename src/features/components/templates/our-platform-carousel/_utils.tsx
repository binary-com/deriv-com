import type { CSSProperties } from 'react'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
// import DerivEZIcon from 'images/svg/deriv-ez/deriv-ez-logo-red.svg'
import { StaticImage } from 'gatsby-plugin-image'
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
import { localize, Localize } from 'components/localization'
// SVG Icons
// import DTraderIcon from 'images/svg/dtrader/dtrader-icon.svg'
// import DMT5Icon from 'images/svg/dmt5/dmt5-icon.svg'
// import DerivGOIcon from 'images/svg/deriv-go/deriv-go-logo.svg'
// import DerivXIcon from 'images/svg/deriv-x/derivx-logo.svg'
// import DBotIcon from 'images/svg/dbot/dbot-icon.svg'
// import BinaryBotIcon from 'images/svg/binarybot-icon.svg'
// import SmartTraderIcon from 'images/svg/custom/smarttrader.svg'
// import APIIcon from 'images/svg/api-logo.svg'
import Browser from 'images/svg/app-download/web-browser.svg'
import AppStore from 'images/svg/app-download/app-store.svg'
import GooglePlay from 'images/svg/app-download/google-play.svg'
import Linux from 'images/svg/app-download/linux.svg'
import APK from 'images/svg/app-download/apk.svg'
import Windows from 'images/svg/dmt5/dmt5_app_gallery_windows_exe.svg'
import MacAppStore from 'images/svg/dmt5/dmt5_app_gallery_mac_dmg.svg'
import AppGallery from 'images/svg/app-download/app-store-app-gallery.svg'
import { TString } from 'types/generics'
// new SVG icons
import DTraderIcon from 'images/svg/custom/rebranding/dtrader-icon.svg'
import DMT5Icon from 'images/svg/custom/rebranding/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/custom/rebranding/deriv-go-icon.svg'
import DerivXIcon from 'images/svg/custom/rebranding/deriv-x-icon.svg'
import DBotIcon from 'images/svg/custom/rebranding/deriv-bot-icon.svg'
import BinaryBotIcon from 'images/svg/custom/rebranding/binarybot-icon.svg'
import SmartTraderIcon from 'images/svg/custom/rebranding/smarttrader-icon.svg'
import APIIcon from 'images/svg/custom/rebranding/deriv-api-icon.svg'
import DerivEzIcon from 'images/svg/custom/rebranding/deriv-ez-icon.svg'
import Link from 'features/components/atoms/link'

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

// type TDownloadLinks = Array<{ text: string; url?: string; link_type?: string }>
interface PlatformItemConfig {
    is_eu: boolean
}
export type TPlatformDetails = {
    id?: number
    title: string
    icon: string
    image?: ReactElement | ((config: Partial<PlatformItemConfig>) => ReactElement)
    image_key: string
    description: ReactElement
    learn_more_link: string
    image_caption?: {
        text: TString
        components: ReactElement[]
    }
}
export const platform_details_row: TPlatformDetails[] = [
    {
        title: 'Deriv GO',
        icon: DerivGOIcon,
        image_key: 'platforms_deriv_go',
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_deriv_go.png"
                alt="deriv go"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        description: <Localize translate_text="Our best trading experience on your mobile." />,
        learn_more_link: '/deriv-go/',
        image_caption: {
            text: '_t_Available on <0>Android</0> and <1>iOS</1>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'non-company', href: deriv_go_playstore_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={1}
                    url={{ type: 'non-company', href: deriv_go_ios_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
    },
    {
        title: 'Deriv MT5',
        icon: DMT5Icon,
        image_key: 'platforms_mt5',
        description: <Localize translate_text="The all-in-one CFD trading platform." />,
        learn_more_link: '/dmt5/',
        image_caption: {
            text: '_t_Available on <0>Android</0>, <1>iOS</1>, <2>Mac OS</2>, <3>Windows</3>, <4>Linux</4> and <5>web browser</5>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'non-company', href: dmt5_android_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={1}
                    url={{ type: 'non-company', href: dmt5_ios_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={2}
                    url={{ type: 'non-company', href: dmt5_mac_app_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={3}
                    url={{ type: 'non-company', href: dmt5_windows_download_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={4}
                    url={{ type: 'non-company', href: dmt5_linux_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={5}
                    url={{ type: 'company', url_name: 'mt5' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_mt5.png"
                alt="deriv mt5"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [
        //         { type: 'mac_app_store', url: dmt5_mac_app_url },
        //         { type: 'windows', url: dmt5_windows_download_url },
        //         { type: 'linux', url: dmt5_linux_url },
        //         { type: 'browser', link_type: 'mt5' },
        //         { type: 'google_play', url: dmt5_android_url },
        //         { type: 'app_store', url: dmt5_ios_url },
        //         { type: 'app_gallery', url: dmt5_app_gallery },
        //     ],
        // },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader',
        description: (
            <Localize translate_text="Our flagship app for trading options and multipliers." />
        ),
        learn_more_link: '/dtrader/',
        image_caption: {
            text: '_t_Available on <0>web browser</0>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'company', url_name: 'deriv_app' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_deriv_trader.png"
                alt="deriv trader"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [{ type: 'browser', link_type: 'deriv_app' }],
        // },
    },
    {
        title: 'Deriv X',
        icon: DerivXIcon,
        image_key: 'platforms_derivx',
        description: <Localize translate_text="The CFD trading platform to fit your style." />,
        learn_more_link: '/derivx/',
        image_caption: {
            text: '_t_Available on <0>Android</0>, <1>iOS</1> and <2>web browser</2>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'non-company', href: derivx_android_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={1}
                    url={{ type: 'non-company', href: derivx_ios_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={2}
                    url={{ type: 'company', url_name: 'derivx' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_derivx.png"
                alt="deriv x"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [
        //         { type: 'browser', link_type: 'derivx' },
        //         { type: 'app_store', url: derivx_ios_url },
        //         { type: 'google_play', url: derivx_android_url },
        //     ],
        // },
    },
    {
        title: 'Deriv EZ',
        icon: DerivEzIcon,
        image_key: 'platforms_derivez',
        description: <Localize translate_text="Our mobile-first CFD trading platform" />,
        learn_more_link: '/deriv-ez/',
        image_caption: {
            text: '_t_Available on <0>Android</0> and <1>iOS</1> (on Deriv GO)_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'non-company', href: deriv_go_playstore_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={1}
                    url={{ type: 'non-company', href: deriv_go_ios_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_deriv_ez.png"
                alt="deriv ez"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [
        //         { type: 'app_store', url: deriv_go_ios_url },
        //         { type: 'google_play', url: deriv_go_playstore_url },
        //     ],
        // },
    },
    {
        title: 'DBot',
        icon: DBotIcon,
        image_key: 'platforms_dbot',
        description: <Localize translate_text="Automate your trading. No coding required." />,
        learn_more_link: '/dbot/',
        image_caption: {
            text: '_t_Available on <0>web browser</0>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'company', url_name: 'dbot' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_deriv_bot.png"
                alt="deriv bot"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [{ type: 'browser', link_type: 'dbot' }],
        // },
    },
    {
        title: 'SmartTrader',
        icon: SmartTraderIcon,
        image_key: 'platforms_smarttrader',
        description: <Localize translate_text="Our legacy options trading platform." />,
        learn_more_link: smarttrader_url,
        image_caption: {
            text: '_t_Available on <0>web browser</0>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'company', url_name: 'smart_trader', path: 'trading' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_smart_trader.png"
                alt="deriv smart trader"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [{ type: 'browser', link_type: 'smart_trader', url: 'trading' }],
        // },
    },
    {
        title: 'Binary Bot',
        icon: BinaryBotIcon,
        image_key: 'platforms_binary_bot',
        description: (
            <Localize translate_text="Our classic bot builder and automated trading platform." />
        ),
        learn_more_link: binary_bot_url,
        image_caption: {
            text: '_t_Available on <0>web browser</0>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'company', url_name: 'binary_bot' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_binary_bot.png"
                alt="binary bot"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [{ type: 'browser', link_type: 'binary_bot' }],
        // },
    },
    {
        title: 'API',
        icon: APIIcon,
        image_key: 'platforms_api',
        description: <Localize translate_text="Build your own apps with our API." />,
        learn_more_link: deriv_api_url,
        image_caption: {
            text: '_t_Available on <0>web browser</0>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'company', url_name: 'api' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_deriv_api.png"
                alt="deriv api"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [{ type: 'browser', url: deriv_api_url }],
        // },
    },
]

export const platform_details_eu: TPlatformDetails[] = [
    {
        title: 'Deriv MT5',
        icon: DMT5Icon,
        image_key: 'platforms_mt5_eu',
        description: <Localize translate_text="The all-in-one CFD trading platform." />,
        learn_more_link: '/dmt5/',
        image_caption: {
            text: '_t_Available on <0>Android</0>, <1>iOS</1>, <2>Mac OS</2>, <3>Windows</3>, <4>Linux</4> and <5>web browser</5>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'non-company', href: dmt5_android_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={1}
                    url={{ type: 'non-company', href: dmt5_ios_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={2}
                    url={{ type: 'non-company', href: dmt5_mac_app_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={3}
                    url={{ type: 'non-company', href: dmt5_windows_download_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={4}
                    url={{ type: 'non-company', href: dmt5_linux_url }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
                <Link
                    key={5}
                    url={{ type: 'company', url_name: 'mt5' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_mt5_eu.png"
                alt="deriv trader"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [
        //         { type: 'mac_app_store', url: dmt5_mac_app_url },
        //         { type: 'windows', url: dmt5_windows_download_url },
        //         { type: 'linux', url: dmt5_linux_url },
        //         { type: 'browser', link_type: 'mt5' },
        //         { type: 'google_play', url: dmt5_android_url },
        //         { type: 'app_store', url: dmt5_ios_url },
        //         { type: 'app_gallery', url: dmt5_app_gallery },
        //     ],
        // },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader_eu',
        description: <Localize translate_text="Our flagship app for trading multipliers." />,
        learn_more_link: '/dtrader/',
        image_caption: {
            text: '_t_Available on <0>web browser</0>_t_',
            components: [
                <Link
                    key={0}
                    url={{ type: 'company', url_name: 'deriv_app' }}
                    weight="bold"
                    font_family="UBUNTU"
                />,
            ],
        },
        image: (
            <StaticImage
                objectFit="contain"
                src="../../../../images/common/home/rebranding/platform_deriv_trader.png"
                alt="deriv trader"
                formats={['avif', 'webp', 'auto']}
                placeholder="none"
            />
        ),
        // download_links: {
        //     is_desktop: [{ type: 'browser', link_type: 'deriv_app' }],
        // },
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
