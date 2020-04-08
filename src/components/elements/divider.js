import styled from 'styled-components'
import { Margins } from 'themes/function'

const Divider = styled.hr`
    border: none;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '1px')};

    /* prettier-ignore */
    background-color: var(--color-${(props) => props.color || 'grey-2'});
    ${Margins}
`

export default Divider
