import styled from 'styled-components'
import { Margins, Paddings } from 'themes/function'

const Flex = styled.div`
    display: flex;
    flex-wrap: ${props => (props.wrap ? props.wrap : '')};
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    flex-direction: ${props => (props.direction ? props.direction : '')};
    ${Margins}
    ${Paddings}
`

export default Flex
