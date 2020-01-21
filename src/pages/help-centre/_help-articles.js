import React from 'react'
import { Localize } from 'components/localization'

export const articles = [
    {
        category: <Localize translate_text="Account" />,
        articles: [
            {
                title: <Localize translate_text="Who can open an account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'who-can-open-an-account',
            },
            {
                title: <Localize translate_text="Opening an account" />,
                category: 'account',
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'opening-an-account',
            },
            {
                title: <Localize translate_text="Changing your personal details" />,
                category: 'account',
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'changing-your-personal-details',
            },
            {
                title: <Localize translate_text="Recovering your password" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'recovering-your-password',
            },
            {
                title: <Localize translate_text="Authenticating your account" />,
                category: 'account',
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'recovering-your-password',
            },
            {
                title: <Localize translate_text="How do I change or reset my Deriv password?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'How-do-I-change-or-reset-my-Deriv-password',
            },
        ],
    },
    {
        category: <Localize translate_text="Deposits and withdrawals" />,
        categoryCode: 'deposit',
        articles: [
            {
                title: <Localize translate_text="Making a deposit" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Deposits" />,
                label: 'making-a-deposit',
            },
            {
                title: <Localize translate_text="Expired verification link" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Deposits" />,
                label: 'expired-verification-link',
            },
            {
                title: <Localize translate_text="Withdrawal processing time" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'withdrawal-processing-time',
            },
            {
                title: <Localize translate_text="How do I withdraw funds from my Deriv account?" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'How-do-I-withdraw-funds-from-my-Deriv-account',
            },
        ],
    },
    {
        category: <Localize translate_text="Privacy and security" />,
        categoryCode: 'privacy',
        articles: [
            {
                title: (
                    <Localize translate_text="Safeguarding your account when you change your password" />
                ),
                category: <Localize translate_text="Privacy and security" />,
                sub_category: <Localize translate_text="Safeguard" />,
                label: 'Safeguarding-account-when-Change-password',
            },
            {
                title: (
                    <Localize translate_text="Safeguarding your account when you withdraw funds" />
                ),
                category: <Localize translate_text="Privacy and security" />,
                sub_category: <Localize translate_text="Safeguard" />,
                label: 'Safeguarding-account-when-withdraw-funds',
            },
        ],
    },
]
