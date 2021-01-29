import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

export const Section = styled(SectionContainer)`
    box-shadow: inset 0 1px 0 rgba(51, 51, 51, 0.16);
    padding: 80px 0;

    @media ${device.tablet} {
        padding: 40px 0;
    }
`

export const ContentContainer = styled(Container)`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10%;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        grid-row-gap: 24px;
        grid-template-columns: auto;
    }
`

export const HeaderWrapper = styled(Flex)`
    flex-direction: column;
    max-width: 384px;
    width: fit-content;
    justify-content: center;

    @media ${device.tablet} {
        max-width: 320px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-row-gap: 32px;

    @media ${device.tablet} {
        grid-row-gap: 16px;
    }
`

export const IconWrapper = styled.img`
    width: 24px;
    height: 24px;

    @media ${device.tablet} {
        width: 16px;
        height: 16px;
    }
`
