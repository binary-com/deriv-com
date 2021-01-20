import React from 'react'
import { Localize } from 'components/localization'
export const articles = [
    {
        category: <Localize translate_text="Account" />,
        articles: [
            {
                title: <Localize translate_text="Why can't I create an account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'who-can-open-an-account',
            },
            {
                title: <Localize translate_text="How can I change my personal details?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'changing-your-personal-details',
            },
            {
                title: <Localize translate_text="How can I change my account's currency?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'change-account-currency',
            },
            {
                title: (
                    <Localize translate_text="I forgot my Google/Facebook account password. How can I log in to my Deriv account?" />
                ),
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'recovering-your-password',
            },
            {
                title: <Localize translate_text="How can I close my account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'close-your-account',
            },
            {
                title: <Localize translate_text="How do I unsubscribe from marketing emails?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'unsubscribe-marketing-emails',
            },
            {
                title: <Localize translate_text="What is a dormant fee?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'what-is-dormant-fee',
            },
        ],
    },
    {
        category: <Localize translate_text="Trading" />,
        articles: [
            {
                title: <Localize translate_text="What is forex?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="Markets" />,
                label: 'what-is-forex',
            },
            {
                title: <Localize translate_text="What are commodities?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="Markets" />,
                label: 'what-are-commodities',
            },
            {
                title: <Localize translate_text="What are stock indices?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="Markets" />,
                label: 'what-are-stock-indices',
            },
            {
                title: <Localize translate_text="What are synthetic indices?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="Markets" />,
                label: 'what-are-synthetic-indices',
            },
            {
                title: <Localize translate_text="What are contracts for difference (CFDs)?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="Markets" />,
                label: 'what-are-cfds',
            },
            {
                title: <Localize translate_text="What are digital options?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="Markets" />,
                label: 'what-are-digital-options',
            },
            {
                title: <Localize translate_text="How many trading platforms do you offer?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'how-many-trading-platforms',
            },
            {
                title: <Localize translate_text="How can I automate my trading strategy?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'how-to-automate-trading-strategy',
            },
            {
                title: <Localize translate_text="What are my trading limits?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'trading-limits',
            },
            {
                title: (
                    <Localize translate_text="What contracts are available for trading on weekends?" />
                ),
                category: 'Trading',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'contracts-available-on-weekends',
            },
        ],
    },
    {
        category: <Localize translate_text="Deposits and withdrawals" />,
        articles: [
            {
                title: <Localize translate_text="What payment methods do you support?" />,
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Payment methods" />,
                label: 'payment-methods',
            },
            {
                title: (
                    <Localize translate_text="How long does it take to process deposits and withdrawals?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Cashier limits" />,
                label: 'deposit-withdrawal-processing-time',
            },
            {
                title: (
                    <Localize translate_text="What is the minimum deposit or withdrawal amount?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Cashier limits" />,
                label: 'minimum-deposit-or-withdrawal',
            },
            {
                title: (
                    <Localize translate_text="My withdrawal verification link expired. What should I do?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'expired-verification-link',
            },
            {
                title: <Localize translate_text="How can I lift my withdrawal limits?" />,
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'lift-withdrawal-limits',
            },
            {
                title: (
                    <Localize translate_text="Why does my credit card deposit keep getting declined?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'credit-card-deposit-declined',
            },
            {
                title: <Localize translate_text="Can I withdraw my deposit bonus?" />,
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'withdraw-deposit-bonus',
            },
            {
                title: (
                    <Localize translate_text="Why can't I withdraw funds to my Maestro/Mastercard?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'withdraw-to-maestro-mastercard',
            },
        ],
    },

    {
        category: <Localize translate_text="DMT5" />,
        articles: [
            {
                title: <Localize translate_text="What is DMT5?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'what-is-dmt5',
            },
            {
                title: (
                    <Localize translate_text="What are the major differences between DTrader and DMT5?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'differences-of-dtrader-and-dmt5',
            },
            {
                title: (
                    <Localize translate_text="What are the differences between the DMT5 Synthetic Indices, Financial and Financial STP accounts?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Accounts" />,
                label: 'differences-of-dmt5-accounts',
            },
            {
                title: (
                    <Localize translate_text="How can I withdraw funds from my DMT5 real money account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Withdraw" />,
                label: 'withdraw-funds-from-DMT5',
            },
            {
                title: (
                    <Localize translate_text="Why are my DMT5 login details different from my Deriv login details?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Login" />,
                label: 'login-credentials',
            },
            {
                title: <Localize translate_text="How can I reset my DMT5 account password?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Reset password" />,
                label: 'reset-dmt5-password',
            },
            {
                title: (
                    <Localize translate_text="How can I deposit funds into my DMT5 real money account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'deposit-to-dmt5',
            },
        ],
    },
    {
        category: <Localize translate_text="DTrader" />,
        articles: [
            {
                title: <Localize translate_text="What is DTrader?" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'what-is-dtrader',
            },
            {
                title: <Localize translate_text="What markets can I trade on DTrader?" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="Markets" />,
                label: 'markets-on-dtrader',
            },
            {
                title: <Localize translate_text="What contract types can I use on DTrader?" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="Contracts" />,
                label: 'contracts-on-dtrader',
            },
        ],
    },
    {
        category: <Localize translate_text="DBot" />,
        articles: [
            {
                title: <Localize translate_text="What is DBot?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'what-is-dbot',
            },
            {
                title: <Localize translate_text="How do I find the blocks I need?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Blocks" />,
                label: 'find-blocks',
            },
            {
                title: <Localize translate_text="How do I remove blocks from the workspace?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Blocks" />,
                label: 'remove-blocks',
            },
            {
                title: <Localize translate_text="How do I create variables?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Variables" />,
                label: 'create-variables',
            },
            {
                title: <Localize translate_text="What is a quick strategy and how do I use it?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Strategy" />,
                label: 'quick-strategy',
            },
            {
                title: <Localize translate_text="What is the Martingale strategy?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Strategy" />,
                label: 'martingale-strategy',
            },
            {
                title: <Localize translate_text="What is the D’Alembert strategy?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Strategy" />,
                label: 'dalembert-strategy',
            },
            {
                title: <Localize translate_text="What is the Oscar's Grind strategy?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Strategy" />,
                label: 'oscars-grind-strategy',
            },
            {
                title: <Localize translate_text="How do I save my strategy?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Strategy" />,
                label: 'save-strategy',
            },
            {
                title: <Localize translate_text="How do I import my strategies into DBot?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Strategy" />,
                label: 'import-strategy',
            },
            {
                title: <Localize translate_text="How do I reset the workspace?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Workspace" />,
                label: 'reset-workspace',
            },
            {
                title: <Localize translate_text="How do I clear my transaction log?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Logs" />,
                label: 'clear-transaction-log',
            },
            {
                title: <Localize translate_text="How do I control my losses with DBot?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'control-loss',
            },
            {
                title: (
                    <Localize translate_text="Where can I see the status of my trades in DBot?" />
                ),
                category: 'DBot',
                sub_category: <Localize translate_text="Logs" />,
                label: 'status-of-trades',
            },
            {
                title: <Localize translate_text="How do I view the chart in DBot?" />,
                category: 'DBot',
                sub_category: <Localize translate_text="Chart" />,
                label: 'view-chart',
            },
        ],
    },

    {
        category: <Localize translate_text="Security" />,
        articles: [
            {
                title: <Localize translate_text="Do I need to verify my Deriv account?" />,
                category: 'Security',
                sub_category: <Localize translate_text="Verification" />,
                label: 'verify-account',
            },
            {
                title: <Localize translate_text="How long does verification take?" />,
                category: 'Security',
                sub_category: <Localize translate_text="Verification" />,
                label: 'verification-duration',
            },
            {
                title: <Localize translate_text="Why were my documents declined?" />,
                category: 'Security',
                sub_category: <Localize translate_text="Verification" />,
                label: 'documents-declined',
            },
        ],
    },
]
