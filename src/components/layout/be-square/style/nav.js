import styled from 'styled-components'
import { Container, SectionContainer } from 'components/containers'
import { LinkButton } from 'components/form'
import device from 'themes/device'

export const ButtonWrapper = styled(LinkButton)`
    max-width: 102px;
    height: auto;
    white-space: nowrap;
`

export const Section = styled(SectionContainer)`
    background-color: var(--color-black);
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    padding: 16px 1%;

    @media ${device.tablet} {
        padding: 16px;
    }
`

export const ContentContainer = styled(Container)`
    align-items: center;
    justify-content: space-between;
`

export const LogoWrapper = styled.img`
    width: 286px;
    height: 27px;

    :hover {
        cursor: pointer;
    }

    @media ${device.tablet} {
        width: 168px;
        height: 16px;
    }
`
