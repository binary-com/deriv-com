import styled from 'styled-components'
import Box from './box'
import device from 'themes/device'

const Flex = styled(Box)`
    display: flex;
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '100%')};
    flex-wrap: ${(props) => (props.wrap || props.fw ? props.wrap || props.fw : '')};
    justify-content: ${(props) => (props.jc ? props.jc : 'center')};
    align-items: ${(props) => (props.ai ? props.ai : '')};
    flex-direction: ${(props) => (props.direction || props.fd ? props.direction || props.fd : '')};

    @media ${device.tablet} {
        flex-direction: ${(props) => (props.tablet_direction ? props.tablet_direction : '')};
        align-items: ${(props) => (props.tablet_ai ? props.tablet_ai : '')};
        justify-content: ${(props) => (props.tablet_jc ? props.tablet_jc : '')};
    }
`

export default Flex
