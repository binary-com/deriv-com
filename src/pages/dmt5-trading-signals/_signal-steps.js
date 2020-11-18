import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Tabs from '../trade-types/components/_side-tab'
import { Localize } from 'components/localization'
import { QueryImage } from 'components/elements'
import device from 'themes/device.js'

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
    }
`

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 4rem;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        margin: 0 0;
    }
`
const content = {
    subscriber: {
        header: <Localize translate_text="How to subscribe to an MT5 signal" />,
        step_one_header: <Localize translate_text="1. Click on signals tab" />,
        step_one_text: (
            <Localize translate_text="From your Deriv MT5 trading terminal, click on the Signals tab to view the list of signal providers." />
        ),
        step_two_header: <Localize translate_text="2. Subscribe on signals provider" />,
        step_two_text: (
            <Localize translate_text="Select the signal provider you prefer and click the Subscribe button." />
        ),
        step_three_header: <Localize translate_text="3. Configure the parameters" />,
        step_three_text: (
            <Localize
                translate_text="Configure your trading and risk management parameters. Then click <0>OK</0> to complete the process."
                components={[<strong key={0} />]}
            />
        ),
    },
    provider: {
        header: <Localize translate_text="How to register as a signals provider" />,
        step_one_header: <Localize translate_text="1. Create signal" />,
        step_one_text: (
            <Localize translate_text="Go to the MQL5 signals showcase page and click on the Create signal button." />
        ),
        step_two_header: <Localize translate_text="2. Choose broker field" />,
        step_two_text: (
            <Localize translate_text="Complete the form with your Deriv MT5 account credentials. For the Broker field, add Deriv-Server as your broker or Deriv-Demo if your signal is for demo accounts only." />
        ),
        step_three_header: <Localize translate_text="3. Complete the registration" />,
        step_three_text: (
            <Localize
                translate_text="Click <0>OK</0> and add a description to complete the registration"
                components={[<strong key={0} />]}
            />
        ),
    },
}

// const Tab = styled.div`
//     width: 100%;
//     margin-top: 2.4rem;
// `
// const TabsWrapper = styled.div`
//     width: 50.7rem;
//     margin-left: 4rem;

//     div:first-child {
//         margin-top: 0;
//     }

//     @media ${device.tabletL} {
//         width: 90%;
//         margin: 2rem 0 0;
//         max-width: 425px;
//     }
//     @media ${device.mobileL} {
//         width: 100%;
//     }
// `
// const VideoWrapper = styled.div`
//     max-width: 56rem;
//     width: 100%;

//     @media ${device.tabletL} {
//         margin-top: 24px;
//     }
// `
// const StepCommon = css`
//     cursor: pointer;
//     padding-left: 1.8rem;
//     ${(props) =>
//         props.current_step === props.image_name
//             ? 'color: var(--color-black-3); border-left: 5px solid var(--color-red)'
//             : 'opacity: 0.2; border-left: 5px solid rgb(0, 0, 0, 0.2)'};

//     @media ${device.tabletL} {
//         font-size: 16px;
//         text-align: left;
//         ${(props) =>
//             props.current_step === props.image_name
//                 ? 'color: var(--color-black-3); border-left: 4px solid var(--color-red)'
//                 : 'opacity: 0.2; border-left: 4px solid rgb(0, 0, 0, 0.2)'};
//     }
// `
// const StepHeader = styled(Header)`
//     ${StepCommon}
//     font-weight: bold;
//     font-size: 2.4rem;
// `
// const StepText = styled(Text)`
//     ${StepCommon}
//     font-size: 2.4rem;
//     padding-top: 0.8rem;

//     @media ${device.tabletL} {
//         padding-top: 8px;
//         margin: 0;
//     }
// `

const StyledTabs = styled(Tabs)`
    .side-tab__list {
        max-width: 500px;
        width: 100%;
    }
    .side-tab__label,
    .side-tab__description {
        font-size: 24px;
    }
    .side-tab__desktop {
        max-width: 56rem;
        margin-right: 2rem;
    }

    @media ${device.tabletL} {
        .side-tab__list {
            max-width: 100%;
            margin-left: 0;
        }
        .side-tab__label,
        .side-tab__description {
            font-size: 16px;
        }
        .side-tab__mobile {
            max-width: 500px;
        }
    }
`
const StyledPanel = styled(Tabs.Panel)``

const SignalSteps = (active_tab) => {
    const data = useStaticQuery(query)
    // const [current_step, setStep] = React.useState('step_1')
    // const clickHandler = (incoming_step) => {
    //     if (incoming_step == current_step) return
    //     setStep(incoming_step)
    // }
    return (
        <>
            {active_tab.active_tab === 'signal-subscriber' && (
                <Container>
                    <StyledTabs is_reverse max_width={'tabletL'}>
                        <StyledPanel
                            label={content.subscriber.step_one_header}
                            description={content.subscriber.step_one_text}
                        >
                            <QueryImage
                                data={data['subscriber_step_1']}
                                alt="Trade types option market"
                            />
                        </StyledPanel>
                        <StyledPanel
                            label={content.subscriber.step_two_header}
                            description={content.subscriber.step_two_text}
                        >
                            <QueryImage
                                data={data['subscriber_step_2']}
                                alt="Trade types option trade type open"
                            />
                        </StyledPanel>
                        <StyledPanel
                            label={content.subscriber.step_three_header}
                            description={content.subscriber.step_three_text}
                        >
                            <QueryImage
                                data={data['subscriber_step_3']}
                                alt="Trade types option duration"
                            />
                        </StyledPanel>
                    </StyledTabs>
                </Container>
            )}
            {active_tab.active_tab === 'signal-provider' && (
                <Container>
                    <StyledTabs is_reverse max_width={'tabletL'}>
                        <StyledPanel
                            label={content.provider.step_one_header}
                            description={content.provider.step_one_text}
                        >
                            <QueryImage
                                data={data['provider_step_1']}
                                alt="Trade types option market"
                            />
                        </StyledPanel>
                        <StyledPanel
                            label={content.provider.step_two_header}
                            description={content.provider.step_two_text}
                        >
                            <QueryImage
                                data={data['provider_step_2']}
                                alt="Trade types option trade type open"
                            />
                        </StyledPanel>
                        <StyledPanel
                            label={content.provider.step_three_header}
                            description={content.provider.step_three_text}
                        >
                            <QueryImage
                                data={data['provider_step_3']}
                                alt="Trade types option duration"
                            />
                        </StyledPanel>
                    </StyledTabs>
                </Container>
            )}
        </>
    )
}

export default SignalSteps
