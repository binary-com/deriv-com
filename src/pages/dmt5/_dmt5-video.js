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
const TabsWrapper = styled.div`
    width: 40.7rem;
    margin-right: 2.6rem;
`
const VideoWrapper = styled.div`
    max-width: 67.5rem;
    width: 100%;
`
const Tab = styled.div`
    width: 100%;
    margin-top: 3rem;
`
const StepCommon = css`
    font-weight: bold;
    cursor: pointer;
    padding-left: 1.8rem;
    @media ${device.tabletL} {
        text-align: left;
        border: none;
        margin-top: ${props => (props.no_margin ? '0' : '2rem')};
    }
`
const Step1 = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_step_image === 'dmt-5-step-1.png'
            ? 'color: var(--color-black-3); border-left: 5px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 5px solid rgb(0, 0, 0, 0)'};
`
const Step2 = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_step_image === 'dmt-5-step-2.png'
            ? 'color: var(--color-black-3); border-left: 5px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 5px solid rgb(0, 0, 0, 0)'};
`
const Step3 = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_step_image === 'dmt-5-step-3.png'
            ? 'color: var(--color-black-3); border-left: 5px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 5px solid rgb(0, 0, 0, 0)'};
`

class DtraderTabs extends React.Component {
    my_ref = React.createRef()
    interval_ref = undefined
    state = {
        current_step_image: 'dmt-5-step-1.png',
    }
    clickHandler = image_name => {
        this.setState({ current_step_image: image_name })
    }
    render() {
        return (
            <Container>
                <TabsWrapper>
                    <Tab>
                        <Step1
                            as="h4"
                            lh="1"
                            align="left"
                            no_margin
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-1.png')}
                        >
                            {localize('1. Sign up with Deriv')}
                        </Step1>
                    </Tab>
                    <Tab>
                        <Step2
                            as="h4"
                            lh="1"
                            align="left"
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-2.png')}
                        >
                            {localize('2. Create a DMT5 account')}
                        </Step2>
                    </Tab>
                    <Tab>
                        <Step3
                            as="h4"
                            lh="1"
                            align="left"
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-3.png')}
                        >
                            {localize('3. Fund your account')}
                        </Step3>
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
