import React from 'react'
import styled from 'styled-components'
import PlatformVideoMp4 from './Deriv_platform_tour.mp4'
import device from 'themes/device'
import { Button } from 'components/form'
import { Container, Show, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink, localize } from 'components/localization'

const HeroWrapper = styled.section`
    width: 100%;
    padding-top: 27rem;
    min-height: calc(100vh - 7rem);
    background: var(--color-black);
    position: relative;
    overflow: hidden;

    @media ${device.laptop} {
        background-position: -10rem 100%;
        padding-top: 7rem;
        padding-bottom: 7rem;
    }
    @media ${device.tabletL} {
        background: unset;
        background-position: -20rem 100%;
        background-color: var(--color-black);
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`

const HeroHeader = styled(Header)`
    margin-top: ${props => (props.secondary ? '1.6rem' : '')};

    @media ${device.laptop} {
        text-align: center;
    }
    @media ${device.tabletL} {
        text-align: left;
    }
`

const StyledArticle = styled.article`
    position: relative;
    z-index: 2;

    ${HeroHeader} {
        width: 100%;
    }
`

const HeroGrid = styled.section`
    width: 100%;
    max-width: 100%;
`

const ButtonWrapper = styled(Flex)`
    margin-top: 4rem;

    ${Button} {
        font-size: 1.6rem;
    }
    @media ${device.laptop} {
        text-align: center;
    }
    @media ${device.tabletL} {
        text-align: left;
    }
`

const StyledVideo = styled.video`
    position: absolute;
    opacity: 0.5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;

    /* for edge */
    @supports (object-fit: fill) {
        object-fit: fill;
        top: 0%;
        left: unset;
        transform: unset;
    }
`

export const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <HeroGrid>
                    <StyledArticle>
                        <HeroHeader align="center" as="h1" color="white" lh="1.2">
                            {localize('This is your ultimate trading experience')}
                        </HeroHeader>
                        <HeroHeader as="h4" align="center" color="white" weight="500" secondary>
                            {localize('The next evolution of online trading by Binary.com')}
                        </HeroHeader>
                        <ButtonWrapper>
                            <LocalizedLink to='/signup/'>
                            <Button type="submit" secondary>
                                {localize('Join us for free')}
                            </Button>
                            </LocalizedLink>
                        </ButtonWrapper>
                    </StyledArticle>
                </HeroGrid>
            </Container>
            <Show.Desktop>
                <StyledVideo
                    title={localize('deriv.app platform video')}
                    width="100%"
                    height="100%"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    <source src={PlatformVideoMp4} type="video/mp4" />
                </StyledVideo>
            </Show.Desktop>
        </HeroWrapper>
    )
}
