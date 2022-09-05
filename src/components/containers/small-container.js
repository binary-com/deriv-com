import styled from 'styled-components'
import { Container } from 'components/containers'
import device from 'themes/device'
import { SizeMixin, PaddingMixin } from 'themes/mixins'

const SmallContainer = styled(Container)`
    ${SizeMixin({ width: '60%', max_width: '62.5rem' })}
    @media ${device.desktop} {
        ${SizeMixin({ max_width: '792px' })}
    }
    @media ${device.laptopL} {
        ${SizeMixin({ width: '60%' })}
    }
    @media ${device.desktopL} {
        ${SizeMixin({ max_width: '1000px' })}
    }
    @media ${device.tabletL} {
        ${SizeMixin({ width: '90%' })}
        ${PaddingMixin({ x: 0 })}
    }
`

export default SmallContainer
