import styled from 'styled-components'
import { Container } from 'components/containers'
import device from 'themes/device'

export const ContentContainer = styled(Container)`
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;

    @media ${device.tablet} {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 48px;
    margin: 48px auto 0;

    @media ${device.tabletL} {
        grid-template-columns: auto;
        gap: 24px;
        margin: 20px auto 0;
    }
`
