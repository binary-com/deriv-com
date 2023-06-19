import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'features/components/atoms/image'
import Link from 'features/components/atoms/link'
import {
    TradingPlatformDataType,
    TradingPlatformNumbersProps,
    TradingPlatformPHeroProps,
    TradingPlatformStartProps,
    TradingPlatformStepperViewType,
    TradingPlatformTextType,
    TradingPlatformWhatHaveProps,
    TradingPlatformWhyTradeProps,
} from 'features/components/templates/trading-platform/types'
import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'
import { OtherPlatformsProps } from 'features/components/templates/card-carousel/other-platforms/types'
import { TString } from 'types/generics'
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'
import DerivEzLogo from 'images/svg/trading-platforms/deriv-ez/deriv-ez-logo.svg'
import EasyStart from 'images/svg/trading-platforms/deriv-ez/easy-to-start.svg'
import AnyTime from 'images/svg/trading-platforms/deriv-ez/twenty-four-seven.svg'
import FavouriteAssets from 'images/svg/trading-platforms/deriv-ez/favourite-assets.svg'
import derivEZLogo from 'images/svg/trading-platforms/deriv-ez/deriv-ez-logo-red.svg'
import derivEZQR from 'images/svg/trading-platforms/deriv-ez/derivez-qr.svg'
import InfoIcon from 'images/svg/info-icon.svg'
import AndroidIcon from 'images/svg/android-icon.svg'
import AppleIcon from 'images/svg/apple-icon.svg'
import AppGalleryIcon from 'images/svg/appGallery-icon.svg'
import dmt5Icon from 'images/svg/trading-platforms/dmt5-icon.svg'
import dtIcon from 'images/svg/trading-platforms/dt-icon.svg'
import dGoIcon from 'images/svg/trading-platforms/go-icon.svg'
import dxIcon from 'images/svg/trading-platforms/dx-icon.svg'
import dbIcon from 'images/svg/trading-platforms/db-icon.svg'

const hero_title: TString[] = [
    '_t_An intuitive,_t_',
    '_t_easy-to-get-started_t_',
    '_t_CFDs trading platform_t_',
]
const trading_platform_hero: TradingPlatformPHeroProps = {
    hero_title,
    hero: (
        <StaticImage
            src="../../../images/common/deriv-ez/hero-phone.png"
            alt="Deriv EZ online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    hero_mobile: (
        <StaticImage
            src="../../../images/common/deriv-ez/hero-phone-mobile.png"
            alt="Deriv EZ online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: <Image src={DerivEzLogo} height={64} alt={'_t_Deriv EZ logo_t_'} />,
    logo_mobile: <Image src={DerivEzLogo} height={32} alt={'_t_Deriv EZ logo_t_'} />,
}
const what_is_description: TradingPlatformTextType = {
    title: '_t_What is Deriv EZ_t_',
    subtitle:
        '_t_Deriv EZ is a user-friendly CFDs trading platform that offers instant access to all your favourite assets. There is no additional account ID or password to remember, so you can fully focus on your trading. Trade on Deriv EZ and access a wide variety of assets in forex, stocks and indices, commodities, cryptocurrencies, and derived indices._t_',
}
const selling_points: TradingPlatformTextType[] = [
    {
        title: '_t_150+_t_',
        subtitle: '_t_tradable assets_t_',
    },
    {
        title: '_t_All-in-one_t_',
        subtitle: '_t_Financial and derived assets_t_',
    },
    {
        title: '_t_24/7_t_',
        subtitle: '_t_trading_t_',
    },
]
const trading_platform_numbers: TradingPlatformNumbersProps = {
    selling_points,
    what_is_description,
}
const trading_platform_why_trade: TradingPlatformWhyTradeProps = {
    title: '_t_Why trade with Deriv EZ_t_',
    card_data: [
        {
            title: '_t_Easy to start_t_',
            subtitle:
                '_t_Start trading CFDs in two easy steps — click to get an account, start trading. No need to remember another login ID and password._t_',
            icon: <Image src={EasyStart} height={48} alt={'_t_Easy start_t_'} />,
        },
        {
            title: '_t_24/7 trading_t_',
            subtitle:
                '_t_Trade anytime you want, including weekends and holidays, on cryptocurrencies and our proprietary derived indices._t_',
            icon: <Image src={AnyTime} height={48} alt={'_t_24/7 chat_t_'} />,
        },
        {
            title: '_t_All your favourite assets, one platform_t_',
            subtitle:
                '_t_Access over 150 assets in multiple markets simultaneously on one platform._t_',
            icon: <Image src={FavouriteAssets} height={48} alt={'_t_Favourite assets_t_'} />,
        },
    ],
}
const trading_platform_what_have: TradingPlatformWhatHaveProps = [
    {
        id: 0,
        title: '_t_On-the-go trading_t_',
        subtitle:
            '_t_Access your Deriv EZ trades effortlessly on the Deriv GO mobile app. No extra apps to download, no extra passwords to remember._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/deriv-ez/on-go-trading.png"
                alt="Deriv GO trading app"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        id: 1,
        title: '_t_50+ indicators and tools_t_',
        subtitle:
            '_t_Take advantage of more than 50 trading indicators and tools to make informed decisions._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/deriv-ez/indicator.png"
                alt="Trading indicators and tools"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
    {
        id: 2,
        title: '_t_Instant platform access_t_',
        subtitle:
            '_t_Start trading immediately, with no additional login ID or password to fill in. Don’t miss out on market opportunities._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/deriv-ez/instant-platform.png"
                alt="Deriv EZ account creation"
                loading="eager"
                formats={['avif', 'webp', 'auto']}
                quality={100}
                objectFit="contain"
                placeholder="none"
            />
        ),
    },
]
const how_to_start_images = {
    step1: (
        <StaticImage
            src="../../../images/common/trading-platforms/deriv-ez/step-1.png"
            alt="Deriv GO trading app"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step2: (
        <StaticImage
            src="../../../images/common/trading-platforms/deriv-ez/step-2.png"
            alt="Deriv GO app create free demo account"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step3: (
        <StaticImage
            src="../../../images/common/trading-platforms/deriv-ez/step-3.png"
            alt="Deriv EZ demo account for trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    'step3-demo': (
        <StaticImage
            src="../../../images/common/trading-platforms/deriv-ez/step-3-demo.png"
            alt="Deriv EZ demo account for trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step4: (
        <StaticImage
            src="../../../images/common/trading-platforms/deriv-ez/step-4.png"
            alt="Candle chart trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step5: (
        <StaticImage
            src="../../../images/common/trading-platforms/deriv-ez/step-5.png"
            alt="Transfer between your accounts"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step6: (
        <StaticImage
            src="../../../images/common/trading-platforms/deriv-ez/step-6.png"
            alt="Candle chart trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
}
const demo: TradingPlatformStepperViewType = [
    {
        title: '_t_Get the <0>Deriv GO</0> app._t_',
        component: (
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/deriv-go',
                }}
            />
        ),
        image: how_to_start_images['step1'],
    },
    {
        title: '_t_Sign in to your Deriv account. If you don’t have one, sign up for free._t_',
        image: how_to_start_images['step2'],
    },
    {
        title: '_t_Add a Deriv EZ demo account._t_',
        image: how_to_start_images['step3-demo'],
    },
    {
        title: '_t_Start trading on the Deriv GO mobile app._t_',
        image: how_to_start_images['step6'],
    },
]
const demo_mobile: TradingPlatformStepperViewType = [
    {
        title: '_t_Get the <0>Deriv GO</0> app._t_',
        component: (
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/deriv-go',
                }}
            />
        ),
        image: how_to_start_images['step1'],
    },
    {
        title: '_t_Sign in to your Deriv account. If you don’t have one, sign up for free._t_',
        image: how_to_start_images['step2'],
    },
    {
        title: '_t_Add a Deriv EZ demo account._t_',
        image: how_to_start_images['step3-demo'],
    },
    {
        title: '_t_Start trading on the Deriv GO mobile app._t_',
        image: how_to_start_images['step6'],
    },
]
const real: TradingPlatformStepperViewType = [
    {
        title: '_t_Get the <0>Deriv GO</0> app._t_',
        component: (
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/deriv-go',
                }}
            />
        ),
        image: how_to_start_images['step1'],
    },
    {
        title: '_t_Create or sign in to your demo Deriv account._t_',
        image: how_to_start_images['step2'],
    },
    {
        title: '_t_Create a Deriv real account._t_',
        image: how_to_start_images['step3'],
    },
    {
        title: '_t_Create a Deriv EZ real account._t_',
        image: how_to_start_images['step4'],
    },
    {
        title: '_t_Fund your account._t_',
        image: how_to_start_images['step5'],
    },
    {
        title: '_t_Start trading on the Deriv GO mobile app._t_',
        image: how_to_start_images['step6'],
    },
]
const real_mobile: TradingPlatformStepperViewType = [
    {
        title: '_t_Get the <0>Deriv GO</0> app._t_',
        component: (
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/deriv-go',
                }}
            />
        ),
        image: how_to_start_images['step1'],
    },
    {
        title: '_t_Create or sign in to your demo Deriv account._t_',
        image: how_to_start_images['step2'],
    },
    {
        title: '_t_Create a Deriv real account._t_',
        image: how_to_start_images['step3'],
    },
    {
        title: '_t_Create a Deriv EZ real account._t_',
        image: how_to_start_images['step4'],
    },
    {
        title: '_t_Fund your account._t_',
        image: how_to_start_images['step5'],
    },
    {
        title: '_t_Start trading on the Deriv GO mobile app._t_',
        image: how_to_start_images['step6'],
    },
]
const trading_platform_start: TradingPlatformStartProps = {
    demo,
    demo_mobile,
    real_mobile,
    real,
}
const trading_platform_banner: BannerType = {
    information: {
        icon: derivEZLogo,
        heading: '_t_Get trading with Deriv EZ_t_',
    },
    scan_box: {
        icon: derivEZQR,
        heading_one: '_t_Scan to download Deriv GO_t_',
        heading_two: 'Android, IOS & Huawei',
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
const trading_platform_other: OtherPlatformsProps = [
    {
        icon: dmt5Icon,
        header: 'Deriv MT5',
        description: '_t_The all-in-one CFD trading platform._t_',
        link: '/dmt5/',
    },
    {
        icon: dtIcon,
        header: 'Deriv Trader',
        description: '_t_Our flagship app for trading options and multipliers._t_',
        link: '/dtrader/',
    },
    {
        icon: dGoIcon,
        header: 'Deriv Go',
        description: '_t_Our best trading experience on your mobile._t_',
        link: '/deriv-go/',
    },
    {
        icon: dxIcon,
        header: 'Deriv X',
        description: '_t_The CFD trading platform to fit your style._t_',
        link: '/derivx/',
    },
    {
        icon: dbIcon,
        header: 'Deriv Bot',
        description: '_t_Automate your trading. No coding required._t_',
        link: '/dbot/',
    },
]
export const deriv_ez_data: TradingPlatformDataType = {
    trading_platform_hero,
    trading_platform_numbers,
    trading_platform_why_trade,
    trading_platform_what_have,
    trading_platform_start,
    trading_platform_banner,
    trading_platform_other,
}
