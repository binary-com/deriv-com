import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from 'themes/device'

const CssGrid = styled.div`
    display: grid;
    height: ${props => props.height || '100%'};
    margin: ${props => props.margin || '0'};
    grid-template-columns: ${props => props.columns || 'auto'};
    grid-column-gap: ${props => props.column_gap || '0'};
    grid-row-gap: ${props => props.row_gap || '0'};
    align-items: ${props => props.align || 'start'};
    justify-items: ${props => props.justify || 'auto'};
    background-color: ${props => props.bgcolor || 'none'};

    @media ${device.tabletL} {
        grid-template-columns: ${props =>
            props.tablet_columns ? props.tablet_columns : props.columns};
        grid-column-gap: ${props =>
            props.tablet_column_gap ? props.tablet_column_gap : props.column_gap};
        grid-row-gap: ${props => (props.tablet_row_gap ? props.tablet_row_gap : props.row_gap)};
    }
    @media ${device.tabletS} {
        grid-template-columns: ${props =>
            props.mobile_columns ? props.mobile_columns : props.columns};
        grid-row-gap: ${props => (props.mobile_row_gap ? props.mobile_row_gap : props.row_gap)};
    }
`

export const CssGridColumn = styled.div`
    padding: ${props => props.padding || '0'};
    align-self: ${props => props.align || 'stretch'};
    justify-self: ${props => props.justify || 'initial'};
    background-color: ${props => props.bgcolor || 'none'};
    height: ${props => props.height || 'auto'};
`

export default CssGrid

CssGrid.propTypes = {
    align: PropTypes.string,
    bgcolor: PropTypes.string,
    columngap: PropTypes.string,
    columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    justify: PropTypes.string,
    margin: PropTypes.string,
    rowgap: PropTypes.string,
}
CssGridColumn.propTypes = {
    align: PropTypes.string,
    bgcolor: PropTypes.string,
    height: PropTypes.string,
    justify: PropTypes.string,
    padding: PropTypes.string,
}
