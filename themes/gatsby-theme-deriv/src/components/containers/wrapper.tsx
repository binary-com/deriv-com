import styled from 'styled-components'
import device from 'themes/device'

type WrapperProps = {
    media?: string
}

export const DesktopWrapper = styled.div<WrapperProps>`
    display: block;

    @media ${(props) => props.media || device.tabletL} {
        display: none;
    }
`

export const MobileWrapper = styled.div<WrapperProps>`
    display: none;

    @media ${(props) => props.media || device.tabletL} {
        display: block;
    }
`
