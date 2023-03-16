import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { Localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'
import { LinkButton } from 'components/form'

type StepCommonType = {
    no_margin?: boolean
}

type StepType = StepCommonType & {
    current_step: string
    image_name: string
}

const query = graphql`
    query {
        step_1: file(relativePath: { eq: "dbot-video/dbot-step1.png" }) {
            ...fadeIn
        }
        step_2: file(relativePath: { eq: "dbot-video/dbot-step2.png" }) {
            ...fadeIn
        }
        step_3: file(relativePath: { eq: "dbot-video/dbot-step3.png" }) {
            ...fadeIn
        }
        step_4: file(relativePath: { eq: "dbot-video/dbot-step4.png" }) {
            ...fadeIn
        }
        step_5: file(relativePath: { eq: "dbot-video/dbot-step5.png" }) {
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
    }
`
const Tab = styled.div`
    width: 100%;
    margin-top: 2.4rem;
`
const TabsWrapper = styled.div`
    width: 40.7rem;
    margin-right: 2.6rem;

    div:first-child {
        margin-top: 0;
    }

    @media ${device.tabletL} {
        width: 80%;
        margin: 2rem 0 0;
    }
    @media ${device.mobileL} {
        width: 100%;
    }
`
const VideoWrapper = styled.div`
    max-width: 79.2rem;
    width: 100%;
`

const StepCommon = css<StepCommonType>`
    font-weight: 500;
    cursor: pointer;
    padding-left: 1.8rem;
    @media ${device.tabletL} {
        text-align: start;
        border: none;
        margin-top: ${(props) => (props.no_margin ? '0' : '2rem')};
    }
`
const Step = styled(Header)<StepType>`
    ${StepCommon}
    ${(props) =>
        props.current_step === props.image_name
            ? 'color: var(--color-black-3); border-left: 4px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 4px solid rgb(0, 0, 0, 0)'};
`
const GoToLiveDemo = styled(LinkButton)`
    border: 2px solid var(--color-red);
    font-weight: bold;
    line-height: 1.43;
    width: fit-content;
    margin-top: 4rem;

    @media ${device.tabletL} {
        max-width: 100%;
        margin: 4rem auto;
        font-size: 1.75rem;
    }
`
const GotoLiveWrapper = styled.div`
    margin-top: 4rem;

    @media ${device.tabletL} {
        margin: 4rem auto;
    }
`
const DtraderTabs = () => {
    const data = useStaticQuery(query)
    const [current_step, setStep] = React.useState('step_1')

    const clickHandler = (incoming_step: string) => {
        if (incoming_step === current_step) return
        setStep(incoming_step)
    }

    return (
        <Container>
            <TabsWrapper>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="start"
                        no_margin
                        image_name="step_1"
                        current_step={current_step}
                        onClick={() => clickHandler('step_1')}
                    >
                        <Localize translate_text="_t_1. Select your asset_t_" />
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="start"
                        image_name="step_2"
                        current_step={current_step}
                        onClick={() => clickHandler('step_2')}
                    >
                        <Localize translate_text="_t_2. Set purchase conditions_t_" />
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="start"
                        image_name="step_3"
                        current_step={current_step}
                        onClick={() => clickHandler('step_3')}
                    >
                        <Localize translate_text="_t_3. Set restart conditions_t_" />
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="start"
                        image_name="step_4"
                        current_step={current_step}
                        onClick={() => clickHandler('step_4')}
                    >
                        <Localize translate_text="_t_4. Run bot_t_" />
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="start"
                        image_name="step_5"
                        current_step={current_step}
                        onClick={() => clickHandler('step_5')}
                    >
                        <Localize translate_text="_t_5. Check profit_t_" />
                    </Step>
                </Tab>
                <GotoLiveWrapper>
                    <GoToLiveDemo
                        secondary
                        external
                        type="dbot"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        <Localize translate_text="_t_Go to live demo_t_" />
                    </GoToLiveDemo>
                </GotoLiveWrapper>
            </TabsWrapper>
            <VideoWrapper>
                <QueryImage
                    data={data[current_step]}
                    alt={`${current_step} in DBot trading`}
                    width="100%"
                />
            </VideoWrapper>
        </Container>
    )
}
export default DtraderTabs
