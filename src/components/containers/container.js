import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: ${props => (props.align ? props.align : 'center')};
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    flex-direction: ${props => (props.direction ? props.direction : 'row')};
    width: 80%;

    @media ${device.desktop} {
        max-width: 1024px;
    }
    @media ${device.desktopL} {
        max-width: 1400px;
    }
`

export const SectionContainer = styled.section`
    width: 100%;
    padding: 8rem 0;
`

export default Container
