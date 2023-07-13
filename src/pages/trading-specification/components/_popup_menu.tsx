import React, { useState, useEffect } from 'react'
import { TAvailableLiveMarkets, TDLHeaders, TPopupType } from '../_types'
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
    popup_type: TPopupType
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

const PopUpMenu = ({ market, popup_type, toggle }: TPopUpMenuProps) => {
    const [is_loaded, setIsLoaded] = useState(false)
    const [markets_data, setMarketsData] = useState<TDLHeaders[]>()
    const [modalTitle, setModalTitle] = useState<TString>()
    const [modalDescription, setModalDescription] = useState<TString>()
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }

    const [dl, swf] = ['dl', 'swf']
    useEffect(() => {
        market_specification.map((specification) => {
            if (specification.market === market) {
                if (popup_type === dl) {
                    setModalTitle(specification.dl_title)
                    setModalDescription(dl_description)
                    setMarketsData(specification.dl_data)
                } else if (popup_type === swf) {
                    setModalTitle(swf_title)
                    setModalDescription(swf_description)
                }
                setIsLoaded(true)
            }
        })
    }, [market, popup_type])

    return (
        <>
            {is_loaded ? (
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

                            {popup_type === dl ? (
                                <>
                                    <DLTableContainer>
                                        <TableWrapper>
                                            <tbody>
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
                                            </tbody>
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
            ) : null}
        </>
    )
}

export default PopUpMenu
