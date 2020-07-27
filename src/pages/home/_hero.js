import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlatformVideoMp4 from './Deriv_platform_tour.mp4'
import device from 'themes/device'
import { Container, Show, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton, Button } from 'components/form'
import { useLazyVideo } from 'components/hooks/lazy-video'
import { localize } from 'components/localization'
import CheckMarkIcon from 'images/svg/checklist.svg'

const CheckMark = styled(CheckMarkIcon)`
    width: 18px;
    height: 18px;
`

const HeroWrapper = styled.section`
    width: 100%;
    min-height: auto;
    background: var(--color-black);
    position: relative;
    overflow: hidden;

    @media ${device.laptop} {
        background-position: -10rem 100%;
        padding-top: 7rem;
    }
    @media ${device.tabletL} {
        background: unset;
        background-position: -20rem 100%;
        background-color: var(--color-black);
        min-height: 73rem;
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`

const HeroHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: left;
        font-size: 3.25rem;
    }
    @media ${device.desktopL} {
        font-size: 6.72rem;
    }
`

const HeroSubHeader = styled(Header)`
    @media ${device.desktopL} {
        font-size: 3.36rem;
    }
`

const StyledArticle = styled.article`
    position: absolute;
    top: 21.8rem;
    z-index: 2;
    margin-left: 18%;

    @media ${device.laptopM} {
        top: 10.8rem;
    }
    @media ${device.tabletL} {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    @media ${device.mobileM} {
        top: 5rem;
    }
`

const HeroGrid = styled.section`
    width: 100%;
    max-width: 100%;
    max-height: 82.7rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.tabletL} {
        justify-content: flex-start;
        margin-top: 13.37rem;
        margin-bottom: 4rem;
    }
`

const ButtonWrapper = styled(Flex)`
    margin-top: 9.6rem;
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
    opacity: 0.5;
    max-height: 82.7rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

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

    @media ${device.tabletL} {
        width: 27rem;
        margin: 0 auto;
        display: flex;
        font-size: 1.75rem;
        justify-content: center;
    }
`

const CheckBoxText = styled(Text)`
    @media ${device.desktopL} {
        font-size: 2.52rem;
    }
    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const CheckMarkBullet = ({ children }) => (
    <li>
        <Flex jc="unset" ai="center">
            <CheckMark />
            <CheckBoxText ml="1rem" size="2.4rem" lh="1.5" color="white">
                {children}
            </CheckBoxText>
        </Flex>
    </li>
)
CheckMarkBullet.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

const UList = styled.ul`
    list-style-type: none;
`

const CheckMarkList = ({ children }) => <UList>{children}</UList>
CheckMarkList.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

CheckMarkBullet.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export const Hero = () => {
    useLazyVideo()

    return (
        <HeroWrapper>
            <Container>
                <HeroGrid>
                    <StyledArticle>
                        <div>
                            <HeroHeader
                                as="h1"
                                color="white"
                                mb="2.4rem"
                                size="var(--text-size-xl)"
                                lh="1.25"
                            >
                                {localize('Simple. Flexible. Reliable.')}
                            </HeroHeader>
                            <HeroSubHeader
                                as="h2"
                                color="white"
                                size="var(--text-size-m)"
                                weight="500"
                                mb="1.4rem"
                            >
                                {localize('Trade forex, commodities, synthetic and stock indices')}
                            </HeroSubHeader>
                            <CheckMarkList>
                                <CheckMarkBullet>
                                    {localize('Built upon 20+ years of experience')}
                                </CheckMarkBullet>
                                <CheckMarkBullet>
                                    {localize('100+ tradable assets')}
                                </CheckMarkBullet>
                                <CheckMarkBullet>
                                    {localize('24x7 trading, sharp prices, tight spreads')}
                                </CheckMarkBullet>
                            </CheckMarkList>
                        </div>
                        <div>
                            <ButtonWrapper jc="unset">
                                <HeroButton type="submit" secondary="true" to="/signup/">
                                    {localize('Create free demo account')}
                                </HeroButton>
                            </ButtonWrapper>
                        </div>
                    </StyledArticle>
                </HeroGrid>
            </Container>
            <Show.Desktop>
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
                    <source data-src={PlatformVideoMp4} type="video/mp4" />
                </StyledVideo>
            </Show.Desktop>
        </HeroWrapper>
    )
}
