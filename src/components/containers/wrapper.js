import styled from 'styled-components'

import { Margins, Paddings } from 'themes/function'

const Wrapper = styled.div`
    width: ${props => (props.width ? props.width : '')};
    ${Margins}
    ${Paddings}
`

export default Wrapper
