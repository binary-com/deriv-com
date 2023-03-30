import React, { useState, useEffect } from 'react'
import { TAvailableLiveMarkets } from '../_types'
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
import { Flex } from 'components/containers'

type TPopUpMenuProps = {
    market: TAvailableLiveMarkets
    toggle: (event: React.MouseEvent<HTMLElement>) => void
}

const PopUpMenu = ({ market, toggle }: TPopUpMenuProps) => {
    const [markets_data, setMarketsData] = useState(forex_specification.dl_data)
    const [dlTitle, setDlTitle] = useState(forex_specification.dl_title)
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }

    useEffect(() => {
        market_specification.map((specification) => {
            if (specification.market === market) {
                setMarketsData(specification.dl_data)
                setDlTitle(specification.dl_title)
            }
        })
    }, [market])

    return (
        <>
            <Card>
                {is_calculated ? (
                    <ModalCard>
                        <Header type="subtitle-1" weight="700" as="p">
                            <Localize translate_text="How it’s calculated" />
                        </Header>

                        <HowItsCalculated market={market} />
                        <StyledFlex jc="center">
                            <BackButton tertiary onClick={toggleCalculated}>
                                <Localize translate_text="Back" />
                            </BackButton>
                        </StyledFlex>
                    </ModalCard>
                ) : (
                    <ModalCard>
                        <StyledHeading>
                            <Header type="paragraph-1" weight="700" align="center" as="p">
                                <Localize translate_text={dlTitle} />
                            </Header>
                            <CloseIconButton src={CloseIcon} onClick={toggle} />
                        </StyledHeading>

                        <Header type="paragraph-2" align="center" weight="normal" as="p">
                            <Localize translate_text="With dynamic leverage, the higher the trading volume, the lower the leverage, to reduce your risk and protect you from adverse market movements. At the same time, the first tiers offer high leverage to allow you more trading opportunities." />
                        </Header>
                        <DLTableContainer>
                            <TableWrapper>
                                <Tr>
                                    <Th>
                                        <Localize translate_text="From (lots)" />
                                    </Th>
                                    <Th>
                                        <Localize translate_text="To (lots)" />
                                    </Th>
                                    <Th>
                                        <Localize translate_text="Leverage (1:x)" />
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
                                <Localize translate_text="How dynamic leverage is calculated" />
                            </StyledLinkButton>
                        </HowItIsCalculated>
                    </ModalCard>
                )}
                <Background></Background>
            </Card>
        </>
    )
}

export default PopUpMenu
