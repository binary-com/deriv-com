import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Localize, LocalizedLink } from 'components/localization'
import { TString } from 'types/generics'
// SVG
import {
    Visa,
    VisaElectron,
    MasterCard,
    Maestro,
    Diners,
    Discover,
    LocalDeposit,
    BankDeposit,
    Pix,
    Help2Pay,
    Verve,
    ZingPay,
    MPesa,
    MTN,
    Vodafone,
    Advcash,
    AirTM,
    AstroPay,
    Jeton,
    MiFinity,
    Neteller,
    PayLivre,
    PerfectMoney,
    Skrill,
    Skrill1Tap,
    SticPay,
    Chipper,
    Eps,
    GiroPay,
    Przelewy24,
    RapidTransfer,
    Ideals,
    Bitcoin,
    Ethereum,
    Litecoin,
    UsdCoin,
    Tether,
    TenCoins,
    BitcoinCash,
    Dogecoin,
    Tron,
    XRP,
    Cardano,
    BNB,
    Banxa,
    LocalVouchers,
    Oxxo,
    PagoEfectivo,
    Spei,
    OneVoucher,
    PaySafeCard,
    DP2P,
} from 'images/svg/payment-methods'

type LocaleType = { language?: string }

type PaymentType = {
    method?: ReactElement
    currencies?: string | TString
    min_max_deposit?: TString
    min_max_deposit_components?: ReactElement[]
    min_max_withdrawal?: TString
    min_max_withdrawal_components?: ReactElement[]
    deposit_time?: TString
    withdrawal_time?: TString
    description?: TString
    name?: string
    reference?: string
    locales?: string[]
    url?: string
    reference_link?: ReactElement
    minimum_deposit?: number | ReactElement
    minimum_withdrawal?: number | ReactElement
}

export type PaymentProps = {
    payment_data?: PaymentType
    locale?: { locale?: LocaleType }
    is_crypto?: boolean
    is_row?: boolean
    is_eu?: boolean
    is_fiat_onramp?: boolean
    is_dp2p?: boolean
}

export type PaymentDataProps = {
    name?: TString
    note?: TString
    class_name?: string
    is_crypto?: boolean
    is_row?: boolean
    is_eu?: boolean
    is_dp2p?: boolean
    is_fiat_onramp?: boolean
    locale?: LocaleType
    data?: Array<PaymentType>
}

const StyledIcon = styled.img`
    width: 100%;
`
const StyledRefLink = styled(LocalizedLink)`
    font-size: 16px;
    line-height: 24px;
    color: var(--color-red);
    display: flex;
    justify-content: center;
`
/* commented for now unless there is an item that has no icon */
// const NoIconText = styled.div`
//     color: var(--color-red);
//     font-size: 16px;
//     font-weight: bold;
//     text-align: center;
// `

const payment_data: PaymentDataProps[] = [
    {
        name: '_t_Credit & debit cards_t_',
        note: '_t_Withdrawals may take up to 15 working days to reflect on your card._t_',
        is_row: true,
        class_name: 'cards',
        data: [
            {
                method: <StyledIcon src={Visa} alt="Visa" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description:
                    '_t_Make deposits and withdrawals using your credit and debit cards._t_',
                name: 'visa',
            },
            {
                method: <StyledIcon src={VisaElectron} alt="Visa Electron" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description:
                    '_t_Make deposits and withdrawals using your credit and debit cards._t_',
                name: 'VisaElectron',
            },
            {
                method: <StyledIcon src={MasterCard} alt="Mastercard" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make deposits using your credit and debit cards._t_',
                name: 'mastercard',
            },
            {
                method: <StyledIcon src={Maestro} alt="Maestro" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make deposits using your credit and debit cards._t_',
                name: 'maestro',
            },
            {
                method: <StyledIcon src={Diners} alt="Diners" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description:
                    '_t_Make deposits and withdrawals using your credit and debit cards._t_',
                name: 'diners',
            },
            {
                method: <StyledIcon src={Discover} alt="Discover" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make deposits using your credit and debit cards._t_',
            },
        ],
    },
    {
        name: '_t_Online banking_t_',
        note: '_t_Not all payment methods are available in your country. Kindly check your cashier for further information. Withdrawals may take up to 15 working days to reflect in your bank account._t_',
        is_row: true,
        class_name: 'online-banking',
        data: [
            {
                method: <StyledIcon src={LocalDeposit} alt="local bank deposits" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_1 working day_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make easy deposits through your local banks._t_',
                name: 'LocalBankDeposits',
            },
            {
                method: <StyledIcon src={BankDeposit} alt="major bank deposits" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_15 - 1,000_t_',
                deposit_time: '_t_1 working day_t_',
                withdrawal_time: '_t_1 - 2 working days_t_',
                description: '_t_Make easy deposits via any major bank._t_',
                name: 'MajorBankDeposits',
            },
            {
                method: <StyledIcon src={Pix} alt="pix" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_10 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description:
                    '_t_Make fast deposits using PIX, Brazilian banks’ most popular payment solution._t_',
                name: 'pix',
            },
            {
                method: <StyledIcon src={Help2Pay} alt="help2pay" />,
                currencies: 'USD',
                min_max_deposit: '_t_15 - 5,000_t_',
                min_max_withdrawal: '_t_15 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 - 2 working days_t_',
                description:
                    '_t_Make deposits and withdrawals through your local bank in real-time._t_',
                name: 'Help2Pay',
            },
            {
                method: <StyledIcon src={Verve} alt="verve" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Deposit through your local payment cards._t_',
                name: 'verve',
            },
            {
                method: <StyledIcon src={ZingPay} alt="zingPay" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 500_t_',
                min_max_withdrawal: '_t_10 - 5,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 - 5 working days_t_',
                description:
                    '_t_Make deposits and withdrawals through your local bank in real-time._t_',
                name: 'ZingPay',
            },
        ],
    },
    {
        name: '_t_Mobile payments_t_',
        note: '_t_Not all payment methods are available in your country. Kindly check your cashier for further information._t_',
        is_row: true,
        class_name: 'mobile-payments',
        data: [
            {
                method: <StyledIcon src={MPesa} alt="m-pesa" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make fast and easy deposits through your bank account._t_',
                name: 'MPesa',
            },
            {
                method: <StyledIcon src={MTN} alt="mtn" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make fast and easy deposits through your bank account._t_',
                name: 'MTN',
            },
            {
                method: <StyledIcon src={Vodafone} alt="vodafone" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make fast and easy deposits through your bank account._t_',
                name: 'Vodafone',
            },
        ],
    },
    {
        name: '_t_E-wallets_t_',
        note: '_t_Not all payment methods are available in your country. Kindly check your cashier for further information._t_',
        is_row: true,
        data: [
            {
                method: <StyledIcon src={Advcash} alt="advcash" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using your e-wallet._t_',
                name: 'advcash',
            },
            {
                method: <StyledIcon src={AirTM} alt="airtm" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 2,500_t_',
                min_max_withdrawal: '_t_5 - 2,500_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'airtm',
            },
            {
                method: <StyledIcon src={AstroPay} alt="astropay" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'astropay',
            },
            {
                method: <StyledIcon src={Jeton} alt="jeton" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'jeton',
            },
            {
                method: <StyledIcon src={MiFinity} alt="mifinity" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 500_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using your e-wallet._t_',
                name: 'mifinity',
            },
            {
                method: <StyledIcon src={Neteller} alt="neteller" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 10,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'neteller',
            },
            {
                method: <StyledIcon src={PayLivre} alt="paylivre" />,
                currencies: 'USD',
                min_max_deposit: '_t_5 - 5,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using your local e-wallet._t_',
                name: 'paylivre',
            },
            {
                method: <StyledIcon src={PerfectMoney} alt="perfect money" />,
                currencies: 'USD, EUR',
                min_max_deposit: '_t_5 - 10,000_t_',
                min_max_withdrawal: '_t_5 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'perfectmoney',
            },
            {
                method: <StyledIcon src={Skrill} alt="skrill" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 10,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'skrill',
            },
            {
                method: <StyledIcon src={Skrill1Tap} alt="skrill1tap" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 10,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using your e-wallet._t_',
                name: 'skrill1tap',
            },
            {
                method: <StyledIcon src={SticPay} alt="sticpay" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_5 - 10,000_t_',
                min_max_withdrawal: '_t_5 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using your e-wallet._t_',
                name: 'sticpay',
            },
            {
                method: <StyledIcon src={Chipper} alt="chipper" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 250_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'chipper',
            },
        ],
    },
    {
        name: '_t_Credit & debit cards_t_',
        note: '_t_Withdrawals may take up to 15 working days to reflect on your card._t_',
        is_eu: true,
        data: [
            {
                method: <StyledIcon src={Visa} alt="visa" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description:
                    '_t_Make deposits and withdrawals using your credit and debit cards._t_',
                name: 'visa',
            },
            {
                method: <StyledIcon src={VisaElectron} alt="visa electron" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description:
                    '_t_Make deposits and withdrawals using your credit and debit cards._t_',
                name: 'VisaElectron',
            },
            {
                method: <StyledIcon src={Maestro} alt="maestro" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make deposits using your credit and debit cards._t_',
                name: 'maestro',
            },
            {
                method: <StyledIcon src={MasterCard} alt="mastercard" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 5,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make deposits using your credit and debit cards._t_',
                name: 'mastercard',
            },
        ],
    },
    {
        name: '_t_E-wallets_t_',
        is_eu: true,
        note: '_t_Not all payment methods are available in your country. Kindly check your cashier for further information._t_',
        class_name: 'e-wallets',
        data: [
            {
                method: <StyledIcon src={Skrill} alt="skrill" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 10,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'skrill',
            },
            {
                method: <StyledIcon src={Neteller} alt="neteller" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 10,000_t_',
                min_max_withdrawal: '_t_10 - 10,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'neteller',
            },
            {
                method: <StyledIcon src={Jeton} alt="jeton" />,
                currencies: 'EUR',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant e-wallet deposits._t_',
                name: 'jeton',
            },
        ],
    },
    {
        name: '_t_Online banking_t_',
        is_eu: true,
        note: '_t_Not all payment methods are available in your country. Kindly check your cashier for further information._t_',
        data: [
            {
                method: <StyledIcon src={Eps} alt="eps" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_25 - 100_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make direct online transfers from your bank account._t_',
                name: 'eps',
            },
            {
                method: <StyledIcon src={GiroPay} alt="giropay" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_25 - 100_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make direct online transfers from your bank account._t_',
                name: 'Eps',
            },
            {
                method: <StyledIcon src={Przelewy24} alt="przelewy24" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_25 - 100_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make easy deposits via any major local bank._t_',
                name: 'przelewy24',
            },
            {
                method: <StyledIcon src={RapidTransfer} alt="rapid transfer" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_25 - 100_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description:
                    '_t_Make instant bank transfers to all the major banks in your country._t_',
                name: 'rapidtransfer',
            },
            {
                method: <StyledIcon src={Ideals} alt="ideals" />,
                currencies: 'USD, EUR, GBP',
                min_max_deposit: '_t_10 - 10,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make easy deposits via any major local bank._t_',
                name: 'rapidtransfer',
            },
        ],
    },
    {
        name: '_t_Cryptocurrencies_t_',
        is_crypto: true,
        note: '_t_The minimum amount for withdrawal will vary depending on the latest exchange rates. The figures shown here have been rounded._t_',
        class_name: 'cryptocurrencies',
        data: [
            {
                method: <StyledIcon src={Bitcoin} alt="Bitcoin" />,
                currencies: 'BTC',
                min_max_deposit: '_t_No minimum_t_',
                min_max_withdrawal: '_t_0.0006631_t_',
                deposit_time: '_t_Funds available as soon as confirmed_t_',
                withdrawal_time: '_t_Subject to internal checks_t_',
                description:
                    '_t_Deposit and withdraw in Bitcoin, the world’s first cryptocurrency._t_',
                name: 'BTC',
            },
            {
                method: <StyledIcon src={Ethereum} alt="Ethereum" />,
                currencies: 'ETH',
                min_max_deposit: '_t_No minimum_t_',
                min_max_withdrawal: '_t_0.02760334_t_',
                deposit_time: '_t_Funds available as soon as confirmed_t_',
                withdrawal_time: '_t_Subject to internal checks_t_',
                description:
                    '_t_Deposit and withdraw in Ethereum, among the top 3 most used cryptocurrencies._t_',
                name: 'ETH',
            },
            {
                method: <StyledIcon src={Litecoin} alt="Litecoin" />,
                currencies: 'LTC',
                min_max_deposit: '_t_No minimum_t_',
                min_max_withdrawal: '_t_0.0535087_t_',
                deposit_time: '_t_Funds available as soon as confirmed_t_',
                withdrawal_time: '_t_Subject to internal checks_t_',
                description:
                    '_t_Deposit and withdraw in Litecoin, a durable cryptocurrency with fast transaction processing._t_',
                name: 'LTC',
            },
            {
                method: <StyledIcon src={UsdCoin} alt="UsdCoin" />,
                currencies: 'USDC',
                min_max_deposit: '_t_No minimum_t_',
                min_max_withdrawal: '_t_25.03_t_',
                deposit_time: '_t_Funds available as soon as confirmed_t_',
                withdrawal_time: '_t_Subject to internal checks_t_',
                description:
                    '_t_Deposit and withdraw in USD Coin, a cryptocurrency that’s pegged to USD._t_',
                name: 'USDC',
            },

            {
                method: <StyledIcon src={Tether} alt="Tether ERC20 (eUSDT)" />,
                currencies: 'Tether ERC20 (eUSDT)',
                min_max_deposit: '_t_No minimum_t_',
                min_max_withdrawal: '_t_24.88_t_',
                deposit_time: '_t_Funds available as soon as confirmed_t_',
                withdrawal_time: '_t_Subject to internal checks_t_',
                description:
                    '_t_Deposit and withdraw in Tether, a cryptocurrency that’s pegged to fiat currencies._t_',
                name: 'eUSDT',
            },
            {
                method: <StyledIcon src={Tether} alt="Tether TRC20 (tUSDT)" />,
                currencies: 'Tether TRC20 (tUSDT)',
                min_max_deposit: '_t_No minimum_t_',
                min_max_withdrawal: '_t_24.88_t_',
                deposit_time: '_t_Funds available as soon as confirmed_t_',
                withdrawal_time: '_t_Subject to internal checks_t_',
                description:
                    '_t_Deposit and withdraw in Tether, a cryptocurrency that’s pegged to fiat currencies._t_',
                name: 'tUSDT',
            },
        ],
    },
    {
        name: '_t_On-ramp / Off-ramp_t_',
        is_row: true,
        note: '_t_Not all payment methods are available in your country. Kindly check your cashier for further information._t_',
        class_name: 'fiat-onramp',
        data: [
            {
                method: <StyledIcon src={TenCoins} alt="TenCoins" />,
                currencies: 'USD',
                min_max_deposit: '_t_20 - 500_t_',
                min_max_withdrawal: '_t_10 - 2,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'TenCoins',
            },
            {
                method: <StyledIcon src={BitcoinCash} alt="BitCoinCash" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'BitCoinCash',
            },
            {
                method: <StyledIcon src={Bitcoin} alt="BitCoin" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_20 - 1,000_t_',
                min_max_withdrawal: '_t_20 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'BitCoin',
            },
            {
                method: <StyledIcon src={Dogecoin} alt="DogeCoin" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_10 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'DogeCoin',
            },
            {
                method: <StyledIcon src={Ethereum} alt="Ethereum" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_50 - 1,000_t_',
                min_max_withdrawal: '_t_50 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'Ethereum',
            },
            {
                method: <StyledIcon src={Litecoin} alt="LiteCoin" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'LiteCoin',
            },
            {
                method: <StyledIcon src={Tron} alt="Tron" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_10 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'Tron',
            },
            {
                method: <StyledIcon src={XRP} alt="XRP" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_10 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'XRP',
            },
            {
                method: <StyledIcon src={Cardano} alt="Cardano" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_10 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'Cardano',
            },
            {
                method: <StyledIcon src={UsdCoin} alt="UsdCoin" />,
                currencies: 'USD, EUR',
                min_max_deposit: '_t_25 - 500_t_',
                min_max_withdrawal: '_t_25 - 500_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'UsdCoin',
            },
            {
                method: <StyledIcon src={BNB} alt="BNB" />,
                currencies: 'USD, EUR',
                min_max_deposit: '_t_25 - 1,500_t_',
                min_max_withdrawal: '_t_25 - 500_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'BNB',
            },
            {
                method: <StyledIcon src={Banxa} alt="Banxa" />,
                currencies: 'BTC, ETH, LTC, USDC, USDT',
                min_max_deposit: '_t_50 - 5,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_5 - 30 minutes_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using crypto to your fiat account._t_',
                name: 'Banxa',
            },
        ],
    },
    {
        name: '_t_Voucher_t_',
        is_row: true,
        note: '_t_Not all payment methods are available in your country. Kindly check your cashier for further information._t_',
        class_name: 'voucher',
        data: [
            {
                method: <StyledIcon src={LocalVouchers} alt="LocalVouchers" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 1,000_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using your local voucher system._t_',
                name: 'LocalVouchers',
            },
            {
                method: <StyledIcon src={Oxxo} alt="Oxxo" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 100_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using your local voucher system._t_',
                name: 'Oxxo',
            },
            {
                method: <StyledIcon src={PagoEfectivo} alt="PagoEfectivo" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_10 - 700_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using your local voucher system._t_',
                name: 'PagoEfectivo',
            },
            {
                method: <StyledIcon src={Spei} alt="Spei" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_20 - 800_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using your local voucher system._t_',
                name: 'Spei',
            },
            {
                method: <StyledIcon src={OneVoucher} alt="OneVoucher" />,
                currencies: 'USD',
                min_max_deposit: '_t_10 - 200_t_',
                min_max_withdrawal: '_t_Not applicable_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_Not applicable_t_',
                description: '_t_Make instant deposits using your local voucher system._t_',
                name: 'OneVoucher',
            },
            {
                method: <StyledIcon src={PaySafeCard} alt="PaySafeCard" />,
                currencies: 'USD, EUR, AUD, GBP',
                min_max_deposit: '_t_5 - 1,000_t_',
                min_max_withdrawal: '_t_5 - 1,000_t_',
                deposit_time: '_t_Instant_t_',
                withdrawal_time: '_t_1 working day_t_',
                description: '_t_Make deposits using your local voucher system._t_',
                name: 'PaySafeCard',
            },
        ],
    },
    {
        is_dp2p: true,
        name: '_t_Deriv P2P_t_',
        note: '_t_Please contact our customer support if you wish to increase your daily deposit/withdrawal limits._t_',
        data: [
            {
                method: <StyledIcon src={DP2P} alt="DP2P" />,
                currencies: '_t_Your local currency_t_',
                min_max_deposit: '_t_Deriv USD account_t_',
                min_max_withdrawal: '_t_500 USD_t_',
                deposit_time: '_t_500 USD_t_',
                withdrawal_time: '_t_Max 1 hour_t_',
                reference_link: (
                    <StyledRefLink to="/p2p/" target="_blank" rel="noopener noreferrer">
                        <Localize translate_text="_t_Learn more about Deriv P2P_t_" />
                    </StyledRefLink>
                ),
                name: 'DP2P',
            },
        ],
        class_name: 'deriv-p2p',
    },
]

export default payment_data
