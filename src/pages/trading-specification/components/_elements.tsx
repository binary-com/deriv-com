import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Header as HeaderText } from 'components/elements'
import device from 'themes/device'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import * as icons from 'components/elements/symbols'
import useRegion from 'components/hooks/use-region'
import dl from 'images/svg/trading-specification/dl.svg'

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 12rem;

    @media ${device.tabletL} {
        padding: 0 0 0 3rem;
    }
`
export const TableData = styled.table`
    width: 100%;
    table > :nth-child(1) > tr:nth-of-type(1) {
        height: 110px;
    }

    @media ${device.tabletL} {
        display: inline-block;
        overflow: auto;
    }
    @media ${device.laptopL} {
        display: inline-block;
        overflow: auto;
    }
`
type TableRowProps = {
    bg?: string
}
export const TableRow = styled.tr<TableRowProps>`
    border-bottom: 2px solid var(--color-grey-8);
    background: ${(props) => (props.bg ? props.bg : 'none')};
    border-radius: 16px 16px 0 0;
    display: flex;
    align-items: center;
    padding: 24px;
    gap: 43px;
    th {
        width: 7.6rem;
    }
    th: nth-child(1) {
        width: 200px;
    }
    th: nth-child(11) {
        width: 160px;
    }
    td {
        width: 7.6rem;
    }
    td: nth-child(1) {
        width: 205px;
    }
    td: nth-child(11) {
        width: 134px;
    }

    @media ${device.tabletL} {
        padding: 10px;
        height: 80px;
        gap: 0;
        justify-content: start;

        th {
            width: 150px;
        }
        td: nth-child(1) {
            width: 200px;
        }

        td {
            width: 150px;
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
    align-items: center;
    gap: 12px;
`
type TTableHeaderCell = {
    text?: ReactElement
    infoIcon?: string
}

type TTableCell = {
    text?: string | number
}
const StyledTableHeaderText = styled(HeaderText)`
    @media ${device.tabletL} {
        font-size: 10px;
    }
`
export const TableHeaderCell = ({ text, infoIcon }: TTableHeaderCell) => {
    return (
        <>
            <img src={infoIcon} />
            <Cell>
                <StyledTableHeaderText type="small" width="fit-content" align="start" as="p">
                    {text}
                </StyledTableHeaderText>
            </Cell>
        </>
    )
}
const StyledHeaderText = styled(HeaderText)`
    width: auto;
    @media ${device.tabletL} {
        font-size: 11px;
    }
`
const handleDlIcon = () => {
    document
        .querySelector('#dlPopUp')
        .scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}
export const TableCell = ({ text }: TTableCell) => {
    return (
        <>
            <Cell>
                <StyledHeaderText type="small" weight="normal" align="start" as="p">
                    {text}
                </StyledHeaderText>
            </Cell>
        </>
    )
}

type TTableCellGroup = {
    data: any
}
export const TableCellGroup = ({ data }: TTableCellGroup) => {
    const { is_row } = useRegion()
    const symbol = data.symbol
    const text = data.instrument
    const dlIcon = data.dl_icon

    if (data !== undefined)
        return (
            <CellIcon>
                {symbol && <img src={icons[symbol]} width="24px" height="24px" />}
                <StyledHeaderText type="small" weight="normal" align="start" as="p">
                    {text}
                </StyledHeaderText>
                {dlIcon && is_row && (
                    <img src={dl} width="24px" height="24px" onClick={handleDlIcon} />
                )}
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
    padding: 6rem 12rem;
    gap: 10px;
    justify-content: end;
    @media ${device.mobileL} {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        padding: 6rem 3rem;
    }
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
    top: 53%;
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
    width: 376px;
    height: auto;
    gap: 16px;
    justify-content: center;
    @media ${device.mobileL} {
        width: 80%;
    }
`
export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: var(--color-black);
    opacity: 0.4;
    z-index: 10;
`
export const TableWrapper = styled.table`
    width: 100%;
    font-size: var(--text-size-s);
    color: var(--color-black-3);
    line-height: 1.5;
`
export const Tr = styled.tr`
    border-radius: 16px 16px 0 0;
    text-align: center;
    padding: 8px 24px;
`
export const Th = styled.th`
    padding: 8px 24px;
    text-align: start;
    background-color: #f9f9f9;
    font-weight: 700;
    font-size: 12px;
`
export const Td = styled.td`
    padding: 8px 24px;
    text-align: start;
    box-shadow: inset 0 -2px 0 #f2f3f4;
    font-size: 12px;
`
export const HowItIsCalculated = styled.div`
    display: flex;
    width: auto;
    padding: 16px 0;
    justify-content: center;
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
    border-radius: 15px;
    color: var(--color-black);
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    width: 65px;
`
export const StyledHeading = styled(Flex)``

export const CloseIconButton = styled.img`
    width: 16px;
`
