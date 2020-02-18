import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlatformVideoMp4 from './Deriv_platform_tour.mp4'
import device from 'themes/device'
import { LinkButton, Button } from 'components/form'
import { Container, Show, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import CheckMarkIcon from 'images/svg/checklist.svg'

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
    margin-bottom: 3.2rem;

    @media ${device.tabletL} {
        text-align: left;
    }
`

const StyledArticle = styled.article`
    position: relative;
    z-index: 2;
    margin-left: 18%;

    ${HeroHeader} {
        max-width: 70rem;
        font-size: 4.8rem;
    }

    @media ${device.tabletL} {
        margin: 0 2rem;
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
`

const CheckBoxText = styled(Text)`
    margin-left: 16px;
`
const CheckMarkBullet = ({ children }) => (
    <li>
        <Flex jc="unset">
            <CheckMarkIcon />
            <CheckBoxText secondary="true" color="white">
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

    *:not(:first-child):not(:last-child) {
        margin: 2.3rem 0;
    }
`

const CheckMarkList = ({ children }) => <UList>{children}</UList>
CheckMarkList.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}

export const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <HeroGrid>
                    <StyledArticle>
                        <HeroHeader as="h1" color="white" lh="1.15">
                            {localize('A simple, flexible trading solution at your fingertips')}
                        </HeroHeader>
                        <CheckMarkList>
                            <CheckMarkBullet>
                                {localize('Built upon over 20 years of experience')}
                            </CheckMarkBullet>
                            <CheckMarkBullet>
                                {localize('Over 100+ tradable instruments')}
                            </CheckMarkBullet>
                            <CheckMarkBullet>
                                {localize('24x7 trading, tight prices, low spreads')}
                            </CheckMarkBullet>
                        </CheckMarkList>
                        <ButtonWrapper jc="unset">
                            <HeroButton type="submit" secondary="true" to="/signup/">
                                {localize('Join us for free')}
                            </HeroButton>
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
