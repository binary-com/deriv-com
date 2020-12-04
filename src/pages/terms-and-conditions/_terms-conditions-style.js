import styled from 'styled-components'
import device from 'themes/device'
import { CssGrid, GridContainer, CssGridColumn } from 'components/containers'
import { Text } from 'components/elements'

export const StyledGrid = styled(CssGrid)`
    @media ${device.tabletS} {
        grid-row-gap: 4rem;
    }
`

export const StyledContainer = styled(GridContainer)`
    margin-top: 8rem;

    @media ${device.tabletS} {
        margin-top: 4rem;
    }
`

export const IconWrapper = styled.div`
    margin-left: -2.4rem;

    @media ${device.tabletS} {
        margin-left: -1.5rem;

        img {
            width: 122px;
            height: 72px;
        }
    }
`

export const GridCol = styled(CssGridColumn)`
    width: 100%;

    ${Text} {
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            font-size: 2rem;
        }
    }
`

export const Cta = styled.div`
    margin: 2rem 1rem 0 0;
    display: grid;
    grid-template-columns: 3.2rem 1fr;
    grid-column-gap: 0.8rem;
    align-items: center;

    a {
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: bold;
        color: var(--color-red);
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }

        @media ${device.tabletS} {
            margin-left: 1rem;
        }
    }
`
