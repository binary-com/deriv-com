import styled from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'

export const ContentContainer = styled(Flex)`
    margin: 0 auto;
    flex-direction: column;
    padding-bottom: 80px;
    padding-left: 10px;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        padding-bottom: unset;
    }
`

export const GridContainer = styled.div`
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(4, auto);
    grid-column-gap: 80px;
    grid-row-gap: 16px;
    align-items: flex-start;
    justify-content: center;
    margin-top: 40px;

    @media ${device.laptop} {
        grid-template-columns: repeat(2, auto);
        grid-row-gap: 20px;
        margin-bottom: 40px;
    }

    @media ${device.tablet} {
        grid-template-columns: 283px;
        align-items: center;
        margin-top: 32px;
    }
`

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 16px;

    @media ${device.tablet} {
        grid-row-gap: 8px;
        justify-content: center;
    }
`

export const LineBreak = styled.br`
    @media ${device.tablet} {
        display: none;
    }
`

export const IconWrapper = styled.img`
    margin: auto 0;
    z-index: 2;

    @media ${device.tablet} {
        margin: 0 auto;
    }
`

export const LineWrapper = styled.img`
    width: 100%;
    position: relative;
    top: 70px;

    @media ${device.laptop} {
        bottom: 16%;
    }
    @media ${device.tablet} {
        display: none;
    }
`

export const Line02Wrapper = styled.div`
    margin: 12px auto;
`
