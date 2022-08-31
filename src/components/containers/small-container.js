import styled from 'styled-components'
import { Container } from 'components/containers'
import device from 'themes/device'

const SmallContainer = styled(Container)`
    inline-size: 60%;
    max-inline-size: 62.5rem;
    @media ${device.desktop} {
        max-inline-size: 792px;
    }
    @media ${device.laptopL} {
        inline-size: 60%;
    }
    @media ${device.desktopL} {
        max-inline-size: 1000px;
    }
    @media ${device.tabletL} {
        inline-size: 90%;
        padding-inline: 0;
    }
`

export default SmallContainer
