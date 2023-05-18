import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { SmartPlatformItem } from './types'
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
import {
    derivx_android_url,
    derivx_ios_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
    dmt5_android_url,
    dmt5_ios_url,
    dmt5_linux_url,
    dmt5_mac_app_url,
    dmt5_windows_download_url,
} from 'common/constants'

const platformSliderItems: SmartPlatformItem[] = [
    {
        id: 0,
        data: {
            title: '_t_deriv GO_t_',
            description: '_t_Our best trading experience on your mobile._t_',
            url: {
                type: 'internal',
                to: '/deriv-go/',
            },
            icon: DerivGOIcon,
            image: (
                <StaticImage
                    objectFit="contain"
                    src="../../../../images/common/home/rebranding/platform_deriv_go.png"
                    alt="deriv go"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
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
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_deriv MT5_t_',
            description: '_t_The all-in-one CFD trading platform._t_',
            url: {
                type: 'internal',
                to: '/dmt5/',
            },
            icon: DMT5Icon,
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
            image: ({ is_eu }) =>
                is_eu ? (
                    <StaticImage
                        objectFit="contain"
                        src="../../../../images/common/home/rebranding/platform_mt5_eu.png"
                        alt="deriv mt5 eu"
                        formats={['avif', 'webp', 'auto']}
                        placeholder="none"
                    />
                ) : (
                    <StaticImage
                        objectFit="contain"
                        src="../../../../images/common/home/rebranding/platform_mt5.png"
                        alt="deriv mt5"
                        formats={['avif', 'webp', 'auto']}
                        placeholder="none"
                    />
                ),
        },
    },
    {
        id: 2,
        data: {
            title: '_t_deriv Trader_t_',
            description: '_t_Our flagship app for trading options and multipliers._t_',
            url: {
                type: 'internal',
                to: '/dtrader/',
            },
            icon: DTraderIcon,
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
        },
    },
    {
        id: 3,
        data: {
            title: '_t_deriv X_t_',
            description: '_t_The CFD trading platform to fit your style._t_',
            url: {
                type: 'internal',
                to: '/derivx/',
            },
            icon: DerivXIcon,
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
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 4,
        data: {
            title: '_t_deriv EZ_t_',
            description: '_t_Our mobile-first CFD trading platform_t_',
            url: {
                type: 'internal',
                to: '/derivez/',
            },
            icon: DerivEzIcon,
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
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 5,
        data: {
            title: '_t_deriv Bot_t_',
            description: '_t_Automate your trading. No coding required._t_',
            url: {
                type: 'internal',
                to: '/dbot/',
            },
            icon: DBotIcon,
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
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 6,
        data: {
            title: '_t_SmartTrader_t_',
            description: '_t_Our legacy options trading platform._t_',
            url: {
                type: 'company',
                url_name: 'smart_trader',
            },
            icon: SmartTraderIcon,
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
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 7,
        data: {
            title: '_t_Binary Bot_t_',
            description: '_t_Our classic bot builder and automated trading platform._t_',
            url: {
                type: 'company',
                url_name: 'binary_bot',
            },
            icon: BinaryBotIcon,
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
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 8,
        data: {
            title: '_t_API_t_',
            description: '_t_Build your own apps with our API._t_',
            url: {
                type: 'company',
                url_name: 'api',
            },
            icon: APIIcon,
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
        },
        visibility: {
            is_eu: false,
        },
    },
]

export default platformSliderItems
