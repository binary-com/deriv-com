import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import StepperContent from 'features/components/atoms/tab/tab-content'
import Link from 'features/components/atoms/link'

export const deriv_ez_images = {
    step1: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-1.png"
            alt="trading platform trading app"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            width={650}
            height={386}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
    step2: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-2.png"
            alt="trading platform app create free demo account"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            width={650}
            height={386}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
    'step2-demo': (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-2-demo.png"
            alt="traders hub demo account for trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            width={650}
            height={386}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
    step3: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-3.png"
            alt="traders hub real account for trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            width={650}
            height={386}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
    step4: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-4.png"
            alt="trading platform chart trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            width={650}
            height={386}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
}
export const deriv_ez_images_mobile = {
    step1: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-1-mobile.png"
            alt="trading platform trading app"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
    step2: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-2-mobile.png"
            alt="trading platform app create free demo account"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
    step3: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-3-mobile.png"
            alt="traders hub real account for trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
    step4: (
        <StaticImage
            src="../../../../images/common/trading-platforms/deriv-ez/step-4-mobile.png"
            alt="trading platform chart trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={100}
            objectFit="contain"
            placeholder="blurred"
        />
    ),
}

type DemoRealProps = React.ComponentProps<typeof StepperContent>['items']
const demo: DemoRealProps = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                    target: '_blank',
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
        image: deriv_ez_images['step1'],
    },
    {
        title: '_t_Add a Deriv EZ demo account._t_',
        image: deriv_ez_images['step2-demo'],
    },
    {
        title: '_t_Start trading via the web terminal or the Deriv GO mobile app._t_',
        image: deriv_ez_images['step4'],
    },
]
const demo_mobile: DemoRealProps = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                    target: '_blank',
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
        image: deriv_ez_images_mobile['step1'],
    },
    {
        title: '_t_Add a Deriv EZ demo account._t_',
        image: deriv_ez_images_mobile['step3'],
    },
    {
        title: '_t_Start trading via the web terminal or the Deriv GO mobile app._t_',
        image: deriv_ez_images_mobile['step4'],
    },
]
const real: DemoRealProps = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                    target: '_blank',
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
        image: deriv_ez_images['step1'],
    },
    {
        title: '_t_Create a Deriv real money account._t_',
        image: deriv_ez_images['step2'],
    },
    {
        title: '_t_Add a Deriv EZ real account and make a deposit._t_',
        image: deriv_ez_images['step3'],
    },
    {
        title: '_t_Start trading via the web terminal or the Deriv GO mobile app._t_',
        image: deriv_ez_images['step4'],
    },
]
const real_mobile: DemoRealProps = [
    {
        title: '_t_<0>Sign in</0> to your Deriv account. If you don’t have one, <1>sign up</1> for free._t_',
        component: [
            <Link
                textcolor="brand"
                key={0}
                url={{
                    type: 'company',
                    url_name: 'deriv_app_login',
                    target: '_blank',
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
        image: deriv_ez_images_mobile['step1'],
    },
    {
        title: '_t_Create a Deriv real money account._t_',
        image: deriv_ez_images_mobile['step2'],
    },
    {
        title: '_t_Add a Deriv EZ real account and make a deposit._t_',
        image: deriv_ez_images_mobile['step3'],
    },
    {
        title: '_t_Start trading via the web terminal or the Deriv GO mobile app._t_',
        image: deriv_ez_images_mobile['step4'],
    },
]

export const trading_platform_start = {
    demo,
    demo_mobile,
    real,
    real_mobile,
}
