import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography.js'
import device from 'themes/device.js'
import MacBook from 'images/svg/macbook.svg'

const Container = styled.section`
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
const Step = styled(Header)`
    color: var(--color-red);
    font-weight: 500;
    border-bottom: 1px solid var(--color-red);

    @media ${device.tabletL} {
        text-align: left;
        border: none;
        margin-top: ${props => (props.no_margin ? '0' : '2rem')};
    }
`
const Tab = styled.div`
    width: 26rem;
`
const VideoWrapper = styled.div`
    grid-area: video;
    margin-top: 1.6rem;
    position: relative;
`
const MacbookFrame = styled(MacBook)`
    @media ${device.laptopS} {
        width: 100%;
        max-height: 591px;
    }
`
const Video = styled.video`
    position: absolute;
    height: 100px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    top: 50%;
    margin-top: -50px;
`
class DtraderTabs extends React.Component {
    render() {
        return (
            <Container>
                <TabsWrapper>
                    <Tab>
                        <Step as="h4" lh="1.5" align="center" no_margin>
                            1. Select your asset
                        </Step>
                    </Tab>
                    <Tab>
                        <Step as="h4" lh="1.5" align="center">
                            2. Follow the chart
                        </Step>
                    </Tab>
                    <Tab>
                        <Step as="h4" lh="1.5" align="center">
                            3. Purchase your option
                        </Step>
                    </Tab>
                </TabsWrapper>
                <VideoWrapper>
                    <MacbookFrame />
                    <Video autoPlay={true}>
                        <source src="/Dtrader_GIF.mov" />
                    </Video>
                </VideoWrapper>
            </Container>
        )
    }
}
export default DtraderTabs
