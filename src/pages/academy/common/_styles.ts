import styled from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'

export const ContainedImg = styled.img`
    object-fit: contain;
`
export const StyledImg = styled.img`
    margin: 0 8px;
`

export const Container = styled(Flex)`
    width: 90%;
    max-width: 1200px;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        width: 100%;
        padding: 0 16px;
    }
`

type VideoGridProps = {
    margin?: string
}

export const VideoGrid = styled.div<VideoGridProps>`
    display: grid;
    width: 100%;
    height: 100%;
    margin: ${(props) => props.margin};
    grid-template-columns: repeat(auto-fit, minmax(288px, 384px));
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    grid-template-rows: auto;
    justify-content: center;

    @media ${device.mobileL} {
        grid-template-columns: unset;
    }
`

type StandardImgWrapperProps = {
    width?: string
    height?: string
    border_radius?: string
    tabletL_width?: string
    tabletL_height?: string
    tabletL_border_radius?: string
    mobileL_width?: string
    mobileL_height?: string
    mobileL_border_radius?: string
}

export const StandardImgWrapper = styled.div<StandardImgWrapperProps>`
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '100%')};
    border-radius: ${(props) => (props.border_radius ? props.border_radius : '4px')};
    overflow: hidden;
    transform: translateZ(0);
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;

    ::before {
        content: '';
        float: left;
        padding-bottom: 60%; /* aspect-ratio 5:3 */
    }

    @media ${device.tabletL} {
        width: ${(props) => (props.tabletL_width ? props.tabletL_width : '100%')};
        height: ${(props) => (props.tabletL_height ? props.tabletL_height : '100%')};
        border-radius: ${(props) =>
            props.tabletL_border_radius ? props.tabletL_border_radius : '4px'};
    }

    @media ${device.mobileL} {
        width: ${(props) => props.mobileL_width ?? props.tabletL_width ?? '100%'};
        height: ${(props) => props.mobileL_height ?? props.tabletL_height ?? '100%'};
        border-radius: ${(props) =>
            props.mobileL_border_radius ?? props.tabletL_border_radius ?? '4px'};
    }
`
