import styled, { css } from 'styled-components'
import { Text } from 'components/elements'
import { responsiveFallback } from 'common/utility'
import device from 'themes/device'

export const Bullet = styled(Text)`
    font-size: 20px;
`
type CardWrapperProps = {
    width?: string[]
    height?: string[]
    max_width?: string[]
    grid_template_columns?: string[]
    grid_template_rows?: string[]
    grid_template_areas?: string[]
    grid_column_gap?: string[]
    grid_row_gap?: string[]
    align_items?: string
    justify_content?: string
    box_shadow?: string
    border_radius?: string
    border?: string
    background_color?: string[]
    padding?: string[]
    margin?: string[]
    grid_area?: string[]
    has_last_child_props?: boolean
}

const InnerStyle = css<CardWrapperProps>`
    @media ${device.tabletL} {
        width: ${({ width }) => responsiveFallback(width, 1)};
        grid-template-columns: ${({ grid_template_columns }) =>
            responsiveFallback(grid_template_columns, 1)};
    }
    @media ${device.tablet} {
        width: ${({ width }) => responsiveFallback(width)};
        height: ${({ height }) => responsiveFallback(height)};
        max-width: ${({ max_width }) => responsiveFallback(max_width)};
        background-color: ${({ background_color }) => responsiveFallback(background_color)};
        grid-template-columns: ${({ grid_template_columns }) =>
            responsiveFallback(grid_template_columns)};
        grid-template-rows: ${({ grid_template_rows }) => responsiveFallback(grid_template_rows)};
        grid-column-gap: ${({ grid_column_gap }) => responsiveFallback(grid_column_gap)};
        grid-row-gap: ${({ grid_row_gap }) => responsiveFallback(grid_row_gap, 1)};
        padding: ${({ padding }) => responsiveFallback(padding, 1, 0)};

        :last-child {
            margin: ${({ has_last_child_props, margin }) =>
                has_last_child_props && responsiveFallback(margin, 1, 0)};
        }
    }

    @media ${device.mobileS} {
        max-width: ${({ max_width }) => responsiveFallback(max_width, 1, 'auto')};
    }
`

const lastChild = css<CardWrapperProps>`
    :last-child {
        margin: ${({ margin }) => responsiveFallback(margin, 0, 0)};
    }
`

export const CardWrapper = styled.div<CardWrapperProps>`
    display: grid;
    width: ${({ width }) => responsiveFallback(width, 0)};
    height: ${({ height }) => responsiveFallback(height, 0)};
    max-width: ${({ max_width }) => responsiveFallback(max_width, 0)};
    grid-template-columns: ${({ grid_template_columns }) =>
        responsiveFallback(grid_template_columns, 0)};
    grid-template-rows: ${({ grid_template_rows }) => responsiveFallback(grid_template_rows, 0)};
    grid-template-areas: ${({ grid_template_areas }) => {
        if (grid_template_areas) {
            let full_area = grid_template_areas[0]
            for (let i = 1; i < grid_template_areas.length; ++i) {
                full_area += grid_template_areas[i]
            }
            return full_area
        }
    }};
    grid-column-gap: ${({ grid_column_gap }) => responsiveFallback(grid_column_gap, 0)};
    grid-row-gap: ${({ grid_row_gap }) => responsiveFallback(grid_row_gap, 0)};
    align-items: ${({ align_items }) => align_items};
    justify-content: ${({ justify_content }) => justify_content};
    box-shadow: ${({ box_shadow }) => box_shadow};
    border-radius: ${({ border_radius }) => border_radius};
    border: ${({ border }) => border};
    background-color: ${({ background_color }) => responsiveFallback(background_color, 0)};
    padding: ${({ padding }) => responsiveFallback(padding, 0, 0)};
    margin: ${({ has_last_child_props, margin }) =>
        !has_last_child_props && responsiveFallback(margin, 0, 0)};
    ${({ has_last_child_props }) => {
        if (has_last_child_props) {
            return lastChild
        }
    }}

    ${() => {
        return InnerStyle
    }}
`

export const DropdownWrapper = styled.img`
    width: 32px;
    height: 32px;
    grid-area: min-max;

    :hover {
        cursor: pointer;
    }

    @media ${device.tablet} {
        width: 24px;
        height: 24px;
    }
`
type IconWrapperProps = {
    width?: string[]
    height?: string[]
    margin?: string[]
    grid_area?: string[]
}

export const IconWrapper = styled.img<IconWrapperProps>`
    width: ${({ width }) => responsiveFallback(width, 0)};
    height: ${({ height }) => responsiveFallback(height, 0)};
    margin: ${({ margin }) => responsiveFallback(margin, 0) ?? 0};
    grid-area: ${({ grid_area }) => grid_area};

    @media ${device.tablet} {
        width: ${({ width }) => responsiveFallback(width)};
        height: ${({ height }) => responsiveFallback(height)};
        margin: ${({ margin }) => responsiveFallback(margin) ?? 0};
    }
`

export const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6px auto;
    grid-column-gap: 8px;
    grid-area: content;
    grid-row-gap: 8px;
    margin: 22px auto 0;
    align-items: baseline;

    @media ${device.tabletL} {
        margin: 9px auto 16px;
    }
`
