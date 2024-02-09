import React from 'react'
import styled from 'styled-components'
import MobileExpandedList from './_mobile-expanded-list'
import { PaymentDataProps } from './_payment-data'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'

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
`
type MobileAccordianItemProps = {
    locale?: {
        locale?: { language?: string }
    }
    pd: PaymentDataProps
}

const DescriptionText = styled(Header)`
    font-size: 16px;
    font-weight: normal;
    padding-bottom: 16px;
    border-bottom: 2px solid var(--color-grey-2);
`
const MobileAccordianItem = ({ locale, pd }: MobileAccordianItemProps) => {
    let displayString = ''

    if (!pd || !pd.name) {
        return null
    }
    switch (pd.name) {
        case '_t_Credit & debit cards_t_':
            displayString = 'Make deposits via cards easily.'
            break
        case '_t_Online banking_t_':
            displayString = 'Send and receive payments directly from your bank account.'
            break
        case '_t_Mobile payments_t_':
            displayString = 'Pay on the go with your phone for instant convenience.'
            break
        case '_t_E-wallets_t_':
            displayString = 'Benefit from quick and secure Deriv payments with your e-wallet.'
            break
        case '_t_Cryptocurrencies_t_':
            displayString = 'Make payments with top cryptocurrencies.'
            break
        case '_t_On-ramp / Off-ramp_t_':
            displayString = 'Send crypto directly to your Deriv account, get credited in fiat.'
            break
        case '_t_Voucher_t_':
            displayString = 'A convenient way to make payments without cards or bank accounts.'
            break
        case '_t_Deriv P2P_t_':
            displayString =
                'Fund your account securely through our peer-to-peer deposit and withdrawal service.'
            break
        default:
            displayString = ''
            break
    }

    return (
        <>
            <DescriptionText>
                {displayString ? <Localize translate_text={`_t_${displayString}_t_`} /> : null}
            </DescriptionText>
            <ParentWrapper>
                {pd.data.map((items, idx) => {
                    return (
                        <StyledAccordianItem key={idx} fd="column" ai="center">
                            <MobileExpandedList
                                payment_data={items}
                                locale={locale}
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
                    <Typography.Paragraph size="small" weight="normal" padding="8x">
                        <Localize translate_text="_t_Note:_t_" />{' '}
                        <Localize translate_text={pd.note} />
                    </Typography.Paragraph>
                </Notes>
            )}
        </>
    )
}

export default MobileAccordianItem
