import React from 'react'
import styled, { css } from 'styled-components'
import { Localize } from 'components/localization'
// SVG
import BankTransfer from 'images/svg/payment-bank-transfer.svg'
import Paytrust from 'images/svg/payment-paytrust.svg'
import Visa from 'images/svg/payment-visa.svg'
import MasterCard from 'images/svg/payment-mastercard.svg'
import Maestro from 'images/svg/payment-maestro.svg'
import Fasapay from 'images/svg/payment-fasapay.svg'
import PerfectMoney from 'images/svg/payment-perfect-money.svg'
import Skrill from 'images/svg/payment-skrill.svg'
import Neteller from 'images/svg/payment-neteller.svg'
import Webmoney from 'images/svg/payment-webmoney.svg'
import Qiwi from 'images/svg/payment-qiwi.svg'
import PaysafeCard from 'images/svg/payment-paysafe.svg'
import Jeton from 'images/svg/payment-jeton.svg'
import Sticpay from 'images/svg/payment-sticpay.svg'
import Airtm from 'images/svg/payment-airtm.svg'
import Bitcoin from 'images/svg/payment-bitcoin.svg'
import Ethereum from 'images/svg/payment-ethereum.svg'
import Litecoin from 'images/svg/payment-litecoin.svg'
import Tether from 'images/svg/payment-tether.svg'
import Help2Pay from 'images/svg/payment-help-pay.svg'
import DragonPhoenix from 'images/svg/payment-dragon-phoenix.svg'
import ZingPay from 'images/svg/payment-zing-pay.svg'
import DragonPay from 'images/svg/payment-dragon-pay.svg'
import NganLuong from 'images/svg/payment-ngan-luong.svg'
import Diners from 'images/svg/payment-diners.svg'

const icon_css = css`
    width: 72px;
    height: 72px;
`

const BankTransferIc = styled(BankTransfer)`
    ${icon_css}
`
const PaytrustIc = styled(Paytrust)`
    ${icon_css}
`
const VisaIc = styled(Visa)`
    ${icon_css}
`
const MasterCardIc = styled(MasterCard)`
    ${icon_css}
`
const MaestroIc = styled(Maestro)`
    ${icon_css}
`
const FasapayIc = styled(Fasapay)`
    ${icon_css}
`

const PerfectMoneyIc = styled(PerfectMoney)`
    ${icon_css}
`
const SkrillIc = styled(Skrill)`
    ${icon_css}
`
const NetellerIc = styled(Neteller)`
    ${icon_css}
`
const WebmoneyIc = styled(Webmoney)`
    ${icon_css}
`
const QiwiIc = styled(Qiwi)`
    ${icon_css}
`
const PaysafeCardIc = styled(PaysafeCard)`
    ${icon_css}
`
const JetonIc = styled(Jeton)`
    ${icon_css}
`
const SticpayIc = styled(Sticpay)`
    ${icon_css}
`
const AirtmIc = styled(Airtm)`
    ${icon_css}
`
const BitcoinIc = styled(Bitcoin)`
    ${icon_css}
`
const EthereumIc = styled(Ethereum)`
    ${icon_css}
`
const LitecoinIc = styled(Litecoin)`
    ${icon_css}
`
const TetherIc = styled(Tether)`
    ${icon_css}
`
const Help2PayIc = styled(Help2Pay)`
    ${icon_css}
`
const DragonPhoenixIc = styled(DragonPhoenix)`
    ${icon_css}
`
const ZingPayIc = styled(ZingPay)`
    ${icon_css}
`
const DragonPayIc = styled(DragonPay)`
    ${icon_css}
`
const NganLuongIc = styled(NganLuong)`
    ${icon_css}
`
const DinersIc = styled(Diners)`
    ${icon_css}
`

const payment_data = [
    {
        name: <Localize translate_text="Bank wire" />,
        data: [
            {
                method: <BankTransferIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '500-100,000',
                min_max_withdrawal: '500-100,000',
                deposit_time: <Localize translate_text="1 working day" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Use your bank account to deposit and withdraw. Bank charges apply." />
                ),
                name: 'bank transfer',
            },

            {
                method: <PaytrustIc />,
                currencies: 'USD',
                min_max_deposit: '25-10,000',
                min_max_withdrawal: <Localize translate_text="Not applicable" />,
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="Not applicable" />,
                description: (
                    <Localize translate_text="Deposit easily with your bank account on any device. Supports major banks in China, Indonesia, South Korea, Thailand, and Vietnam." />
                ),
                name: 'paytrust88',
            },
            {
                method: <Help2PayIc />,
                currencies: 'USD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: <Localize translate_text="Not applicable" />,
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="Not applicable" />,
                description: (
                    <Localize translate_text="The leading payment software solution in Southeast Asia. Currently available for making deposits in Vietnam, Thailand, and Indonesia." />
                ),
                name: 'Help2Pay',
                reference: 'help2pay-payment-method.pdf',
            },
            {
                method: <DragonPhoenixIc />,
                currencies: 'USD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: <Localize translate_text="Not applicable" />,
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="Not applicable" />,
                description: (
                    <Localize translate_text="A payment facility that allows online bank transfers for clients across Southeast Asia. Currently available for making deposits in Vietnam, Thailand, and Indonesia." />
                ),
                name: 'DragonPhoenix',
                reference: 'dragonphoenix-payment-method.pdf',
            },
            {
                method: <ZingPayIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="An easy and accessible way to deposit and withdraw directly using your bank account in South Africa." />
                ),
                name: 'ZingPay',
                reference: 'zingpay-payment-method.pdf',
            },
            {
                method: <DragonPayIc />,
                currencies: 'USD',
                min_max_deposit: '50-4,500',
                min_max_withdrawal: '55-2,500',
                deposit_time: <Localize translate_text="1 working day" />,
                withdrawal_time: <Localize translate_text="1-3 working days" />,
                description: (
                    <Localize translate_text="A payment facility that allows online bank transfers for clients in the Philippines. Available for deposits and withdrawals." />
                ),
                name: 'DragonPay',
                reference: 'dragonpay-payment-method.pdf',
            },
            {
                method: <NganLuongIc />,
                currencies: 'USD',
                min_max_deposit: '10-4,000',
                min_max_withdrawal: '10-4,000',
                deposit_time: <Localize translate_text="1 working day" />,
                withdrawal_time: <Localize translate_text="1-3 working days" />,
                description: (
                    <Localize translate_text="A payment facility that allows online bank transfers for clients in Vietnam. Available for deposits and withdrawals." />
                ),
                name: 'NganLuong',
                reference: 'nganluong-payment-method.pdf',
            },
        ],
    },
    {
        name: <Localize translate_text="Credit/debit cards" />,
        note: (
            <Localize translate_text="Mastercard and Maestro withdrawals are only available for UK clients." />
        ),
        data: [
            {
                method: <VisaIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Deposit and withdraw using your Visa credit or debit card." />
                ),
                name: 'visa',
                reference: 'visa-payment-method.pdf',
            },
            {
                method: <MasterCardIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Deposit and withdraw using your Mastercard credit or debit card." />
                ),
                name: 'mastercard',
                reference: 'mastercard-payment-method.pdf',
            },
            {
                method: <MaestroIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Deposit and withdraw using your Maestro debit card." />
                ),
                name: 'maestro',
                reference: 'maestrocard-payment-method.pdf',
            },
            {
                method: <DinersIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text=" 2-3 working days" />,
                description: (
                    <Localize translate_text="Deposit and withdraw using your Diners Club credit or debit card." />
                ),
                name: 'diners',
                reference: 'diners-club-payment-method.pdf',
            },
        ],
    },
    {
        name: <Localize translate_text="E-wallets" />,
        data: [
            {
                method: <FasapayIc />,
                currencies: 'USD',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Features fast deposits and withdrawals, low fees, and downloadable transaction history." />
                ),
                url: 'https://www.fasapay.com/',
                name: 'fasapay',
                reference: 'fasapay-payment-method.pdf',
            },
            {
                method: <PerfectMoneyIc />,
                currencies: 'USD EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="A cheap and easy method for deposits and withdrawals. Features auto payments, annual interest, and real-time statements." />
                ),
                url: 'https://perfectmoney.is/',
                name: 'perfect money',
                reference: 'perfectmoney-payment-method.pdf',
            },
            {
                method: <SkrillIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Quick, simple to use, and available anywhere, anytime. Used by millions of clients worldwide." />
                ),
                url: 'https://www.skrill.com/',
                name: 'skrill',
                reference: 'skrill-payment-method.pdf',
            },
            {
                method: <NetellerIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Used by over 20 million clients worldwide. Enjoy instant access and free withdrawals." />
                ),
                url: 'https://www.neteller.com/',
                name: 'neteller',
                reference: 'neteller-payment-method.pdf',
            },
            {
                method: <WebmoneyIc />,
                currencies: 'USD EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="A complete payment service with over 30 million clients, 10,000 signups daily, and is supported by more than 100,000 merchants." />
                ),
                url: 'https://www.wmtransfer.com/',
                name: 'webmoney',
                reference: 'webmoney-payment-method.pdf',
            },
            {
                method: <QiwiIc />,
                currencies: 'USD EUR',
                min_max_deposit: ['5-200 (USD)', '5-150 (EUR)'],
                min_max_withdrawal: ['5-180 (USD)', '5-150 (EUR)'],
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="A payment service provider that provides a simple way to transfer money, receive payments, and pay online." />
                ),
                url: 'https://qiwi.com/',
                name: 'qiwi',
            },
            {
                method: <PaysafeCardIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '5-1,000',
                min_max_withdrawal: '5-750',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="A convenient payment service that doesn’t need a bank account or credit card. Accepted by thousands of merchants worldwide." />
                ),
                url: 'https://www.paysafecard.com/',
                name: 'paysafe',
            },
            {
                method: <JetonIc />,
                currencies: 'USD EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="A fast and secure money transfer service. Access your money anywhere with the mobile app." />
                ),
                url: 'https://www.jeton.com/',
                name: 'jeton',
                reference: 'jeton-payment-method.pdf',
            },

            {
                method: <SticpayIc />,
                currencies: 'USD GBP EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="An easy, cheap, and fast way to transfer money. Supported by banks and merchants worldwide." />
                ),
                url: 'https://www.sticpay.com/',
                name: 'sticpay',
                reference: 'sticpay-payment-method.pdf',
            },
            {
                method: <AirtmIc />,
                currencies: 'USD',
                min_max_deposit: '5-2,500',
                min_max_withdrawal: '5-2,500',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 working day" />,
                description: (
                    <Localize translate_text="Easily convert your currency to USD and transfer money worldwide." />
                ),
                url: 'https://www.airtm.io/#/',
                name: 'airtm',
                reference: 'airtm-payment-method.pdf',
            },
        ],
    },
    {
        name: <Localize translate_text="Cryptocurrencies" />,
        is_crypto: true,
        note: (
            <Localize translate_text="The minimum amount for withdrawal will vary depending on the latest exchange rates. The figures shown here have been rounded." />
        ),
        data: [
            {
                method: <BitcoinIc />,
                currencies: 'BTC',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: '25',
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Bitcoin, the world’s first cryptocurrency." />
                ),
                name: 'bitcoin',
                reference: 'bitcoin-payment-method.pdf',
            },
            {
                method: <EthereumIc />,
                currencies: 'ETH',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: '5',
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Ethereum, among the top 3 most used cryptocurrencies." />
                ),
                name: 'ethereum',
            },
            {
                method: <LitecoinIc />,
                currencies: 'LTC',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: '5',
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Litecoin, a durable cryptocurrency with fast transaction processing." />
                ),
                name: 'litecoin',
                reference: 'litecoin-payment-method.pdf',
            },
            {
                method: <TetherIc />,
                currencies: 'UST',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: '25',
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Tether, a cryptocurrency that’s pegged to USD." />
                ),
                name: 'tether',
            },
        ],
    },
]

export default payment_data
