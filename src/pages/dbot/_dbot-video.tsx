import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'
import { LinkButton } from 'components/form'

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

type StepCommonType = {
    no_margin: string
}

const StepCommon = css<StepCommonType>`
    font-weight: 500;
    cursor: pointer;
    padding-left: 1.8rem;
    @media ${device.tabletL} {
        text-align: left;
        border: none;
        margin-top: ${(props) => (props.no_margin ? '0' : '2rem')};
    }
`
const Step = styled(Header)`
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
                        align="left"
                        no_margin
                        image_name="step_1"
                        current_step={current_step}
                        onClick={() => clickHandler('step_1')}
                    >
                        {localize('1. Select your asset')}
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="left"
                        image_name="step_2"
                        current_step={current_step}
                        onClick={() => clickHandler('step_2')}
                    >
                        {localize('2. Set purchase conditions')}
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="left"
                        image_name="step_3"
                        current_step={current_step}
                        onClick={() => clickHandler('step_3')}
                    >
                        {localize('3. Set restart conditions')}
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="left"
                        image_name="step_4"
                        current_step={current_step}
                        onClick={() => clickHandler('step_4')}
                    >
                        {localize('4. Run bot')}
                    </Step>
                </Tab>
                <Tab>
                    <Step
                        as="h4"
                        type="sub-section-title"
                        lh="1.5"
                        align="left"
                        image_name="step_5"
                        current_step={current_step}
                        onClick={() => clickHandler('step_5')}
                    >
                        {localize('5. Check profit')}
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
                        {localize('Go to live demo')}
                    </GoToLiveDemo>
                </GotoLiveWrapper>
            </TabsWrapper>
            <VideoWrapper>
                <QueryImage
                    data={data[current_step]}
                    alt={localize('{{step}} in DBot trading', { step: current_step })}
                    width="100%"
                />
            </VideoWrapper>
        </Container>
    )
}
export default DtraderTabs
