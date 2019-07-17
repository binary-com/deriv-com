import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: ${props => (props.align ? props.align : 'center')};
    padding: 2rem 1rem;
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    flex-direction: ${props => (props.direction ? props.direction : 'row')};
    width: 80%;

    @media ${device.xl} {
        max-width: 1024px;
    }

    @media ${device.xxl} {
        max-width: 1400px;
    }
`

export default Container
