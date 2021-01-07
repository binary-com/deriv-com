import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const ContentContainer = styled(Flex)`
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;

    @media ${device.tablet} {
        padding-top: 40px;
        padding-bottom: 40px;
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
    margin: 0 auto;

    @media ${device.tablet} {
        max-width: 328px;
        width: fit-content;
        font-size: 24px;
        line-height: 30px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 48px;
    margin: 48px auto 0;

    @media ${device.tablet} {
        grid-template-columns: auto;
        gap: 24px;
        margin: 20px auto 0;
    }
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 64px 296px;
    grid-column-gap: 24px;

    @media ${device.tablet} {
        grid-template-columns: 48px auto;
        gap: 8px;
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

export const TextWrapper = styled(Text)`
    max-width: 296;
    width: fit-content;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--color-black-3);
    margin: auto 0;

    @media ${device.tablet} {
        max-width: 272px;
        width: auto;
        font-size: 14px;
        line-height: 20px;
    }
`
