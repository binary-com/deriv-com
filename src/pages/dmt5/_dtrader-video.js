import React from 'react'
import styled, { css } from 'styled-components'
import { localize } from 'components/localization'
import { Header, Image } from 'components/elements'
import device from 'themes/device.js'

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 2rem;
    grid-template-areas:
        'tabs'
        'video';

    @media ${device.tabletL} {
        grid-template-areas:
            'video'
            'tabs';
    }
`
const TabsWrapper = styled.div`
    grid-area: tabs;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`
const StepCommon = css`
    font-weight: 500;
    cursor: pointer;
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
            ? 'color: var(--color-red); border-bottom: 1px solid var(--color-red)'
            : 'color: var(--color-red-2); border-bottom: 1px solid var(--color-red-2)'};
`
const Step2 = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_step_image === 'dmt-5-step-2.png'
            ? 'color: var(--color-red); border-bottom: 1px solid var(--color-red)'
            : 'color: var(--color-red-2); border-bottom: 1px solid var(--color-red-2)'};
`
const Step3 = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_step_image === 'dmt-5-step-3.png'
            ? 'color: var(--color-red); border-bottom: 1px solid var(--color-red)'
            : 'color: var(--color-red-2); border-bottom: 1px solid var(--color-red-2)'};
`
const Tab = styled.div`
    width: 29rem;
`
const VideoWrapper = styled.div`
    grid-area: video;
    margin-top: 4rem;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
`
// const MacbookFrame = styled(MacBook)`
//     @media ${device.laptopS} {
//         width: 1024px;
//         height: 755px;
//     }
//     @media ${device.laptopL} {
//         width: 970px;
//         height: 450px;
//     }
//     @media ${device.laptop} {
//         width: 700px;
//         height: 370px;
//     }
//     @media ${device.tablet} {
//         width: 500px;
//         height: 332px;
//     }
//     @media ${device.tabletS} {
//         width: 288px;
//         height: 167px;
//     }
// `
// const Video = styled.video`
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     @media ${device.laptopS} {
//         width: 794px;
//         height: 496px;
//         margin-left: -397px;
//         margin-top: -287px;
//     }
//     @media ${device.laptopL} {
//         width: 560px;
//         height: 350px;
//         margin-left: -280px;
//         margin-top: -202px;
//     }
//     @media ${device.laptop} {
//         width: 459px;
//         height: 288px;
//         margin-left: -228px;
//         margin-top: -167px;
//     }
//     @media ${device.tablet} {
//         width: 388px;
//         height: 244px;
//         margin-left: -192px;
//         margin-top: -141px;
//     }
//     @media ${device.tabletS} {
//         width: 206px;
//         height: 161px;
//         margin-left: -104px;
//         margin-top: -91px;
//     }
// `
// const ProgressBar = styled.div`
//     width: 100%;
//     height: 4px;
//     background-color: var(--color-grey-1);
//     position: relative;

//     ::after {
//         content: '';
//         height: 4px;
//         background-color: var(--color-green);
//         position: absolute;
//         width: ${props => props.progress_percentage}%;
//         ${props =>
//             props.transition === true
//                 ? ' transition: width 0.3s linear;'
//                 : 'transition: width 0s linear;'}
//     }
// `
class DtraderTabs extends React.Component {
    my_ref = React.createRef()
    interval_ref = undefined
    state = {
        current_step_image: 'dmt-5-step-1.png',
        // current_time: 0,
        // progress_percentage: 0,
        // transition: true,
    }
    // handler = entries => {
    //     let entry
    //     for (entry of entries) {
    //         if (entry.isIntersecting) {
    //             this.my_ref.current.play()
    //             this.my_ref.current.ontimeupdate = () =>
    //                 this.setState({
    //                     current_time: this.my_ref.current.currentTime,
    //                 })
    //             this.progressHandler()
    //             this.interval_ref = window.setInterval(
    //                 this.progressHandler,
    //                 300,
    //             )
    //         } else {
    //             this.my_ref.current.pause()
    //             window.clearInterval(this.interval_ref)
    //         }
    //     }
    // }
    // componentDidMount() {
    //     const node = this.my_ref.current
    //     let observer = new IntersectionObserver(this.handler)
    //     observer.observe(node)
    // }
    // componentDidUpdate() {
    //     if (this.state.transition === false) {
    //         requestAnimationFrame(() => {
    //             this.setState({
    //                 transition: true,
    //             })
    //         })
    //     }

    //     if (!this.my_ref.current.is_playing) {
    //         this.my_ref.current.play()
    //     }
    // }
    clickHandler = image_name => {
        // this.my_ref.current.currentTime = time
        // this.my_ref.current.pause()
        // this.setState({ transition: false })
        // this.progressHandler()
        this.setState({ current_step_image: image_name })
    }
    // progressHandler = () => {
    //     this.setState({
    //         progress_percentage: Math.ceil(
    //             (this.my_ref.current.currentTime * 100) /
    //                 this.my_ref.current.duration,
    //         ),
    //     })
    // }
    render() {
        return (
            <Container>
                <TabsWrapper>
                    <Tab>
                        <Step1
                            as="h4"
                            lh="1.5"
                            align="center"
                            no_margin
                            // current_time={this.state.current_time}
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-1.png')}
                        >
                            {localize('1. Sign up with Deriv')}
                        </Step1>
                    </Tab>
                    <Tab>
                        <Step2
                            as="h4"
                            lh="1.5"
                            align="center"
                            // current_time={this.state.current_time}
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-2.png')}
                        >
                            {localize('2. Create a DMT5 account')}
                        </Step2>
                    </Tab>
                    <Tab>
                        <Step3
                            as="h4"
                            lh="1.5"
                            align="center"
                            // current_time={this.state.current_time}
                            current_step_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-3.png')}
                        >
                            {localize('3. Fund your account')}
                        </Step3>
                    </Tab>
                </TabsWrapper>
                <VideoWrapper>
                    {/* <MacbookFrame /> */}
                    {/* <Video ref={this.my_ref} preload="metadata" muted>
                        <source src="/Dtrader_GIF.mp4" />
                    </Video> */}
                    <Image
                        img_name={this.state.current_step_image}
                        alt="DMT5 platform"
                        width="100%"
                    />
                </VideoWrapper>
                {/* <ProgressBar
                    progress_percentage={this.state.progress_percentage}
                    transition={this.state.transition}
                /> */}
            </Container>
        )
    }
}
export default DtraderTabs
