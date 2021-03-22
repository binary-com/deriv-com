import React from 'react'
import styled, { css } from 'styled-components'
import { Localize } from 'components/localization'
// SVG
import BankTransfer from 'images/svg/payment-methods/payment-bank-transfer.svg'
import Paytrust from 'images/svg/payment-methods/payment-paytrust.svg'
import Visa from 'images/svg/payment-methods/payment-visa.svg'
import MasterCard from 'images/svg/payment-methods/payment-mastercard.svg'
import Maestro from 'images/svg/payment-methods/payment-maestro.svg'
import Fasapay from 'images/svg/payment-methods/payment-fasapay.svg'
import PerfectMoney from 'images/svg/payment-methods/payment-perfect-money.svg'
import Skrill from 'images/svg/payment-methods/payment-skrill.svg'
import Neteller from 'images/svg/payment-methods/payment-neteller.svg'
import Webmoney from 'images/svg/payment-methods/payment-webmoney.svg'
import Qiwi from 'images/svg/payment-methods/payment-qiwi.svg'
import PaysafeCard from 'images/svg/payment-methods/payment-paysafe.svg'
import Jeton from 'images/svg/payment-methods/payment-jeton.svg'
import Sticpay from 'images/svg/payment-methods/payment-sticpay.svg'
import Airtm from 'images/svg/payment-methods/payment-airtm.svg'
import Bitcoin from 'images/svg/payment-methods/payment-bitcoin.svg'
import Ethereum from 'images/svg/payment-methods/payment-ethereum.svg'
import Litecoin from 'images/svg/payment-methods/payment-litecoin.svg'
import Tether from 'images/svg/payment-methods/payment-tether.svg'
import Help2Pay from 'images/svg/payment-methods/payment-help-pay.svg'
import DragonPhoenix from 'images/svg/payment-methods/payment-dragon-phoenix.svg'
import ZingPay from 'images/svg/payment-methods/payment-zing-pay.svg'
// import DragonPay from 'images/svg/payment-methods/payment-dragon-pay.svg'
import NganLuong from 'images/svg/payment-methods/payment-ngan-luong.svg'
import Diners from 'images/svg/payment-methods/payment-diners.svg'
// import Bianance from 'images/svg/payment-methods/payment-binance-usd.svg'
// import Dai from 'images/svg/payment-methods/payment-multi-collateral-dai.svg'
// import StasisEuro from 'images/svg/payment-methods/payment-stasis-euro.svg'
// import Idk from 'images/svg/payment-methods/payment-idk.svg'
// import Paxos from 'images/svg/payment-methods/payment-paxos-standard.svg'
// import True from 'images/svg/payment-methods/payment-true-usd.svg'
import UsdCoin from 'images/svg/payment-methods/payment-usd-coin.svg'
// import Usdk from 'images/svg/payment-methods/payment-usdk.svg'
import Changelly from 'images/svg/payment-methods/payment-changelly.svg'
import Wyre from 'images/svg/payment-methods/payment-wyre.svg'
import Xanpool from 'images/svg/payment-methods/payment-xanpool.svg'
import Banxa from 'images/svg/payment-methods/payment-banxa.svg'
import Paylivre from 'images/svg/payment-methods/payment-paylivre.svg'

const icon_css = css`
    width: 72px;
    height: 72px;
`

const BankTransferIc = styled.img`
    ${icon_css}
`
const PaytrustIc = styled.img`
    ${icon_css}
`
const VisaIc = styled.img`
    ${icon_css}
`
const MasterCardIc = styled.img`
    ${icon_css}
`
const MaestroIc = styled.img`
    ${icon_css}
`
const FasapayIc = styled.img`
    ${icon_css}
`

const PerfectMoneyIc = styled.img`
    ${icon_css}
`
const SkrillIc = styled.img`
    ${icon_css}
`
const NetellerIc = styled.img`
    ${icon_css}
`
const WebmoneyIc = styled.img`
    ${icon_css}
`
const QiwiIc = styled.img`
    ${icon_css}
`
const PaysafeCardIc = styled.img`
    ${icon_css}
`
const JetonIc = styled.img`
    ${icon_css}
`
const SticpayIc = styled.img`
    ${icon_css}
`
const AirtmIc = styled.img`
    ${icon_css}
`
const BitcoinIc = styled.img`
    ${icon_css}
`
const EthereumIc = styled.img`
    ${icon_css}
`
const LitecoinIc = styled.img`
    ${icon_css}
`
const TetherIc = styled.img`
    ${icon_css}
`
const Help2PayIc = styled.img`
    ${icon_css}
`
const DragonPhoenixIc = styled.img`
    ${icon_css}
`
const ZingPayIc = styled.img`
    ${icon_css}
`
// const DragonPayIc = styled.img`
//     ${icon_css}
// `
const NganLuongIc = styled.img`
    ${icon_css}
`
const DinersIc = styled.img`
    ${icon_css}
`
// const BiananceIC = styled(Bianance)`
//     ${icon_css}
// `
// const DaiIc = styled(Dai)`
//     ${icon_css}
// `
// const StasisEuroIc = styled(StasisEuro)`
//     ${icon_css}
// `
// const IdkIc = styled(Idk)`
//     ${icon_css}
// `
// const PaxosIc = styled(Paxos)`
//     ${icon_css}
// `
// const TrueIc = styled(True)`
//     ${icon_css}
// `
const UsdCoinIc = styled.img`
    ${icon_css}
`
// const UsdkIc = styled(Usdk)`
//     ${icon_css}
// `

const ChangellyIc = styled.img`
    ${icon_css}
`
const WyreIc = styled.img`
    ${icon_css}
`
const XanpoolIc = styled.img`
    ${icon_css}
`
const BanxaIc = styled.img`
    ${icon_css}
`
const PaylivreIc = styled.img`
    ${icon_css}
`

const payment_data = [
    {
        name: <Localize translate_text="Bank wire" />,
        data: [
            {
                method: <BankTransferIc src={BankTransfer} alt="bank transfer" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '500-100,000',
                min_max_withdrawal: '500-100,000',
                deposit_time: <Localize translate_text="1 day" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Use your bank account to deposit and withdraw. Bank charges apply." />
                ),
                name: 'bank transfer',
            },
            {
                method: <PaytrustIc src={Paytrust} alt="pay safe card" />,
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
                method: <Help2PayIc src={Help2Pay} alt="help2pay" />,
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
                method: <DragonPhoenixIc src={DragonPhoenix} alt="dragon phoenix" />,
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
                method: <ZingPayIc src={ZingPay} alt="zingPay" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="An easy and accessible way to deposit and withdraw directly using your bank account in South Africa." />
                ),
                name: 'ZingPay',
                reference: 'zingpay-payment-method.pdf',
            },
            // {
            //     method: <DragonPayIc src={DragonPay} alt="Dragon pay" />,
            //     currencies: 'USD',
            //     min_max_deposit: '50-4,500',
            //     min_max_withdrawal: '55-2,500',
            //     deposit_time: <Localize translate_text="1 day" />,
            //     withdrawal_time: <Localize translate_text="1-3 days" />,
            //     description: (
            //         <Localize translate_text="A payment facility that allows online bank transfers for clients in the Philippines. Available for deposits and withdrawals." />
            //     ),
            //     name: 'DragonPay',
            //     reference: 'dragonpay-payment-method.pdf',
            // },
            {
                method: <NganLuongIc src={NganLuong} alt="NganLuong" />,
                currencies: 'USD',
                min_max_deposit: '10-4,000',
                min_max_withdrawal: '10-4,000',
                deposit_time: <Localize translate_text="1 day" />,
                withdrawal_time: <Localize translate_text="1-3 days" />,
                description: (
                    <Localize translate_text="A payment facility that allows online bank transfers for clients in Vietnam. Available for deposits and withdrawals." />
                ),
                name: 'NganLuong',
                reference: 'nganluong-payment-method.pdf',
                locales: ['vi'],
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
                method: <VisaIc src={Visa} alt="Visa" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Deposit and withdraw using your Visa credit or debit card." />
                ),
                name: 'visa',
                reference: 'visa-payment-method.pdf',
            },
            {
                method: <MasterCardIc src={MasterCard} alt="Mastercard" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Deposit and withdraw using your Mastercard credit or debit card." />
                ),
                name: 'mastercard',
                reference: 'mastercard-payment-method.pdf',
            },
            {
                method: <MaestroIc src={Maestro} alt="Maestro" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Deposit and withdraw using your Maestro debit card." />
                ),
                name: 'maestro',
                reference: 'maestrocard-payment-method.pdf',
            },
            {
                method: <DinersIc src={Diners} alt="Diners" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '10-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text=" 2-3 days" />,
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
                method: <FasapayIc src={Fasapay} alt="Fasapay" />,
                currencies: 'USD',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Features fast deposits and withdrawals, low fees, and downloadable transaction history." />
                ),
                url: 'https://www.fasapay.com/',
                name: 'fasapay',
                reference: 'fasapay-payment-method.pdf',
            },
            {
                method: <PerfectMoneyIc src={PerfectMoney} alt="PerfectMoney" />,
                currencies: 'USD EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="A cheap and easy method for deposits and withdrawals. Features auto payments, annual interest, and real-time statements." />
                ),
                url: 'https://perfectmoney.is/',
                name: 'perfect money',
                reference: 'perfectmoney-payment-method.pdf',
            },
            {
                method: <SkrillIc src={Skrill} alt="Skrill" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Quick, simple to use, and available anywhere, anytime. Used by millions of clients worldwide." />
                ),
                url: 'https://www.skrill.com/',
                name: 'skrill',
                reference: 'skrill-payment-method.pdf',
            },
            {
                method: <NetellerIc src={Neteller} alt="Neteller" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Used by over 20 million clients worldwide. Enjoy instant access and free withdrawals." />
                ),
                url: 'https://www.neteller.com/',
                name: 'neteller',
                reference: 'neteller-payment-method.pdf',
            },
            {
                method: <WebmoneyIc src={Webmoney} alt="Webmoney" />,
                currencies: 'USD EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="A complete payment service with over 30 million clients, 10,000 signups daily, and is supported by more than 100,000 merchants." />
                ),
                url: 'https://www.wmtransfer.com/',
                name: 'webmoney',
                reference: 'webmoney-payment-method.pdf',
            },
            {
                method: <QiwiIc src={Qiwi} alt="Qiwi" />,
                currencies: 'USD EUR',
                min_max_deposit: ['5-200 (USD)', '5-150 (EUR)'],
                min_max_withdrawal: ['5-180 (USD)', '5-150 (EUR)'],
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="A payment service provider that provides a simple way to transfer money, receive payments, and pay online." />
                ),
                url: 'https://qiwi.com/',
                name: 'qiwi',
            },
            {
                method: <PaysafeCardIc src={PaysafeCard} alt="PaysafeCard" />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '5-1,000',
                min_max_withdrawal: '5-750',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="A convenient payment service that doesn’t need a bank account or credit card. Accepted by thousands of merchants worldwide." />
                ),
                url: 'https://www.paysafecard.com/',
                name: 'paysafe',
            },
            {
                method: <JetonIc src={Jeton} alt="Jeton" />,
                currencies: 'USD EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="A fast and secure money transfer service. Access your money anywhere with the mobile app." />
                ),
                url: 'https://www.jeton.com/',
                name: 'jeton',
                reference: 'jeton-payment-method.pdf',
            },

            {
                method: <SticpayIc src={Sticpay} alt="Sticpay" />,
                currencies: 'USD GBP EUR',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="An easy, cheap, and fast way to transfer money. Supported by banks and merchants worldwide." />
                ),
                url: 'https://www.sticpay.com/',
                name: 'sticpay',
                reference: 'sticpay-payment-method.pdf',
            },
            {
                method: <AirtmIc src={Airtm} alt="Airtm" />,
                currencies: 'USD',
                min_max_deposit: '5-2,500',
                min_max_withdrawal: '5-2,500',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Easily convert your currency to USD and transfer money worldwide." />
                ),
                url: 'https://www.airtm.io/#/',
                name: 'airtm',
                reference: 'airtm-payment-method.pdf',
            },
            {
                method: <PaylivreIc src={Paylivre} alt="Paylivre" />,
                currencies: 'USD',
                min_max_deposit: '5-10,000',
                min_max_withdrawal: '5-10,000',
                deposit_time: <Localize translate_text="Instant" />,
                withdrawal_time: <Localize translate_text="1 day" />,
                description: (
                    <Localize translate_text="Use PayLivre to make deposits and withdrawals with your Brazilian bank account." />
                ),
                url: 'https://paylivre.com/',
                name: 'paylivre',
                reference: 'paylivre-payment-method.pdf',
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
            // {
            //     method: <BiananceIC />,
            //     currencies: 'BUSD',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in Binance USD, a cryptocurrency that’s pegged to USD." />
            //     ),
            //     name: 'BUSD',
            // },
            {
                method: <BitcoinIc src={Bitcoin} alt="Bitcoin" />,
                currencies: 'BTC',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: undefined,
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Bitcoin, the world’s first cryptocurrency." />
                ),
                name: 'BTC',
                reference: 'bitcoin-payment-method.pdf',
            },
            // {
            //     method: <DaiIc />,
            //     currencies: 'DAI',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in Multi-Collateral DAI, a cryptocurrency that’s pegged to USD." />
            //     ),
            //     name: 'DAI',
            // },
            {
                method: <EthereumIc src={Ethereum} alt="Ethereum" />,
                currencies: 'ETH',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: undefined,
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Ethereum, among the top 3 most used cryptocurrencies." />
                ),
                name: 'ETH',
                reference: 'ETH-payment-method.pdf',
            },
            // {
            //     method: <StasisEuroIc />,
            //     currencies: 'EURS',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in STASIS Euro, a cryptocurrency that’s pegged to EUR." />
            //     ),
            //     name: 'EURS',
            // },
            // {
            //     method: <IdkIc />,
            //     currencies: 'IDK',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in IDK, a cryptocurrency that's pegged to IDR (1:1,000)." />
            //     ),
            //     name: 'IDK',
            // },
            {
                method: <LitecoinIc src={Litecoin} alt="Litecoin" />,
                currencies: 'LTC',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: undefined,
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Litecoin, a durable cryptocurrency with fast transaction processing." />
                ),
                name: 'LTC',
                reference: 'litecoin-payment-method.pdf',
            },
            // {
            //     method: <PaxosIc />,
            //     currencies: 'PAX',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in Paxos Standard, a cryptocurrency that’s pegged to USD." />
            //     ),
            //     name: 'PAX',
            // },
            // {
            //     method: <TrueIc />,
            //     currencies: 'TUSD',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in TrueUSD, a cryptocurrency that’s pegged to USD." />
            //     ),
            //     name: 'TUSD',
            // },
            {
                method: <UsdCoinIc src={UsdCoin} alt="UsdCoin" />,
                currencies: 'USDC',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: undefined,
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in USD Coin, a cryptocurrency that’s pegged to USD." />
                ),
                name: 'USDC',
            },
            // {
            //     method: <UsdkIc />,
            //     currencies: 'USDK',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in USDK, a cryptocurrency that’s pegged to USD." />
            //     ),
            //     name: 'USDK',
            // },
            {
                method: <TetherIc src={Tether} alt="Tether" />,
                currencies: 'USDT',
                min_max_deposit: <Localize translate_text="No minimum" />,
                min_max_withdrawal: undefined,
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                withdrawal_time: <Localize translate_text="Subject to internal checks" />,
                description: (
                    <Localize translate_text="Deposit and withdraw in Tether Omni, a cryptocurrency that’s pegged to USD." />
                ),
                name: 'UST',
            },
            // {
            //     method: <TetherIc />,
            //     currencies: 'eUSDT',
            //     min_max_deposit: <Localize translate_text="No minimum" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
            //     withdrawal_time: <Localize translate_text="Subject to internal checks" />,
            //     description: (
            //         <Localize translate_text="Deposit and withdraw in Tether ERC20, a cryptocurrency that’s pegged to USD." />
            //     ),
            //     name: 'eUSDT',
            // },
        ],
    },
    {
        name: <Localize translate_text="Fiat onramp - Buy crypto on popular exchanges." />,
        is_fiat_onramp: true,
        data: [
            {
                method: <ChangellyIc src={Changelly} alt="Changelly" />,
                currencies: 'USD EUR GBP BTC',
                min_max_deposit: 'USD50',
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                description: (
                    <Localize translate_text="Your simple access to crypto. Fast and secure way to exchange and purchase 150+ cryptocurrencies. 24/7 live-chat support." />
                ),
                name: 'Changelly',
                reference: 'changelly-payment-method.pdf',
            },
            {
                method: <WyreIc src={Wyre} alt="Wyre" />,
                currencies: 'USD EUR GBP AUD MXN BTC ETH WETH DAI',
                min_max_deposit: <Localize translate_text="No minimum" />,
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                description: (
                    <Localize translate_text="Wyre gives you a secure bridge between fiat currencies and cryptocurrencies." />
                ),
                name: 'Wyre',
            },
            {
                method: <XanpoolIc src={Xanpool} alt="Xanpool" />,
                currencies: 'HKD SGD MYR PHP THB INR VND IDR BTC ETH LTC USDT',
                min_max_deposit: <Localize translate_text="No minimum" />,
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                description: (
                    <Localize translate_text="Buy cryptocurrencies in an instant. Enjoy easy, quick, and secure exchanges using your local payment methods." />
                ),
                name: 'Xanpool',
            },
            {
                method: <BanxaIc src={Banxa} alt="Banxa" />,
                currencies: 'USD EUR GBP AUD CAD BTC LTC USDT USDC',
                min_max_deposit: 'USD20',
                deposit_time: <Localize translate_text="Funds available as soon as confirmed" />,
                description: (
                    <Localize translate_text="A fast and secure fiat-to-crypto payment service. Deposit cryptocurrencies from anywhere in the world using credit/debit cards and bank transfers." />
                ),
                name: 'Banxa',
            },
        ],
    },
]

export default payment_data
