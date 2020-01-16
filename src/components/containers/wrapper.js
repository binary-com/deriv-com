import styled from 'styled-components'
import { Margins, Paddings } from 'themes/function'

const Wrapper = styled.div`
    width: ${props => (props.width ? props.width : '')};
    height: ${props => (props.height ? props.height : '')};
    ${Margins}
    ${Paddings}
`

export default Wrapper
