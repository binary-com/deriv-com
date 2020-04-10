import React from 'react'
import styled, { css } from 'styled-components'
import { localize } from 'components/localization'
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
import PaysafeCard from 'images/svg/payment-paysafe-card.svg'
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

const payment_data = [
    {
        name: localize('Bank wire'),
        data: [
            {
                method: <BankTransferIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '500 - 100,000',
                min_max_withdrawal: '500 - 100,000',
                deposit_time: localize('1 working day'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Use your bank account to deposit and withdraw. Bank charges apply.',
                ),
                name: 'bank transfer',
            },

            {
                method: <PaytrustIc />,
                currencies: 'USD',
                min_max_deposit: '25 - 10,000',
                min_max_withdrawal: 'N/A',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('Not applicable'),
                description: localize(
                    'Deposit easily with your bank account on any device. Supports major banks in China, Indonesia, South Korea, Thailand, and Vietnam.',
                ),
                name: 'paytrust88',
            },
            {
                method: <Help2PayIc />,
                currencies: 'USD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: 'N/A',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('Not applicable'),
                description: localize(
                    'Help2Pay is a payment facility that allows online bank transfers for clients across Southeast Asia.',
                ),
                name: 'Help2Pay',
            },
            {
                method: <DragonPhoenixIc />,
                currencies: 'USD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: 'N/A',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('Not applicable'),
                description: localize(
                    'DragonPhoenix is a payment facility that allows online bank transfers for clients across Southeast Asia.',
                ),
                name: 'DragonPhoenix',
            },
            {
                method: <ZingPayIc />,
                currencies: 'USD EUR GBP AUD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: '10 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 to 3 working days'),
                description: localize(
                    'ZingPay is a payment facility that allows online bank transfers for clients in South Africa.',
                ),
                name: 'ZingPay',
                reference: 'ZingPay_payment_method.pdf',
            },
        ],
    },
    {
        name: localize('Credit/debit cards'),
        note: localize('Mastercard and Maestro withdrawals are only available for UK Clients.'),
        data: [
            {
                method: <VisaIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: '10 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Deposit and withdraw using your Visa credit or debit card. Charges and interest rates apply.',
                ),
                name: 'visa',
                reference: 'Visa_master_payment_method.pdf',
            },
            {
                method: <MasterCardIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: '10 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Deposit and withdraw using your Mastercard credit or debit card. Charges and interest rates apply.',
                ),
                name: 'mastercard',
            },
            {
                method: <MaestroIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: '10 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize('Deposit and withdraw using your Maestro debit card.'),
                name: 'maestro',
            },
        ],
    },
    {
        name: localize('E-wallets'),
        data: [
            {
                method: <FasapayIc />,
                currencies: 'USD',
                min_max_deposit: '5 - 10,000',
                min_max_withdrawal: '5 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Features fast deposits and withdrawals, low fees, and downloadable transaction history.',
                ),
                url: 'https://www.fasapay.com/',
                name: 'fasapay',
                reference: 'Fasapay_payment_method.pdf',
            },
            {
                method: <PerfectMoneyIc />,
                currencies: 'USD EUR',
                min_max_deposit: '5 - 10,000',
                min_max_withdrawal: '5 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'A cheap and easy method for deposits and withdrawals. Features auto payments, annual interest, and real-time statements.',
                ),
                url: 'https://perfectmoney.is/',
                name: 'perfect money',
                reference: 'perfect_money_payment_method.pdf',
            },
            {
                method: <SkrillIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: '5 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Quick, simple to use, and available anywhere, anytime. Used by millions of clients worldwide.',
                ),
                url: 'https://www.skrill.com/',
                name: 'skrill',
                reference: 'Skrill_payment_method.pdf',
            },
            {
                method: <NetellerIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '5 - 10,000',
                min_max_withdrawal: '5 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Used by over 20 million clients worldwide. Enjoy instant access, free withdrawals, and reward points that you can redeem for cash.',
                ),
                url: 'https://www.neteller.com/',
                name: 'neteller',
                reference: 'Neteller_payment_method.pdf',
            },
            {
                method: <WebmoneyIc />,
                currencies: 'USD EUR',
                min_max_deposit: '5 - 10,000',
                min_max_withdrawal: '5 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'A complete payment service with over 30 million clients, 10,000 signups daily, and is supported by more than 100,000 merchants.',
                ),
                url: 'https://www.wmtransfer.com/',
                name: 'webmoney',
                reference: 'WebMoney_payment_method.pdf',
            },
            {
                method: <QiwiIc />,
                currencies: 'USD EUR',
                min_max_deposit: ['5 - 200 (USD)', '5 - 150 (EUR)'],
                min_max_withdrawal: ['5 - 180 (USD)', '5 - 150 (EUR)'],
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Signing up with Qiwi is easier than tying your shoelaces. Top-up is easy too: via credit card, ATM, online banking, etc.',
                ),
                url: 'https://qiwi.com/',
                name: 'qiwi',
            },
            {
                method: <PaysafeCardIc />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '5 - 1,000',
                min_max_withdrawal: '5 - 750',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'A convenient payment service that doesn’t need a bank account or credit card. Accepted by thousands of merchants worldwide.',
                ),
                url: 'https://www.paysafecard.com/',
                name: 'paysafe',
            },
            {
                method: <JetonIc />,
                currencies: 'USD EUR',
                min_max_deposit: '5 - 10,000',
                min_max_withdrawal: 'N/A',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'A fast and secure money transfer service. Access your money anywhere with the mobile app.',
                ),
                url: 'https://www.jeton.com/',
                name: 'jeton',
                reference: 'Jeton_payment_method.pdf',
            },

            {
                method: <SticpayIc />,
                currencies: 'USD GBP EUR',
                min_max_deposit: '5 - 10,000',
                min_max_withdrawal: '5 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'An easy, cheap, and fast way to transfer money. Supported by banks and merchants worldwide.',
                ),
                url: 'https://www.sticpay.com/',
                name: 'sticpay',
                reference: 'Sticpay_payment_method.pdf',
            },
            {
                method: <AirtmIc />,
                currencies: 'USD',
                min_max_deposit: '5 - 2,500',
                min_max_withdrawal: '5 - 2,500',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Easily convert your currency to USD and transfer money worldwide. Used by more than 500,000 clients in 163 countries.',
                ),
                url: 'https://www.airtm.io/#/',
                name: 'airtm',
                reference: 'AirTM_payment_method.pdf',
            },
        ],
    },
    {
        name: localize('Cryptocurrencies'),
        is_crypto: true,
        note: localize(
            'The minimum amount for withdrawal will vary depending on the latest exchange rates. The figures shown here have been rounded.',
        ),
        data: [
            {
                method: <BitcoinIc />,
                currencies: 'BTC',
                min_max_deposit: '-',
                min_max_withdrawal: '0.00292789',
                deposit_time: localize('3 blockchain confirmations'),
                withdrawal_time: localize(' 1 working day'),
                description: localize(
                    'Deposit and withdraw in Bitcoin, the world’s first cryptocurrency.',
                ),
                name: 'bitcoin',
                reference: 'Bitcoin_payment_method.pdf',
            },
            {
                method: <EthereumIc />,
                currencies: 'ETH',
                min_max_deposit: '-',
                min_max_withdrawal: '',
                deposit_time: localize('3 blockchain confirmations'),
                withdrawal_time: localize(' 1 working day'),
                description: localize(
                    'Deposit and withdraw in Ethereum, among the top 3 most used cryptocurrencies.',
                ),
                name: 'ethereum',
            },
            {
                method: <LitecoinIc />,
                currencies: 'LTC',
                min_max_deposit: '-',
                min_max_withdrawal: '',
                deposit_time: localize('3 blockchain confirmations'),
                withdrawal_time: localize(' 1 working day'),
                description: localize(
                    'Deposit and withdraw in Litecoin, a durable cryptocurrency with fast transaction processing.',
                ),
                name: 'litecoin',
                reference: 'Litecoin_payment_method.pdf',
            },
            {
                method: <TetherIc />,
                currencies: 'UST',
                min_max_deposit: '-',
                min_max_withdrawal: '',
                deposit_time: localize('3 blockchain confirmations'),
                withdrawal_time: localize(' 1 working day'),
                description: localize(
                    'Deposit and withdraw in Tether, a cryptocurrency that’s pegged to USD.',
                ),
                name: 'tether',
            },
        ],
    },
]

export default payment_data
