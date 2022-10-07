import React from 'react'
import { Localize } from 'components/localization'

type ArticlesByCategoryType = {
    title: React.ReactNode
    category: string
    sub_category: React.ReactNode
    label: string
    hide_for_eu?: boolean
    hide_for_non_eu?: boolean
}[]

export type ArcticlesType = {
    section: string
    category: React.ReactNode
    articles: ArticlesByCategoryType
}

export const articles: ArcticlesType[] = [
    {
        section: 'General',
        category: <Localize translate_text="Account" />,
        articles: [
            {
                title: <Localize translate_text="How can I change my personal details?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'changing-your-personal-details',
            },
            {
                title: <Localize translate_text="How can I change the currency of my account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'change-account-currency',
            },
            {
                title: <Localize translate_text="Can I change my email address?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'change-my-email-address',
            },
            {
                title: <Localize translate_text="Why can't I create an account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'who-can-open-an-account',
            },
            {
                title: (
                    <Localize translate_text="I forgot my Google/Facebook/Apple account password. How can I log in to my Deriv account?" />
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
            {
                title: <Localize translate_text="Can I open a corporate or business account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'open-a-corporate-or-business-account',
            },
            {
                title: <Localize translate_text="Do I need to pay taxes on my trades/profits?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'pay-taxes-on-my-trades-profits',
            },
            {
                title: <Localize translate_text="Can I open more than one Deriv account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'open-more-than-one-deriv-account',
            },
            {
                title: <Localize translate_text="How do I create an API token?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'create-an-API-token',
            },
            {
                title: (
                    <Localize translate_text="How can I set self-exclusion limits on my account?" />
                ),
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'self-exclusion-limits-on-my-account',
            },
            {
                title: (
                    <Localize translate_text="How can I adjust or remove my self-exclusion limits?" />
                ),
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'remove-self-exclusion-limits',
            },
            {
                title: <Localize translate_text="How can I reactivate my Deriv account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'reactivate-my-Deriv-account',
            },
            {
                title: <Localize translate_text="When do I need to verify my account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'need-to-verify-my-account',
            },
            {
                title: <Localize translate_text="How do I verify my account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'How-do-I-verify-my-account',
            },
            {
                title: <Localize translate_text="What documents do I need to verify my account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'documents-do-I-need-to-verify-my-account',
            },
            {
                title: <Localize translate_text="Why do I need to verify my account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'Why-do-I-need-to-verify-my-account',
            },
            {
                title: <Localize translate_text="Can I trade without verifying my account?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'Can-I-trade-without-verifying-my-account',
            },
            {
                title: <Localize translate_text="How long does verification take?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'How-long-does-verification-take',
            },
            {
                title: <Localize translate_text="Why were my documents declined?" />,
                category: 'account',
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'Why-were-my-documents-declined',
            },
        ],
    },
    {
        section: 'General',
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
                title: <Localize translate_text="What is Derived?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="Markets" />,
                label: 'what-is-derived',
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
                title: <Localize translate_text="What are the trading limits on my account?" />,
                category: 'Trading',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'trading-limits',
            },
            {
                title: (
                    <Localize translate_text="What assets are available for trading on weekends?" />
                ),
                category: 'Trading',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'contracts-available-on-weekends',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="Deposits and withdrawals" />,
        articles: [
            {
                title: (
                    <Localize translate_text="What payment methods can I use for deposits and withdrawals?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Payment methods" />,
                label: 'payment-methods',
            },
            {
                title: (
                    <Localize translate_text="How long does it take for my deposits and withdrawals to be processed?" />
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
                    <Localize translate_text="My withdrawal verification link has expired. What should I do?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'expired-verification-link',
            },
            {
                title: (
                    <Localize translate_text="How can I remove the withdrawal limit on my account?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'lift-withdrawal-limits',
            },
            {
                title: <Localize translate_text="Why did my credit card deposit get declined?" />,
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
                    <Localize translate_text="Why can't I withdraw using Maestro or Mastercard?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'withdraw-to-maestro-mastercard',
            },
            {
                title: (
                    <Localize translate_text="What conversion rates do you use for deposits and withdrawals?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'What-conversion-rates-do-you-use-for-deposits-and-withdrawals',
            },
            {
                title: <Localize translate_text="How can I cancel my withdrawal?" />,
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'How-can-I-cancel-my-withdrawal',
            },
            {
                title: (
                    <Localize translate_text="Can I deposit with my friend's/family member's debit/credit card or e-wallet?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'deposit-with-friends-and-family-card',
            },
            {
                title: (
                    <Localize translate_text="Why can't I see any payment methods on the Withdrawal page?" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'payment-methods-on-the-Withdrawal-page',
            },
        ],
    },
    {
        section: 'General',
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
            {
                title: (
                    <Localize translate_text="I lost my phone. How can I disable two-factor authentication (2FA)?" />
                ),
                category: 'Security',
                sub_category: <Localize translate_text="Verification" />,
                label: 'disable-two-factor-authentication',
            },
        ],
    },

    {
        section: 'General',
        category: <Localize translate_text="Affiliate programme" />,
        articles: [
            {
                title: <Localize translate_text="How do I sign up as an affiliate?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'affiliate-sign-up',
            },
            {
                title: <Localize translate_text="Why should I join your affiliate programme?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'why-affiliate',
            },
            {
                title: <Localize translate_text="What type of commission plans do you offer?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'commission-plans',
            },
            {
                title: <Localize translate_text="Who can apply as an affiliate?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'who-can-apply',
            },
            {
                title: <Localize translate_text="Is it free to join your affiliate programme?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'is-it-free',
            },
            {
                title: <Localize translate_text="What is a referred client?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'referred-client',
            },
            {
                title: (
                    <Localize translate_text="I forgot my affiliate password. What should I do?" />
                ),
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'forgot-password',
            },
            {
                title: <Localize translate_text="Where can I find my referral link?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'referral-link',
            },
            {
                title: <Localize translate_text="How do I change my affiliate payment method?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'payment-method',
            },
            {
                title: (
                    <Localize translate_text="How and when will I receive my commission payout?" />
                ),
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'commission-payout',
            },
            {
                title: <Localize translate_text="How do I see my earnings?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'see-earnings',
            },
            {
                title: <Localize translate_text="What type of reports will I have access to?" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'reports-access',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="IB programme" />,
        articles: [
            {
                title: (
                    <Localize translate_text="How do I sign up as an introducing broker (IB)?" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'ib-sign-up',
            },
            {
                title: (
                    <Localize translate_text="Why should I join your introducing broker (IB) programme?" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'why-ib',
            },
            {
                title: <Localize translate_text="How much do you pay in commission?" />,
                category: 'IB programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'how-much-commission',
            },
            {
                title: (
                    <Localize translate_text="Are there any charges for joining your introducing broker programme?" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'chargers-ib',
            },
            {
                title: (
                    <Localize translate_text="How and when will I receive my IB commission payout?" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'receive-commission',
            },
            {
                title: <Localize translate_text="When can I withdraw my commission?" />,
                category: 'IB programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'withdraw-commission',
            },
            {
                title: (
                    <Localize translate_text="Are there any conditions that I should meet before I can withdraw my commission?" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="Partners" />,
                label: 'withdraw-condition',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="About Deriv" />,
        articles: [
            {
                title: <Localize translate_text="Is Deriv regulated?" />,
                category: 'About Deriv',
                sub_category: <Localize translate_text="Regulation" />,
                label: 'Deriv-regulated',
            },
            {
                title: <Localize translate_text="Where is my money held?" />,
                category: 'About Deriv',
                sub_category: <Localize translate_text="Finance" />,
                label: 'money-held',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="DMT5" />,
        articles: [
            {
                title: <Localize translate_text="What is Deriv MetaTrader 5 (Deriv MT5)?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'what-is-dmt5',
            },
            {
                title: (
                    <Localize translate_text="What are the main differences between your digital options and CFD platforms?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'differences-of-dtrader-and-dmt5',
                hide_for_eu: true,
            },
            {
                title: (
                    <Localize translate_text="What are the main differences between your multipliers and CFD platforms?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'differences-of-multipliers-and-cfd',
                hide_for_non_eu: true,
            },
            {
                title: (
                    <Localize translate_text="What are the differences between the Deriv MT5 Derived and Financial accounts?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Accounts" />,
                label: 'differences-of-dmt5-accounts',
                hide_for_eu: true,
            },
            {
                title: <Localize translate_text="What is the CFDs account?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Accounts" />,
                label: 'what-is-cfds-account',
                hide_for_non_eu: true,
            },
            {
                title: (
                    <Localize translate_text="How can I withdraw funds from my Deriv MT5 real money account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Withdraw" />,
                label: 'withdraw-funds-from-DMT5',
            },
            {
                title: (
                    <Localize translate_text="Why are my Deriv MT5 login details different from my Deriv login details?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Login" />,
                label: 'login-credentials',
            },
            {
                title: <Localize translate_text="How can I change my Deriv MT5 password?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Reset password" />,
                label: 'reset-dmt5-password',
            },
            {
                title: (
                    <Localize translate_text="How can I deposit funds into my Deriv MT5 real money account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'deposit-to-dmt5',
            },
            {
                title: <Localize translate_text="How do I log in to my Deriv MT5 account?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'log-in-to-my-Deriv-MT5-account',
            },
            {
                title: (
                    <Localize translate_text="How do I set an investor password for my Deriv MT5 account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'investor-password-for-my-Deriv-MT5-account',
            },
            {
                title: <Localize translate_text="What is the name of my Deriv MT5 server?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'name-of-my-Deriv-MT5-server',
            },
            {
                title: (
                    <Localize translate_text="What is the minimum amount to open a position on Deriv MT5?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'minimum-amount-to-open-a-position-on-Deriv-MT5',
            },
            {
                title: (
                    <Localize translate_text="Why do my Deriv MT5 positions always start with a loss?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'Deriv-MT5-positions-always-start-with-a-loss',
            },
            {
                title: <Localize translate_text="Do you offer swap-free Deriv MT5 accounts?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'swap-free-Deriv-MT5-accounts',
            },
            {
                title: <Localize translate_text="How can I reactivate my Deriv MT5 account?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'reactivate-my-Deriv-MT5-account',
            },
            {
                title: (
                    <Localize translate_text="Can I change the leverage on my Deriv MT5 account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'leverage-on-my-Deriv-MT5-account',
            },
            {
                title: <Localize translate_text="What time is shown in the MT5 terminal?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'What-time-is-shown-in-the-MT5-terminal',
            },
            {
                title: <Localize translate_text="How can I download my Deriv MT5 history?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'download-my-Deriv-MT5-history',
            },
            {
                title: <Localize translate_text="Can I delete my Deriv MT5 account history?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'delete-my-Deriv-MT5-account-history',
            },
            {
                title: (
                    <Localize translate_text="For how long can I use my Deriv MT5 demo account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'For-how-long-can-I-use-my-Deriv-MT5-demo-account',
            },
            {
                title: (
                    <Localize translate_text="Will my inactive Deriv MT5 account be deactivated even though I still have a balance?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'Will-my-inactive-Deriv-MT5-account-be-deactivated',
            },
            {
                title: (
                    <Localize translate_text="Can I change the currency of my Deriv MT5 account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'Can-I-change-the-currency-of-my-Deriv-MT5-account',
            },
            {
                title: (
                    <Localize translate_text="Can I change the server for my Deriv MT5 account?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'Can-I-change-the-server-for-my-Deriv-MT5-account',
            },
            {
                title: <Localize translate_text="Do you offer micro forex pairs on Deriv MT5?" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'offer-micro-forex-pairs-on-Deriv-MT5',
            },
            {
                title: (
                    <Localize translate_text="What is the minimum volume for micro forex pairs?" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="Deposits" />,
                label: 'What-is-the-minimum-volume-for-micro-forex-pairs',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="Deriv X" />,
        articles: [
            {
                title: <Localize translate_text="What is Deriv X?" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'what-is-deriv-x',
            },
            {
                title: (
                    <Localize translate_text="What is  the minimum / maximum I can deposit into my Deriv X account?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Cashier limits" />,
                label: 'minimum-or-maximum-deposit',
            },
            {
                title: <Localize translate_text="What markets can I trade on Deriv X?" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="Markets" />,
                label: 'markets-on-deriv-x',
            },
            {
                title: (
                    <Localize translate_text="What is the minimum and maximum amount to trade on Deriv X?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="How to trade" />,
                label: 'minimum-and-maximum-amount-to-trade',
            },
            {
                title: (
                    <Localize translate_text="What are the major differences between DTrader, Deriv MT5 (DMT5) and Deriv X?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'differences-of-dtrader-dmt5-deriv-x',
            },
            {
                title: (
                    <Localize translate_text="What's the difference between Deriv MT5 and Deriv X?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'differences-of-dmt5-deriv-x',
            },
            {
                title: <Localize translate_text="How do I add a Deriv X account?" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="Accounts" />,
                label: 'add-account',
            },
            {
                title: <Localize translate_text="How do I log in to Deriv X?" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="Accounts" />,
                label: 'log-in',
            },
            {
                title: (
                    <Localize translate_text="What are the differences between Synthetics and Financial accounts?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'differences-of-synthetic-and-financial',
            },
            {
                title: <Localize translate_text="What is a Deriv X password?" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'trading-password',
            },
            {
                title: (
                    <Localize translate_text="How is my Deriv X password different from my Deriv password?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'differences-of-trading-and-deriv-password',
            },
            {
                title: <Localize translate_text="How do I reset my Deriv X password?" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'reset-deriv-x-password',
            },
            {
                title: (
                    <Localize translate_text="Where can I find my Deriv X account information?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'deriv-x-account-information',
            },
            {
                title: (
                    <Localize translate_text="How can I deposit funds into my Deriv X real money account?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'deposit-funds',
            },
            {
                title: (
                    <Localize translate_text="How do I withdraw funds from my Deriv X real money account?" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'withdraw-funds-from-deriv-x',
            },
        ],
    },
    {
        section: 'Platforms',
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
                title: <Localize translate_text="What contract types do you offer on DTrader?" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="Contracts" />,
                label: 'contracts-on-dtrader',
            },
            {
                title: <Localize translate_text="Can I download the chart on DTrader?" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="Contracts" />,
                label: 'download-the-chart-on-DTrader',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="Multipliers" />,
        articles: [
            {
                title: <Localize translate_text="What are multipliers?" />,
                category: 'Multipliers',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'what-are-multipliers',
            },
            {
                title: <Localize translate_text="How do I trade multipliers?" />,
                category: 'Multipliers',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'how-trade-multipliers',
            },
        ],
    },
    {
        section: 'Platforms',
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
        section: 'Platforms',
        category: <Localize translate_text="Deriv P2P" />,
        articles: [
            {
                title: <Localize translate_text="What is Deriv P2P?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Platforms" />,
                label: 'what-is-deriv-p2p',
            },
            {
                title: <Localize translate_text="How secure is Deriv P2P?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Secure" />,
                label: 'how-secure-deriv-p2p',
            },
            {
                title: <Localize translate_text="Do I need a Deriv account to use Deriv P2P?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'need-Deriv-account-to-use-Deriv-P2P',
            },
            {
                title: (
                    <Localize translate_text="Why is my Deriv P2P balance different from my Deriv account balance?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'Deriv-P2P-balance-different-from-my-Deriv-account-balance',
            },
            {
                title: (
                    <Localize translate_text="Where can I see the terms of use for Deriv P2P?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'the-terms-of-use-for-Deriv-P2P',
            },
            {
                title: <Localize translate_text="Why is my Deriv P2P account blocked?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'Deriv-P2P-account-blocked',
            },
            {
                title: (
                    <Localize translate_text="What payment methods can I use to exchange with other traders?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'payment-methods',
            },
            {
                title: <Localize translate_text="How do I create an ad?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'create-an-ad',
            },
            {
                title: <Localize translate_text="Where can I see my ads?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'see-my-ads',
            },
            {
                title: <Localize translate_text="How do I make an order?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'make-an-order',
            },
            {
                title: <Localize translate_text="Where can I see my orders?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'see-my-orders',
            },
            {
                title: <Localize translate_text="What does ‘completion rate’ mean?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'completion-rate',
            },
            {
                title: <Localize translate_text="Why can't I see my ad in the Buy/Sell tab?" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Payment" />,
                label: 'cannot-see-ads',
            },
            {
                title: (
                    <Localize translate_text="What should I do if I have a dispute with the trader I’m dealing with?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Dispute" />,
                label: 'dispute-with-the-trader',
            },
            {
                title: (
                    <Localize translate_text="How do I check my available balance for Deriv P2P?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Balance" />,
                label: 'available-balance-for-Deriv-P2P',
            },
            {
                title: (
                    <Localize translate_text="How do I ensure my Deriv P2P transactions are successful?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Transaction" />,
                label: 'Deriv-P2P-transactions-are-successful',
            },
            {
                title: (
                    <Localize translate_text="How do I get in touch with the trader I’m dealing with?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Transaction" />,
                label: 'in-touch-with-the-counterparty',
            },
            {
                title: (
                    <Localize translate_text="Can I increase my daily buy or sell limit on Deriv P2P?" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="Limit" />,
                label: 'buy-or-sell-limit',
            },
        ],
    },
]
