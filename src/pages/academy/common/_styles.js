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

export const VideoGrid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin: ${(props) => props.m || props.margin};
    grid-template-columns: repeat(auto-fit, minmax(288px, 384px));
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    grid-template-rows: auto;
    justify-content: center;
`

export const StandardImgWrapper = styled.div`
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '100%')};
    border-radius: ${(props) => (props.br ? props.br : '4px')};
    overflow: hidden;
    position: relative;
    text-align: center;

    ::before {
        content: '';
        float: left;
        padding-bottom: 60%; /* aspect-ratio 5:3 */
    }
    &img,
    .standard-query-img {
        width: 100%;
        height: auto;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }

    @media ${device.tabletL} {
        width: ${(props) => (props.tabletL_width ? props.tabletL_width : '100%')};
        height: ${(props) => (props.tabletL_height ? props.tabletL_height : '100%')};
        border-radius: ${(props) => (props.tabletL_br ? props.tabletL_br : '4px')};
    }

    @media ${device.mobileL} {
        width: ${(props) =>
            props.mobileL_width
                ? props.mobileL_width
                : props.tabletL_width
                ? props.tabletL_width
                : '100%'};
        height: ${(props) =>
            props.mobileL_height
                ? props.mobileL_height
                : props.tabletL_height
                ? props.tabletL_height
                : '100%'};
        border-radius: ${(props) =>
            props.mobileL_br ? props.mobileL_br : props.tabletL_br ? props.tabletL_br : '4px'};
    }
`
