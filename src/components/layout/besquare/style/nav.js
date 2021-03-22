import styled from 'styled-components'
import { Container, SectionContainer } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'

export const ButtonWrapper = styled(LinkButton)`
    min-width: 102px;
    width: auto;
    height: auto;
    white-space: nowrap;

    @media ${device.tablet} {
        min-width: 76px;
        font-size: 12px;
        padding: 8px 3px;
    }
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

    @media ${device.mobileL} {
        padding: 16px 0;
    }
`

export const ContentContainer = styled(Container)`
    align-items: center;
    justify-content: space-between;
`

export const LogoWrapper = styled.div`
    display: inline-block;
`

export const StyledLogoLink = styled(LocalizedLink)`
    @media ${device.tablet} {
        img {
            width: 168px;
            height: 16px;
        }
    }
`
