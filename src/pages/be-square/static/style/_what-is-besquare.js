import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

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
        padding: 40px 16px;
    }
`

export const ContentWrapper = styled(Flex)`
    flex-direction: column;
    width: fit-content;
    margin-right: 24px;
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
