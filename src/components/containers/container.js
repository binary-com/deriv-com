import styled from 'styled-components'
import Box, { generateResponsiveStyles } from './box'
import { flexStyles } from './flex'
import device from 'themes/device'
import { MarginMixin, SizeMixin, PaddingMixin } from 'themes/mixins'

const responsiveStyles = generateResponsiveStyles(flexStyles)

const Container = styled(Box)`
    ${MarginMixin({ all: '0 auto' })}
    display: flex;
    align-items: ${(props) => (props.align || props.ai ? props.align || props.ai : 'center')};
    justify-content: ${(props) =>
        props.justify || props.jc ? props.justify || props.jc : 'center'};
    flex-direction: ${(props) =>
        props.direction || props.fd ? props.direction || props.fd : 'row'};
    flex-wrap: ${(props) => (props.wrap || props.fw ? props.wrap || props.fw : '')};
    ${SizeMixin({ width: '80%' })}

    @media ${device.desktop} {
        ${SizeMixin({ max_width: '1200px' })}
    }
    @media ${device.laptopL} {
        ${SizeMixin({ width: '84%' })}
    }
    @media ${device.laptopM} {
        flex-direction: ${(props) => props.laptop_direction};
    }
    @media ${device.desktopL} {
        ${SizeMixin({ max_width: '1600px' })}
    }
    @media ${device.tabletL} {
        ${SizeMixin({ width: '90%' })}
        ${PaddingMixin({ x: 0 })}
        flex-direction: ${(props) => props.tablet_direction};
    }

    ${responsiveStyles}
`

export default Container
