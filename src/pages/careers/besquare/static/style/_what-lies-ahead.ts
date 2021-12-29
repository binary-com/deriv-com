import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

export const Section = styled(SectionContainer)`
    background-color: var(--color-grey-37);
    padding: 80px 0;

    @media ${device.tablet} {
        padding: 40px 0;
    }
`

export const ContentContainer = styled(Container)`
    flex-direction: column;
`

export const TitleWrapper = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    @media ${device.tablet} {
        margin-bottom: 17px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-row-gap: 22px;

    @media ${device.tablet} {
        grid-row-gap: 17px;
    }
`
