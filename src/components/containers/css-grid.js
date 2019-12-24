import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from 'themes/device'

const CssGrid = styled.div`
    display: grid;
    height: 100%;
    margin: ${props => props.margin || '0'};
    grid-template-columns: ${props => props.columns || 'auto'};
    grid-column-gap: ${props => props.columngap || '0'};
    grid-row-gap: ${props => props.rowgap || '0'};
    align-items: ${props => props.align || 'start'};
    justify-items: ${props => props.justify || 'auto'};
    background-color: ${props => props.bgcolor || 'none'};

    @media ${device.tabletL} {
        grid-template-columns: ${props => props.tabletcolumns ? props.tabletcolumns : props.columns};
        grid-column-gap: ${props => props.tabletcolumngap ? props.tabletcolumngap : props.columngap};
        grid-row-gap: ${props => props.tabletrowgap ? props.tabletrowgap : props.rowgap};
    }
    @media ${device.tabletS} {
        grid-template-columns: ${props => props.mobilecolumns ? props.mobilecolumns : props.columns};
        grid-row-gap: ${props => props.mobilerowgap ? props.mobilerowgap : props.rowgap};
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