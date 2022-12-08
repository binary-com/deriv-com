import styled from 'styled-components'
import { populateStyle, responsiveFallback } from 'common/utility'
import { Text } from 'components/elements'
import device from 'themes/device'

export const TextWrapper = styled(Text)`
    ${(props) => {
        const default_props_object = { font_size: '16px', line_height: '24px' }
        return populateStyle(props, default_props_object, 0)
    }}
    width: fit-content;
    text-align: center;

    @media ${device.tabletL} {
        max-width: ${({ max_width }) => responsiveFallback(max_width, max_width?.length !== 2)};
    }

    @media ${device.tablet} {
        ${(props) => {
            const default_props_object = { font_size: '14px', line_height: '20px' }
            return populateStyle(props, default_props_object)
        }}
    }
`
