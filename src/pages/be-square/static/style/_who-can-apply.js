import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const Container = styled.div`
    box-shadow: inset 0 1px 0 rgba(51, 51, 51, 0.16);
`

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10%;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    @media ${device.tablet} {
        grid-row-gap: 24px;
        grid-template-columns: 320px;
        padding: 40px 0;
    }
`

export const HeaderWrapper = styled(Flex)`
    flex-direction: column;
    max-width: 384px;
    width: fit-content;
    justify-content: center;

    @media ${device.tablet} {
        max-width: 320px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 24px auto;
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    @media ${device.tablet} {
        grid-template-columns: 16px auto;
        grid-row-gap: 16px;
        grid-column-gap: 8px;
    }
`

export const IconWrapper = styled.img`
    width: 24px;
    height: 24px;

    @media ${device.tablet} {
        width: 16px;
        height: 16px;
    }
`

export const Title = styled(Header)`
    max-width: 384px;
    width: fit-content;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: 328px;
        font-size: 28px;
        line-height: 34px;
    }
`

export const TextWrapper = styled(Text)`
    max-width: ${({ max_width }) => max_width ?? '446px'};
    width: fit-content;
    font-size: ${({ font_size }) => font_size ?? '16px'};
    font-weight: 400;
    line-height: ${({ line_height }) => line_height ?? '24px'};
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: ${({ max_width_m }) => max_width_m ?? '304px'}304px;
        font-size: ${({ font_size_m }) => font_size_m ?? '14px'};
        line-height: ${({ line_height_m }) => line_height_m ?? '20px'};
    }
`
