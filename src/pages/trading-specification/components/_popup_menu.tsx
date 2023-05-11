import React, { useState, useEffect } from 'react'
import { TAvailableLiveMarkets, TPopupType } from '../_types'
import forex_specification from '../data/_forex_specification'
import {
    Card,
    ModalCard,
    Background,
    DLTableContainer,
    TableWrapper,
    Tr,
    Th,
    Td,
    HowItIsCalculated,
    StyledFlex,
    StyledLinkButton,
    BackButton,
    CloseIconButton,
    StyledHeading,
} from './_elements'
import { market_specification } from './_constants'
import HowItsCalculated from './_howItsCalculated'
import CloseIcon from 'images/svg/trading-specification/close-icon.svg'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

type TPopUpMenuProps = {
    market: TAvailableLiveMarkets
    popupType: TPopupType
    toggle: (event: React.MouseEvent<HTMLElement>) => void
}
const how_it_is_calculated: TString = '_t_How it’s calculated_t_'
const back: TString = '_t_Back_t_'
const dl_description: TString =
    '_t_With dynamic leverage, the higher the trading volume, the lower the leverage, to reduce your risk and protect you from adverse market movements. At the same time, the first tiers offer high leverage to allow you more trading opportunities._t_'
const from_lots: TString = '_t_From (lots)_t_'
const to_lots: TString = '_t_To (lots)_t_'
const leverage: TString = '_t_Leverage (1:x)_t_'
const how_dl_is_calculated: TString = '_t_How dynamic leverage is calculated_t_'
const swf_title: TString = '_t_Swap-free_t_'
const swf_description: TString =
    '_t_Please note, while our swap-free accounts come with no overnight financing charges, the spreads on these accounts might be slightly wider than those on our regular account. However, we strive to keep our spreads competitive and offer the best possible pricing to our clients at all times._t_'

const PopUpMenu = ({ market, popupType, toggle }: TPopUpMenuProps) => {
    const [markets_data, setMarketsData] = useState(forex_specification.dl_data)
    const [modalTitle, setModalTitle] = useState(forex_specification.dl_title)
    const [modalDescription, setModalDescription] = useState(dl_description)
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }

    const dl = 'dl'
    const swf = 'swf'
    useEffect(() => {
        market_specification.map((specification) => {
            if (specification.market === market) {
                if (popupType === dl) {
                    setMarketsData(specification.dl_data)
                    setModalTitle(specification.dl_title)
                } else if (popupType === swf) {
                    setModalTitle(swf_title)
                    setModalDescription(swf_description)
                }
            }
        })
    }, [market, popupType])

    return (
        <>
            <Card>
                {is_calculated ? (
                    <ModalCard>
                        <Header type="subtitle-1" as="p">
                            <Localize translate_text={how_it_is_calculated} />
                        </Header>

                        <HowItsCalculated market={market} />
                        <StyledFlex jc="center">
                            <BackButton tertiary onClick={toggleCalculated}>
                                <Localize translate_text={back} />
                            </BackButton>
                        </StyledFlex>
                    </ModalCard>
                ) : (
                    <ModalCard>
                        <StyledHeading>
                            <Header type="paragraph-1" align="center" as="p">
                                <Localize translate_text={modalTitle} />
                            </Header>
                            <CloseIconButton src={CloseIcon} onClick={toggle} />
                        </StyledHeading>

                        <Header type="paragraph-2" align="center" weight="normal" as="p">
                            <Localize translate_text={modalDescription} />
                        </Header>

                        {popupType === 'dl' ? (
                            <>
                                <DLTableContainer>
                                    <TableWrapper>
                                        <Tr>
                                            <Th>
                                                <Localize translate_text={from_lots} />
                                            </Th>
                                            <Th>
                                                <Localize translate_text={to_lots} />
                                            </Th>
                                            <Th>
                                                <Localize translate_text={leverage} />
                                            </Th>
                                        </Tr>
                                        {markets_data.map((data, index) => (
                                            <Tr key={index}>
                                                <Td>{data.from}</Td>
                                                <Td>{data.to}</Td>
                                                <Td>{data.leverage}</Td>
                                            </Tr>
                                        ))}
                                    </TableWrapper>
                                </DLTableContainer>
                                <HowItIsCalculated>
                                    <StyledLinkButton flat onClick={toggleCalculated}>
                                        <Localize translate_text={how_dl_is_calculated} />
                                    </StyledLinkButton>
                                </HowItIsCalculated>
                            </>
                        ) : null}
                    </ModalCard>
                )}
                <Background></Background>
            </Card>
        </>
    )
}

export default PopUpMenu
