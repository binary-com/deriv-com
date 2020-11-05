import styled from 'styled-components'
import device from 'themes/device'

export const GridSubWrapper = styled.div`
    display: grid;
    grid-template-columns: ${props => props.size ? props.size : '12px 90%'};
    margin-top: 8px;

    @media ${device.laptopM} {
        margin-top: 0;
    }
`