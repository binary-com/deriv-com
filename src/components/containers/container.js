import styled from 'styled-components'
import Box, { generateResponsiveStyles } from './box'
import { flexStyles } from './flex'
import device from 'themes/device'

const responsiveStyles = generateResponsiveStyles(flexStyles)

const Container = styled(Box)`
    margin-block: 0;
    margin-inline: auto;
    display: flex;
    align-items: ${(props) => (props.align || props.ai ? props.align || props.ai : 'center')};
    justify-content: ${(props) =>
        props.justify || props.jc ? props.justify || props.jc : 'center'};
    flex-direction: ${(props) =>
        props.direction || props.fd ? props.direction || props.fd : 'row'};
    flex-wrap: ${(props) => (props.wrap || props.fw ? props.wrap || props.fw : '')};
    inline-size: 80%;

    @media ${device.desktop} {
        max-inline-size: 1200px;
    }
    @media ${device.laptopL} {
        inline-size: 84%;
    }
    @media ${device.laptopM} {
        flex-direction: ${(props) => props.laptop_direction};
    }
    @media ${device.desktopL} {
        max-inline-size: 1600px;
    }
    @media ${device.tabletL} {
        inline-size: 90%;
        padding-inline: 0;
        flex-direction: ${(props) => props.tablet_direction};
    }

    ${responsiveStyles}
`

export default Container
