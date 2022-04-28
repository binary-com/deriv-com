import styled, { css } from 'styled-components'
import { Box, CssGrid, Flex } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'

type DescriptionsProps = {
    margin_top?: string
}

type MarketsListProps = {
    has_right_border: string
    col: number
    tablet_col: number
    mobile_col: number
    gap: string
}
type OptionsRowProps = {
    is_first_child: boolean
}

type LatestMarketsListProps = {
    flex: string
    has_right_border: boolean
    col: number
    tablet_col: number
    padding: string
    gap: string
}

type StyledTextProps = {
    font_size: string
    align: string
}

export const Col = styled(Flex)`
    max-width: 130px;
    padding: 0 4px;

    @media ${device.tabletL} {
        max-width: unset;
        width: 100%;
        /* max-width: ${({ full_width }) => (full_width ? '80px' : '129px')}; */
        border-bottom: 1px solid var(--color-grey-22);
        ${({ mobile_template }) =>
            mobile_template && 'padding: 16px 0;border-bottom: 1px solid var(--color-grey-22)'};
    }
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

export const Descriptions = styled.div<DescriptionsProps>`
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
            margin-top: 8px;
            font-size: 12px;
            line-height: 18px;
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

    @media ${device.tabletL} {
        ${({ mobile_template }) => mobile_template && 'flex-direction:column'};
        min-height: 76px;
        flex-direction: column;
        justify-content: center;
    }
`

export const MarketsList = styled(CssGrid)<MarketsListProps>`
    border-left: 1px solid var(--color-grey-22);
    border-right: ${({ has_right_border }) =>
        has_right_border ? '1px solid var(--color-grey-22)' : 'unset'};
    grid-template-columns: ${({ col }) => `repeat(${col ?? 3}, 1fr)`};
    width: 100%;
    height: fit-content;
    padding: 24px;
    gap: ${({ gap }) => (gap ? gap : '10px')};

    @media ${device.tabletL} {
        gap: 10px;
        grid-template-columns: ${({ tablet_col }) => `repeat(${tablet_col ?? 2}, 1fr)`};
    }

    @media ${device.mobileL} {
        grid-template-columns: ${({ mobile_col }) => `repeat(${mobile_col ?? 1}, 1fr)`};
    }
`

export const LatestMarketsList = styled(CssGrid)<LatestMarketsListProps>`
    ${({ flex }) => flex && 'display:flex;'};
    border-left: 1px solid var(--color-grey-22);
    border-right: ${({ has_right_border }) =>
        has_right_border ? '1px solid var(--color-grey-22)' : 'unset'};
    grid-template-columns: ${({ col }) => `repeat(${col ?? 4}, 1fr)`};
    width: 100%;
    height: fit-content;
    padding: ${({ padding }) => (padding ? padding : '24px')};
    gap: ${({ gap }) => (gap ? gap : '10px')};

    @media ${device.tabletL} {
        grid-template-columns: ${({ tablet_col }) => `repeat(${tablet_col ?? 2}, 1fr)`};
        display: grid;
        min-height: 76px;
    }

    @media ${device.mobileL} {
        grid-template-columns: ${({ mobile_col }) => `repeat(${mobile_col ?? 2}, 1fr)`};
        ${({ mobile_template }) => mobile_template && 'border-left: unset;'};
        padding: 16px 8px;
        gap: ${({ gap_mobile }) => (gap_mobile ? gap_mobile : '8px 0')};
    }
`
export const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 24px;
    }
`

export const OptionsRow = styled(Flex)<OptionsRowProps>`
    margin-top: ${({ is_first_child }) => (is_first_child ? '0' : '40px')};
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: ${({ is_first_child }) => (is_first_child ? '0' : '24px')};
    }

    ${Col} {
        max-width: 384px;
    }
`

export const StyledText = styled(Text)<StyledTextProps>`
    @media ${device.tabletL} {
        font-size: ${({ font_size }) => font_size ?? '20px'};
        text-align: ${({ align }) => align ?? 'left'};
    }

    @media ${device.mobileL} {
        max-width: 328px;
    }
`

export const SymbolContainer = styled(Flex)`
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
    ${Text} {
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
    }

    @media ${device.mobileL} {
        > img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
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
        margin: 16px 0;
        font-weight: 600;
        font-size: 14px;
    }
`
type StyledBoxProps = {
    text: string
}
export const StyledBox = styled(Box)<StyledBoxProps>`
    content: ${(props) => (props.text ? props.text : '')};
`
