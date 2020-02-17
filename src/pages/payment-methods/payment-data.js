import React from 'react'
import { localize } from 'components/localization'
import BankTransfer from 'images/svg/payment-bank-transfer.svg'
import InternetBankTransfer from 'images/svg/payment-internet-bank-transfer.svg'
import Paytrust from 'images/svg/payment-paytrust.svg'
import Visa from 'images/svg/payment-visa.svg'
import MasterCard from 'images/svg/payment-mastercard.svg'
import Maestro from 'images/svg/payment-maestro.svg'

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
                url: 'https://www.binary.com/download/payment/Binary.com_BankWire.pdf',
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
                url: 'https://www.binary.com/download/payment/Binary.com_BankWire.pdf',
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
                url: 'https://www.binary.com/download/payment/Binary.com_BankWire.pdf',
                name: 'paytrust 88',
            },
        ],
    },
    {
        name: localize('Credit/debit cards'),
        note: localize(
            'Note: Mastercard and Maestro withdrawals are only available for UK Clients.',
        ),
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
                url: 'https://www.binary.com/download/payment/Binary.com_BankWire.pdf',
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
                url: 'https://www.binary.com/download/payment/Binary.com_BankWire.pdf',
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
                url: 'https://www.binary.com/download/payment/Binary.com_BankWire.pdf',
                name: 'maestro',
            },
        ],
    },
]

export default payment_data
