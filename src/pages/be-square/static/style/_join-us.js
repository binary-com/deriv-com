import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const ContentContainer = styled(Flex)`
    flex-direction: column;
    padding: 80px 324px;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`

export const Title = styled(Header)`
    max-width: 690px;
    width: fit-content;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: 328px;
        width: fit-content;
        font-size: 24px;
        line-height: 30px;
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 48px;
    margin-top: 48px;

    @media ${device.tablet} {
        grid-template-columns: repeat(1, 1fr);
        gap: 24px;
        margin-top: 20px;
    }
`

export const IconWrapper = styled.img`
    width: 64px;
    height: 64px;

    @media ${device.tablet} {
        width: 48px;
        height: 48px;
    }
`

export const TextContainer = styled.div`
    max-width: 296;
    width: fit-content;

    @media ${device.tablet} {
        max-width: 272px;
    }
`

export const TextWrapper = styled(Text)`
    font-size: 16px;
    font-weight: ${({ font_weight }) => font_weight ?? 'normal'};
    line-height: 24px;
    color: var(--color-black-3);

    @media ${device.tablet} {
        font-size: 14px;
        line-height: 20px;
    }
`
