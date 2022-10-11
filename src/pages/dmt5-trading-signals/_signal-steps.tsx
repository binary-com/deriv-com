import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Tabs from '../trade-types/components/_tabs'
import { Mobile, Desktop } from '../../components/containers'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { Localize } from 'components/localization'
import { QueryImage, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'

const Container = styled.section`
    width: 100%;
    max-width: 100rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 4rem;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        margin: 0;
    }
`
const content = {
    subscriber: {
        header: <Localize translate_text="How to subscribe to an MT5 signal" />,
        step_one_header: <Localize translate_text="1. Click on the Signals tab" />,
        step_one_text: (
            <Localize translate_text="From your Deriv MT5 trading terminal, click on the Signals tab to view the list of signal providers." />
        ),
        step_two_header: <Localize translate_text="2. Subscribe to a signal provider" />,
        step_two_text: (
            <Localize translate_text="Select the signal provider you prefer and click the Subscribe button." />
        ),
        step_three_header: <Localize translate_text="3. Configure the parameters" />,
        step_three_text: (
            <Localize translate_text="Configure your trading and risk management parameters. Then click OK to complete the process." />
        ),
        notice: (
            <Localize
                components={[
                    <strong key={0} />,
                    <LocalizedLinkText
                        external
                        to="https://www.mql5.com/en/signals"
                        color="red"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={16}
                        key={1}
                    />,
                ]}
                translate_text="<0>Note:</0> For a wider selection of signal providers for Deriv, go to <1>MQL5 showcase page</1> and search for <0>Deriv</0> under the <0>Broker</0> server field."
            />
        ),
    },
    provider: {
        header: <Localize translate_text="How to register as a signals provider" />,
        step_one_header: <Localize translate_text="1.  Head to MQL5.com" />,
        step_one_text: (
            <Localize
                translate_text="In the <0>MQL5 signals showcase page</0>, click the Create signal button."
                components={[
                    <LocalizedLinkText
                        external
                        to="https://www.mql5.com/en/signals"
                        color="red"
                        target="_blank"
                        size={16}
                        key={0}
                    />,
                ]}
            />
        ),
        step_two_header: <Localize translate_text="2. Fill the broker field" />,
        step_two_text: (
            <Localize
                translate_text="Complete the form with your Deriv MT5 account credentials. In the <0>Broker</0> field, enter your account server name: <1/> <0>- Deriv-Demo</0> if your signal is for demo accounts only <1/> <0>- Deriv-Server</0> or <0>Deriv-Server-02</0> if your signal is for real accounts only <1/>(You can find the account server name on your <2>Deriv MT5 dashboard</2>.)"
                components={[
                    <strong key={0} />,
                    <br key={1} />,
                    <LocalizedLinkText
                        external
                        to="https://app.deriv.com/mt5"
                        color="red"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={16}
                        key={2}
                    />,
                ]}
            />
        ),
        step_three_header: <Localize translate_text="3. Fill in your details" />,
        step_three_text: (
            <Localize translate_text="Add a description and click Save to complete your registration." />
        ),
        notice: (
            <Localize
                translate_text="<1>Note:</1> You need to upgrade your MQL5 account to seller status to be able to add a signal. If you’ve not upgraded yet, <0>follow the steps on this page</0> to register as a seller."
                components={[
                    <LocalizedLinkText
                        external
                        to="https://www.metatrader5.com/en/terminal/help/signals/signal_provider"
                        color="red"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={16}
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        ),
    },
}

const StyledTabs = styled(Tabs)`
    .side-tab__wrapper {
        max-width: 380px;
        width: 100%;
    }
    .side-tab__desktop {
        margin-right: 2.4rem;
        max-width: 588px;
    }

    @media ${device.tabletL} {
        .side-tab__wrapper {
            max-width: 100%;
            margin-left: 0;
        }
        .side-tab__list {
            margin-left: -10px;
        }
        .side-tab__label,
        .side-tab__description {
            font-size: 16px;
        }
        .side-tab__button {
            padding-left: 12px;
            margin-bottom: 18px;
            margin-top: 24px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
`

const StyledQueryImage = styled(QueryImage)`
    .gatsby-image-wrapper {
        max-width: 588px;
        max-height: 401px;
    }
`

const query = graphql`
    query {
        subscriber_step_1: file(relativePath: { eq: "dmt5-signals/subscriber-step1.png" }) {
            ...fadeIn
        }
        subscriber_step_2: file(relativePath: { eq: "dmt5-signals/subscriber-step2.png" }) {
            ...fadeIn
        }
        subscriber_step_3: file(relativePath: { eq: "dmt5-signals/subscriber-step3.png" }) {
            ...fadeIn
        }
        provider_step_1: file(relativePath: { eq: "dmt5-signals/provider-step1.png" }) {
            ...fadeIn
        }
        provider_step_2: file(relativePath: { eq: "dmt5-signals/provider-step2.png" }) {
            ...fadeIn
        }
        provider_step_3: file(relativePath: { eq: "dmt5-signals/provider-step3.png" }) {
            ...fadeIn
        }
        subscriber_step_1_mobile: file(
            relativePath: { eq: "dmt5-signals/subscriber-step1-mobile.png" }
        ) {
            ...fadeIn
        }
        subscriber_step_2_mobile: file(
            relativePath: { eq: "dmt5-signals/subscriber-step2-mobile.png" }
        ) {
            ...fadeIn
        }
        subscriber_step_3_mobile: file(
            relativePath: { eq: "dmt5-signals/subscriber-step3-mobile.png" }
        ) {
            ...fadeIn
        }
        provider_step_1_mobile: file(
            relativePath: { eq: "dmt5-signals/provider-step1-mobile.png" }
        ) {
            ...fadeIn
        }
        provider_step_2_mobile: file(
            relativePath: { eq: "dmt5-signals/provider-step2-mobile.png" }
        ) {
            ...fadeIn
        }
        provider_step_3_mobile: file(
            relativePath: { eq: "dmt5-signals/provider-step3-mobile.png" }
        ) {
            ...fadeIn
        }
    }
`

type SignalStepsProps = {
    active_tab: 'signal-subscriber' | 'signal-provider'
}

const SignalSteps = ({ active_tab }: SignalStepsProps) => {
    const data = useStaticQuery(query)
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load
    const [signal_subscriber, signal_provider] = [
        active_tab === 'signal-subscriber',
        active_tab === 'signal-provider',
    ]

    return (
        <>
            {signal_subscriber && (
                <Container>
                    {is_mounted && (
                        <>
                            <StyledTabs
                                is_reverse
                                max_width={'tabletL'}
                                has_notice
                                notice_content={content.subscriber.notice}
                            >
                                <Tabs.Panel
                                    label={content.subscriber.step_one_header}
                                    description={content.subscriber.step_one_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['subscriber_step_1']}
                                            alt="Trade types option market"
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['subscriber_step_1_mobile']}
                                            alt="Trade types option market"
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={content.subscriber.step_two_header}
                                    description={content.subscriber.step_two_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['subscriber_step_2']}
                                            alt="Trade types option trade type open"
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['subscriber_step_2_mobile']}
                                            alt="Trade types option trade type open"
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={content.subscriber.step_three_header}
                                    description={content.subscriber.step_three_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['subscriber_step_3']}
                                            alt="Trade types option duration"
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['subscriber_step_3_mobile']}
                                            alt="Trade types option duration"
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                            </StyledTabs>
                        </>
                    )}
                </Container>
            )}
            {signal_provider && (
                <Container>
                    {is_mounted && (
                        <>
                            <StyledTabs
                                is_reverse
                                max_width={'tabletL'}
                                has_notice
                                notice_content={content.provider.notice}
                            >
                                <Tabs.Panel
                                    label={content.provider.step_one_header}
                                    description={content.provider.step_one_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['provider_step_1']}
                                            alt="Trade types option market"
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['provider_step_1_mobile']}
                                            alt="Trade types option market"
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={content.provider.step_two_header}
                                    description={content.provider.step_two_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['provider_step_2']}
                                            alt="Trade types option trade type open"
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['provider_step_2_mobile']}
                                            alt="Trade types option trade type open"
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={content.provider.step_three_header}
                                    description={content.provider.step_three_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['provider_step_3']}
                                            alt="Trade types option duration"
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['provider_step_3_mobile']}
                                            alt="Trade types option duration"
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                            </StyledTabs>
                        </>
                    )}
                </Container>
            )}
        </>
    )
}

export default SignalSteps
