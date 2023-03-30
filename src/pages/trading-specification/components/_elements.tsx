import React, { ReactElement, useState } from 'react'
import styled, { css } from 'styled-components'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { TAvailableLiveMarkets, TInstrumentData } from '../_types'
import PopUpMenu from './_popup_menu'
import { Header as HeaderText } from 'components/elements'
import device from 'themes/device'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import * as icons from 'components/elements/symbols'
import useRegion from 'components/hooks/use-region'
import dl from 'images/svg/trading-specification/dl.svg'

export const TableContainer = styled.div`
    display: grid;
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
    display: inline-block;
    overflow: auto;
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
    toolTip?: ReactElement
}

type TTableCell = {
    text?: string | number
}
const StyledTableHeaderText = styled(HeaderText)`
    text-decoration: underline;
    text-decoration-style: dashed;
    @media ${device.tabletL} {
        font-size: 10px;
    }
`
const StyledToolTipContainer = styled.div`
    width: 24rem;
`
export const TableHeaderCell = ({ text, infoIcon, toolTip }: TTableHeaderCell) => {
    const [isInfoVisible, setIsInfoVisible] = useState(false)
    const onMouseOver = () => {
        setIsInfoVisible(true)
    }
    const onMouseLeave = () => {
        setIsInfoVisible(false)
    }
    return (
        <>
            {toolTip && (
                <Popover
                    isOpen={isInfoVisible}
                    positions={['top', 'right', 'bottom', 'left']}
                    padding={10}
                    containerStyle={{ left: '-10px' }}
                    content={({ position, childRect, popoverRect }) => (
                        <ArrowContainer
                            style={{
                                backgroundColor: 'var(--color-grey-7)',
                                borderRadius: '3px',
                                padding: '5px',
                            }}
                            position={position}
                            childRect={childRect}
                            popoverRect={popoverRect}
                            arrowColor={'var(--color-grey-7)'}
                            arrowSize={10}
                            arrowStyle={{ bottom: '-10px' }}
                            className="popover-arrow-container"
                            arrowClassName="popover-arrow"
                        >
                            <StyledToolTipContainer>
                                <HeaderText
                                    as="p"
                                    align="center"
                                    weight="normal"
                                    type="extra-small"
                                >
                                    {toolTip}
                                </HeaderText>
                            </StyledToolTipContainer>
                        </ArrowContainer>
                    )}
                >
                    <img src={infoIcon} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
                </Popover>
            )}

            <Cell>
                <StyledTableHeaderText
                    type="small"
                    width="fit-content"
                    align="start"
                    as="p"
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                >
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
    data?: TInstrumentData
    market?: TAvailableLiveMarkets
}
export const TableCellGroup = ({ data, market }: TTableCellGroup) => {
    const { is_row } = useRegion()
    const symbol = data.symbol
    const text = data.instrument
    const dlIcon = data.dl_icon
    const [showPopUp, setShowPopUp] = useState(false)

    if (data !== undefined)
        return (
            <CellIcon>
                {symbol && <img src={icons[symbol]} width="24px" height="24px" />}
                <StyledHeaderText type="small" weight="normal" align="start" as="p">
                    {text}
                </StyledHeaderText>
                {dlIcon && is_row && (
                    <img
                        src={dl}
                        width="24px"
                        height="24px"
                        onClick={() => {
                            setShowPopUp(true)
                            document.body.style.overflow = 'hidden'
                        }}
                    />
                )}
                {showPopUp && (
                    <PopUpMenu
                        market={market}
                        toggle={() => {
                            setShowPopUp(false)
                            document.body.style.overflow = 'scroll'
                        }}
                    />
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
    display: grid;
    padding: 6rem 0;
    gap: 10px;
    justify-content: end;
    @media ${device.tabletL} {
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
`
export const ModalCard = styled.div`
    position: relative;
    z-index: 310;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    max-width: 44rem;
    background: var(--color-white);
    padding: 2.6rem;
    width: 450px;
    height: auto;
    gap: 12px;
    max-height: 88vh;
    overflow: auto;
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
export const DLTableContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 2rem;
    @media ${device.desktop} {
        display: flex;
    }

    @media ${device.tabletL} {
        padding: 0 0 0 3rem;
    }
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
    th: nth-child(2), th: nth-child(3) {
        width: 200px;
    }
`
export const Th = styled.th`
    width: 200px;
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
    justify-content: center;
    padding: 6px 0 0 0;
`
export const StyledFlex = styled(Flex)`
    padding: 1rem;
`
export const StyledLinkButton = styled(Button)`
    border: none;
    color: var(--color-red);
    font-size: 14px;
    background: none;
    padding: 6px 0 0 0;
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
