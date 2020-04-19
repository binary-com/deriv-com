import React from 'react'
import styled from 'styled-components'
import Globe from './globe.mp4'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import { Container } from 'components/containers'

const BackgroundWrapper = styled.div`
    position: relative;
    height: 60rem;
    background: var(--color-black-6);
    width: 100%;
    overflow: hidden;
`
const StyledContainer = styled(Container)`
    padding-top: 20.7rem;

    h4,
    h1 {
        max-width: 79.8rem;
        z-index: 10;
    }
`
const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%) scale(2);
    width: 100%;
    height: 100%;
`
export const Hero = () => {
    return (
        <BackgroundWrapper>
            <Video width="100%" height="100%" autoPlay muted playsInline loop>
                <source src={Globe} type="video/mp4" />
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
