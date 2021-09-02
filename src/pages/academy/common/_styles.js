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
