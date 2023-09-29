import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'features/components/atoms/link'
import { TradingPlatformStepperViewType } from 'features/components/templates/trade-platform/types'

const how_to_start_images = {
    step1: (
        <StaticImage
            src="../../../../images/common/trading-platforms/ctrader/step-1.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step2: (
        <StaticImage
            src="../../../../images/common/trading-platforms/ctrader/step-2.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step3: (
        <StaticImage
            src="../../../../images/common/trading-platforms/ctrader/step-3.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="none"
        />
    ),
    'step2-demo': (
        <StaticImage
            src="../../../../images/common/trading-platforms/ctrader/step-2-demo.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="none"
        />
    ),
    'step3-demo': (
        <StaticImage
            src="../../../../images/common/trading-platforms/ctrader/step-3-demo.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="none"
        />
    ),
}
const how_to_start_images_mobile = {
    step1: (
        <StaticImage
            src="../../../../images/common/trading-platforms/ctrader/mobile-step-1.png"
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
            src="../../../../images/common/trading-platforms/ctrader/mobile-step-2.png"
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
            src="../../../../images/common/trading-platforms/ctrader/mobile-step-3.png"
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
            src="../../../../images/common/trading-platforms/ctrader/mobile-step-2-demo.png"
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
            src="../../../../images/common/trading-platforms/ctrader/mobile-step-3-demo.png"
            alt="step"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
}
export const demo: TradingPlatformStepperViewType = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/signup',
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
export const demo_mobile: TradingPlatformStepperViewType = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images_mobile['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/signup',
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
export const real: TradingPlatformStepperViewType = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/signup',
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
export const real_mobile: TradingPlatformStepperViewType = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        image: how_to_start_images_mobile['step1'],
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                }}
            />,
            <Link
                textcolor="brand"
                key={1}
                url={{
                    type: 'internal',
                    to: '/signup',
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
export const trading_platform_start = {
    demo,
    demo_mobile,
    real,
    real_mobile,
}
