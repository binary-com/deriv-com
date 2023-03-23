import styled, { css } from 'styled-components'
import { ReactElement } from 'react'
import { Box, CssGrid, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

type DescriptionsProps = {
    margin_top?: string
}

type MarketsListProps = {
    has_right_border?: boolean
    col?: number
    tablet_col?: number
    mobile_col?: number
    gap?: string
    flex?: string
    gap_mobile?: string
    mobile_template?: boolean
}
type OptionsRowProps = {
    is_first_child: boolean
}

type LatestMarketsListProps = {
    has_right_border?: boolean
    col?: number
    tablet_col?: number
    padding?: string
    gap?: string
    mobile_col?: number
    flex?: number
    mobile_template?: boolean
    gap_mobile?: string
}

type StyledTextProps = {
    font_size?: string
    align?: string
}

type RowProps = {
    is_accordion_row?: boolean
    mobile_template?: boolean
}

type ColProps = {
    full_width?: boolean
    mobile_template?: boolean
}

export const Col = styled(Flex)<ColProps>`
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
    max-width: 819px;
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

export const Row = styled(Flex)<RowProps>`
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
    @media ${device.mobileM} {
        gap: 5px;
        grid-template-columns: ${({ tablet_col }) => `repeat(${tablet_col ?? 2}, 1fr)`};
    }
`
export const DerivedMarketsList = styled.div<MarketsListProps>`
    display: grid;
    border-left: 1px solid var(--color-grey-22);
    border-right: ${({ has_right_border }) =>
        has_right_border ? '1px solid var(--color-grey-22)' : 'unset'};
    grid-template-columns: ${({ col }) => `repeat(${col ?? 2}, 1fr)`};
    width: 100%;
    height: fit-content;
    padding: 24px;
    gap: ${({ gap }) => (gap ? gap : '12px')};
    @media ${device.tabletL} {
        grid-template-columns: ${({ tablet_col }) => `repeat(${tablet_col ?? 2}, 1fr)`};
        display: grid;
        min-height: 76px;
    }
    @media ${device.mobileL} {
        grid-template-columns: ${({ mobile_col }) => `repeat(${mobile_col ?? 2}, 1fr)`};
        ${({ mobile_template }) => mobile_template && 'border-left: unset;'};
        gap: ${({ gap_mobile }) => (gap_mobile ? gap_mobile : '')};
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
        align-items: center;
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
        padding: 0 20px;
        font-size: 14px;
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
export const SymbolText = styled(Header)`
    font-weight: normal;

    @media ${device.tabletL} {
        max-width: 100px;
        max-height: 28px;
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
    text: React.ReactNode
    item_title?: React.ReactNode
    item_title_eu?: React.ReactNode
    text_eu?: React.ReactNode
    icon: ReactElement
    link?: React.ReactNode
    link_text?: React.ReactNode
}
export const StyledBox = styled(Box)<StyledBoxProps>`
    content: ${({ text }) => (text ? text : '')};
`
