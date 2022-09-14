import styled from 'styled-components'
import Container from './container'

const GridContainer = styled(Container)<{ align?: string }>`
    text-align: ${(props) => props.align || 'left'};
    display: block;
`

export default GridContainer
