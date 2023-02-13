import React, { ReactElement } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Header as HeaderText } from 'components/elements'
import device from 'themes/device'
import { Flex } from 'components/containers'
import * as icons from 'components/elements/symbols-shortcode'

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
    margin-bottom: 40px;
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

    th:nth-child(1) {
        width: 32rem;
    }
    th:nth-child(2) {
        width: 0.2rem;
    }
    td:nth-child(2) {
        width: 30rem;
    }

    @media ${device.tabletL} {
        th:nth-child(1) {
            width: 12rem;
        }
        td:nth-child(2) {
            width: 10rem;
        }
        th:nth-child(6),
        td:nth-child(6) {
            display: none;
        }
    }
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
    width: 138px;

    nth-child(1) {
        width: 220px;
    }

    @media ${device.tabletL} {
        width: auto;
    }

    & img {
        cursor: pointer;
    }
`
export const StyledContainer = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    margin: 0 auto;
    padding: 2rem 0;
    width: 60%;
    @media ${device.tablet} {
        width: 100vw;
    }
`
export const ContainerWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    margin: 0 auto;
    padding: 2rem;
    width: 60%;
    @media ${device.tablet} {
        width: 100vw;
    }
`
type TTableHeaderCell = {
    text?: ReactElement
    icon_src?: string
    on_icon_click?: () => void
}

type TTableCell = {
    text?: string | number
}
const StyledTableHeaderText = styled(HeaderText)`
    @media ${device.tabletL} {
        font-size: 10px;
    }
`
export const CellIcon = styled.div`
    display: flex;
    justify-content: end;
`
type TTableCellIcon = {
    icon_src: string
}
export const TableCellIcon = ({ icon_src }: TTableCellIcon) => {
    return (
        <CellIcon>
            <img src={icons[icon_src]} width="24px" height="24px" />
        </CellIcon>
    )
}

export const TableHeaderCell = ({ text }: TTableHeaderCell) => {
    return (
        <Cell>
            <StyledTableHeaderText type="paragraph-1" width="fit-content" align="start" as="p">
                {text}
            </StyledTableHeaderText>
        </Cell>
    )
}
const StyledHeaderText = styled(HeaderText)`
    @media ${device.tabletL} {
        width: auto;
        font-size: 10px;
    }
`
export const TableCell = ({ text }: TTableCell) => {
    return (
        <Cell>
            <StyledHeaderText type="paragraph-1" weight="normal" align="start" as="p">
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
    @media ${device.tabletL} {
        font-size: 10px;
    }
`

export const DailyPercentageCell = ({ value }: TDailyPercentageProps) => {
    const valueInInteger = value.replace(/[% ]/g, '')
    return (
        <Container>
            <DailyPercentageText
                dir="ltr"
                bull={valueInInteger >= 0}
                type="paragraph-2"
                weight="normal"
                align="start"
                as="p"
            >
                {value}
            </DailyPercentageText>
        </Container>
    )
}
