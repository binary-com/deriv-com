import styled, { css } from 'styled-components'
import device from 'themes/device'

export const GridSubWrapper = styled.div`
    display: grid;
    ${({ main_grid }) => {
        if (main_grid) {
            return css`
                grid-template-columns: 74px 200px;
                justify-content: center;
            `
        }
        return css`
            grid-template-columns: 12px 90%;
        `
    }}
    margin-top: 8px;

    @media ${device.laptopM} {
        margin-top: 0;
    }
`