import React from 'react'
import styled, { css } from 'styled-components'
import { localize } from 'components/localization'
import { Header, Image } from 'components/elements'
import device from 'themes/device.js'

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
`
const VideoWrapper = styled.div`
    max-width: 67.5rem;
    width: 100%;
`
const StepCommon = css`
    font-weight: 500;
    cursor: pointer;
    padding-left: 1.8rem;
    @media ${device.tabletL} {
        text-align: left;
        border: none;
        margin-top: ${props => (props.no_margin ? '0' : '2rem')};
    }
`
const Step = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_step_image === props.image_name
            ? 'color: var(--color-black-3); border-left: 4px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 4px solid rgb(0, 0, 0, 0)'};
`

class DtraderTabs extends React.Component {
    my_ref = React.createRef()
    interval_ref = undefined
    state = {
        current_step_image: 'dbot-step1.png',
    }
    clickHandler = image_name => {
        this.setState({ current_step_image: image_name })
    }
    render() {
        return (
            <Container>
                <TabsWrapper>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            no_margin
                            image_name='dbot-step1.png'
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dbot-step1.png')}
                        >
                            {localize('1. Select your asset')}
                        </Step>
                    </Tab>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            image_name='dbot-step2.png'
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dbot-step2.png')}
                        >
                            {localize('2. Set purchase conditions')}
                        </Step>
                    </Tab>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            image_name='dbot-step3.png'
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dbot-step3.png')}
                        >
                            {localize('3. Set restart conditions')}
                        </Step>
                    </Tab>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            image_name='dbot-step4.png'
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dbot-step4.png')}
                        >
                            {localize('4. Run bot')}
                        </Step>
                    </Tab>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            image_name='dbot-step5.png'
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dbot-step5.png')}
                        >
                            {localize('5. Check profit')}
                        </Step>
                    </Tab>
                </TabsWrapper>
                <VideoWrapper>
                    <Image
                        img_name={this.state.current_step_image}
                        alt="DMT5 platform"
                        width="100%"
                    />
                </VideoWrapper>
            </Container>
        )
    }
}
export default DtraderTabs
