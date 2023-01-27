import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Header as HeaderText } from 'components/elements'
import device from 'themes/device'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import audjpy from 'images/svg/symbols/aud-jpy.svg'
import eurcad from 'images/svg/symbols/eur-cad.svg'

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 60px;
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
}

type TTableCell = {
    text: string | number
    icon_src?: string
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
const images = { AUDJPY: audjpy, EURCAD: eurcad }
export const TableCell = ({ text, icon_src }: TTableCell) => {
    console.log(text)
    return (
        <Cell>
            {icon_src === text && <img src={images[text]} width="24px" height="24px" />}
            <StyledHeaderText type="small" weight="normal" align="start">
                {text}
            </StyledHeaderText>
        </Cell>
    )
}
export const StyledButton = styled(Button)`
    border: none;
    background: transparent;
`
export const StyledButtonPage = styled(Button)<{ selected: boolean }>`
    border-radius: 4px;
    background: transparent;
    color: #414652;
    font-weight: 400;
    ${({ selected }) =>
        selected
            ? css`
                  border: 1px solid #d6dadb;
              `
            : css`
                  border: none;
              `}
`
export const StyledPaginationContainer = styled(Flex)`
    padding: 60px 20px;
    gap: 10px;
    justify-content: end;
`
