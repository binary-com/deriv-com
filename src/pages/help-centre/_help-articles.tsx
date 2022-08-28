import React from 'react'
import { Localize } from 'components/localization'

type ArticlesByCategoryType = {
    title?: React.ReactElement
    category?: string
    sub_category?: React.ReactElement
    label?: string
    title_eu?: React.ReactElement
    label_eu?: string
}[]

export type ArcticlesType = {
    section: string
    category: React.ReactElement
    articles: ArticlesByCategoryType
}

export const articles: ArcticlesType[] = [
    {
        section: 'General',
        category: <Localize translate_text="_t_Account_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_How can I change my personal details?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'changing-your-personal-details',
            },
            {
                title: <Localize translate_text="_t_How can I change the currency of my account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'change-account-currency',
            },
            {
                title: <Localize translate_text="_t_Can I change my email address?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'change-my-email-address',
            },
            {
                title: <Localize translate_text="_t_Why can't I create an account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Opening an account_t_" />,
                label: 'who-can-open-an-account',
            },
            {
                title: (
                    <Localize translate_text="_t_I forgot my Google/Facebook/Apple account password. How can I log in to my Deriv account?_t_" />
                ),
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'recovering-your-password',
            },
            {
                title: <Localize translate_text="_t_How can I close my account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'close-your-account',
            },
            {
                title: <Localize translate_text="_t_How do I unsubscribe from marketing emails?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'unsubscribe-marketing-emails',
            },
            {
                title: <Localize translate_text="_t_What is a dormant fee?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'what-is-dormant-fee',
            },
            {
                title: <Localize translate_text="_t_Can I open a corporate or business account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'open-a-corporate-or-business-account',
            },
            {
                title: <Localize translate_text="_t_Do I need to pay taxes on my trades/profits?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'pay-taxes-on-my-trades-profits',
            },
            {
                title: <Localize translate_text="_t_Can I open more than one Deriv account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'open-more-than-one-deriv-account',
            },
            {
                title: <Localize translate_text="_t_How do I create an API token?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'create-an-API-token',
            },
            {
                title: (
                    <Localize translate_text="_t_How can I set self-exclusion limits on my account?_t_" />
                ),
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'self-exclusion-limits-on-my-account',
            },
            {
                title: (
                    <Localize translate_text="_t_How can I adjust or remove my self-exclusion limits?_t_" />
                ),
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'remove-self-exclusion-limits',
            },
            {
                title: <Localize translate_text="_t_How can I reactivate my Deriv account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'reactivate-my-Deriv-account',
            },
            {
                title: <Localize translate_text="_t_When do I need to verify my account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'need-to-verify-my-account',
            },
            {
                title: <Localize translate_text="_t_How do I verify my account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'How-do-I-verify-my-account',
            },
            {
                title: <Localize translate_text="_t_What documents do I need to verify my account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'documents-do-I-need-to-verify-my-account',
            },
            {
                title: <Localize translate_text="_t_Why do I need to verify my account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'Why-do-I-need-to-verify-my-account',
            },
            {
                title: <Localize translate_text="_t_Can I trade without verifying my account?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'Can-I-trade-without-verifying-my-account',
            },
            {
                title: <Localize translate_text="_t_How long does verification take?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'How-long-does-verification-take',
            },
            {
                title: <Localize translate_text="_t_Why were my documents declined?_t_" />,
                category: 'account',
                sub_category: <Localize translate_text="_t_Managing your account_t_" />,
                label: 'Why-were-my-documents-declined',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="_t_Trading_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_What is forex?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'what-is-forex',
            },
            {
                title: <Localize translate_text="_t_What are commodities?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'what-are-commodities',
            },
            {
                title: <Localize translate_text="_t_What are stock indices?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'what-are-stock-indices',
            },
            {
                title: <Localize translate_text="_t_What are synthetic indices?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'what-are-synthetic-indices',
            },
            {
                title: <Localize translate_text="_t_What are contracts for difference (CFDs)?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'what-are-cfds',
            },
            {
                title: <Localize translate_text="_t_What are digital options?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'what-are-digital-options',
            },
            {
                title: <Localize translate_text="_t_How many trading platforms do you offer?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_How to trade_t_" />,
                label: 'how-many-trading-platforms',
            },
            {
                title: <Localize translate_text="_t_How can I automate my trading strategy?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_How to trade_t_" />,
                label: 'how-to-automate-trading-strategy',
            },
            {
                title: <Localize translate_text="_t_What are the trading limits on my account?_t_" />,
                category: 'Trading',
                sub_category: <Localize translate_text="_t_How to trade_t_" />,
                label: 'trading-limits',
            },
            {
                title: (
                    <Localize translate_text="_t_What assets are available for trading on weekends?_t_" />
                ),
                category: 'Trading',
                sub_category: <Localize translate_text="_t_How to trade_t_" />,
                label: 'contracts-available-on-weekends',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="_t_Deposits and withdrawals_t_" />,
        articles: [
            {
                title: (
                    <Localize translate_text="_t_What payment methods can I use for deposits and withdrawals?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Payment methods_t_" />,
                label: 'payment-methods',
            },
            {
                title: (
                    <Localize translate_text="_t_How long does it take for my deposits and withdrawals to be processed?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Cashier limits_t_" />,
                label: 'deposit-withdrawal-processing-time',
            },
            {
                title: (
                    <Localize translate_text="_t_What is the minimum deposit or withdrawal amount?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Cashier limits_t_" />,
                label: 'minimum-deposit-or-withdrawal',
            },
            {
                title: (
                    <Localize translate_text="_t_My withdrawal verification link has expired. What should I do?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'expired-verification-link',
            },
            {
                title: (
                    <Localize translate_text="_t_How can I remove the withdrawal limit on my account?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'lift-withdrawal-limits',
            },
            {
                title: <Localize translate_text="_t_Why did my credit card deposit get declined?_t_" />,
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'credit-card-deposit-declined',
            },
            {
                title: <Localize translate_text="_t_Can I withdraw my deposit bonus?_t_" />,
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'withdraw-deposit-bonus',
            },
            {
                title: (
                    <Localize translate_text="_t_Why can't I withdraw using Maestro or Mastercard?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'withdraw-to-maestro-mastercard',
            },
            {
                title: (
                    <Localize translate_text="_t_What conversion rates do you use for deposits and withdrawals?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'What-conversion-rates-do-you-use-for-deposits-and-withdrawals',
            },
            {
                title: <Localize translate_text="_t_How can I cancel my withdrawal?_t_" />,
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'How-can-I-cancel-my-withdrawal',
            },
            {
                title: (
                    <Localize translate_text="_t_Can I deposit with my friend's/family member's debit/credit card or e-wallet?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'deposit-with-friends-and-family-card',
            },
            {
                title: (
                    <Localize translate_text="_t_Why can't I see any payment methods on the Withdrawal page?_t_" />
                ),
                category: 'Deposits and withdrawals',
                sub_category: <Localize translate_text="_t_Withdrawals_t_" />,
                label: 'payment-methods-on-the-Withdrawal-page',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="_t_Security_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_Do I need to verify my Deriv account?_t_" />,
                category: 'Security',
                sub_category: <Localize translate_text="_t_Verification_t_" />,
                label: 'verify-account',
            },
            {
                title: <Localize translate_text="_t_How long does verification take?_t_" />,
                category: 'Security',
                sub_category: <Localize translate_text="_t_Verification_t_" />,
                label: 'verification-duration',
            },
            {
                title: <Localize translate_text="_t_Why were my documents declined?_t_" />,
                category: 'Security',
                sub_category: <Localize translate_text="_t_Verification_t_" />,
                label: 'documents-declined',
            },
            {
                title: (
                    <Localize translate_text="_t_I lost my phone. How can I disable two-factor authentication (2FA)?_t_" />
                ),
                category: 'Security',
                sub_category: <Localize translate_text="_t_Verification_t_" />,
                label: 'disable-two-factor-authentication',
            },
        ],
    },

    {
        section: 'General',
        category: <Localize translate_text="_t_Affiliate programme_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_How do I sign up as an affiliate?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'affiliate-sign-up',
            },
            {
                title: <Localize translate_text="_t_Why should I join your affiliate programme?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'why-affiliate',
            },
            {
                title: <Localize translate_text="_t_What type of commission plans do you offer?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'commission-plans',
            },
            {
                title: <Localize translate_text="_t_Who can apply as an affiliate?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'who-can-apply',
            },
            {
                title: <Localize translate_text="_t_Is it free to join your affiliate programme?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'is-it-free',
            },
            {
                title: <Localize translate_text="_t_What is a referred client?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'referred-client',
            },
            {
                title: (
                    <Localize translate_text="_t_I forgot my affiliate password. What should I do?_t_" />
                ),
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'forgot-password',
            },
            {
                title: <Localize translate_text="_t_Where can I find my referral link?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'referral-link',
            },
            {
                title: <Localize translate_text="_t_How do I change my affiliate payment method?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'payment-method',
            },
            {
                title: (
                    <Localize translate_text="_t_How and when will I receive my commission payout?_t_" />
                ),
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'commission-payout',
            },
            {
                title: <Localize translate_text="_t_How do I see my earnings?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'see-earnings',
            },
            {
                title: <Localize translate_text="_t_What type of reports will I have access to?_t_" />,
                category: 'Affiliate programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'reports-access',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="_t_IB programme_t_" />,
        articles: [
            {
                title: (
                    <Localize translate_text="_t_How do I sign up as an introducing broker (IB)?_t_" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'ib-sign-up',
            },
            {
                title: (
                    <Localize translate_text="_t_Why should I join your introducing broker (IB) programme?_t_" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'why-ib',
            },
            {
                title: <Localize translate_text="_t_How much do you pay in commission?_t_" />,
                category: 'IB programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'how-much-commission',
            },
            {
                title: (
                    <Localize translate_text="_t_Are there any charges for joining your introducing broker programme?_t_" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'chargers-ib',
            },
            {
                title: (
                    <Localize translate_text="_t_How and when will I receive my IB commission payout?_t_" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'receive-commission',
            },
            {
                title: <Localize translate_text="_t_When can I withdraw my commission?_t_" />,
                category: 'IB programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'withdraw-commission',
            },
            {
                title: (
                    <Localize translate_text="_t_Are there any conditions that I should meet before I can withdraw my commission?_t_" />
                ),
                category: 'IB programme',
                sub_category: <Localize translate_text="_t_Partners_t_" />,
                label: 'withdraw-condition',
            },
        ],
    },
    {
        section: 'General',
        category: <Localize translate_text="_t_About Deriv_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_Is Deriv regulated?_t_" />,
                category: 'About Deriv',
                sub_category: <Localize translate_text="_t_Regulation_t_" />,
                label: 'Deriv-regulated',
            },
            {
                title: <Localize translate_text="_t_Where is my money held?_t_" />,
                category: 'About Deriv',
                sub_category: <Localize translate_text="_t_Finance_t_" />,
                label: 'money-held',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="_t_DMT5_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_What is Deriv MetaTrader 5 (Deriv MT5)?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'what-is-dmt5',
            },
            {
                title: (
                    <Localize translate_text="_t_What are the main differences between your digital options and CFD platforms?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'differences-of-dtrader-and-dmt5',
            },
            {
                title: (
                    <Localize translate_text="_t_What are the differences between the Deriv MT5 Synthetic, Financial, and Financial STP accounts?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Accounts_t_" />,
                label: 'differences-of-dmt5-accounts',
                title_eu: <Localize translate_text="_t_What is the CFDs account?_t_" />,
                label_eu: 'what-is-cfds-account',
            },
            {
                title: (
                    <Localize translate_text="_t_How can I withdraw funds from my Deriv MT5 real money account?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Withdraw_t_" />,
                label: 'withdraw-funds-from-DMT5',
            },
            {
                title: (
                    <Localize translate_text="_t_Why are my Deriv MT5 login details different from my Deriv login details?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Login_t_" />,
                label: 'login-credentials',
            },
            {
                title: <Localize translate_text="_t_How can I change my Deriv MT5 password?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Reset password_t_" />,
                label: 'reset-dmt5-password',
            },
            {
                title: (
                    <Localize translate_text="_t_How can I deposit funds into my Deriv MT5 real money account?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'deposit-to-dmt5',
            },
            {
                title: <Localize translate_text="_t_How do I log in to my Deriv MT5 account?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'log-in-to-my-Deriv-MT5-account',
            },
            {
                title: (
                    <Localize translate_text="_t_How do I set an investor password for my Deriv MT5 account?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'investor-password-for-my-Deriv-MT5-account',
            },
            {
                title: <Localize translate_text="_t_What is the name of my Deriv MT5 server?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'name-of-my-Deriv-MT5-server',
            },
            {
                title: (
                    <Localize translate_text="_t_What is the minimum amount to open a position on Deriv MT5?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'minimum-amount-to-open-a-position-on-Deriv-MT5',
            },
            {
                title: (
                    <Localize translate_text="_t_Why do my Deriv MT5 positions always start with a loss?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'Deriv-MT5-positions-always-start-with-a-loss',
            },
            {
                title: <Localize translate_text="_t_Do you offer swap-free Deriv MT5 accounts?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'swap-free-Deriv-MT5-accounts',
            },
            {
                title: <Localize translate_text="_t_How can I reactivate my Deriv MT5 account?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'reactivate-my-Deriv-MT5-account',
            },
            {
                title: (
                    <Localize translate_text="_t_Can I change the leverage on my Deriv MT5 account?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'leverage-on-my-Deriv-MT5-account',
            },
            {
                title: <Localize translate_text="_t_What time is shown in the MT5 terminal?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'What-time-is-shown-in-the-MT5-terminal',
            },
            {
                title: <Localize translate_text="_t_How can I download my Deriv MT5 history?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'download-my-Deriv-MT5-history',
            },
            {
                title: <Localize translate_text="_t_Can I delete my Deriv MT5 account history?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'delete-my-Deriv-MT5-account-history',
            },
            {
                title: (
                    <Localize translate_text="_t_For how long can I use my Deriv MT5 demo account?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'For-how-long-can-I-use-my-Deriv-MT5-demo-account',
            },
            {
                title: (
                    <Localize translate_text="_t_Will my inactive Deriv MT5 account be deactivated even though I still have a balance?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'Will-my-inactive-Deriv-MT5-account-be-deactivated',
            },
            {
                title: (
                    <Localize translate_text="_t_Can I change the currency of my Deriv MT5 account?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'Can-I-change-the-currency-of-my-Deriv-MT5-account',
            },
            {
                title: (
                    <Localize translate_text="_t_Can I change the server for my Deriv MT5 account?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'Can-I-change-the-server-for-my-Deriv-MT5-account',
            },
            {
                title: <Localize translate_text="_t_Do you offer micro forex pairs on Deriv MT5?_t_" />,
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'offer-micro-forex-pairs-on-Deriv-MT5',
            },
            {
                title: (
                    <Localize translate_text="_t_What is the minimum volume for micro forex pairs?_t_" />
                ),
                category: 'DMT5',
                sub_category: <Localize translate_text="_t_Deposits_t_" />,
                label: 'What-is-the-minimum-volume-for-micro-forex-pairs',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="_t_Deriv X_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_What is Deriv X?_t_" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'what-is-deriv-x',
            },
            {
                title: (
                    <Localize translate_text="_t_What is  the minimum / maximum I can deposit into my Deriv X account?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Cashier limits_t_" />,
                label: 'minimum-or-maximum-deposit',
            },
            {
                title: <Localize translate_text="_t_What markets can I trade on Deriv X?_t_" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'markets-on-deriv-x',
            },
            {
                title: (
                    <Localize translate_text="_t_What is the minimum and maximum amount to trade on Deriv X?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_How to trade_t_" />,
                label: 'minimum-and-maximum-amount-to-trade',
            },
            {
                title: (
                    <Localize translate_text="_t_What are the major differences between DTrader, Deriv MT5 (DMT5) and Deriv X?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'differences-of-dtrader-dmt5-deriv-x',
            },
            {
                title: (
                    <Localize translate_text="_t_What's the difference between Deriv MT5 and Deriv X?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'differences-of-dmt5-deriv-x',
            },
            {
                title: <Localize translate_text="_t_How do I add a Deriv X account?_t_" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Accounts_t_" />,
                label: 'add-account',
            },
            {
                title: <Localize translate_text="_t_How do I log in to Deriv X?_t_" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Accounts_t_" />,
                label: 'log-in',
            },
            {
                title: (
                    <Localize translate_text="_t_What are the differences between Synthetics and Financial accounts?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'differences-of-synthetic-and-financial',
            },
            {
                title: <Localize translate_text="_t_What is a Deriv X password?_t_" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'trading-password',
            },
            {
                title: (
                    <Localize translate_text="_t_How is my Deriv X password different from my Deriv password?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'differences-of-trading-and-deriv-password',
            },
            {
                title: <Localize translate_text="_t_How do I reset my Deriv X password?_t_" />,
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'reset-deriv-x-password',
            },
            {
                title: (
                    <Localize translate_text="_t_Where can I find my Deriv X account information?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'deriv-x-account-information',
            },
            {
                title: (
                    <Localize translate_text="_t_How can I deposit funds into my Deriv X real money account?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'deposit-funds',
            },
            {
                title: (
                    <Localize translate_text="_t_How do I withdraw funds from my Deriv X real money account?_t_" />
                ),
                category: 'Deriv X',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'withdraw-funds-from-deriv-x',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="_t_DTrader_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_What is DTrader?_t_" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'what-is-dtrader',
            },
            {
                title: <Localize translate_text="_t_What markets can I trade on DTrader?_t_" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="_t_Markets_t_" />,
                label: 'markets-on-dtrader',
            },
            {
                title: <Localize translate_text="_t_What contract types do you offer on DTrader?_t_" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="_t_Contracts_t_" />,
                label: 'contracts-on-dtrader',
            },
            {
                title: <Localize translate_text="_t_Can I download the chart on DTrader?_t_" />,
                category: 'DTrader',
                sub_category: <Localize translate_text="_t_Contracts_t_" />,
                label: 'download-the-chart-on-DTrader',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="_t_Multipliers_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_What are multipliers?_t_" />,
                category: 'Multipliers',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'what-are-multipliers',
            },
            {
                title: <Localize translate_text="_t_How do I trade multipliers?_t_" />,
                category: 'Multipliers',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'how-trade-multipliers',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="_t_DBot_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_What is DBot?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'what-is-dbot',
            },
            {
                title: <Localize translate_text="_t_How do I find the blocks I need?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Blocks_t_" />,
                label: 'find-blocks',
            },
            {
                title: <Localize translate_text="_t_How do I remove blocks from the workspace?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Blocks_t_" />,
                label: 'remove-blocks',
            },
            {
                title: <Localize translate_text="_t_How do I create variables?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Variables_t_" />,
                label: 'create-variables',
            },
            {
                title: <Localize translate_text="_t_What is a quick strategy and how do I use it?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Strategy_t_" />,
                label: 'quick-strategy',
            },
            {
                title: <Localize translate_text="_t_What is the Martingale strategy?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Strategy_t_" />,
                label: 'martingale-strategy',
            },
            {
                title: <Localize translate_text="_t_What is the D’Alembert strategy?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Strategy_t_" />,
                label: 'dalembert-strategy',
            },
            {
                title: <Localize translate_text="_t_What is the Oscar's Grind strategy?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Strategy_t_" />,
                label: 'oscars-grind-strategy',
            },
            {
                title: <Localize translate_text="_t_How do I save my strategy?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Strategy_t_" />,
                label: 'save-strategy',
            },
            {
                title: <Localize translate_text="_t_How do I import my strategies into DBot?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Strategy_t_" />,
                label: 'import-strategy',
            },
            {
                title: <Localize translate_text="_t_How do I reset the workspace?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Workspace_t_" />,
                label: 'reset-workspace',
            },
            {
                title: <Localize translate_text="_t_How do I clear my transaction log?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Logs_t_" />,
                label: 'clear-transaction-log',
            },
            {
                title: <Localize translate_text="_t_How do I control my losses with DBot?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_How to trade_t_" />,
                label: 'control-loss',
            },
            {
                title: (
                    <Localize translate_text="_t_Where can I see the status of my trades in DBot?_t_" />
                ),
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Logs_t_" />,
                label: 'status-of-trades',
            },
            {
                title: <Localize translate_text="_t_How do I view the chart in DBot?_t_" />,
                category: 'DBot',
                sub_category: <Localize translate_text="_t_Chart_t_" />,
                label: 'view-chart',
            },
        ],
    },
    {
        section: 'Platforms',
        category: <Localize translate_text="_t_Deriv P2P_t_" />,
        articles: [
            {
                title: <Localize translate_text="_t_What is Deriv P2P?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Platforms_t_" />,
                label: 'what-is-deriv-p2p',
            },
            {
                title: <Localize translate_text="_t_How secure is Deriv P2P?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Secure_t_" />,
                label: 'how-secure-deriv-p2p',
            },
            {
                title: <Localize translate_text="_t_Do I need a Deriv account to use Deriv P2P?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'need-Deriv-account-to-use-Deriv-P2P',
            },
            {
                title: (
                    <Localize translate_text="_t_Why is my Deriv P2P balance different from my Deriv account balance?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'Deriv-P2P-balance-different-from-my-Deriv-account-balance',
            },
            {
                title: (
                    <Localize translate_text="_t_Where can I see the terms of use for Deriv P2P?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'the-terms-of-use-for-Deriv-P2P',
            },
            {
                title: <Localize translate_text="_t_Why is my Deriv P2P account blocked?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'Deriv-P2P-account-blocked',
            },
            {
                title: (
                    <Localize translate_text="_t_What payment methods can I use to exchange with other traders?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'payment-methods',
            },
            {
                title: <Localize translate_text="_t_How do I create an ad?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'create-an-ad',
            },
            {
                title: <Localize translate_text="_t_Where can I see my ads?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'see-my-ads',
            },
            {
                title: <Localize translate_text="_t_How do I make an order?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'make-an-order',
            },
            {
                title: <Localize translate_text="_t_Where can I see my orders?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'see-my-orders',
            },
            {
                title: <Localize translate_text="_t_What does ‘completion rate’ mean?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'completion-rate',
            },
            {
                title: <Localize translate_text="_t_Why can't I see my ad in the Buy/Sell tab?_t_" />,
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Payment_t_" />,
                label: 'cannot-see-ads',
            },
            {
                title: (
                    <Localize translate_text="_t_What should I do if I have a dispute with the trader I’m dealing with?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Dispute_t_" />,
                label: 'dispute-with-the-trader',
            },
            {
                title: (
                    <Localize translate_text="_t_How do I check my available balance for Deriv P2P?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Balance_t_" />,
                label: 'available-balance-for-Deriv-P2P',
            },
            {
                title: (
                    <Localize translate_text="_t_How do I ensure my Deriv P2P transactions are successful?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Transaction_t_" />,
                label: 'Deriv-P2P-transactions-are-successful',
            },
            {
                title: (
                    <Localize translate_text="_t_How do I get in touch with the trader I’m dealing with?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Transaction_t_" />,
                label: 'in-touch-with-the-counterparty',
            },
            {
                title: (
                    <Localize translate_text="_t_Can I increase my daily buy or sell limit on Deriv P2P?_t_" />
                ),
                category: 'Deriv P2P',
                sub_category: <Localize translate_text="_t_Limit_t_" />,
                label: 'buy-or-sell-limit',
            },
        ],
    },
]
