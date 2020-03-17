import styled from 'styled-components'
import { Margins, Paddings } from 'themes/function'
import device from 'themes/device'

const Flex = styled.div`
    display: flex;
    flex-wrap: ${props => (props.wrap ? props.wrap : '')};
    width: ${props => (props.width ? props.width : '100%')};
    max-width: ${props => (props.mw ? props.mw : '')};
    height: ${props => (props.height ? props.height : '100%')};
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    flex-direction: ${props => (props.direction ? props.direction : '')};
    ${Margins}
    ${Paddings}

    @media ${device.tablet} {
        flex-direction: ${props => (props.tablet_direction ? props.tablet_direction : '')};
        align-items: ${props => (props.tablet_ai ? props.tablet_ai : '')};
        justify-content: ${props => (props.tablet_jc ? props.tablet_jc : '')};
    }
`

export default Flex
