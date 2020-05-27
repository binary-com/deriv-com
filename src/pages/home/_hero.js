import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import PlatformVideoMp4 from './Devices_3MB.webm'
import VerticalCarousel from './_vertical-carousel.js'
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
const contents = [
    'Tight spreads',
    'Sharp prices',
    '24x7 trading',
    '100+ tradeable assets',
    '20+ years of experience',
]
const TypeWriter = styled(Header)`
    min-height: 7.2rem;
`
export const Hero = () => {
    const subtitle = localize('Trade forex, commodities, stock and synthetic indices')
    const [type_writer, setTypeWriter] = React.useState('')

    const type_writer_animation = (i = 0) => {
        if (i < subtitle.length) {
            setTypeWriter(subtitle.substring(0, i + 1))
            setTimeout(() => type_writer_animation(i + 1), 13)
        }
    }

    React.useEffect(() => {
        setTimeout(() => type_writer_animation(), 1200)
    }, [])

    return (
        <HeroWrapper>
            <Container>
                <StyledHeader as="h1" lh="1.25" color="white" ad="0.5s">
                    {localize('SIMPLE.')}
                </StyledHeader>
            </Container>
            <Container>
                <StyledHeader as="h1" lh="1.25" color="white" ad="0.6s">
                    {localize('FLEXIBLE.')}
                </StyledHeader>
            </Container>
            <Container>
                <StyledHeader as="h1" lh="1.25" color="white" ad="0.7s">
                    {localize('RELIABLE.')}
                </StyledHeader>
            </Container>
            <Container jc="flex-start">
                <TypeWriter as="h4" color="white" max_width="365px">
                    {type_writer}
                </TypeWriter>
            </Container>
            <Container>
                <VerticalCarousel contents={contents} />
            </Container>
            <Show.Desktop>
                <StyledVideo width="100%" height="100%" autoPlay muted playsInline loop>
                    <source src={PlatformVideoMp4} type="video/mp4" />
                </StyledVideo>
            </Show.Desktop>
        </HeroWrapper>
    )
}
