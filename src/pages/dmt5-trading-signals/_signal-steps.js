import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Tabs from '../trade-types/components/_side-tab'
import { Show } from '../../components/containers'
import { Localize } from 'components/localization'
import { QueryImage, LocalizedLinkText } from 'components/elements'
import device from 'themes/device.js'

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
                translate_text="<0>Note:</0> For a wider selection of signal providers for Deriv, go to <1>MQL5 showcase page</1> and search for <0>Deriv</0> under the <0>Broker</0> server field."
                components={[
                    <strong key={0} />,
                    <LocalizedLinkText
                        external="true"
                        to="https://www.mql5.com/en/signals"
                        color="red"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={16}
                        key={1}
                    />,
                ]}
            />
        ),
    },
    provider: {
        header: <Localize translate_text="How to register as a signals provider" />,
        step_one_header: <Localize translate_text="1. Create signal" />,
        step_one_text: (
            <Localize
                translate_text="Go to the <0>MQL5 signals showcase</0> page and click on the Create signal button."
                components={[
                    <LocalizedLinkText
                        external="true"
                        to="https://www.mql5.com/en/signals"
                        color="red"
                        size={16}
                        key={0}
                    />,
                ]}
            />
        ),
        step_two_header: <Localize translate_text="2. Fill the broker field" />,
        step_two_text: (
            <Localize
                translate_text="Complete the form with your Deriv MT5 account credentials. For the Broker field, add <0>Deriv-Server</0> as your broker or <0>Deriv-Demo</0> if your signal is for demo accounts only."
                components={[<strong key={0} />]}
            />
        ),
        step_three_header: <Localize translate_text="3. Complete the registration" />,
        step_three_text: (
            <Localize translate_text="Click Save and add a description to complete the registration." />
        ),
        notice: (
            <Localize
                translate_text="<0>Note:</0> You need to upgrade your MQL5 account to seller status to be able to add a signal. If you’ve not upgraded yet, <1>follow the steps on this page</1> to register as a seller."
                components={[
                    <strong key={0} />,
                    <LocalizedLinkText
                        external="true"
                        to="https://www.metatrader5.com/en/terminal/help/signals/signal_provider"
                        color="red"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={16}
                        key={1}
                    />,
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

const SignalSteps = (active_tab) => {
    const data = useStaticQuery(query)

    return (
        <>
            {active_tab.active_tab === 'signal-subscriber' && (
                <Container>
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
                            <Show.Desktop min_width="992">
                                <StyledQueryImage
                                    data={data['subscriber_step_1']}
                                    alt="Trade types option market"
                                />
                            </Show.Desktop>
                            <Show.Mobile>
                                <StyledQueryImage
                                    data={data['subscriber_step_1_mobile']}
                                    alt="Trade types option market"
                                />
                            </Show.Mobile>
                        </Tabs.Panel>
                        <Tabs.Panel
                            label={content.subscriber.step_two_header}
                            description={content.subscriber.step_two_text}
                        >
                            <Show.Desktop min_width="992">
                                <StyledQueryImage
                                    data={data['subscriber_step_2']}
                                    alt="Trade types option trade type open"
                                />
                            </Show.Desktop>
                            <Show.Mobile>
                                <StyledQueryImage
                                    data={data['subscriber_step_2_mobile']}
                                    alt="Trade types option trade type open"
                                />
                            </Show.Mobile>
                        </Tabs.Panel>
                        <Tabs.Panel
                            label={content.subscriber.step_three_header}
                            description={content.subscriber.step_three_text}
                        >
                            <Show.Desktop min_width="992">
                                <StyledQueryImage
                                    data={data['subscriber_step_3']}
                                    alt="Trade types option duration"
                                />
                            </Show.Desktop>
                            <Show.Mobile>
                                <StyledQueryImage
                                    data={data['subscriber_step_3_mobile']}
                                    alt="Trade types option duration"
                                />
                            </Show.Mobile>
                        </Tabs.Panel>
                    </StyledTabs>
                </Container>
            )}
            {active_tab.active_tab === 'signal-provider' && (
                <Container>
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
                            <Show.Desktop min_width="992">
                                <StyledQueryImage
                                    data={data['provider_step_1']}
                                    alt="Trade types option market"
                                />
                            </Show.Desktop>
                            <Show.Mobile>
                                <StyledQueryImage
                                    data={data['provider_step_1_mobile']}
                                    alt="Trade types option market"
                                />
                            </Show.Mobile>
                        </Tabs.Panel>
                        <Tabs.Panel
                            label={content.provider.step_two_header}
                            description={content.provider.step_two_text}
                        >
                            <Show.Desktop min_width="992">
                                <StyledQueryImage
                                    data={data['provider_step_2']}
                                    alt="Trade types option trade type open"
                                />
                            </Show.Desktop>
                            <Show.Mobile>
                                <StyledQueryImage
                                    data={data['provider_step_2_mobile']}
                                    alt="Trade types option trade type open"
                                />
                            </Show.Mobile>
                        </Tabs.Panel>
                        <Tabs.Panel
                            label={content.provider.step_three_header}
                            description={content.provider.step_three_text}
                        >
                            <Show.Desktop min_width="992">
                                <StyledQueryImage
                                    data={data['provider_step_3']}
                                    alt="Trade types option duration"
                                />
                            </Show.Desktop>
                            <Show.Mobile>
                                <StyledQueryImage
                                    data={data['provider_step_3_mobile']}
                                    alt="Trade types option duration"
                                />
                            </Show.Mobile>
                        </Tabs.Panel>
                    </StyledTabs>
                </Container>
            )}
        </>
    )
}

export default SignalSteps
