import styled from 'styled-components'
import Box from './box'
import device from 'themes/device'

type CssGridProps = {
    align?: string
    bgcolor?: string
    column_gap?: string
    columns?: string
    justify?: string
    margin?: string
    row_gap?: string
}

type CssGridColumnProps = {
    align?: string
    bgcolor?: string
    height?: string
    justify?: string
    padding?: string
}

const CssGrid = styled(Box)<CssGridProps>`
    display: grid;
    height: ${(props) => props.height || '100%'};
    margin: ${(props) => props.margin || '0'};
    grid-template-columns: ${(props) => props.columns || 'auto'};
    grid-gap: ${(props) => props.grid_gap || ''};
    grid-template-rows: ${(props) => props.rows || 'auto'};
    grid-column-gap: ${(props) => props.column_gap || ''};
    grid-row-gap: ${(props) => props.row_gap || ''};
    align-items: ${(props) => props.align || 'start'};
    justify-items: ${(props) => props.justify || 'unset'};
    background-color: ${(props) => props.bgcolor || 'none'};
    @media ${device.laptopL} {
        grid-template-columns: ${(props) =>
            props.laptop_columns ? props.laptop_columns : props.columns};
        grid-gap: ${(props) => (props.laptop_grid_gap ? props.laptop_grid_gap : props.grid_gap)};
        grid-template-rows: ${(props) => (props.laptop_rows ? props.laptop_rows : props.rows)};
        grid-column-gap: ${(props) =>
            props.laptop_column_gap ? props.laptop_column_gap : props.column_gap};
        grid-row-gap: ${(props) => (props.laptop_row_gap ? props.laptop_row_gap : props.row_gap)};
    }
    @media ${device.tabletL} {
        grid-template-columns: ${(props) =>
            props.tablet_columns ? props.tablet_columns : props.columns};
        grid-gap: ${(props) => (props.tablet_grid_gap ? props.tablet_grid_gap : props.grid_gap)};
        grid-template-rows: ${(props) => (props.tablet_rows ? props.tablet_rows : props.rows)};
        grid-column-gap: ${(props) =>
            props.tablet_column_gap ? props.tablet_column_gap : props.column_gap};
        grid-row-gap: ${(props) => (props.tablet_row_gap ? props.tablet_row_gap : props.row_gap)};
    }
    @media ${device.tabletS} {
        grid-template-columns: ${(props) =>
            props.mobile_columns ? props.mobile_columns : props.columns};
        grid-gap: ${(props) => (props.mobile_grid_gap ? props.mobile_grid_gap : props.grid_gap)};
        grid-template-rows: ${(props) => (props.mobile_rows ? props.mobile_rows : props.rows)};
        grid-column-gap: ${(props) =>
            props.mobile_column_gap ? props.mobile_column_gap : props.column_gap};
        grid-row-gap: ${(props) => (props.mobile_row_gap ? props.mobile_row_gap : props.row_gap)};
    }
`

export const CssGridColumn = styled.div<CssGridColumnProps>`
    padding: ${(props) => props.padding || '0'};
    align-self: ${(props) => props.align || 'stretch'};
    justify-self: ${(props) => props.justify || 'initial'};
    background-color: ${(props) => props.bgcolor || 'none'};
    height: ${(props) => props.height || 'auto'};
`

export default CssGrid
