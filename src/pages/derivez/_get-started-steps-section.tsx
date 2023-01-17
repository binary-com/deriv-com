import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Localize } from 'components/localization'
import StepperView from 'components/custom/_stepper_view'
import { LocalizedLinkText } from 'components/elements'
import { TString } from 'types/generics'

const query = graphql`
    query {
        demo_step1: file(relativePath: { eq: "deriv-ez/real-step-1.png" }) {
            ...fadeIn
        }
        demo_step2: file(relativePath: { eq: "deriv-ez/real-step-2.png" }) {
            ...fadeIn
        }
        demo_step3: file(relativePath: { eq: "deriv-ez/demo-step-3.png" }) {
            ...fadeIn
        }
        demo_step4: file(relativePath: { eq: "deriv-ez/real-step-6.png" }) {
            ...fadeIn
        }
        real_step1: file(relativePath: { eq: "deriv-ez/real-step-1.png" }) {
            ...fadeIn
        }
        real_step2: file(relativePath: { eq: "deriv-ez/real-step-2.png" }) {
            ...fadeIn
        }
        real_step3: file(relativePath: { eq: "deriv-ez/real-step-3.png" }) {
            ...fadeIn
        }
        real_step4: file(relativePath: { eq: "deriv-ez/real-step-4.png" }) {
            ...fadeIn
        }
        real_step5: file(relativePath: { eq: "deriv-ez/real-step-5.png" }) {
            ...fadeIn
        }
        real_step6: file(relativePath: { eq: "deriv-ez/real-step-6.png" }) {
            ...fadeIn
        }
    }
`

type TProps = {
    is_demo?: boolean
}

const demo_real_step1_title: TString = '_t_Get the <0>Deriv GO</0> app._t_'
const demo_real_step1_alt: TString = '_t_Deriv GO trading app_t_'
const demo_step2_title: TString =
    '_t_Sign in to your Deriv account. If you don’t have one, sign up for free._t_'
const real_demo_step2_alt: TString = '_t_Deriv GO app create free demo account_t_'
const demo_step3_title: TString = '_t_Add a Deriv EZ demo account._t_'
const demo_step3_alt: TString = '_t_Deriv EZ demo account for trading_t_'
const demo_step4_title: TString = '_t_Start trading on the Deriv GO mobile app._t_'
const real_demo_step4_alt: TString = '_t_Candle chart trading_t_'
const real_step2_title: TString = '_t_Create or sign in to your demo Deriv account._t_'
const real_step3_title: TString = '_t_Create a Deriv real account._t_'
const real_step3_alt: TString = '_t_Currencies to trade in Deriv GO_t_'
const real_step4_title: TString = '_t_Create a Deriv EZ real account._t_'
const real_step4_alt: TString = '_t_CFD trading with Deriv EZ_t_'
const real_step5_title: TString = '_t_Fund your account._t_'
const real_step5_alt: TString = '_t_Transfer between your accounts’_t_'
const real_step6_title: TString = '_t_Start trading on the Deriv GO mobile app._t_'

const GetStartedStepsSection: React.FC<TProps> = ({ is_demo = false }) => {
    const data = useStaticQuery(query)

    const demo: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: (
                    <Localize
                        translate_text={demo_real_step1_title}
                        components={[
                            <LocalizedLinkText
                                key={0}
                                to="/deriv-go"
                                color="red"
                                weight="bold"
                                size="24px"
                            />,
                        ]}
                    />
                ),
                image: data['demo_step1'],
                alt: <Localize translate_text={demo_real_step1_alt} />,
            },
            {
                title: <Localize translate_text={demo_step2_title} />,
                image: data['demo_step2'],
                alt: <Localize translate_text={real_demo_step2_alt} />,
            },
            {
                title: <Localize translate_text={demo_step3_title} />,
                image: data['demo_step3'],
                alt: <Localize translate_text={demo_step3_alt} />,
            },
            {
                title: <Localize translate_text={demo_step4_title} />,
                image: data['demo_step4'],
                alt: <Localize translate_text={real_demo_step4_alt} />,
            },
        ],
        [data],
    )

    const real: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: (
                    <Localize
                        translate_text={demo_real_step1_title}
                        components={[
                            <LocalizedLinkText
                                key={0}
                                to="/deriv-go"
                                color="red"
                                weight="bold"
                                size="24px"
                            />,
                        ]}
                    />
                ),
                image: data['real_step1'],
                alt: <Localize translate_text={real_demo_step2_alt} />,
            },
            {
                title: <Localize translate_text={real_step2_title} />,
                image: data['real_step2'],
                alt: <Localize translate_text={real_demo_step2_alt} />,
            },
            {
                title: <Localize translate_text={real_step3_title} />,
                image: data['real_step3'],
                alt: <Localize translate_text={real_step3_alt} />,
            },
            {
                title: <Localize translate_text={real_step4_title} />,
                image: data['real_step4'],
                alt: <Localize translate_text={real_step4_alt} />,
            },
            {
                title: <Localize translate_text={real_step5_title} />,
                image: data['real_step5'],
                alt: <Localize translate_text={real_step5_alt} />,
            },
            {
                title: <Localize translate_text={real_step6_title} />,
                image: data['real_step6'],
                alt: <Localize translate_text={real_demo_step4_alt} />,
            },
        ],
        [data],
    )

    return <StepperView items={is_demo ? demo : real} />
}

export default GetStartedStepsSection
