import React from 'react'
import styled from 'styled-components'
import PartnerVideo from './partner-video.mp4'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import { useLazyVideo } from 'components/hooks/use-lazy-video'

const StyledHero = styled.div`
    width: 100%;
    height: 80rem;
    position: relative;
    background: var(--color-black);
`

const StyledVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.4);

    /* for edge */
    @supports (object-fit: fill) {
        object-fit: fill;
        top: 0%;
        left: unset;
        transform: unset;
    }
`

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Hero = () => {
    useLazyVideo()

    return (
        <StyledHero>
            <StyledVideo
                className="lazy"
                title={localize('deriv.app platform video')}
                width="100%"
                height="100%"
                autoPlay
                muted
                playsInline
                loop
            >
                <source data-src={PartnerVideo} type="video/mp4" />
            </StyledVideo>
            <Content>
                <Container direction="column" height="100%">
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Deriv partnership programmes')}
                    </Header>
                    <Header as="h3" color="white" align="center" type="section-title" weight="400">
                        {localize('Partner with a trusted online trading provider.')}
                    </Header>
                </Container>
            </Content>
        </StyledHero>
    )
}

export default Hero
