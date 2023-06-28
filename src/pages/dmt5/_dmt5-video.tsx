import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Localize, localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'

type StepProps = {
    image_name?: string
    current_step?: string
    no_margin?: boolean
}

const query = graphql`
    query {
        step_1: file(relativePath: { eq: "dmt5-video/dmt-5-step-1.png" }) {
            ...fadeIn
        }
        step_2: file(relativePath: { eq: "dmt5-video/dmt-5-step-2.png" }) {
            ...fadeIn
        }
        step_3: file(relativePath: { eq: "dmt5-video/dmt-5-step-3.png" }) {
            ...fadeIn
        }
    }
`

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4rem;
    align-items: flex-start;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
    }
`
const Tab = styled.div`
    width: 100%;
    margin-top: 2.4rem;
`
const TabsWrapper = styled.div`
    max-width: 40.7rem;
    width: 36%;
    margin-top: 6rem;

    div:first-child {
        margin-top: 0;
    }

    @media ${device.tabletL} {
        width: 100%;
    }
`
const VideoWrapper = styled.div`
    max-width: 78.4rem;
    width: 64%;

    @media ${device.tabletL} {
        width: 100%;
    }
`
const Step = styled(Header)<StepProps>`
    font-weight: 500;
    cursor: pointer;
    padding-left: 1.8rem;
    ${(props) =>
        props.image_name === props.current_step
            ? 'color: var(--color-black-3); border-left: 4px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 4px solid rgb(0, 0, 0, 0)'};

    @media ${device.tabletL} {
        text-align: start;
        border: none;
        margin-top: ${(props) => (props.no_margin ? '0' : '2rem')};
    }
`

const Dmt5Video = () => {
    const data = useStaticQuery(query)
    const [current_step, setStep] = React.useState('step_1')
    const clickHandler = (incoming_step) => {
        if (incoming_step == current_step) return
        setStep(incoming_step)
    }

    return (
        <Container>
            <TabsWrapper>
                <Tab>
                    <Step
                        as="h4"
                        lh="1.5"
                        align="start"
                        no_margin
                        image_name="step_1"
                        current_step={current_step}
                        onClick={() => clickHandler('step_1')}
                    >
                        <Localize translate_text="_t_1. Sign up with Deriv_t_" />
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        lh="1.5"
                        align="start"
                        no_margin
                        image_name="step_2"
                        current_step={current_step}
                        onClick={() => clickHandler('step_2')}
                    >
                        <Localize translate_text="_t_2. Create a DMT5 account_t_" />
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        lh="1.5"
                        align="start"
                        no_margin
                        image_name="step_3"
                        current_step={current_step}
                        onClick={() => clickHandler('step_3')}
                    >
                        <Localize translate_text="_t_3. Fund your account_t_" />
                    </Step>
                </Tab>
            </TabsWrapper>
            <VideoWrapper>
                <QueryImage
                    data={data[current_step]}
                    alt={localize(`_t_DMT5 - ${current_step}_t_`)}
                    width="100%"
                />
            </VideoWrapper>
        </Container>
    )
}

export default Dmt5Video
