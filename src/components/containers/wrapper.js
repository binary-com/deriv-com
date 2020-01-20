import styled from 'styled-components'
import { Margins, Paddings } from 'themes/function'

const Wrapper = styled.div`
    width: ${props => (props.width ? props.width : '')};
    max-width: ${props => (props.max_width ? props.max_width : '')};
    position: ${props => (props.position ? props.position : '')};
    ${Margins}
    ${Paddings}
`

export default Wrapper
