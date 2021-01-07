import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const Container = styled.div`
    box-shadow: inset 0 1px 0 rgba(51, 51, 51, 0.16);
`

export const ContentContainer = styled(Flex)`
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 80px 0;

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: auto;
        grid-template-areas: 'title' 'text-1' 'employee-image' 'text-2' 'quil5-image';
        padding: 40px 0;
    }
`

export const Title = styled(Header)`
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: var(--color-black-3);
    grid-area: title;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`

export const TextWrapper = styled(Text)`
    max-width: 486px;
    width: fit-content;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: var(--color-black-3);
    grid-area: ${({ grid_area }) => grid_area};
    margin: ${({ margin_m }) => margin_m ?? 0};

    @media ${device.tablet} {
        max-width: 328px;
        font-size: 14px;
        line-height: 20px;
    }
`

export const ImageWrapper = styled.img`
    max-width: 486px;
    max-height: 384px;
    grid-area: ${({ grid_area }) => grid_area};

    @media ${device.tablet} {
        max-width: 320px;
        max-height: 259px;
    }
`
