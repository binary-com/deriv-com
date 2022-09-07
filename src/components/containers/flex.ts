import styled, { css } from 'styled-components'
import Box, { BaseStyleType, generateResponsiveStyles, ResponseDeviceProps } from './box'
import device from 'themes/device'

export const flexStyles = ({ jc, ai, fw, fd }) => css`
    justify-content: ${jc};
    align-items: ${ai};
    flex-wrap: ${fw};
    flex-direction: ${fd};
`

const responsiveStyles = generateResponsiveStyles(flexStyles)

type FlexType = {
    width?: string
    height?: string
    wrap?: string
    fw?: string
    jc?: string
    ai?: string
    fd?: string
    tablet_direction?: string
    tablet_ai?: string
    tablet_jc?: string
    tablet_fw?: string
} & ResponseDeviceProps &
    BaseStyleType

const Flex = styled(Box)<FlexType>`
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
        flex-wrap: ${(props) => props.tablet_fw};
    }

    ${responsiveStyles}
`

export default Flex
