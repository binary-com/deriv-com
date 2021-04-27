import styled, { css } from 'styled-components'
import { CssGrid, Flex } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'

export const Col = styled(Flex)`
    max-width: 138px;
    padding: 0 4px;
`

export const ContentWrapper = styled(Flex)`
    flex-direction: column;
    margin: 0 auto;
    max-width: 792px;
`

export const CrashText = styled(Text)`
    width: 690px;
    @media ${device.tabletL} {
        width: 100%;
    }
`

export const Descriptions = styled.div`
    margin-top: ${({ margin_top }) => margin_top ?? '0'};
    padding-bottom: 40px;
    border-bottom: 1px solid var(--color-grey-21);
`

export const DetailsContainer = styled(Flex)`
    flex-direction: column;

    ${Text} {
        font-size: 14px;
        margin-top: 16px;

        @media ${device.tabletL} {
            margin-top: 10px;
        }
    }
`

export const Row = styled(Flex)`
    ${({ is_accordion_row }) => {
        if (!is_accordion_row) {
            return css`
                margin-top: 24px;
                border: 1px solid var(--color-grey-22);
                border-radius: 8px;
            `
        }
    }}
    justify-content: flex-start;
    align-items: center;
`

export const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: ${({ has_right_border }) =>
        has_right_border ? '1px solid var(--color-grey-22)' : 'unset'};
    grid-template-columns: ${({ col }) => `repeat(${col ?? 3}, 1fr)`};
    width: 100%;
    padding: 24px;
    gap: 10px;

    @media ${device.tabletL} {
        grid-template-columns: ${({ tablet_col }) => `repeat(${tablet_col ?? 2}, 1fr)`};
    }

    @media ${device.mobileL} {
        grid-template-columns: ${({ mobile_col }) => `repeat(${mobile_col ?? 1}, 1fr)`};
    }
`

export const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 24px;
    }
`

export const OptionsRow = styled(Flex)`
    margin-top: ${({ is_first_child }) => (is_first_child ? '0' : '40px')};
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: flex-start;
    }

    ${Col} {
        max-width: 384px;
    }
`

export const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: ${({ font_size }) => font_size ?? '20px'};
        text-align: left;
    }
`

export const SymbolContainer = styled(Flex)`
    width: fit-content;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
    ${Text} {
        font-weight: normal;
        font-size: 13.5px;
        line-height: 1.14;
    }

    @media ${device.mobileL} {
        > img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 12px;
        }
    }
`

export const Title = styled(Text)`
    text-align: center;
    font-weight: bold;

    @media ${device.tabletL} {
        font-weight: 600;
        font-size: 14px;
    }
`
