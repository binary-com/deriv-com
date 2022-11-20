import { TQuestionsData } from './_data-types'
import { binary_bot_url, deriv_app_url } from 'common/constants'

const dmt5: TQuestionsData = {
    section: 'Platforms',
    category: '_t_Deriv MT5_t_',
    questions: [
        {
            question: '_t_What is Deriv MetaTrader 5 (Deriv MT5)?_t_',
            category: 'DMT5',
            sub_category: '_t_Platforms_t_',
            label: 'what-is-dmt5',
            answer: [
                {
                    translation_text:
                        '_t_Deriv MT5 is a CFD trading platform that gives you access to forex, stocks, stock indices, commodities, cryptocurrencies, and derived indices. Learn more about Deriv MT5 <0>here</0>._t_',
                    eu_translation_text:
                        '_t_Deriv MT5 is a CFD trading platform that gives you access to forex, stocks, stock indices, commodities, cryptocurrencies, and derived. Learn more about Deriv MT5 <0>here</0>._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/dmt5/' }],
                },
            ],
        },
        {
            question:
                '_t_What are the main differences between your digital options and CFD platforms?_t_',
            category: 'DMT5',
            sub_category: '_t_Platforms_t_',
            label: 'differences-of-dtrader-and-dmt5',
            hide_for_eu: true,
            answer: [
                {
                    translation_text:
                        "_t_<0>DTrader</0>, <1>SmartTrader</1>, <2>DBot</2>, and <3>Binary Bot</3> offer digital options trading on a range of underlying assets such as forex, stock indices, commodities, and derived indices. These platforms allow you to set the contract duration before opening positions, and you'll know exactly how much you'll earn if you win. You may find these platforms more intuitive if you're new to the trading world._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/dtrader/' },
                        {
                            key: 1,
                            type: 'link',
                            to: 'https://smarttrader.deriv.com/en/trading.html',
                        },
                        { key: 2, type: 'link', to: '/dbot/' },
                        { key: 3, type: 'link', to: binary_bot_url },
                    ],
                },
                {
                    has_margin_top: true,
                    translation_text:
                        "_t_<0>Deriv X</0> and <1>Deriv MT5</1> offer CFD trading on a similar range of assets, where you're able to open positions with leverage and your potential profit is only known when you close your positions. It's riskier than digital options trading because while you may potentially gain a lot if you win, you may also lose a lot if you don't. Deriv X and Deriv MT5 are popular among our traders who enjoy the risks as part of the excitement of CFD trading._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/derivx/' },
                        { key: 1, type: 'link', to: '/dmt5/' },
                    ],
                },
            ],
        },
        {
            question:
                '_t_What are the main differences between your multipliers and CFD platforms?_t_',
            category: 'DMT5',
            sub_category: '_t_Platforms_t_',
            label: 'differences-of-multipliers-and-cfd',
            hide_for_non_eu: true,
            answer: [
                {
                    margin_top: '4.1rem',
                    translation_text:
                        "_t_<0>DTrader</0> offers multipliers trading on a range of underlying assets such as forex, cryptocurrencies, and derived. This platform allows you to open multipliers trades that offer the opportunity to multiply potential profit without risking more than your stake. You may find this platform more intuitive if you're new to the trading world._t_",
                    translation_components: [{ key: 0, type: 'link', to: '/dtrader/' }],
                },
                {
                    has_margin_top: true,
                    translation_text:
                        "_t_<0>Deriv MT5</0> offers CFD trading on a similar range of assets, where you're able to open positions with leverage and your potential profit is only known when you close your positions. It's riskier than multipliers trading because while you may potentially gain a lot if you win, you may also lose a lot if you don't. Deriv MT5 is popular among our traders who enjoy the risks as part of the excitement of CFD trading._t_",
                    translation_components: [{ key: 0, type: 'link', to: '/dmt5/' }],
                },
            ],
        },
        {
            question:
                '_t_What are the differences between the Deriv MT5 Derived and Financial accounts?_t_',
            category: 'DMT5',
            sub_category: '_t_Accounts_t_',
            label: 'differences-of-dmt5-accounts',
            hide_for_eu: true,
            answer: [
                {
                    translation_text:
                        '_t_The Deriv MT5 Derived account offers contracts for difference (CFDs) on derived indices. These indices include our proprietary synthetic indices as well as indices derived from the price movement of real financial markets. Selected derived indices can be traded 24/7, even on weekends and holidays, while the others are available for trade round the clock on weekdays._t_',
                },
                {
                    translation_text:
                        '_t_The Deriv MT5 Financial account offers CFDs on forex, commodities, cryptocurrencies, stocks, and stock indices, with high leverage and variable spreads for maximum flexibility. This account offers more than 100 assets, and 24/7 trading is available on cryptocurrencies._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What is the CFDs account?_t_',
            category: 'DMT5',
            sub_category: '_t_Accounts_t_',
            label: 'what-is-cfds-account',
            hide_for_non_eu: true,
            answer: [
                {
                    translation_text:
                        '_t_The DMT5 Financial account offers you leverage to trade contracts for difference (CFDs) on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies._t_',
                },
            ],
        },
        {
            question: '_t_How can I withdraw funds from my Deriv MT5 real money account?_t_',
            category: 'DMT5',
            sub_category: '_t_Withdraw_t_',
            label: 'withdraw-funds-from-DMT5',
            answer: [
                {
                    translation_text:
                        "_t_You'll need to transfer the funds from your Deriv MT5 account to your Deriv account. You can do this on the <0>Cashier page</0>. Your funds will be available in your Deriv account as soon as you complete the transfer._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/account-transfer` },
                    ],
                },
            ],
        },
        {
            question:
                '_t_Why are my Deriv MT5 login details different from my Deriv login details?_t_',
            category: 'DMT5',
            sub_category: '_t_Login_t_',
            label: 'login-credentials',
            answer: [
                {
                    translation_text:
                        '_t_This difference is because MT5 is a third-party platform that requires its own login credentials. Your Deriv MT5 login gives you access to the MT5 platform, while your Deriv login gives you access to our digital options platforms such as DTrader and DBot._t_',
                },
            ],
        },
        {
            question: '_t_How can I change my Deriv MT5 password?_t_',
            category: 'DMT5',
            sub_category: '_t_Reset password_t_',
            label: 'reset-dmt5-password',
            answer: [
                {
                    translation_text: '_t_Follow these steps to reset your Deriv MT5 password:_t_',
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '1.6rem',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text: '_t_Go to your <0>Deriv MT5 dashboard</0>._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: `${deriv_app_url}/mt5`,
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_Click <0>Change</0> next to the password field, then click <0>Change Deriv MT5 password</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text: '_t_Click <0>Confirm</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    "_t_We'll send you an email. Click the <0>Change password</0> button in that email._t_",
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    "_t_You'll be taken to the Change password screen. Enter a new password and click <0>Create</0>._t_",
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_You can now log in to Deriv MT5 with your new password._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How can I deposit funds into my Deriv MT5 real money account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'deposit-to-dmt5',
            answer: [
                {
                    translation_text:
                        "_t_You'll need to transfer funds from your Deriv account to your Deriv MT5 account. You can do this on the <0>Cashier page</0>. Transfers are instant; your funds will be available in your Deriv MT5 account as soon as you complete the transfer._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/account-transfer` },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I log in to my Deriv MT5 account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'log-in-to-my-Deriv-MT5-account',
            answer: [
                {
                    translation_text:
                        "_t_You can log in to your Deriv MT5 account via the MT5 desktop app, web terminal, or mobile app. You'll need the login ID and server name from <0>your Deriv MT5 dashboard</0>. Please remember to use your Deriv MT5 password to log in to Deriv MT5._t_",
                    translation_components: [{ key: 0, type: 'link', to: `${deriv_app_url}/mt5` }],
                },
            ],
        },
        {
            question: '_t_How do I set an investor password for my Deriv MT5 account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'investor-password-for-my-Deriv-MT5-account',
            answer: [
                {
                    translation_text:
                        '_t_You can set the investor password on your <0>Deriv MT5 dashboard</0>. Click <1>Password</1> on your Deriv MT5 account, and select <1>Investor password</1> to set a new password._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/mt5` },
                        { key: 0, type: 'strong' },
                    ],
                },
            ],
        },
        {
            question: '_t_What is the name of my Deriv MT5 server?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'name-of-my-Deriv-MT5-server',
            answer: [
                {
                    translation_text:
                        '_t_You can find your Deriv MT5 server name on your <0>Deriv MT5 dashboard</0>. Look for <1>server</1> in between the broker name and login ID._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/mt5` },
                        { key: 1, type: 'strong' },
                    ],
                },
            ],
        },
        {
            question: '_t_What is the minimum amount to open a position on Deriv MT5?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'minimum-amount-to-open-a-position-on-Deriv-MT5',
            answer: [
                {
                    translation_text:
                        '_t_The minimum amount you’ll need to open a position on Deriv MT5 depends on the margin required for each asset. You can calculate the margin required using our <0>margin calculator</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/trader-tools/margin-calculator',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_Why do my Deriv MT5 positions always start with a loss?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'Deriv-MT5-positions-always-start-with-a-loss',
            answer: [
                {
                    translation_text:
                        '_t_This is due to the spread, which is the difference between the ‘bid’ and ‘ask’ prices. Your positions will start earning a profit when the market moves in your favour._t_',
                },
            ],
        },
        {
            question: '_t_Do you offer swap-free Deriv MT5 accounts?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'swap-free-Deriv-MT5-accounts',
            answer: [{ translation_text: "_t_No, we don't._t_" }],
        },
        {
            question: '_t_How can I reactivate my Deriv MT5 account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'reactivate-my-Deriv-MT5-account',
            answer: [
                {
                    translation_text:
                        "_t_You can't reactivate your Deriv MT5 account. Instead, you can create a new one on your Deriv <0>MT5 dashboard</0>._t_",
                    translation_components: [{ key: 0, type: 'link', to: `${deriv_app_url}/mt5` }],
                },
            ],
        },
        {
            question: '_t_Can I change the leverage on my Deriv MT5 account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'leverage-on-my-Deriv-MT5-account',
            answer: [
                {
                    translation_text:
                        "_t_No, you can't. There's a fixed default amount for each asset. The leverage applied to your account can be found on your <0>Deriv MT5 dashboard</0>._t_",
                    translation_components: [{ key: 0, type: 'link', to: `${deriv_app_url}/mt5` }],
                },
            ],
        },
        {
            question: '_t_What time is shown in the MT5 terminal?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'What-time-is-shown-in-the-MT5-terminal',
            answer: [{ translation_text: '_t_Greenwich Mean Time (GMT)._t_' }],
        },
        {
            question: '_t_How can I download my Deriv MT5 history?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'download-my-Deriv-MT5-history',
            answer: [
                {
                    translation_text:
                        '_t_If you need a statement of your trades on Deriv MT5, follow these steps to download a 3-month statement:_t_',
                    list: {
                        list_style: 'decimal',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Log in to your MT5 account via the desktop app._t_',
                            },
                            {
                                translation_text: '_t_Go to the <0>History</0> section._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Right-click on <0>Time</0>, click <0>Report</0>, and select <0>Open XML</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Your Deriv MT5 history will be downloaded as an XML file._t_',
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        "_t_If you need a statement for a more extended period, contact us via <0>live chat</0>, and we'll help you with it._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat_open=true' },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_Can I delete my Deriv MT5 account history?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'delete-my-Deriv-MT5-account-history',
            answer: [{ translation_text: "_t_No, you can't._t_" }],
        },
        {
            question: '_t_For how long can I use my Deriv MT5 demo account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'For-how-long-can-I-use-my-Deriv-MT5-demo-account',
            answer: [
                {
                    translation_text:
                        "_t_You can use your Deriv MT5 demo account for as long as you want. However, if your account is inactive for 30 days, we'll deactivate it automatically._t_",
                },
            ],
        },
        {
            question:
                '_t_Will my inactive Deriv MT5 account be deactivated even though I still have a balance?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'Will-my-inactive-Deriv-MT5-account-be-deactivated',
            answer: [
                {
                    translation_text:
                        '_t_Yes, we’ll transfer your balance to your Deriv account before your Deriv MT5 account is deactivated._t_',
                },
            ],
        },
        {
            question: '_t_Can I change the currency of my Deriv MT5 account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'Can-I-change-the-currency-of-my-Deriv-MT5-account',
            answer: [{ translation_text: '_t_No, this isn’t possible on MT5._t_' }],
        },
        {
            question: '_t_Can I change the server for my Deriv MT5 account?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'Can-I-change-the-server-for-my-Deriv-MT5-account',
            answer: [
                {
                    translation_text:
                        "_t_No, you can't, but you may have multiple Deriv MT5 Synthetic accounts on different servers._t_",
                },
            ],
        },
        {
            question: '_t_Do you offer micro forex pairs on Deriv MT5?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'offer-micro-forex-pairs-on-Deriv-MT5',
            answer: [
                {
                    translation_text:
                        '_t_Yes, you can trade micro forex pairs with a Deriv MT5 Financial account._t_',
                },
            ],
        },
        {
            question: '_t_What is the minimum volume for micro forex pairs?_t_',
            category: 'DMT5',
            sub_category: '_t_Deposits_t_',
            label: 'What-is-the-minimum-volume-for-micro-forex-pairs',
            answer: [
                {
                    translation_text: '_t_The minimum volume for micro forex pairs is 0.1 lot._t_',
                },
            ],
        },
    ],
}

export default dmt5
