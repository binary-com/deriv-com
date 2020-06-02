import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import Platform from 'images/common/check-interim-bg.png'
import PlatformMobile from 'images/common/interim-mobile-bg.png'

const Section = styled(Box)`
    width: 100%;
    background-image: url(${Platform});
    background-size: 64% 100%;
    background-position-x: right;
    background-repeat: no-repeat;
    position: relative;

    @media ${device.tablet} {
        background-image: url(${PlatformMobile});
        background-size: 100% 63%;
        background-position-y: bottom;
        background-repeat: no-repeat;
    }
`

const Responsive = styled(Container)`
    @media ${device.tablet} {
        flex-direction: column;
    }
`

const AbsoluteWrapper = styled(Box)`
    width: 54rem;
    position: absolute;
    left: 31%;
    bottom: 0;

    @media (max-width: 1565px) {
        left: 30%;

        .gatsby-image-wrapper {
            width: 50rem;
        }
    }
    @media (max-width: 1390px) {
        .gatsby-image-wrapper {
            width: 44rem;
        }
    }
    @media (max-width: 1300px) {
        .gatsby-image-wrapper {
            width: 35rem;
        }
    }
    @media (max-width: 1146px) {
        .gatsby-image-wrapper {
            width: 30rem;
        }
    }
    @media ${device.tabletL} {
        .gatsby-image-wrapper {
            width: 40rem;
        }
    }
    @media (max-width: 872px) {
        .gatsby-image-wrapper {
            width: 32rem;
        }
    }
    @media ${device.tablet} {
        display: none;
    }
`

const MobileWrapper = styled.div`
    display: none;

    @media ${device.tablet} {
        display: block;
        margin: 3.2rem 0;
    }
`

const MarLeft = styled(Flex)`
    margin-left: 0;
    max-width: 38.4rem;
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const White = styled(Header)`
    color: var(--color-white);
    width: 38.4rem;
`

export { Section, Responsive, AbsoluteWrapper, MarLeft, FitButton, White, MobileWrapper }
