import styled from 'styled-components'
import { Container, SectionContainer } from 'components/containers'
import { QueryImage } from 'components/elements'
import device from 'themes/device'

export const Section = styled(SectionContainer)`
    padding: 80px 0;
    box-shadow: inset 0 1px 0 rgba(51, 51, 51, 0.16);

    @media ${device.tablet} {
        padding: 40px 0;
    }
`

export const ContentContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(2, 486px);
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    justify-content: center;

    @media ${device.tabletL} {
        grid-template-columns: auto;
        grid-template-areas: 'title' 'text-1' 'employee-image' 'text-2' 'bpo-image';
        grid-row-gap: 20px;
    }

    @media ${device.tablet} {
        gap: 0;
    }
`
type ImageWrapperProps = {
    grid_area: string
}
export const ImageWrapper = styled(QueryImage)<ImageWrapperProps>`
    max-width: 486px;

    @media ${device.tabletL} {
        grid-area: ${({ grid_area }) => grid_area};
    }

    @media ${device.tablet} {
        max-width: 320px;
        width: 98%;
    }
`
