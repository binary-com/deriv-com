import styled from 'styled-components'
import device from 'themes/device'

const Flex = styled.div`
    display: flex;
    flex-wrap: ${props => (props.wrap ? props.wrap : '')};
    width: ${props => (props.width ? props.width : '100%')};
    max-width: ${props => (props.mw ? props.mw : '')};
    height: ${props => (props.height ? props.height : '100%')};
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    margin: ${props => (props.m ? props.m : '')};
    margin-top: ${props => (props.mt ? props.mt : '')};
    margin-bottom: ${props => (props.mb ? props.mb : '')};
    margin-left: ${props => (props.ml ? props.ml : '')};
    margin-right: ${props => (props.mr ? props.mr : '')};
    padding: ${props => (props.p ? props.p : '')};
    flex-direction: ${props => (props.direction ? props.direction : '')};

    @media ${device.tablet} {
        flex-direction: ${props => (props.tablet_direction ? props.tablet_direction : '')};
        align-items: ${props => (props.tablet_ai ? props.tablet_ai : '')};
        justify-content: ${props => (props.tablet_jc ? props.tablet_jc : '')};
    }
`

export default Flex
