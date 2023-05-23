import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import StepperView from 'features/components/atoms/tab/tab-content'
import Link from 'features/components/atoms/link'

export const deriv_ez_images = {
    step1: (
        <StaticImage
            src="../../../../images/common/deriv-ez/step-1.png"
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
            src="../../../../images/common/deriv-ez/step-2.png"
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
            src="../../../../images/common/deriv-ez/step-3.png"
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
            src="../../../../images/common/deriv-ez/step-3-demo.png"
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
            src="../../../../images/common/deriv-ez/step-4.png"
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
            src="../../../../images/common/deriv-ez/step-5.png"
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
            src="../../../../images/common/deriv-ez/step-6.png"
            alt="Candle chart trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
}

export const demo: React.ComponentProps<typeof StepperView>['items'] = [
    {
        title: '_t_Get the <0>Deriv GO</0> app._t_',
        component: (
            <Link
                textcolor="brand"
                weight="bold"
                key={0}
                url={{
                    type: 'internal',
                    to: '/deriv-go',
                }}
            />
        ),
        image: deriv_ez_images['step1'],
    },
    {
        title: '_t_Sign in to your Deriv account. If you don’t have one, sign up for free._t_',
        image: deriv_ez_images['step2'],
    },
    {
        title: '_t_Add a Deriv EZ demo account._t_',
        image: deriv_ez_images['step3-demo'],
    },
    {
        title: '_t_Start trading on the Deriv GO mobile app._t_',
        image: deriv_ez_images['step6'],
    },
]

export const real: React.ComponentProps<typeof StepperView>['items'] = [
    {
        title: '_t_Get the <0>Deriv GO</0> app._t_',
        component: (
            <Link
                textcolor="brand"
                weight="bold"
                key={0}
                url={{
                    type: 'internal',
                    to: '/deriv-go',
                }}
            />
        ),
        image: deriv_ez_images['step1'],
    },
    {
        title: '_t_Create or sign in to your demo Deriv account._t_',
        image: deriv_ez_images['step2'],
    },
    {
        title: '_t_Create a Deriv real account._t_',
        image: deriv_ez_images['step3'],
    },
    {
        title: '_t_Create a Deriv EZ real account._t_',
        image: deriv_ez_images['step4'],
    },
    {
        title: '_t_Fund your account._t_',
        image: deriv_ez_images['step5'],
    },
    {
        title: '_t_Start trading on the Deriv GO mobile app._t_',
        image: deriv_ez_images['step6'],
    },
]
