import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const ContentContainer = styled(Flex)`
    flex-direction: column;
    padding-bottom: 130px;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        padding-bottom: 88px;
    }
`

export const Title = styled(Header)`
    max-width: 446px;
    width: fit-content;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: 320px;
        font-size: 28px;
        line-height: 34px;
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

    @media ${device.tabletL} {
        grid-template-columns: 283px;
        grid-row-gap: 20px;
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

export const TextWrapper = styled(Text)`
    max-width: 240px;
    width: fit-content;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: 216px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
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
    width: inherit;
    position: absolute;
    bottom: 15.5%;

    @media ${device.laptop} {
        bottom: 16%;
    }

    @media ${device.tabletL} {
        display: none;
    }
`

export const Line02Wrapper = styled.img`
    display: none;

    @media ${device.tablet} {
        display: block;
        margin: 12px auto;
    }
`
