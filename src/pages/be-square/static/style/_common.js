import styled from 'styled-components'
import { responsiveFallback } from 'common/utility'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const TextWrapper = styled(Text)`
    max-width: ${({ max_width }) => responsiveFallback(max_width, 0)};
    font-size: ${({ font_size }) => responsiveFallback(font_size, 0, '16px')};
    line-height: ${({ line_height }) => responsiveFallback(line_height, 0, '24px')};
    padding: ${({ padding }) => responsiveFallback(padding, 0, 0)};
    margin: ${({ margin }) => responsiveFallback(margin, 0, 0)};
    text-align: ${({ text_align }) => responsiveFallback(text_align, 0)};
    grid-area: ${({ grid_area }) => responsiveFallback(grid_area, 0, 'unset')};
    width: fit-content;

    @media ${device.tabletL} {
        max-width: ${({ max_width }) => responsiveFallback(max_width, max_width?.length !== 2)};
        grid-area: ${({ grid_area }) => responsiveFallback(grid_area, 1, 'unset')};
    }

    @media ${device.tablet} {
        max-width: ${({ max_width }) => responsiveFallback(max_width)};
        width: ${({ width }) => width ?? 'fit-content'};
        font-size: ${({ font_size }) => responsiveFallback(font_size, 1, '14px')};
        line-height: ${({ line_height }) => responsiveFallback(line_height, 1, '20px')};
        text-align: ${({ text_align }) => responsiveFallback(text_align)};
        padding: ${({ padding }) => responsiveFallback(padding, 1, 0)};
        margin: ${({ margin }) => responsiveFallback(margin, 1, 0)};
    }
`

export const Title = styled(Header)`
    max-width: ${({ max_width }) => responsiveFallback(max_width, 0)};
    font-size: ${({ font_size }) => responsiveFallback(font_size, 0, '48px')};
    line-height: ${({ line_height }) => responsiveFallback(line_height, 0, '60px')};
    padding: ${({ padding }) => responsiveFallback(padding, 0, 0)};
    margin: ${({ margin }) => responsiveFallback(margin, 0, 0)};
    text-align: ${({ text_align }) => text_align ?? 'center'};
    width: fit-content;

    @media ${device.tablet} {
        max-width: ${({ max_width }) => responsiveFallback(max_width)};
        font-size: ${({ font_size }) => responsiveFallback(font_size, 1, '28px')};
        line-height: ${({ line_height }) => responsiveFallback(line_height, 1, '34px')};
        padding: ${({ padding }) => responsiveFallback(padding, 1, 0)};
        margin: ${({ margin }) => responsiveFallback(margin, 1, 0)};
    }
`
