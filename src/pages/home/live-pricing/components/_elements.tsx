import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Header as HeaderText } from 'components/elements'
import { Button } from 'components/form'

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
    background-color: rgba(0, 0, 0, 0.01);
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
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`

export default Spinner

export const Table = styled.table`
    td:nth-child(3),
    th:nth-child(3) {
        width: 40%;
    }

    width: 100%;
`

export const TableRow = styled.tr`
    border-bottom: 1px solid #f2f3f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 75px;
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
    icon_src?: string
    on_icon_click?: () => void
}

export const TableHeaderCell = ({ text, icon_src, on_icon_click }: TTableHeaderCell) => {
    return (
        <Cell>
            <HeaderText type="paragraph-2" width="fit-content" align="start">
                {text}
            </HeaderText>
            {icon_src && <img src={icon_src} width="24px" height="24px" onClick={on_icon_click} />}
        </Cell>
    )
}
export const TableCell = ({ text, icon_src, on_icon_click }: TTableCell) => {
    return (
        <Cell>
            {icon_src && <img src={icon_src} width="24px" height="24px" onClick={on_icon_click} />}
            <HeaderText type="paragraph-2" weight="normal" align="start">
                {text}
            </HeaderText>
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
                  color: #4bb4b3;
              `
            : css`
                  color: red;
              `}
`

const NumberFormatter = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
})

export const DailyPercentageCell = ({ value }: TDailyPercentageProps) => {
    return (
        <Container>
            <DailyPercentageText bull={value >= 0} type="paragraph-2" weight="normal" align="start">
                {NumberFormatter.format(value)}
            </DailyPercentageText>
            <Button tertiary>Trade</Button>
        </Container>
    )
}
