import styled from 'styled-components'
import Box from './box'
import device from 'themes/device'

const Container = styled(Box)`
    margin: 0 auto;
    display: flex;
    align-items: ${(props) => (props.align || props.ai ? props.align || props.ai : 'center')};
    justify-content: ${(props) =>
        props.justify || props.jc ? props.justify || props.jc : 'center'};
    flex-direction: ${(props) =>
        props.direction || props.fd ? props.direction || props.fd : 'row'};
    flex-wrap: ${(props) => (props.wrap || props.fw ? props.wrap || props.fw : '')};
    width: 80%;

    @media ${device.desktop} {
        max-width: 1200px;
    }
    @media ${device.laptopL} {
        width: 84%;
    }
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

export default Container
