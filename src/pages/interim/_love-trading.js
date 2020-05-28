import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import Platform from 'images/common/interim-bg.png'

const Section = styled(Box)`
    width: 100%;
    background-image: url(${Platform});
    background-size: cover;
    position: relative;

    @media (max-width: 1240px) {
        display: none;
    }
`

const Responsive = styled(Container)`
    @media ${device.tablet} {
        flex-direction: column;
    }
`

const AbsoluteWrapper = styled(Box)`
    margin-bottom: -3.2rem;
    width: 54rem;
    @media (max-width: 1370px) {
        display: none;
    }
`

const MarLeft = styled(Flex)`
    margin-left: 0;
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const White = styled(Header)`
    color: var(--color-white);
    width: 38.4rem;
`

export { Section, Responsive, AbsoluteWrapper, MarLeft, FitButton, White }
