import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
    width: 80%;

    @media ${device.xl} {
        max-width: 1024px;
    }

    @media ${device.xxl} {
        max-width: 1400px;
    }
`

export default Container
