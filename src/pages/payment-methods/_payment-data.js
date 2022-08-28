import React from 'react'
import styled from 'styled-components'
import { Localize, LocalizedLink } from 'components/localization'
// SVG
// import BankTransfer from 'images/svg/payment-methods/payment-bank-transfer.svg'
import Paytrust from 'images/svg/payment-methods/payment-paytrust.svg'
import Visa from 'images/svg/payment-methods/payment-visa.svg'
import VisaElectron from 'images/svg/payment-methods/payment-visa-electron.svg'
import MasterCard from 'images/svg/payment-methods/payment-mastercard.svg'
import Maestro from 'images/svg/payment-methods/payment-maestro.svg'
import Fasapay from 'images/svg/payment-methods/payment-fasapay.svg'
import PerfectMoney from 'images/svg/payment-methods/payment-perfect-money.svg'
import Skrill from 'images/svg/payment-methods/payment-skrill.svg'
import Neteller from 'images/svg/payment-methods/payment-neteller.svg'
import Webmoney from 'images/svg/payment-methods/payment-webmoney.svg'
// import Qiwi from 'images/svg/payment-methods/payment-qiwi.svg'
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
// import Binance from 'images/svg/payment-methods/payment-binance-usd.svg'
// import Dai from 'images/svg/payment-methods/payment-multi-collateral-dai.svg'
// import StasisEuro from 'images/svg/payment-methods/payment-stasis-euro.svg'
// import Idk from 'images/svg/payment-methods/payment-idk.svg'
// import Paxos from 'images/svg/payment-methods/payment-paxos-standard.svg'
// import True from 'images/svg/payment-methods/payment-true-usd.svg'
import UsdCoin from 'images/svg/payment-methods/payment-usd-coin.svg'
// import Usdk from 'images/svg/payment-methods/payment-usdk.svg'
import Changelly from 'images/svg/payment-methods/payment-changelly.svg'
// import Wyre from 'images/svg/payment-methods/payment-wyre.svg'
import Xanpool from 'images/svg/payment-methods/payment-xanpool.svg'
import Banxa from 'images/svg/payment-methods/payment-banxa.svg'
import Paylivre from 'images/svg/payment-methods/payment-paylivre.svg'
// import Discover from 'images/svg/payment-methods/payment-discover.svg'
import OnlineNaira from 'images/svg/payment-methods/payment-onlinenaira.svg'
// import Tigo from 'images/svg/payment-methods/payment-tigo.svg'
// import Airtel from 'images/svg/payment-methods/payment-airtel.svg'
import Trustly from 'images/svg/payment-methods/payment-trustly.svg'
import InstantBankTransfer from 'images/svg/payment-methods/payment-instant-bank-transfer.svg'
import JCB from 'images/svg/payment-methods/payment-jcb.svg'
import Boleto from 'images/svg/payment-methods/payment-boleto.svg'
import Beyonic from 'images/svg/payment-methods/payment-beyonic.svg'
import Astropay from 'images/svg/payment-methods/payment-astropay.svg'
import OneForYou from 'images/svg/payment-methods/payment-one-for-you.svg'
import Advcash from 'images/svg/payment-methods/payment-advcash.svg'
import Dp2p from 'images/svg/payment-methods/payment-dp2p.svg'

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

const payment_data = [
    {
        name: <Localize translate_text="_t_Online banking_t_" />,
        data: [
            {
                method: <StyledIcon src={InstantBankTransfer} alt="instant bank transfer" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_5 - 50,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 50,000_t_" />,
                deposit_time: <Localize translate_text="_t_1 working day_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw easily using secure and fast money transfers._t_" />
                ),
                name: 'InstantBankTransfer',
            },
            {
                method: <StyledIcon src={Paytrust} alt="pay safe card" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_10 - 17,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_Not applicable_t_" />,
                deposit_time: <Localize translate_text="_t_1 working day_t_" />,
                withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit easily with your bank account on any device. Supports major banks in China, Indonesia, South Korea, Thailand, and Vietnam._t_" />
                ),
                name: 'paytrust88',
            },
            {
                method: <StyledIcon src={Help2Pay} alt="help2pay" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_15 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_Not applicable_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
                description: (
                    <Localize translate_text="_t_A leading payment service in Southeast Asia that’s fast, easy, and secure._t_" />
                ),
                name: 'Help2Pay',
                reference: 'help2pay-payment-method.pdf',
            },
            {
                method: <StyledIcon src={DragonPhoenix} alt="dragon phoenix" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_Not applicable_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw easily in THB, IDR, and VND._t_" />
                ),
                name: 'DragonPhoenix',
                reference: 'dragonphoenix-payment-method.pdf',
            },
            {
                method: <StyledIcon src={ZingPay} alt="zingPay" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 500_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 6,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Payments simplified. Fast and reliable way to deposit funds in your local currency._t_" />
                ),
                name: 'ZingPay',
                reference: 'zingpay-payment-method.pdf',
            },
            // {
            //     method: <StyledIcon src={DragonPay} alt="Dragon pay" />,
            //     currencies: 'USD',
            //     min_max_deposit: '50 - 4,500',
            //     min_max_withdrawal: '50 - 2,500',
            //     deposit_time: <Localize translate_text="_t_1 working day_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_1 - 3 working days_t_" />,
            //     description: (
            //         <Localize translate_text="_t_A payment facility that allows online bank transfers for clients in the Philippines. Available for deposits and withdrawals._t_" />
            //     ),
            //     name: 'DragonPay',
            //     reference: 'dragonpay-payment-method.pdf',
            // },
            {
                method: <StyledIcon src={NganLuong} alt="NganLuong" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_10 - 2,500_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 2,500_t_" />,
                deposit_time: <Localize translate_text="_t_1 working day_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 - 3 working days_t_" />,
                description: (
                    <Localize translate_text="_t_A leading e-wallet service in Vietnam that’s easy to use, flexible, and safe. Used by thousands of merchants._t_" />
                ),
                name: 'NganLuong',
                reference: 'nganluong-payment-method.pdf',
                locales: ['vi'],
            },
        ],
    },
    {
        name: <Localize translate_text="_t_Credit/debit cards_t_" />,
        note: (
            <Localize translate_text="_t_Withdrawals may take up to 15 working days to reflect on your card. Mastercard and Maestro withdrawals are only available for UK clients._t_" />
        ),
        data: [
            {
                method: <StyledIcon src={Visa} alt="Visa" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw using your Visa credit or debit card._t_" />
                ),
                name: 'visa',
                reference: 'visa-payment-method.pdf',
            },
            {
                method: <StyledIcon src={VisaElectron} alt="Visa Electron" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw using your Visa Electron card._t_" />
                ),
                name: 'VisaElectron',
                // reference: 'visa-payment-method.pdf',
            },
            {
                method: <StyledIcon src={MasterCard} alt="Mastercard" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day. Only for UK clients_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw using your Mastercard credit or debit card._t_" />
                ),
                name: 'mastercard',
                reference: 'mastercard-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Maestro} alt="Maestro" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day. Only for UK clients_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw using your Maestro debit card._t_" />
                ),
                name: 'maestro',
                reference: 'maestrocard-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Diners} alt="Diners" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw using your Diners credit or debit card._t_" />
                ),
                name: 'diners',
                reference: 'diners-club-payment-method.pdf',
            },
            // {
            //     method: <StyledIcon src={Discover} alt="Discover" />,
            //     currencies: 'USD',
            //     min_max_deposit: '10-10,000',
            //     min_max_withdrawal: 'Not applicable',
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
            //     description: <Localize translate_text="_t_Deposit using your Discover credit card._t_" />,
            // },
            // {
            //     method: <NoIconText>Mir</NoIconText>,
            //     currencies: 'RUB',
            //     min_max_deposit: <Localize translate_text='_t_10 - 10,000_t_' />,
            //     min_max_withdrawal: <Localize translate_text='_t_10 - 10,000_t_' />,
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw using your Mir credit or debit card._t_" />
            //     ),
            // },
            {
                method: <StyledIcon src={JCB} alt="JCB" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw using your JCB credit card._t_" />
                ),
            },
        ],
    },
    {
        name: <Localize translate_text="_t_E-wallets_t_" />,
        data: [
            {
                method: <StyledIcon src={Fasapay} alt="Fasapay" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_5 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Features fast deposits and withdrawals, low fees, and downloadable transaction history._t_" />
                ),
                url: 'https://www.fasapay.com/',
                name: 'fasapay',
                reference: 'fasapay-payment-method.pdf',
            },
            {
                method: <StyledIcon src={PerfectMoney} alt="PerfectMoney" />,
                currencies: 'USD EUR',
                min_max_deposit: <Localize translate_text="_t_5 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_A cheap and easy method for deposits and withdrawals. Features auto payments, annual interest, and real-time statements._t_" />
                ),
                url: 'https://perfectmoney.is/',
                name: 'perfect money',
                reference: 'perfectmoney-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Skrill} alt="Skrill" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Quick, simple to use, and available anywhere, anytime. Used by millions of clients worldwide._t_" />
                ),
                url: 'https://www.skrill.com/',
                name: 'skrill',
                reference: 'skrill-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Neteller} alt="Neteller" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Used by over 20 million clients worldwide. Enjoy instant access, free withdrawals, and reward points that you can redeem for cash._t_" />
                ),
                url: 'https://www.neteller.com/',
                name: 'neteller',
                reference: 'neteller-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Webmoney} alt="Webmoney" />,
                currencies: 'USD EUR',
                min_max_deposit: <Localize translate_text="_t_5 - 3,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 5,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_A complete payment service with over 30 million clients, 10,000  daily signups, and is supported by more than 100,000 merchants._t_" />
                ),
                url: 'https://www.wmtransfer.com/',
                name: 'webmoney',
                reference: 'webmoney-payment-method.pdf',
            },
            // {
            //     method: <StyledIcon src={Qiwi} alt="Qiwi" />,
            //     currencies: 'USD EUR',
            //     min_max_deposit: ['5-200 (USD)', '5-150 (EUR)'],
            //     min_max_withdrawal: ['5-180 (USD)', '5-150 (EUR)'],
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
            //     description: (
            //         <Localize translate_text="_t_A payment service provider that provides a simple way to transfer money, receive payments, and pay online._t_" />
            //     ),
            //     url: 'https://qiwi.com/',
            //     name: 'qiwi',
            // },
            {
                method: <StyledIcon src={PaysafeCard} alt="PaysafeCard" />,
                currencies: 'USD AUD\nGBP EUR',
                min_max_deposit: (
                    <Localize
                        translate_text="_t_5 - 1,000<0></0>5 - 10,000_t_"
                        components={[<br key={0} />]}
                    />
                ),
                min_max_withdrawal: <Localize translate_text="_t_5 - 750_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_A convenient payment service that doesn’t need a bank account or credit card. Accepted by thousands of merchants worldwide._t_" />
                ),
                url: 'https://www.paysafecard.com/',
                name: 'paysafe',
            },
            {
                method: <StyledIcon src={Jeton} alt="Jeton" />,
                currencies: 'USD EUR AUD GBP',
                min_max_deposit: <Localize translate_text="_t_5 - 1,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 1,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_A fast and secure money transfer service. Access your money anywhere with the mobile app._t_" />
                ),
                url: 'https://www.jeton.com/',
                name: 'jeton',
                reference: 'jeton-payment-method.pdf',
            },

            {
                method: <StyledIcon src={Sticpay} alt="Sticpay" />,
                currencies: 'USD EUR GBP',
                min_max_deposit: <Localize translate_text="_t_5 - 10,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 1,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_An easy, cheap, and fast way to transfer money. Supported by banks and merchants worldwide._t_" />
                ),
                url: 'https://www.sticpay.com/',
                name: 'sticpay',
                reference: 'sticpay-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Airtm} alt="Airtm" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_5 - 2,500_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 2,500_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Easily convert your currency to USD and transfer money worldwide. Used by more than 500,000 clients in 163 countries._t_" />
                ),
                url: 'https://www.airtm.io/#/',
                name: 'airtm',
                reference: 'airtm-payment-method.pdf',
            },
            // {
            //     method: <StyledIcon src={Help2Pay} alt="help2pay" />,
            //     currencies: 'USD',
            //     min_max_deposit: '5-10,000',
            //     min_max_withdrawal: <Localize translate_text="_t_5-10,000_t_" />,
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
            //     description: (
            //         <Localize translate_text="_t_The leading payment software solution in Southeast Asia. Currently available for making deposits in Vietnam, Thailand, and Indonesia._t_" />
            //     ),
            //     name: 'Help2Pay',
            //     reference: 'help2pay-payment-method.pdf',
            // },
            {
                method: <StyledIcon src={Boleto} alt="Boleto" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_10 - 500_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_Not applicable_t_" />,
                deposit_time: <Localize translate_text="_t_2 - 3 working days_t_" />,
                withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
                description: (
                    <Localize translate_text="_t_Use this popular invoice-based payment method to deposit if you don’t have a bank account or credit card. This option is accessible through Skrill._t_" />
                ),
                name: 'boleto-bancário',
            },
            {
                method: <StyledIcon src={Paylivre} alt="Paylivre" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_5 - 4,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 - 2 working days_t_" />,
                description: (
                    <Localize translate_text="_t_Enjoy fast, smooth, and secure deposits and withdrawals with PayLivre._t_" />
                ),
                url: 'https://paylivre.com/',
                name: 'paylivre',
                reference: 'paylivre-payment-method.pdf',
            },
            {
                method: <StyledIcon src={OnlineNaira} alt="OnlineNaira" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_10 - 1,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_10 - 10,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 - 2 working days_t_" />,
                description: (
                    <Localize translate_text="_t_Make fast and secure deposits and withdrawals with this mobile-friendly solution for clients in Nigeria._t_" />
                ),
                url: 'https://www.onlinenaira.com/',
                name: 'onlinenaira',
                // reference: 'paylivre-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Trustly} alt="Trustly" />,
                currencies: 'USD EUR GBP',
                min_max_deposit: <Localize translate_text="_t_10 - 100_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_Will be available soon_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_Will be available soon_t_" />,
                description: (
                    <Localize translate_text="_t_Enjoy fast, smooth, and secure deposits and withdrawals with Trustly._t_" />
                ),
                url: 'https://www.trustly.net/',
                name: 'trustly',
            },
            {
                method: <StyledIcon src={Beyonic} alt="Beyonic" />,
                currencies: 'UGX TZS',
                min_max_deposit: <Localize translate_text="_t_5 - 1,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 1,000_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 - 2 working days_t_" />,
                description: (
                    <Localize translate_text="_t_Make deposits easily using your mobile. For clients in Uganda and Tanzania._t_" />
                ),
                url: 'https://beyonic.com/',
                name: 'beyonic',
            },
            {
                method: <StyledIcon src={Astropay} alt="Astropay" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_5 - 2,500_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_5 - 2,500_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_1 working day_t_" />,
                description: (
                    <Localize translate_text="_t_Enjoy fast and secure deposits and withdrawals with Astropay._t_" />
                ),
                name: 'astropay',
            },
            {
                method: <StyledIcon src={OneForYou} alt="OneForYou" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_10 - 1,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_Not applicable_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
                description: (
                    <Localize translate_text="_t_Make deposits easily with cash voucher payment solution for South Africa._t_" />
                ),
                name: 'oneforyou',
            },
            {
                method: <StyledIcon src={Advcash} alt="Advcash" />,
                currencies: 'USD',
                min_max_deposit: <Localize translate_text="_t_5 - 1,000_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_Will be available soon_t_" />,
                deposit_time: <Localize translate_text="_t_Instant_t_" />,
                withdrawal_time: <Localize translate_text="_t_Will be available soon_t_" />,
                description: (
                    <Localize translate_text="_t_Enjoy fast, smooth, and secure deposits and withdrawals with AdvCash._t_" />
                ),
                name: 'advcash',
            },
            // {
            //     method: <NoIconText> MTN Mobile Money</NoIconText>,
            //     currencies: 'GHS UGX',
            //     min_max_deposit: '10-500',
            //     min_max_withdrawal: 'Not applicable',
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Make deposits directly from your mobile with this affordable, fast, and secure payment solution for clients in Ghana and Uganda._t_" />
            //     ),
            //     name: 'mtnmobilemoney',
            // },
            // {
            //     method: <StyledIcon src={Tigo} alt='tigo'/>,
            //     currencies: 'GHS',
            //     min_max_deposit: '10-500',
            //     min_max_withdrawal: 'Not applicable',
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Make secure deposits directly from your mobile. For clients in Ghana._t_" />
            //     ),
            //     url:'https://www.tigo.com.gt/tigopay',
            //     name: 'tigo',
            // },
            // {
            //     method: <StyledIcon src={Airtel} alt='airtel'/>,
            //     currencies: 'GHS UGX',
            //     min_max_deposit: '10-500',
            //     min_max_withdrawal: 'Not applicable',
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Make deposits easily using your mobile. For clients in Ghana and Uganda._t_" />
            //     ),
            //     url:'https://www.airtel.in/',
            //     name: 'airtel',
            // },
            // {
            //     method: <NoIconText> Vodafone Cash </NoIconText>,
            //     currencies: 'GHS',
            //     min_max_deposit: '10-500',
            //     min_max_withdrawal: 'Not applicable',
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Make deposits directly from your mobile with this popular payment solution for clients in Ghana. No bank account needed._t_" />
            //     ),
            //     name: 'vodafone',
            // },
            // {
            //     method: <NoIconText>Beyonic</NoIconText>,
            //     currencies: 'UGX, TZS',
            //     min_max_deposit: '5-1,000',
            //     min_max_withdrawal: '5-1,000',
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_1-2 working days_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Make deposits easily using your mobile. For clients in Uganda and Tanzania._t_" />
            //     ),
            //     url:'https://beyonic.com/',
            //     name: 'beyonic',
            // },
            // {
            //     method: <NoIconText>Trustly</NoIconText>,
            //     currencies: 'EUR',
            //     min_max_deposit: '10-100',
            //     min_max_withdrawal: 'Not applicable',
            //     deposit_time: <Localize translate_text="_t_Instant_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Not applicable_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Enjoy fast, smooth, and secure deposits and withdrawals with Trustly._t_" />
            //     ),
            //     url:'https://www.trustly.net/',
            //     name: 'trustly',
            // },
        ],
    },
    {
        name: <Localize translate_text="_t_Cryptocurrencies_t_" />,
        is_crypto: true,
        note: (
            <Localize translate_text="_t_The minimum amount for withdrawal will vary depending on the latest exchange rates. The figures shown here have been rounded._t_" />
        ),
        data: [
            // {
            //     method: <StyledIcon src={Binance} alt='Binance' />,
            //     currencies: 'BUSD',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in Binance USD, a cryptocurrency that’s pegged to USD._t_" />
            //     ),
            //     name: 'BUSD',
            // },
            {
                method: <StyledIcon src={Bitcoin} alt="Bitcoin" />,
                currencies: 'BTC',
                min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_0.0022_t_" />,
                deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
                withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw in Bitcoin, the world’s first cryptocurrency._t_" />
                ),
                name: 'BTC',
                reference: 'bitcoin-payment-method.pdf',
            },
            // {
            //     method: <DaiIc />,
            //     currencies: 'DAI',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in Multi-Collateral DAI, a cryptocurrency that’s pegged to USD._t_" />
            //     ),
            //     name: 'DAI',
            // },
            {
                method: <StyledIcon src={Ethereum} alt="Ethereum" />,
                currencies: 'ETH',
                min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_0.013_t_" />,
                deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
                withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw in Ethereum, among the top 3 most used cryptocurrencies._t_" />
                ),
                name: 'ETH',
                reference: 'ETH-payment-method.pdf',
            },
            // {
            //     method: <StyledIcon src={StasisEuro} alt='StasisEuro' />,
            //     currencies: 'EURS',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in STASIS Euro, a cryptocurrency that’s pegged to EUR._t_" />
            //     ),
            //     name: 'EURS',
            // },
            // {
            //     method: <StyledIcon src={Idk} alt='Idk' />,
            //     currencies: 'IDK',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in IDK, a cryptocurrency that's pegged to IDR (1:1,000)._t_" />
            //     ),
            //     name: 'IDK',
            // },
            {
                method: <StyledIcon src={Litecoin} alt="Litecoin" />,
                currencies: 'LTC',
                min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_0.085_t_" />,
                deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
                withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw in Litecoin, a durable cryptocurrency with fast transaction processing._t_" />
                ),
                name: 'LTC',
                reference: 'litecoin-payment-method.pdf',
            },
            // {
            //     method: <StyledIcon src={Paxos} alt='Paxos' />,
            //     currencies: 'PAX',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in Paxos Standard, a cryptocurrency that’s pegged to USD._t_" />
            //     ),
            //     name: 'PAX',
            // },
            // {
            //     method: <StyledIcon src={True} alt='True' />,
            //     currencies: 'TUSD',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in TrueUSD, a cryptocurrency that’s pegged to USD._t_" />
            //     ),
            //     name: 'TUSD',
            // },
            {
                method: <StyledIcon src={UsdCoin} alt="UsdCoin" />,
                currencies: 'USDC',
                min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_25_t_" />,
                deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
                withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw in USD Coin, a cryptocurrency that’s pegged to USD._t_" />
                ),
                name: 'USDC',
            },
            // {
            //     method: <StyledIcon src={Usdk} alt='Usdk' />,
            //     currencies: 'USDK',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in USDK, a cryptocurrency that’s pegged to USD._t_" />
            //     ),
            //     name: 'USDK',
            // },
            {
                method: <StyledIcon src={Tether} alt="Tether" />,
                currencies: 'USDT',
                min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_25_t_" />,
                deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
                withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
                description: (
                    <Localize translate_text="_t_Deposit and withdraw in Tether, a cryptocurrency that’s pegged to fiat currencies._t_" />
                ),
                name: 'UST',
            },
            // {
            //     method: <StyledIcon src={Tether} alt='Tether' />,
            //     currencies: 'eUSDT',
            //     min_max_deposit: <Localize translate_text="_t_No minimum_t_" />,
            //     min_max_withdrawal: undefined,
            //     deposit_time: <Localize translate_text="_t_Funds available as soon as confirmed_t_" />,
            //     withdrawal_time: <Localize translate_text="_t_Subject to internal checks_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Deposit and withdraw in Tether ERC20, a cryptocurrency that’s pegged to USD._t_" />
            //     ),
            //     name: 'eUSDT',
            // },
        ],
    },
    {
        name: <Localize translate_text="_t_Fiat onramp - Buy crypto on popular exchanges._t_" />,
        is_fiat_onramp: true,
        note: (
            <Localize translate_text="_t_These payment methods are available exclusively for our clients with crypto trading accounts._t_" />
        ),
        data: [
            {
                method: <StyledIcon src={Changelly} alt="Changelly" />,
                currencies: 'USD EUR GBP BTC',
                min_max_deposit: <Localize translate_text="_t_50 - 5,000_t_" />,
                deposit_time: <Localize translate_text="_t_5 - 30 minutes_t_" />,
                description: (
                    <Localize translate_text="_t_A safe and speedy crypto exchange and fiat-to-crypto service that's available worldwide. Offering 150+ cryptocurrencies. 24/7 live chat support._t_" />
                ),
                name: 'Changelly',
                reference: 'changelly-payment-method.pdf',
            },
            {
                method: <StyledIcon src={Banxa} alt="Banxa" />,
                currencies: 'USD EUR GBP AUD\nBTC LTC USDT USDC',
                min_max_deposit: <Localize translate_text="_t_50 - 5,000_t_" />,
                deposit_time: <Localize translate_text="_t_5 - 30 minutes_t_" />,
                description: (
                    <Localize translate_text="_t_Make fast, easy, and secure deposits with this internationally compliant fiat-to-crypto exchange using your credit or debit card. Registrations are hassle-free._t_" />
                ),
                name: 'Banxa',
            },
            // {
            //     method: <StyledIcon src={Wyre} alt="Wyre" />,
            //     currencies: (
            //         <Localize
            //             translate_text="_t_USD EUR GBP AUD<0></0>BTC ETH USDC_t_"
            //             components={[<br key={0} />]}
            //         />
            //     ),
            //     min_max_deposit: <Localize translate_text="_t_50 - 5,000_t_" />,
            //     deposit_time: <Localize translate_text="_t_5 - 30 minutes_t_" />,
            //     description: (
            //         <Localize translate_text="_t_Purchase crypto using your credit and debit card to top-up your Deriv account with this global fiat-to-crypto exchange._t_" />
            //     ),
            //     name: 'Wyre',
            // },
            {
                method: <StyledIcon src={Xanpool} alt="Xanpool" />,
                currencies: 'USD EUR GBP AUD\nBTC ETH LTC USDT',
                min_max_deposit: <Localize translate_text="_t_50 - 5,000_t_" />,
                deposit_time: <Localize translate_text="_t_5 - 30 minutes_t_" />,
                description: (
                    <Localize translate_text="_t_Make a deposit into your Deriv crypto account via local bank wire with this fiat-to-crypto exchange for clients in Southeast Asia._t_" />
                ),
                name: 'Xanpool',
            },
        ],
    },
    {
        is_dp2p: true,
        name: <Localize translate_text="_t_Deriv P2P_t_" />,
        note: (
            <Localize translate_text="_t_Please contact our customer support if you wish to increase your daily deposit/withdrawal limits._t_" />
        ),
        data: [
            {
                method: <StyledIcon src={Dp2p} alt="DP2P" />,
                currencies: <Localize translate_text="_t_Your local currency_t_" />,
                min_max_deposit: <Localize translate_text="_t_Deriv USD account_t_" />,
                min_max_withdrawal: <Localize translate_text="_t_500 USD_t_" />,
                deposit_time: <Localize translate_text="_t_500 USD_t_" />,
                withdrawal_time: <Localize translate_text="_t_Max 1 hour_t_" />,
                reference_link: (
                    <StyledRefLink to="/p2p/" target="_blank" rel="noopener noreferrer">
                        <Localize translate_text="_t_Learn more_t_" />
                    </StyledRefLink>
                ),
                name: 'DP2P',
            },
        ],
    },
]

export default payment_data
