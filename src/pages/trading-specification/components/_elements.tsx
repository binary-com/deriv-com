import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Header as HeaderText } from 'components/elements'
import device from 'themes/device'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import * as icons from 'components/elements/symbols'

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 60px;
`
export const TableData = styled.table`
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

    th {
        width: 150px;
    }
    td {
        width: 145px;
    }
    th:nth-child(2),
    td:nth-child(1) {
        width: 30px;
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
export const CellIcon = styled.div`
    display: flex;
    justify-content: end;
`
type TTableHeaderCell = {
    text?: ReactElement
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
export const TableCell = ({ text }: TTableCell) => {
    return (
        <Cell>
            <StyledHeaderText type="small" weight="normal" align="start">
                {text}
            </StyledHeaderText>
        </Cell>
    )
}
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
export type CardProps = {
    width?: string
    height?: string
    padding?: string
    tabletHeight?: string
    mobileHeight?: string
    headerHeight?: string
}
export const Card = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
`
export const ModalCard = styled.div`
    position: relative;
    z-index: 210;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    max-width: 44rem;
    background: var(--color-white);
    padding: 2.4rem;
    width: 450px;
    height: auto;
    gap: 16px;
    @media ${device.mobileL} {
        width: 80%;
    }
`
export const TableWrapper = styled.table`
    width: 100%;
    font-size: var(--text-size-s);
    color: var(--color-black-3);
    line-height: 1.5;
`

export const Tr = styled.tr``

export const Th = styled.th``

export const Td = styled.td``

export const HowItsCalculated = styled.div`
    display: flex;
    width: auto;
    padding: 16px 0;
    justify-content: center;
    border-top: 1px solid var(--color-grey-21);
`

export const StyledLinkButton = styled(Button)`
    border: none;
    color: var(--color-red);
    font-size: 14px;
    background: none;

    @media ${device.tabletL} {
        font-size: 14px;
    }
`
export const BackButton = styled(Button)`
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
    height: 40px;
    padding: 0 1.6rem;
    margin-right: 0.8rem;
`
export const StyledHeading = styled(Flex)``
export const CloseIconButton = styled.img`
    width: 16px;
`
