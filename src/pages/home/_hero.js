import React from 'react'
import styled from 'styled-components'
import PlatformVideoMp4 from './Deriv_platform_tour.mp4'
import device from 'themes/device'
import { LinkButton, Button } from 'components/form'
import { Container, Show, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import Checklist from 'images/svg/checklist.svg'

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
        min-height: 58.4rem;
        padding: 13.3rem 0 5rem 0;
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
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ButtonWrapper = styled(Flex)`
    margin-top: 4rem;
    height: 40px;

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
const HeroButton = styled(LinkButton)`
    height: 4.8rem;
    display: flex;
    align-items: center;
`
const MobileItems = styled(Flex)`
    div {
        display: flex;
        align-items: center;

        svg:first-child {
            margin-right: 1.25rem;
        }
    }
    p {
        color: var(--color-white);
    }
`
const MobileArticle = styled(Flex)`
    padding: 0 2rem;
    
    h1 {
        margin: 0 auto;
        color: var(--color-white);
    }
    div {
        margin-top: 2rem;
    }
    div:first-child {
        margin-top: 0
    }
`
const ChecklistSVG = styled(Checklist)`
    height: 2.25rem;
    width: 2.25rem;
`
const SignupButton = styled(LinkButton)`
    margin: 22.5rem auto 0 auto;
    width: 100%;
    max-width: 27rem;
    font-size: var(--text-size-sm);
`
export const Hero = () => {
    return (
        <HeroWrapper>
            <Show.Desktop>
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
                                <HeroButton type="submit" secondary to="/signup/">
                                    {localize('Join us for free')}
                                </HeroButton>
                            </ButtonWrapper>
                        </StyledArticle>
                    </HeroGrid>
                </Container>
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
            <Show.Mobile>
                <MobileArticle direction='column'>
                    <div>
                        <Header font_size='var(--text-size-l)'>{localize('Simple. Flexible. Reliable.')}</Header>
                    </div>
                    <div>
                        <Header font_size='2.25rem' weight='normal'>{localize('Trade forex, commodities, synthetic indices, and cryptocurrencies')}</Header>
                    </div>
                    <MobileItems direction='column'>
                        <div>
                            <ChecklistSVG />
                            <Text secondary>{localize('Built upon over 20 years of experience')}</Text>
                        </div>
                        <div>
                            <ChecklistSVG />
                            <Text secondary>{localize('Over 100+ tradable instruments')}</Text>
                        </div>
                        <div>
                            <ChecklistSVG />
                            <Text secondary>{localize('24x7 trading, tight prices, low spreads')}</Text>
                        </div>
                    </MobileItems>
                    <SignupButton secondary to="/signup/">
                        {localize('Join us for free')}
                    </SignupButton>
                </MobileArticle>
            </Show.Mobile>
        </HeroWrapper>
    )
}
