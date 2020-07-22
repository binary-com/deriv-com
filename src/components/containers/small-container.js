import styled from 'styled-components'
import { Container } from 'components/containers'
import device from 'themes/device'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;
    @media ${device.desktop} {
        max-width: 792px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

export default SmallContainer
