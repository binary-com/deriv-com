import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { SmartPlatformItem } from './types'
import DTraderIcon from 'images/svg/dtrader/dtrader-icon.svg'
import DMT5Icon from 'images/svg/dmt5/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/deriv-go/deriv-go-logo.svg'
import DerivXIcon from 'images/svg/deriv-x/derivx-logo.svg'
import DBotIcon from 'images/svg/dbot/dbot-icon.svg'
import BinaryBotIcon from 'images/svg/binarybot-icon.svg'
import SmartTraderIcon from 'images/svg/custom/smarttrader.svg'
import APIIcon from 'images/svg/api-logo.svg'
import Link from 'features/components/atoms/link'
import {
    derivx_android_url,
    derivx_ios_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
    dmt5_android_url,
    dmt5_linux_url,
    dmt5_mac_app_url,
    dmt5_windows_download_url,
} from 'common/constants'

const platformSliderItems: SmartPlatformItem[] = [
    {
        id: 0,
        data: {
            title: '_t_Deriv GO_t_',
            description: '_t_Our best trading experience on your mobile._t_',
            url: {
                type: 'internal',
                to: '/deriv-go/',
            },
            icon: DerivGOIcon,
            image: (
                <StaticImage
                    objectFit="contain"
                    src="../../../../images/common/home/platforms_deriv_go.png"
                    alt="laptop dtrader"
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
                    />,
                    <Link
                        key={1}
                        url={{ type: 'non-company', href: deriv_go_ios_url }}
                        weight="bold"
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
            title: '_t_Deriv MT5_t_',
            description: '_t_The all-in-one CFD trading platform._t_',
            url: {
                type: 'internal',
                to: '/dmt5/',
            },
            icon: DMT5Icon,
            image_caption: {
                text: '_t_Available on <0>Android</0>, <1>Mac OS</1>, <2>Windows</2>, <3>Linux</3> and <4>web browser</4>_t_',
                components: [
                    <Link
                        key={0}
                        url={{ type: 'non-company', href: dmt5_android_url }}
                        weight="bold"
                    />,
                    <Link
                        key={1}
                        url={{ type: 'non-company', href: dmt5_mac_app_url }}
                        weight="bold"
                    />,
                    <Link
                        key={2}
                        url={{ type: 'non-company', href: dmt5_windows_download_url }}
                        weight="bold"
                    />,
                    <Link
                        key={3}
                        url={{ type: 'non-company', href: dmt5_linux_url }}
                        weight="bold"
                    />,
                    <Link key={4} url={{ type: 'company', url_name: 'mt5' }} weight="bold" />,
                ],
            },
            image: ({ is_eu }) =>
                is_eu ? (
                    <StaticImage
                        objectFit="contain"
                        src="../../../../images/common/home/platforms_mt5_eu.png"
                        alt="laptop dtrader"
                        formats={['avif', 'webp', 'auto']}
                        placeholder="none"
                    />
                ) : (
                    <StaticImage
                        objectFit="contain"
                        src="../../../../images/common/home/platforms_mt5.png"
                        alt="laptop dtrader"
                        formats={['avif', 'webp', 'auto']}
                        placeholder="none"
                    />
                ),
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Deriv Trader_t_',
            description: '_t_Our flagship app for trading options and multipliers._t_',
            url: {
                type: 'internal',
                to: '/dtrader/',
            },
            icon: DTraderIcon,
            image_caption: {
                text: '_t_Available on <0>web browser</0>_t_',
                components: [
                    <Link key={0} url={{ type: 'company', url_name: 'deriv_app' }} weight="bold" />,
                ],
            },
            image: ({ is_eu }) =>
                is_eu ? (
                    <StaticImage
                        objectFit="contain"
                        src="../../../../images/common/home/platforms_dtrader_eu.png"
                        alt="laptop dtrader"
                        formats={['avif', 'webp', 'auto']}
                        placeholder="none"
                    />
                ) : (
                    <StaticImage
                        objectFit="contain"
                        src="../../../../images/common/home/platforms_dtrader.png"
                        alt="laptop dtrader"
                        formats={['avif', 'webp', 'auto']}
                        placeholder="none"
                    />
                ),
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Deriv X_t_',
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
                    />,
                    <Link
                        key={1}
                        url={{ type: 'non-company', href: derivx_ios_url }}
                        weight="bold"
                    />,
                    <Link key={2} url={{ type: 'company', url_name: 'derivx' }} weight="bold" />,
                ],
            },
            image: (
                <StaticImage
                    objectFit="contain"
                    src="../../../../images/common/home/platforms_derivx.png"
                    alt="laptop dtrader"
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
            title: '_t_DBot_t_',
            description: '_t_Automate your trading. No coding required._t_',
            url: {
                type: 'internal',
                to: '/dbot/',
            },
            icon: DBotIcon,
            image_caption: {
                text: '_t_Available on <0>web browser</0>_t_',
                components: [
                    <Link key={0} url={{ type: 'company', url_name: 'dbot' }} weight="bold" />,
                ],
            },
            image: (
                <StaticImage
                    objectFit="contain"
                    src="../../../../images/common/home/platforms_dbot.png"
                    alt="laptop dtrader"
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
                    />,
                ],
            },
            image: (
                <StaticImage
                    objectFit="contain"
                    src="../../../../images/common/home/platforms_smarttrader.png"
                    alt="laptop dtrader"
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
                    />,
                ],
            },
            image: (
                <StaticImage
                    objectFit="contain"
                    src="../../../../images/common/home/platforms_binary_bot.png"
                    alt="laptop dtrader"
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
                    <Link key={0} url={{ type: 'company', url_name: 'api' }} weight="bold" />,
                ],
            },
            image: (
                <StaticImage
                    objectFit="contain"
                    src="../../../../images/common/home/platforms_api.png"
                    alt="laptop dtrader"
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
