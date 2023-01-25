import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Header as HeaderText } from 'components/elements'
import device from 'themes/device'

export const TableContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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

    th,
    td {
        width: 120px;
    }
    @media ${device.tabletL} {
        th,
        td {
            width: auto;
        }
    }
`
export const Cell = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: auto;

    & img {
        cursor: pointer;
    }
`

type TTableHeaderCell = {
    text: ReactElement
    icon_src?: string
    on_icon_click?: () => void
}

type TTableCell = {
    text: string | number
}
const StyledTableHeaderText = styled(HeaderText)`
    @media ${device.tabletL} {
        font-size: 9px;
    }
`

export const TableHeaderCell = ({ text }: TTableHeaderCell) => {
    return (
        <Cell>
            <StyledTableHeaderText type="small" width="fit-content" align="start">
                {text}
            </StyledTableHeaderText>
        </Cell>
    )
}
const StyledHeaderText = styled(HeaderText)`
    @media ${device.tabletL} {
        width: auto;
        font-size: 11px;
    }
`
export const TableCell = ({ text }: TTableCell) => {
    return (
        <Cell>
            <StyledHeaderText type="small" weight="normal" align="start">
                {text}
            </StyledHeaderText>
        </Cell>
    )
}
