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
import { useBrowserResize } from 'components/hooks/use-browser-resize'

export const TableContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 12rem;

    @media ${device.tabletL} {
        padding: 0 0 0 16px;
        overflow: scroll;
    }
`
export const TableData = styled.table`
    width: 100%;
    display: inline-block;
    overflow: auto;
    table > :nth-child(1) > tr:nth-of-type(1) {
        height: 110px;
        border-bottom: none;
    }

    @media ${device.tabletL} {
        padding: 0 10px 0 0px;
        overflow-x: auto;
        width: 100%;
    }
`
type TableRowProps = {
    bg?: string
}
export const TableRow = styled.tr<TableRowProps>`
    border-bottom: 2px solid var(--color-grey-8);
    background: ${({ bg }) => bg};
    border-radius: 16px 16px 0 0;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 40px;
    th {
        width: 8.6rem;
    }
    th: nth-child(1) {
        width: 180px;
    }
    th: nth-child(11) {
        width: 160px;
    }
    td {
        width: 8.6rem;
    }
    td: nth-child(1) {
        width: 180px;
    }
    td: nth-child(11) {
        width: 190px;
    }

    @media (max-width: 1700px) {
        gap: 27px;
        th,
        td {
            width: 53px;
        }
        th: nth-child(1) {
            width: 168px;
        }
        th: nth-child(11) {
            width: 200px;
        }
        td: nth-child(1) {
            width: 168px;
        }
        td: nth-child(11) {
            width: 190px;
        }
    }
    @media ${device.tablet} {
        gap: 0;
        justify-content: start;

        th {
            width: 150px;
        }
        td: nth-child(1) {
            width: 170px;
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
                <StyledHeaderText dir="ltr" type="small" weight="normal" align="start" as="p">
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
    const [is_mobile] = useBrowserResize(768)

    if (data !== undefined)
        return (
            <CellIcon>
                {symbol && <img src={icons[symbol]} width="24px" height="24px" />}
                <StyledHeaderText type="small" align="start" as="p">
                    {text}
                </StyledHeaderText>
                {dlIcon &&
                    is_row &&
                    (is_mobile ? (
                        <img
                            src={dl}
                            width="24px"
                            height="24px"
                            onTouchStart={() => {
                                setShowPopUp(true)
                                document.documentElement.scrollTop = 40
                                document.body.style.overflow = 'hidden'
                            }}
                        />
                    ) : (
                        <img
                            src={dl}
                            width="24px"
                            height="24px"
                            onClick={() => {
                                setShowPopUp(true)
                                document.documentElement.scrollTop = 40
                                document.body.style.overflow = 'hidden'
                            }}
                        />
                    ))}
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
    color: var(--color-blue-14);
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
    padding: 3rem 0;
    gap: 10px;
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        padding: 3rem;
        gap: 20px;
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
    top: 0;
    left: 0;
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
    padding: 2.6rem 2.6rem 1.6rem 2.6rem;
    width: 450px;
    height: auto;
    gap: 12px;
    max-height: 80vh;
    overflow: auto;

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
    th: nth-child(1) {
        border-start-start-radius: 16px;
    }
    th: nth-child(3) {
        border-start-end-radius: 16px;
    }
`
export const Th = styled.th`
    width: 200px !important;
    padding: 8px 14px;
    text-align: start;
    background-color: var(--color-white-1);
    font-weight: 700;
    font-size: 12px;
`
export const Td = styled.td`
    padding: 8px 14px;
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
    width: auto;
`
export const StyledHeading = styled(Flex)``

export const CloseIconButton = styled.img`
    width: 16px;
`
