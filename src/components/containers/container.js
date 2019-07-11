import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: ${props => props.alignItems || 'center'};
    padding: 2rem 1rem;
    width: 80%;
    flex-direction: ${props => props.flexDirection || 'row'};

    @media ${device.desktop} {
        max-width: 1024px;
    }

    @media ${device.desktopL} {
        max-width: 1400px;
    }
`

export default Container
