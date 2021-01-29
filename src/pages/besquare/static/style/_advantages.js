import styled from 'styled-components'
import device from 'themes/device'

export const CardContainer = styled.div`
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin: 0 auto 56px;

    @media ${device.laptopM} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.tabletL} {
        max-width: 320px;
        grid-template-columns: repeat(1, 1fr);
        gap: 16px;
        margin-bottom: 0 auto 40px;
    }
`
