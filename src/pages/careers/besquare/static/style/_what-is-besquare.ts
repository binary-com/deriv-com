import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

export const Section = styled(SectionContainer)`
    width: 100%;
    background-color: var(--color-grey-30);
    padding: 80px 0 56px;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`

export const ContentContainer = styled(Container)`
    @media ${device.tabletL} {
        display: grid;
    }
`

export const ContentWrapper = styled(Flex)`
    flex-direction: column;
    width: fit-content;
    margin-left: 24px;

    @media ${device.tablet} {
        margin: 0;
    }
`
