import React, { useState, useEffect } from 'react'
import { TAvailableLiveMarkets } from '../_types'
import forex_specification from '../data/_forex_specification'
import {
    Card,
    ModalCard,
    TableContainer,
    TableWrapper,
    Tr,
    Th,
    Td,
    HowItsCalculated,
    StyledLinkButton,
    BackButton,
    CloseIconButton,
    StyledHeading,
} from './_elements'
import { market_specification } from './_constants'
import CloseIcon from 'images/svg/trading-specification/close-icon.svg'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'

type TPopUpMenuProps = {
    market: TAvailableLiveMarkets
    toggle: (event: React.MouseEvent<HTMLElement>) => void
    is_open: boolean
    closeModal: () => void
}

const PopUpMenu = ({ market, toggle, is_open, closeModal }: TPopUpMenuProps) => {
    const [markets_data, setMarketsData] = useState(forex_specification.dl_data)
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }

    useEffect(() => {
        market_specification.map((specification) => {
            if (specification.market === market) {
                setMarketsData(specification.dl_data)
            }
        })
    }, [market])

    return (
        <Card>
            {is_calculated ? (
                <ModalCard>
                    <Header type="paragraph-1" weight="700" align="center">
                        <Localize translate_text="How it’s calculated" />
                    </Header>
                    <BackButton tertiary onClick={toggleCalculated}>
                        <Localize translate_text="Back" />
                    </BackButton>
                </ModalCard>
            ) : (
                <ModalCard>
                    <StyledHeading>
                        <Header type="paragraph-1" weight="700" align="center">
                            <Localize translate_text="Dynamic tiers FX majors" />
                        </Header>
                        <CloseIconButton src={CloseIcon} onClick={toggle} />
                    </StyledHeading>

                    <Header type="paragraph-2" align="center" weight="normal">
                        <Localize translate_text="With dynamic leverage, the higher the trading volume, the lower the leverage, to reduce your risk and protect you from adverse market movements. At the same time, the first tiers offer high leverage to allow you more trading opportunities." />
                    </Header>
                    <TableContainer>
                        <TableWrapper>
                            <Tr>
                                <Th>
                                    <Localize translate_text="From (lots)" />
                                </Th>
                                <Th>
                                    <Localize translate_text="To (lots)" />
                                </Th>
                                <Th>
                                    <Localize translate_text="Leverage (lots)" />
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
                    </TableContainer>
                    <HowItsCalculated>
                        <StyledLinkButton flat onClick={toggleCalculated}>
                            <Localize translate_text="How it's calculated" />
                        </StyledLinkButton>
                    </HowItsCalculated>
                </ModalCard>
            )}
        </Card>
    )
}

export default PopUpMenu
