import styled from 'styled-components'
import { Margins } from 'themes/function'
import type { MarginsProps } from 'themes/function'

type DividerSpecificProps = {
    width?: string
    height?: string
    color?: string
}

type DividerProps = DividerSpecificProps & MarginsProps & React.HTMLProps<HTMLHRElement>

const Divider = styled.hr<DividerProps>`
    border: none;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '1px')};

    /* prettier-ignore */
    background-color: var(--color-${(props) => props.color || 'grey-2'});
    ${Margins}
`

export default Divider
