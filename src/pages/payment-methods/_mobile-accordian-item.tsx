import React from 'react'
import styled from 'styled-components'
import MobileExpandedList from './_mobile-expanded-list'
import { PaymentDataType } from './_payment-data'
import { LocaleType } from './index'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

export type CryptoType = {
    BTC: { minimum_withdrawal: number }
    BUSD: { minimum_withdrawal: number }
    DAI: { minimum_withdrawal: number }
    ETH: { minimum_withdrawal: number }
    EURS: { minimum_withdrawal: number }
    IDK: { minimum_withdrawal: number }
    LTC: { minimum_withdrawal: number }
    PAX: { minimum_withdrawal: number }
    TUSD: { minimum_withdrawal: number }
    USB: { minimum_withdrawal: number }
    USDC: { minimum_withdrawal: number }
    USDK: { minimum_withdrawal: number }
    UST: { minimum_withdrawal: number }
    eUSDT: { minimum_withdrawal: number }
}

export type AccordianItemType = {
    crypto_config?: CryptoType
    locale?: LocaleType
    pd?: PaymentDataType
}

const ParentWrapper = styled(Flex)`
    flex-direction: column;
`
const StyledAccordianItem = styled(Flex)`
    justify-content: space-between;
    border-bottom: 1px solid var(--color-grey-8);

    &:last-child {
        border-bottom: none;
    }
`
const Notes = styled.div`
    width: auto;
    background: var(--color-grey-8);
    margin: 0 -16px;
    padding: 16px;
`

const MobileAccordianItem = ({ crypto_config, locale, pd }: AccordianItemType) => {
    return (
        <>
            <ParentWrapper>
                {pd.data.map((items, idx) => {
                    return (
                        <StyledAccordianItem key={idx} fd="column" ai="center">
                            <MobileExpandedList
                                payment_data={items}
                                locale={locale}
                                crypto_config={crypto_config}
                                is_crypto={pd.is_crypto}
                                is_fiat_onramp={pd.is_fiat_onramp}
                                is_dp2p={pd.is_dp2p}
                            ></MobileExpandedList>
                        </StyledAccordianItem>
                    )
                })}
            </ParentWrapper>

            {pd.note && (
                <Notes>
                    <Header type="paragraph-1" weight="normal">
                        {localize('Note:')} {pd.note}
                    </Header>
                </Notes>
            )}
        </>
    )
}

export default MobileAccordianItem
