import styled, { css } from 'styled-components'
import { Text } from 'components/elements'
import { responsiveFallback } from 'common/utility'
import device from 'themes/device'

export const Bullet = styled(Text)`
    font-size: 20px;
`

export const CardWrapper = styled.div`
    display: grid;
    width: ${({ width }) => responsiveFallback(width, 0)};
    max-width: ${({ max_width }) => responsiveFallback(max_width, 0)};
    grid-template-columns: ${({ grid_template_columns }) =>
        responsiveFallback(grid_template_columns, 0)};
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
    align-items: ${({ align_items }) => align_items ?? 'unset'};
    justify-content: ${({ justify_content }) => justify_content ?? 'unset'};
    box-shadow: ${({ box_shadow }) => box_shadow ?? 'unset'};
    border-radius: ${({ border_radius }) => border_radius ?? 'unset'};
    background-color: ${({ background_color }) => responsiveFallback(background_color, 0)};
    padding: ${({ padding }) => responsiveFallback(padding, 0, 0)};
    margin: ${({ has_last_child_props, margin }) =>
        !has_last_child_props && responsiveFallback(margin, 0, 0)};
    ${({ has_last_child_props }) => {
        if (has_last_child_props) {
            return css`
                :last-child {
                    margin: ${({ margin }) => responsiveFallback(margin, 0, 0)};
                }
            `
        }
    }}

    ${() => {
        return css`
            @media ${device.tabletL} {
                width: ${({ width }) => responsiveFallback(width, 1)};
                /* Add new grid_template_columns */
            }
            @media ${device.tablet} {
                width: ${({ width }) => responsiveFallback(width)};
                max-width: ${({ max_width }) => responsiveFallback(max_width)};
                background-color: ${({ background_color }) => responsiveFallback(background_color)};
                grid-template-columns: ${({ grid_template_columns }) =>
                    responsiveFallback(grid_template_columns)};
                grid-column-gap: ${({ grid_column_gap }) => responsiveFallback(grid_column_gap)};
                grid-row-gap: ${({ grid_row_gap }) => responsiveFallback(grid_row_gap, 1)};
                padding: ${({ padding }) => responsiveFallback(padding, 1, 0)};

                :last-child {
                    margin: ${({ has_last_child_props, margin }) =>
                        has_last_child_props && responsiveFallback(margin, 1, 0)};
                }
            }
        `
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

export const IconWrapper = styled.img`
    width: ${({ width }) => responsiveFallback(width, 0)};
    height: ${({ height }) => responsiveFallback(height, 0)};
    margin: ${({ margin }) => margin ?? 0};
    grid-area: ${({ grid_area }) => grid_area ?? 'unset'};

    @media ${device.tablet} {
        width: ${({ width }) => responsiveFallback(width)};
        height: ${({ height }) => responsiveFallback(height)};
    }
`

export const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6px auto;
    grid-column-gap: 8px;
    grid-area: content;
    grid-row-gap: 8px;
    margin: 22px auto;
    align-items: baseline;

    @media ${device.tabletL} {
        margin: 9px auto 16px;
    }
`
