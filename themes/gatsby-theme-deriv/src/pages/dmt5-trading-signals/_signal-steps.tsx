import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Tabs from '../trade-types/components/_tabs'
import { Mobile, Desktop } from '../../components/containers'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { QueryImage, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
import { TString } from 'types/generics'
import { localize } from 'components/localization'
import useBuildVariant from 'features/hooks/use-build-variant'

type TContent = {
    header: TString
    step_one_header: TString
    step_one_text: TString
    step_one_text_components?: React.ReactElement[]
    step_one_text_eu?: TString
    step_two_header: TString
    step_two_text: TString
    step_two_text_components?: React.ReactElement[]
    step_three_header: TString
    step_three_text: TString
    notice: TString
    notice_components: React.ReactElement[]
}

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

const subscriber: TContent = {
    header: '_t_How to subscribe to an MT5 signal_t_',
    step_one_header: '_t_1. Click on the Signals tab_t_',
    step_one_text:
        '_t_From your Deriv MT5 trading terminal, click on the Signals tab to view the list of signal providers._t_',
    step_one_text_eu:
        '_t_Go to your MT5 desktop app terminal and click on the Signals tab to view the list of signal providers. Not available on the web version._t_',
    step_two_header: '_t_2. Subscribe to a signal provider_t_',
    step_two_text: '_t_Select the signal provider you prefer and click the Subscribe button._t_',
    step_three_header: '_t_3. Configure the parameters_t_',
    step_three_text:
        '_t_Configure your trading and risk management parameters. Then click OK to complete the process._t_',
    notice: '_t_<0>Note:</0> For a wider selection of signal providers for Deriv, go to <1>MQL5 showcase page</1> and search for <0>Deriv</0> under the <0>Broker</0> server field._t_',
    notice_components: [
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
    ],
}

const provider: TContent = {
    header: '_t_How to register as a signals provider_t_',
    step_one_header: '_t_1.  Head to MQL5.com_t_',
    step_one_text:
        '_t_In the <0>MQL5 signals showcase page</0>, click the Create signal button._t_',
    step_one_text_components: [
        <LocalizedLinkText
            external
            to="https://www.mql5.com/en/signals"
            color="red"
            target="_blank"
            size={16}
            key={0}
        />,
    ],
    step_two_header: '_t_2. Fill the broker field_t_',
    step_two_text:
        '_t_Complete the form with your Deriv MT5 account credentials. In the <0>Broker</0> field, enter your account server name: <1/> <0>- Deriv-Demo</0> if your signal is for demo accounts only <1/> <0>- Deriv-Server</0> or <0>Deriv-Server-02</0> if your signal is for real accounts only <1/>(You can find the account server name on your <2>Deriv MT5 dashboard</2>.)_t_',
    step_two_text_components: [
        <strong key={0} />,
        <br key={1} />,
        <LocalizedLinkText
            external
            to="https://app.deriv.com/"
            color="red"
            target="_blank"
            rel="noopener noreferrer"
            size={16}
            key={2}
        />,
    ],
    step_three_header: '_t_3. Fill in your details_t_',
    step_three_text: '_t_Add a description and click Save to complete your registration._t_',
    notice: '_t_<1>Note:</1> You need to upgrade your MQL5 account to seller status to be able to add a signal. If you’ve not upgraded yet, <0>follow the steps on this page</0> to register as a seller._t_',
    notice_components: [
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
    ],
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
            font-size: 14px;
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
    const { region } = useBuildVariant()
    const data = useStaticQuery(query)
    const [is_mounted] = usePageLoaded() // needed to fix tab highlighting not being rerendered during first load
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
                                max_width="tabletL"
                                has_notice
                                notice_content={subscriber.notice}
                                notice_content_components={subscriber.notice_components}
                            >
                                <Tabs.Panel
                                    label={subscriber.step_one_header}
                                    description={
                                        region === "eu"
                                            ? subscriber.step_one_text_eu
                                            : subscriber.step_one_text
                                    }
                                    description_components={subscriber.step_one_text_components}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['subscriber_step_1']}
                                            alt={localize('_t_Trade types option market_t_')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['subscriber_step_1_mobile']}
                                            alt={localize('_t_Trade types option market_t_')}
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={subscriber.step_two_header}
                                    description={subscriber.step_two_text}
                                    description_components={subscriber.step_two_text_components}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['subscriber_step_2']}
                                            alt={localize(
                                                '_t_Trade types option trade type open_t_',
                                            )}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['subscriber_step_2_mobile']}
                                            alt={localize(
                                                '_t_Trade types option trade type open_t_',
                                            )}
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={subscriber.step_three_header}
                                    description={subscriber.step_three_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['subscriber_step_3']}
                                            alt={localize('_t_Trade types option duration_t_')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['subscriber_step_3_mobile']}
                                            alt={localize('_t_Trade types option duration_t_')}
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
                                max_width="tabletL"
                                has_notice
                                notice_content={provider.notice}
                                notice_content_components={provider.notice_components}
                            >
                                <Tabs.Panel
                                    label={provider.step_one_header}
                                    description={provider.step_one_text}
                                    description_components={provider.step_one_text_components}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['provider_step_1']}
                                            alt={localize('_t_Trade types option market_t_')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['provider_step_1_mobile']}
                                            alt={localize('_t_Trade types option market_t_')}
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={provider.step_two_header}
                                    description={provider.step_two_text}
                                    description_components={provider.step_two_text_components}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['provider_step_2']}
                                            alt={localize(
                                                '_t_Trade types option trade type open_t_',
                                            )}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['provider_step_2_mobile']}
                                            alt={localize(
                                                '_t_Trade types option trade type open_t_',
                                            )}
                                        />
                                    </Mobile>
                                </Tabs.Panel>
                                <Tabs.Panel
                                    label={provider.step_three_header}
                                    description={provider.step_three_text}
                                >
                                    <Desktop>
                                        <StyledQueryImage
                                            data={data['provider_step_3']}
                                            alt={localize('_t_Trade types option duration_t_')}
                                        />
                                    </Desktop>
                                    <Mobile>
                                        <StyledQueryImage
                                            data={data['provider_step_3_mobile']}
                                            alt={localize('_t_Trade types option duration_t_')}
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
