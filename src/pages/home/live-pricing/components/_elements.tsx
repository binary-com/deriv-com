import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Header as HeaderText } from 'components/elements'
import device from 'themes/device'

export const TableContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const TableLoadingContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid var(--color-grey-8);
    border-right: 2px solid var(--color-grey-8);
    border-bottom: 2px solid var(--color-grey-8);
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`
export const Table = styled.table`
    width: 100%;
`
type TableRowProps = {
    bg?: string
}
export const TableRow = styled.tr<TableRowProps>`
    border-bottom: 2px solid var(--color-grey-8);
    background: ${(props) => (props.bg ? props.bg : 'none')};
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 75px;
    padding: 24px;
`

export const TradingPairsCell = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const LastPriceHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Cell = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 120px;

    @media ${device.tabletL} {
        width: auto;
    }

    & img {
        cursor: pointer;
    }
`

type TTableHeaderCell = {
    text: string | number
    icon_src?: string
    on_icon_click?: () => void
}

type TTableCell = {
    text: string | number
}

export const TableHeaderCell = ({ text }: TTableHeaderCell) => {
    return (
        <Cell>
            <HeaderText type="paragraph-1" width="fit-content" align="start">
                {text}
            </HeaderText>
        </Cell>
    )
}
const StyledHeaderText = styled(HeaderText)`
    width: 18.8rem;
    @media ${device.tabletL} {
        width: 6rem;
    }
`
export const TableCell = ({ text }: TTableCell) => {
    return (
        <Cell>
            <StyledHeaderText type="paragraph-1" weight="normal" align="start">
                {text}
            </StyledHeaderText>
        </Cell>
    )
}

type TDailyPercentageProps = {
    value: number
}

const Container = styled(Cell)`
    justify-content: center;
`

const DailyPercentageText = styled(HeaderText)<{ bull?: boolean }>`
    ${({ bull }) =>
        bull
            ? css`
                  color: var(--color-blue-7);
              `
            : css`
                  color: red;
              `}
`

export const DailyPercentageCell = ({ value }: TDailyPercentageProps) => {
    const valueInInteger = value.replace(/[% ]/g, '')
    return (
        <Container>
            <DailyPercentageText
                bull={valueInInteger >= 0}
                type="paragraph-2"
                weight="normal"
                align="start"
            >
                {value}
            </DailyPercentageText>
        </Container>
    )
}
