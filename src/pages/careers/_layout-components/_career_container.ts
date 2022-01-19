import styled from 'styled-components'
import device from 'themes/device'
import { Container } from 'components/containers'

const CareerContainer = styled(Container)`
    @media ${device.desktop} {
        max-width: 996px;
    }
    @media ${device.laptopL} {
        max-width: 996px;
        width: 100%;
    }
    @media ${device.desktopL} {
        max-width: 1400px;
    }
`

export default CareerContainer
