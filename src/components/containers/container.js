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

export const FlexGridContainer = styled(Container)`
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: ${props =>
        props.justify ? props.justify : 'space-between'};
    width: 100%;

    & > * {
        flex-shrink: 0;
        width: ${props => (props.content_width ? props.content_width : '48%')};
        margin: ${props => (props.gap ? props.gap : '1rem')};
    }
`

export const SectionContainer = styled.section`
    width: 100%;
    padding: 8rem 0;
`

export default Container
