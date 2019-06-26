import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
    max-width: 1024px;
`
Container.defaultProps = {
    mx: 'auto',
}

export default Container
