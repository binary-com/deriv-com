import React from 'react'
import { localize } from 'components/localization'
// SVG
import BankTransfer from 'images/svg/payment-bank-transfer.svg'
import InternetBankTransfer from 'images/svg/payment-internet-bank-transfer.svg'
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
import Iwallet from 'images/svg/payment-i-wallet.svg'
import Sticpay from 'images/svg/payment-sticpay.svg'
import Airtm from 'images/svg/payment-airtm.svg'
import Bitcoin from 'images/svg/payment-bitcoin.svg'
import Ethereum from 'images/svg/payment-ethereum.svg'
import Litecoin from 'images/svg/payment-litecoin.svg'
import Tether from 'images/svg/payment-tether.svg'

const payment_data = [
    {
        name: localize('Bank wire'),
        data: [
            {
                method: <BankTransfer />,
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
                method: <InternetBankTransfer />,
                currencies: 'USD GBP EUR',
                min_max_deposit: '25 - 10,000',
                min_max_withdrawal: '25 - 10,000',
                deposit_time: localize('1 working day'),
                withdrawal_time: localize('1 working day'),
                description: localize('Deposit and withdraw using your bank account.'),
                name: 'internet bank transfer',
            },
            {
                method: <Paytrust />,
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
        ],
    },
    {
        name: localize('Credit/debit cards'),
        note: localize('Mastercard and Maestro withdrawals are only available for UK Clients.'),
        data: [
            {
                method: <Visa />,
                currencies: 'USD GBP EUR AUD',
                min_max_deposit: '10 - 10,000',
                min_max_withdrawal: '10 - 10,000',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Deposit and withdraw using your Visa credit or debit card. Charges and interest rates apply.',
                ),
                name: 'visa',
            },
            {
                method: <MasterCard />,
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
                method: <Maestro />,
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
                method: <Fasapay />,
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
            },
            {
                method: <PerfectMoney />,
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
            },
            {
                method: <Skrill />,
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
            },
            {
                method: <Neteller />,
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
            },
            {
                method: <Webmoney />,
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
            },
            {
                method: <Qiwi />,
                currencies: 'USD EUR',
                min_max_deposit: ['5 - 200 (USD)', '5 - 150 (EUR)'],
                min_max_withdrawal: ['5 - 200 (USD)', '5 - 150 (EUR)'],
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'Signing up with Qiwi is easier than tying your shoelaces. Top-up is easy too: via credit card, ATM, online banking, etc.',
                ),
                url: 'https://qiwi.com/',
                name: 'qiwi',
            },
            {
                method: <PaysafeCard />,
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
                method: <Jeton />,
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
            },
            {
                method: <Iwallet />,
                currencies: 'USD',
                min_max_deposit: '5 - 10,000',
                min_max_withdrawal: 'N/A',
                deposit_time: localize('Instant'),
                withdrawal_time: localize('1 working day'),
                description: localize(
                    'A complete payment service with competitive fees, tight security, and efficient customer support. Available worldwide.',
                ),
                url: 'https://www.iwl.hk/',
                name: 'iwallet',
            },
            {
                method: <Sticpay />,
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
            },
            {
                method: <Airtm />,
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
            },
        ],
    },
    {
        name: localize('Cryptocurrencies'),
        is_crypto: true,
        note: localize(
            'The minimum amount for withdrawal will vary depending on the latest exchange rates.',
        ),
        data: [
            {
                method: <Bitcoin />,
                currencies: 'BTC',
                min_max_deposit: '-',
                min_max_withdrawal: '0.00292789',
                deposit_time: localize('3 blockchain confirmations'),
                withdrawal_time: localize(' 1 working day'),
                description: localize(
                    'Deposit and withdraw in Bitcoin, the world’s first cryptocurrency.',
                ),
                name: 'bitcoin',
            },
            {
                method: <Ethereum />,
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
                method: <Litecoin />,
                currencies: 'LTC',
                min_max_deposit: '-',
                min_max_withdrawal: '',
                deposit_time: localize('3 blockchain confirmations'),
                withdrawal_time: localize(' 1 working day'),
                description: localize(
                    'Deposit and withdraw in Litecoin, a durable cryptocurrency with fast transaction processing.',
                ),
                name: 'litecoin',
            },
            {
                method: <Tether />,
                currencies: 'UST',
                min_max_deposit: '-',
                min_max_withdrawal: '',
                deposit_time: localize('3 blockchain confirmations'),
                withdrawal_time: localize(' 1 working day'),
                description: localize(
                    'Deposit and withdraw in Tether, a cryptocurrency that’s pegged to fiat currencies.',
                ),
                name: 'tether',
            },
        ],
    },
]

export default payment_data
