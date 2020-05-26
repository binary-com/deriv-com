import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import PlatformVideoMp4 from './Devices_3MB.webm'
import device from 'themes/device'
// import { LinkButton, Button } from 'components/form'
import { Container, Show, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import CheckMarkIcon from 'images/svg/checklist.svg'

const CheckMark = styled(CheckMarkIcon)`
    width: 18px;
    height: 18px;
`

const HeroWrapper = styled.section`
    width: 100%;
    padding-top: 11rem;
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
        min-height: 73rem;
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`

const StyledVideo = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    /* for edge 
    @supports (object-fit: fill) {
        object-fit: fill;
        top: 0%;
        left: unset;
        transform: unset;
    }
    */
`
// const HeroButton = styled(LinkButton)`
//     height: 4.8rem;
//     display: flex;
//     align-items: center;

//     @media ${device.tabletL} {
//         width: 27rem;
//         margin: 0 auto;
//         display: flex;
//         font-size: 1.75rem;
//         justify-content: center;
//     }
// `

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
const FadeIn = keyframes`
    0% {
        opacity: 0;
        margin-left: -75px;
    }
    100% {
        opacity: 1;
        margin-left: 0;
    }
`
const StyledHeader = styled(Header)`
    animation-name: ${FadeIn};
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-delay: ${(props) => props.ad};
`
export const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <StyledHeader as="h1" lh="1.25" color="white" ad="0.2s">
                    SIMPLE.
                </StyledHeader>
            </Container>
            <Container>
                <StyledHeader as="h1" lh="1.25" color="white" ad="0.3s">
                    FLEXIBLE.
                </StyledHeader>
            </Container>
            <Container>
                <StyledHeader as="h1" lh="1.25" color="white" ad="0.4s">
                    RELIABLE.
                </StyledHeader>
            </Container>
            <Container jc="flex-start">
                <Header as="h4" max_width="40.8rem" color="white">
                    Trade forex, commodities, stock and synthetic indices
                </Header>
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
