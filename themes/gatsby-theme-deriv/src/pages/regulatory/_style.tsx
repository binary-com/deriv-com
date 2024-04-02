import styled from 'styled-components'
import { BoxProps } from './_type'
import device from 'themes/device'
import { Header, LinkText, Text } from 'components/elements'
import { CssGridColumn, Desktop, Mobile } from 'components/containers'

export const Img = styled.img`
    display: flex;
    width: 16rem;
    height: 8rem;
`

export const ImgFintech = styled.img`
    display: flex;
    width: 160px;
    height: 38.8px;
`

export const StyledHeader = styled(Header)<{ maxwidth?: string }>`
    max-width: ${(props) => props.maxwidth || '100%'};
    margin: 0 auto;
    @media ${device.tabletS} {
        text-align: center;
        margin-bottom: 1.6rem;
    }
`

export const MobileWrapper = styled(Mobile)`
    display: flex;
`

export const DesktopWrapper = styled(Desktop)`
    display: flex;
`
export const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.padding || '4rem 0 0'};
    max-width: ${(props) => props.maxwidth || '100%'};
    ${Text} {
        @media ${device.tabletS} {
            text-align: center;
        }
    }
    @media ${device.tabletS} {
        text-align: center;
    }
`
export const Europe = styled.img`
    max-width: 69rem;
    max-height: 63rem;
    width: 100%;
    height: 100%;
    margin: 0;
`

export const ResponsiveGrid = styled(CssGridColumn)`
    @media ${device.tabletL} {
        justify-self: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ResponsiveHeader = styled(StyledHeader)`
    @media ${device.mobileL} {
        font-size: 5rem;
    }
`

export const StyledLinkText = styled(LinkText)`
    font-weight: bold;
`
