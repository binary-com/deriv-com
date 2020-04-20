import styled from 'styled-components'
import { Margins, Paddings } from 'themes/function'

const Box = styled.div`
    width: ${(props) => (props.width ? props.width : '')};
    height: ${(props) => (props.height ? props.height : '')};
    max-width: ${(props) => (props.max_width ? props.max_width : '')};
    position: ${(props) => (props.position ? props.position : '')};
    background: ${(props) => (props.background || props.bg ? props.background || props.bg : '')};
    ${Margins}
    ${Paddings}
`

export default Box
