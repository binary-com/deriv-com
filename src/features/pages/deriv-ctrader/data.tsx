import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'features/components/atoms/image'
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
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'
import Link from 'features/components/atoms/link'
import { OtherPlatformsProps } from 'features/components/templates/card-carousel/other-platforms/types'
import { TString } from 'types/generics'
import CTraderLogo from 'images/svg/trading-platforms/ctrader/ctrader-logo.svg'
import MultipleAssets from 'images/svg/trading-platforms/ctrader/multiple-assets.svg'
import AnyTime from 'images/svg/trading-platforms/deriv-ez/twenty-four-seven.svg'
import SignIn from 'images/svg/trading-platforms/ctrader/sign-in.svg'
import dmt5Icon from 'images/svg/trading-platforms/dmt5-icon.svg'
import dtIcon from 'images/svg/trading-platforms/dt-icon.svg'
import dGoIcon from 'images/svg/trading-platforms/go-icon.svg'
import dxIcon from 'images/svg/trading-platforms/dx-icon.svg'
import dbIcon from 'images/svg/trading-platforms/db-icon.svg'
import derivEZLogo from 'images/svg/trading-platforms/deriv-ez/deriv-ez-logo-red.svg'
import derivEZQR from 'images/svg/trading-platforms/deriv-ez/derivez-qr.svg'
import AndroidIcon from 'images/svg/android-icon.svg'
import AppleIcon from 'images/svg/apple-icon.svg'
import AppGalleryIcon from 'images/svg/appGallery-icon.svg'
import { BannerType } from 'features/components/templates/banners/blade-shape-banner/types'

const hero_title: TString[] = ['_t_A feature-rich_t_', '_t_CFD trading_t_', '_t_platform_t_']
const trading_platform_hero: TradingPlatformPHeroProps = {
    hero_title,
    hero: (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/ctrader-hero.png"
            alt="cTrader online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    hero_mobile: (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/ctrader-hero-mobile.png"
            alt="cTrader online trading platform"
            loading="eager"
            quality={100}
            formats={['avif', 'webp', 'auto']}
            objectFit="contain"
            placeholder="none"
        />
    ),
    logo: <Image src={CTraderLogo} height={64} alt={'_t_cTrader logo_t_'} />,
    logo_mobile: <Image src={CTraderLogo} height={32} alt={'_t_cTrader logo_t_'} />,
}
const trading_platform_description: TradingPlatformTextType = {
    title: '_t_What is Deriv cTrader_t_',
    subtitle:
        '_t_Deriv cTrader is an easy-to-use, multi-asset CFD trading platform packed with a wide range of features on a user-friendly interface. Enhance your trading experience further with features such as limit order and stop order, chart trading, and custom indicators. With Deriv cTrader, take advantage of our deep liquidity to execute trades quickly and efficiently._t_',
}
//const trading_platform_description: TradingPlatformTextType = {
//    what_is_description,
//}
const selling_points: TradingPlatformTextType[] = [
    {
        title: '_t_200+_t_',
        subtitle: '_t_tradable assets_t_',
    },
    {
        title: '_t_24/7_t_',
        subtitle: '_t_trading_t_',
    },
    {
        title: '_t_Zero_t_',
        subtitle: '_t_commission_t_',
    },
]

const trading_platform_numbers: TradingPlatformNumbersProps = {
    selling_points,
}
const trading_platform_why_trade: TradingPlatformWhyTradeProps = {
    title: '_t_Why trade with Deriv cTrader_t_',
    card_data: [
        {
            title: '_t_Multiple assets on a single platform_t_',
            subtitle:
                '_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived indices in one place._t_',
            icon: <Image src={MultipleAssets} height={48} alt={'_t_Easy start_t_'} />,
        },
        {
            title: '_t_All day, all year_t_',
            subtitle:
                '_t_Trade cryptocurrencies and synthetic indices anytime, even on weekends and holidays._t_',
            icon: <Image src={AnyTime} height={48} alt={'_t_24/7 chat_t_'} />,
        },
        {
            title: '_t_Quick account sign-in_t_',
            subtitle:
                '_t_Already have a Deriv account? Use those credentials to sign in to Deriv cTrader._t_',
            icon: <Image src={SignIn} height={48} alt={'_t_Favourite assets_t_'} />,
        },
    ],
}
const trading_platform_what_have: TradingPlatformWhatHaveProps = [
    {
        id: 0,
        title: '_t_An intuitive interface_t_',
        subtitle:
            '_t_Take advantage of an easy-to-use interface for trading and charting that both new and experienced traders can enjoy._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/ctrader/interface.png"
                alt="An intuitive interface"
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
        title: '_t_All your favourite assets in one place_t_',
        subtitle:
            '_t_Trade derived and financial assets on one CFD account, without needing to switch between multiple accounts._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/ctrader/assets.png"
                alt="Favourite assets"
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
        title: '_t_Know your trade margins_t_',
        subtitle:
            '_t_Useful menus where you can find out how each asset’s margin impacts your trade before placing them._t_',
        image: (
            <StaticImage
                src="../../../images/common/trading-platforms/ctrader/trade-margins.png"
                alt="Trade margins"
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
            src="../../../images/common/trading-platforms/ctrader/step-1.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step2: (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/step-2.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step3: (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/step-3.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    'step2-demo': (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/step-2-demo.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    'step3-demo': (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/step-3-demo.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
}
const how_to_start_images_mobile = {
    step1: (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/mobile-step-1.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step2: (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/mobile-step-2.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step3: (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/mobile-step-3.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    'step2-demo': (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/mobile-step-2-demo.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    'step3-demo': (
        <StaticImage
            src="../../../images/common/trading-platforms/ctrader/mobile-step-3-demo.png"
            alt="step"
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
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
        ],
    },
    {
        title: '_t_Go to the Trader’s hub and choose the Demo option._t_',
        image: how_to_start_images['step2-demo'],
    },
    {
        title: '_t_Under CFDs, look for Deriv cTrader and select Get._t_',
        image: how_to_start_images['step3-demo'],
    },
]
const demo_mobile: TradingPlatformStepperViewType = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images_mobile['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
        ],
    },
    {
        title: '_t_Go to the Trader’s hub and choose the Demo option._t_',
        image: how_to_start_images_mobile['step2-demo'],
    },
    {
        title: '_t_Under CFDs, look for Deriv cTrader and select Get._t_',
        image: how_to_start_images_mobile['step3-demo'],
    },
]
const real: TradingPlatformStepperViewType = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
        ],
    },
    {
        title: '_t_Go to the Trader’s hub and choose the Real option._t_',
        image: how_to_start_images['step2'],
    },
    {
        title: '_t_Under CFDs, look for Deriv cTrader and select Get._t_',
        image: how_to_start_images['step3'],
    },
]
const real_mobile: TradingPlatformStepperViewType = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images_mobile['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/',
                }}
            />,
        ],
    },
    {
        title: '_t_Go to the Trader’s hub and choose the Real option._t_',
        image: how_to_start_images_mobile['step2'],
    },
    {
        title: '_t_Under CFDs, look for Deriv cTrader and select Get._t_',
        image: how_to_start_images_mobile['step3'],
    },
]
const trading_platform_start: TradingPlatformStartProps = {
    demo,
    demo_mobile,
    real,
    real_mobile,
}
const trading_platform_other: OtherPlatformsProps = [
    {
        icon: dtIcon,
        header: 'Deriv Trader',
        description: '_t_Our flagship app for trading options and multipliers._t_',
        link: '/dtrader/',
    },
    {
        icon: dGoIcon,
        header: 'Deriv Trader',
        description: '_t_Our flagship app for trading options and multipliers._t_',
        link: '/ctrader/',
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
        icon: dmt5Icon,
        header: 'Deriv MT5',
        description: '_t_The all-in-one CFD trading platform._t_',
        link: '/dmt5/',
    },
    {
        icon: dbIcon,
        header: 'Deriv Bot',
        description: '_t_Automate your trading. No coding required._t_',
        link: '/dbot/',
    },
]
const trading_platform_banner: BannerType = {
    information: {
        icon: derivEZLogo,
        heading: '_t_Get trading with Deriv cTrader_t_',
    },
    scan_box: {
        icon: derivEZQR,
        heading_one: '_t_Scan to download Deriv cTrader_t_',
        heading_two: 'Android, IOS & Huawei',
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
export const ctrader_data: TradingPlatformDataType = {
    trading_platform_hero,
    trading_platform_numbers,
    trading_platform_description,
    trading_platform_why_trade,
    trading_platform_banner,
    trading_platform_what_have,
    trading_platform_start,
    trading_platform_other,
}
