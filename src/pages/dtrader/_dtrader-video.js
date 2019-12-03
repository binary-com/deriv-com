import React from 'react'
import styled, { css } from 'styled-components'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import MacBook from 'images/svg/macbook.svg'
import device from 'themes/device.js'
import { isBrowser } from 'common/utility'

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        width: 100%;
    }
`
const TabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 38.4rem;

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
        props.current_time >= 0
            ? 'color: var(--color-red); border-bottom: 1px solid var(--color-red)'
            : 'color: var(--color-red-2); border-bottom: 1px solid var(--color-red-2)'};
`
const Step2 = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_time >= 7
            ? 'color: var(--color-red); border-bottom: 1px solid var(--color-red)'
            : 'color: var(--color-red-2); border-bottom: 1px solid var(--color-red-2)'};
`
const Step3 = styled(Header)`
    ${StepCommon}
    ${props =>
        props.current_time >= 13
            ? 'color: var(--color-red); border-bottom: 1px solid var(--color-red)'
            : 'color: var(--color-red-2); border-bottom: 1px solid var(--color-red-2)'};
`
const Tab = styled.div`
    width: 100%;
`
const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 42.1rem;
`
const MacbookFrame = styled(MacBook)`
    position: absolute;
    width: 100%;
    height: 100%;
`
const Video = styled.video`
    position: absolute;
    width: 77%;
    top: 5.5%;
    height: 77%;
    left: 11.5%;


    @media ${device.laptop} {
        top: 6.5%;
    }
    @media ${device.tabletL} {
        top: 5.7%;
    }
    @media ${device.mobileL} {
        top: 7.4%;
    }
    @media ${device.mobileM} {
        top: 8%;
    }
    @media ${device.mobileS} {
        top: 8.4%;
    }
`

class DtraderTabs extends React.Component {
    my_ref = React.createRef()
    interval_ref = undefined
    state = {
        current_time: 0,
        progress_percentage: 0,
        transition: true,
    }
    handler = entries => {
        let entry
        for (entry of entries) {
            if (entry.isIntersecting) {
                this.my_ref.current.play()
                this.my_ref.current.ontimeupdate = () => {
                    if (this.my_ref.current) {
                        this.setState({
                            current_time: this.my_ref.current.currentTime,
                        })
                    }
                }
                this.progressHandler()
                this.interval_ref = window.setInterval(this.progressHandler, 300)
            } else {
                this.my_ref.current.pause()
                window.clearInterval(this.interval_ref)
            }
        }
    }
    observer = isBrowser() && new IntersectionObserver(this.handler)
    componentDidMount() {
        const node = this.my_ref.current
        this.observer.observe(node)
    }
    componentWillUnmount() {
        window.clearInterval(this.interval_ref)
        this.observer.disconnect()
    }
    componentDidUpdate() {
        if (this.state.transition === false) {
            requestAnimationFrame(() => {
                this.setState({
                    transition: true,
                })
            })
        }

        if (!this.my_ref.current.is_playing) {
            this.my_ref.current.play()
        }
    }
    clickHandler = time => {
        this.my_ref.current.currentTime = time
        this.my_ref.current.pause()
        this.setState({ transition: false })
        this.progressHandler()
    }
    progressHandler = () => {
        this.setState({
            progress_percentage: Math.ceil(
                (this.my_ref.current.currentTime * 100) / this.my_ref.current.duration,
            ),
        })
    }
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
                            current_time={this.state.current_time}
                            onClick={() => this.clickHandler(0)}
                        >
                            {localize('1. Select your asset')}
                        </Step1>
                    </Tab>
                    <Tab>
                        <Step2
                            as="h4"
                            lh="1.5"
                            align="center"
                            current_time={this.state.current_time}
                            onClick={() => this.clickHandler(7)}
                        >
                            {localize('2. Follow the chart')}
                        </Step2>
                    </Tab>
                    <Tab>
                        <Step3
                            as="h4"
                            lh="1.5"
                            align="center"
                            current_time={this.state.current_time}
                            onClick={() => this.clickHandler(13)}
                        >
                            {localize('3. Purchase your option')}
                        </Step3>
                    </Tab>
                </TabsWrapper>
                <VideoWrapper>
                    <MacbookFrame />
                    <Video ref={this.my_ref} preload="metadata" muted>
                        <source src="/Dtrader_GIF.webm" type="video/webm" />
                        <source src="/Dtrader_GIF.mp4" type="video/mp4" />
                    </Video>
                </VideoWrapper>
            </Container>
        )
    }
}
export default DtraderTabs
