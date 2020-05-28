import React from 'react'
import styled from 'styled-components'
import Globe from './globe.mp4'
import Globe2 from './globe.webm'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { Container } from 'components/containers'
import { useLazyVideo } from 'components/hooks/lazy-video'
import device from 'themes/device'

const BackgroundWrapper = styled.div`
    position: relative;
    height: 60rem;
    background: var(--color-black-6);
    width: 100%;
    overflow: hidden;

    @media ${device.tabletL} {
        height: unset;
    }
`
const StyledContainer = styled(Container)`
    padding-top: 20.7rem;

    h4,
    h1 {
        max-width: 76.1rem;
        z-index: 10;
    }
    h1 {
        line-height: 1.25;
    }
    h4 {
        line-height: 1.5;
    }
    @media ${device.tabletL} {
        padding: 12.5rem 0;

        h1 {
            font-size: var(--text-size-xl);
            text-align: left;
        }
        h4 {
            font-size: 3rem;
            text-align: left;
        }
    }
`
const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) scale(2);
    width: 100%;
    height: 100%;

    @media ${device.tabletL} {
        transform: translate(-50%, -50%) scale(1.5);
    }
`
export const Hero = () => {
    useLazyVideo()

    return (
        <BackgroundWrapper>
            <Video className="lazy" width="100%" height="100%" autoPlay muted playsInline loop>
                <source data-src={Globe} type="video/mp4" />
                <source data-src={Globe2} type="video/webm" />
            </Video>
            <StyledContainer direction="column">
                <Header as="h1" color="white" lh="1.15" align="center">
                    {localize('Markets to trade on Deriv')}
                </Header>
                <Header
                    as="h4"
                    color="white"
                    lh="1.5"
                    font_size="var(--text-size-m)"
                    weight="normal"
                    align="center"
                    mt="1.6rem"
                >
                    {localize(
                        'Get the guidance you need to start trading on our platform. Browse through all the markets that we offer, learn about our trade types, and gain insight on how to make smarter trading decisions.',
                    )}
                </Header>
            </StyledContainer>
        </BackgroundWrapper>
    )
}
