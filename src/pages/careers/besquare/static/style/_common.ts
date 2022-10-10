import styled from 'styled-components'
import { populateStyle, responsiveFallback } from 'common/utility'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const TextWrapper = styled(Text)<{ grid_area?: string }>`
    ${(props) => {
        const default_props_object = { font_size: '16px', line_height: '24px' }
        return populateStyle(props, default_props_object, 0)
    }}
    width: fit-content;

    @media ${device.tabletL} {
        max-width: ${({ max_width }) => responsiveFallback(max_width)};
        grid-area: ${({ grid_area }) => responsiveFallback(grid_area, 1)};
    }

    @media ${device.tablet} {
        ${(props) => {
            const default_props_object = { font_size: '14px', line_height: '20px' }
            return populateStyle(props, default_props_object)
        }}
    }
`

export const Title = styled(Header)<{ text_align?: string }>`
    text-align: ${({ text_align }) => text_align ?? 'center'};
    ${(props) => {
        const default_props_object = { font_size: '48px', line_height: '60px' }
        return populateStyle(props, default_props_object, 0)
    }}
    width: fit-content;

    @media ${device.tablet} {
        ${(props) => {
            const default_props_object = { font_size: '28px', line_height: '34px' }
            return populateStyle(props, default_props_object)
        }}
    }
`
