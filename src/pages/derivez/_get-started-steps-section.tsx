import React, { useMemo } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Localize } from 'components/localization'
import StepperView from 'features/components/molecules/stepper-view'
import { LocalizedLinkText } from 'components/elements'
import useBreakpoints from 'components/hooks/use-breakpoints'

type TProps = {
    is_demo?: boolean
    chosen_tab: string
}

const deriv_ez_images = {
    step1: (
        <StaticImage
            src="../../images/common/deriv-ez/step-1.png"
            alt="Deriv GO trading app"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step2: (
        <StaticImage
            src="../../images/common/deriv-ez/step-2.png"
            alt="Deriv GO app create free demo account"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step3: (
        <StaticImage
            src="../../images/common/deriv-ez/step-3.png"
            alt="Deriv EZ demo account for trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step4: (
        <StaticImage
            src="../../images/common/deriv-ez/step-4.png"
            alt="Candle chart trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step5: (
        <StaticImage
            src="../../images/common/deriv-ez/step-5.png"
            alt="Transfer between your accounts"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
    step6: (
        <StaticImage
            src="../../images/common/deriv-ez/step-6.png"
            alt="Candle chart trading"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={30}
            objectFit="contain"
            placeholder="none"
        />
    ),
}

const GetStartedStepsSection: React.FC<TProps> = ({ is_demo = false, chosen_tab }) => {
    const { is_mobile } = useBreakpoints()

    const demo: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: (
                    <Localize
                        translate_text={'_t_Get the <0>Deriv GO</0> app._t_'}
                        components={[
                            <LocalizedLinkText
                                key={0}
                                to="/deriv-go"
                                color="red"
                                weight="bold"
                                size={is_mobile ? '18px' : '24px'}
                            />,
                        ]}
                    />
                ),
                image: (
                    <StaticImage
                        src="../../images/common/deriv-ez/real-step-1.png"
                        alt="Deriv GO trading app"
                        loading="eager"
                        formats={['avif', 'webp', 'auto']}
                        quality={30}
                        objectFit="contain"
                        placeholder="none"
                    />
                ),
            },
            {
                title: '_t_Sign in to your Deriv account. If you don’t have one, sign up for free._t_',
                image: deriv_ez_images['step2'],
            },
            {
                title: '_t_Add a Deriv EZ demo account._t_',
                image: deriv_ez_images['step3'],
            },
            {
                title: '_t_Start trading on the Deriv GO mobile app._t_',
                image: deriv_ez_images['step4'],
            },
        ],
        [is_mobile],
    )

    const real: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: (
                    <Localize
                        translate_text={'_t_Get the <0>Deriv GO</0> app._t_'}
                        components={[
                            <LocalizedLinkText
                                key={0}
                                to="/deriv-go"
                                color="red"
                                weight="bold"
                                size={is_mobile ? '18px' : '24px'}
                            />,
                        ]}
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
        ],
        [is_mobile],
    )
    return <StepperView chosen_tab={chosen_tab} items={is_demo ? demo : real} />
}

export default GetStartedStepsSection
