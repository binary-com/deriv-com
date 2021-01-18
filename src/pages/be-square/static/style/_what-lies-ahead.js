import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { responsiveFallback } from 'common/utility'
import device from 'themes/device'

export const Container = styled.div`
    background-color: var(--color-grey-30);

    @media ${device.tablet} {
        background-color: var(--color-white);
    }
`

export const ContentContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    @media ${device.tablet} {
        padding: 40px 0;
    }
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

export const Title = styled(Header)`
    max-width: 384px;
    width: fit-content;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: 328px;
        font-size: 28px;
        line-height: 34px;
    }
`

export const TextWrapper = styled(Text)`
    max-width: ${({ max_width }) => responsiveFallback(max_width, 0)};
    width: fit-content;
    font-size: ${({ font_size }) => responsiveFallback(font_size, 0, '16px')};
    font-weight: ${({ font_weight }) => font_weight ?? 400};
    line-height: ${({ line_height }) => responsiveFallback(line_height, 0, '24px')};
    text-align: ${({ text_align }) => text_align ?? 'unset'};
    color: var(--color-black-3);
    grid-area: ${({ grid_area }) => grid_area ?? 'unset'};
    margin: ${({ margin }) => margin ?? 0};
    padding: ${({ padding }) => responsiveFallback(padding, 0, 0)};

    @media ${device.tablet} {
        max-width: ${({ max_width }) => responsiveFallback(max_width)};
        width: ${({ width }) => width ?? 'fit-content'};
        font-size: ${({ font_size }) => responsiveFallback(font_size, 1, '14px')};
        line-height: ${({ line_height }) => responsiveFallback(line_height, 1, '20px')};
        padding: ${({ padding }) => responsiveFallback(padding, 1, 0)};
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
