import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const CardContainer = styled(Flex)`
    align-items: flex-start;
    justify-content: center;
    background-color: var(--color-white);
    box-shadow: 0 4px 8px rgba(14, 14, 14, 0.1);
    border-radius: 4px;
    margin-bottom: 24px;

    @media ${device.tablet} {
        max-width: 328px;
    }
`

export const Container = styled.div`
    width: 100%;
    background-color: var(--color-grey-30);
`

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    @media ${device.tabletL} {
        display: grid;
        grid-row-gap: 30px;
    }

    @media ${device.tablet} {
        grid-row-gap: 30px;
        padding: 40px 16px;
    }
`

export const ContentWrapper = styled(Flex)`
    flex-direction: column;
    width: fit-content;
    margin-right: 24px;
`

export const IconWrapper = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 12px;
    margin-top: 12px;
`

export const TextWrapper = styled(Text)`
    max-width: ${({ max_width }) => max_width ?? 'auto'};
    width: fit-content;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--color-black-3);
    padding: ${({ padding }) => padding ?? 0};
    margin-top: ${({ margin_top }) => margin_top ?? 0};

    @media ${device.tablet} {
        max-width: ${({ max_width_m }) => max_width_m ?? 'auto'};
        padding: ${({ padding_m }) => padding_m ?? 0};
        margin-top: ${({ margin_top_m }) => margin_top_m ?? 0};
        margin-bottom: ${({ margin_bottom_m }) => margin_bottom_m ?? 0};
        font-size: 14px;
        line-height: 20px;
    }
`

export const Title = styled(Header)`
    max-width: 282px;
    width: fit-content;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: var(--color-black-3);

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`
