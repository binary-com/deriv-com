import styled from 'styled-components'
import device from 'themes/device'

const GridContainer = styled.section`
    margin: 0 auto;
    width: 80%;
    text-align: ${props => props.align || 'left'};

    @media ${device.desktop} {
        max-width: 1200px;
    }
    @media ${device.desktopL} {
        max-width: 1400px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

export default GridContainer
