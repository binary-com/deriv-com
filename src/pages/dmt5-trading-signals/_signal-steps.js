import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { localize } from 'components/localization'
import { Header, QueryImage, Text } from 'components/elements'
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
        margin: 0 16px;
    }
`
const Tab = styled.div`
    width: 100%;
    margin-top: 2.4rem;
`
const TabsWrapper = styled.div`
    width: 50.7rem;
    margin-left: 4rem;

    div:first-child {
        margin-top: 0;
    }

    @media ${device.tabletL} {
        width: 90%;
        margin: 2rem 0 0;
        max-width: 425px;
    }
    @media ${device.mobileL} {
        width: 100%;
    }
`
const VideoWrapper = styled.div`
    max-width: 56rem;
    width: 100%;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`
const StepCommon = css`
    cursor: pointer;
    padding-left: 1.8rem;
    ${(props) =>
        props.current_step === props.image_name
            ? 'color: var(--color-black-3); border-left: 5px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 5px solid rgb(0, 0, 0, 0.2)'};

    @media ${device.tabletL} {
        font-size: 16px;
        text-align: left;
        ${(props) =>
            props.current_step === props.image_name
                ? 'color: var(--color-black-3); border-left: 4px solid var(--color-red)'
                : 'opacity: 0.2; border-left: 4px solid rgb(0, 0, 0, 0.2)'};
    }
`
const StepHeader = styled(Header)`
    ${StepCommon}
    font-weight: bold;
    font-size: 2.4rem;
`
const StepText = styled(Text)`
    ${StepCommon}
    font-size: 2.4rem;
    padding-top: 0.8rem;

    @media ${device.tabletL} {
        padding-top: 8px;
        margin: 0;
    }
`

const SignalSteps = (is_provider) => {
    const data = useStaticQuery(query)
    const [current_step, setStep] = React.useState('step_1')
    const clickHandler = (incoming_step) => {
        if (incoming_step == current_step) return
        setStep(incoming_step)
    }
    return (
        <Container>
            <VideoWrapper>
                <QueryImage
                    data={
                        is_provider
                            ? data[`provider_${current_step}`]
                            : data[`subscriber_${current_step}`]
                    }
                    alt={localize(`DBot - ${current_step}`)}
                    width="100%"
                />
            </VideoWrapper>
            <TabsWrapper>
                <Tab>
                    <StepHeader
                        as="h4"
                        lh="1.5"
                        align="left"
                        no_margin
                        image_name="step_1"
                        current_step={current_step}
                        onClick={() => clickHandler('step_1')}
                    >
                        {localize('1. Click on signals tab')}
                    </StepHeader>
                    <StepText
                        image_name="step_1"
                        current_step={current_step}
                        onClick={() => clickHandler('step_1')}
                    >
                        {localize(
                            'From your Deriv MT5 trading terminal, click on the Signals tab to view the list of signal providers.',
                        )}
                    </StepText>
                </Tab>
                <Tab>
                    <StepHeader
                        as="h4"
                        lh="1.5"
                        align="left"
                        image_name="step_2"
                        current_step={current_step}
                        onClick={() => clickHandler('step_2')}
                    >
                        {localize('2. Subscribe on signals provider')}
                    </StepHeader>
                    <StepText
                        image_name="step_2"
                        current_step={current_step}
                        onClick={() => clickHandler('step_2')}
                    >
                        {localize(
                            'Select the signal provider you prefer and click the Subscribe button.',
                        )}
                    </StepText>
                </Tab>
                <Tab>
                    <StepHeader
                        as="h4"
                        lh="1.5"
                        align="left"
                        image_name="step_3"
                        current_step={current_step}
                        onClick={() => clickHandler('step_3')}
                    >
                        {localize('3. Configure the parameters')}
                    </StepHeader>
                    <StepText
                        image_name="step_3"
                        current_step={current_step}
                        onClick={() => clickHandler('step_3')}
                    >
                        {localize(
                            'Configure your trading and risk management parameters. Then click Ok to complete the process.',
                        )}
                    </StepText>
                </Tab>
            </TabsWrapper>
        </Container>
    )
}

SignalSteps.propTypes = {
    is_provider: PropTypes.bool,
}

export default SignalSteps
