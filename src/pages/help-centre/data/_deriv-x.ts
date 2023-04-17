import { TQuestionsData } from './_data-types'
import { deriv_app_url, derivx_app_url, oauth_url } from 'common/constants'

const derivx: TQuestionsData = {
    section: 'Platforms',
    category: '_t_Deriv X_t_',
    hide_for_eu: true,
    questions: [
        {
            question: '_t_What is Deriv X?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'what-is-deriv-x',
            answer: [
                {
                    translation_text:
                        '_t_<0>Deriv X</0> is an-easy-to-use trading platform where you can trade CFDs on various assets on a platform layout that you can customise according to your preference._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/derivx/' }],
                },
            ],
        },
        {
            question: '_t_What is  the minimum / maximum I can deposit into my Deriv X account?_t_',
            category: 'Deriv X',
            sub_category: '_t_Cashier limits_t_',
            label: 'minimum-or-maximum-deposit',
            answer: [
                {
                    translation_text:
                        '_t_The minimum deposit is 0.01 USD. You can make a maximum of 10 transactions a day._t_',
                },
            ],
        },
        {
            question: '_t_What markets can I trade on Deriv X?_t_',
            category: 'Deriv X',
            sub_category: '_t_Markets_t_',
            label: 'markets-on-deriv-x',
            answer: [
                {
                    translation_text:
                        '_t_You can trade CFDs on forex, cryptocurrencies, commodities, and our proprietary synthetic indices on Deriv X._t_',
                },
            ],
        },
        {
            question: '_t_What is the minimum and maximum amount to trade on Deriv X?_t_',
            category: 'Deriv X',
            sub_category: '_t_How to trade_t_',
            label: 'minimum-and-maximum-amount-to-trade',
            answer: [
                {
                    translation_text:
                        '_t_The maximum and minimum amount to trade depends on the margin required to open a position on Deriv X for each asset. When creating a new order, you’ll see the required margin for the lot size of your choice._t_',
                },
            ],
        },
        {
            question:
                '_t_What are the major differences between DTrader, Deriv MT5 and Deriv X?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'differences-of-dtrader-dmt5-deriv-x',
            answer: [
                {
                    translation_text:
                        '_t_<0>DTrader</0> allows you to trade more than 50 assets in the form of digital options, multipliers, and lookbacks._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/dtrader/' }],
                },
                {
                    translation_text:
                        '_t_<0>Deriv MT5 (DMT5)</0> and <1>Deriv X</1> are both multi-asset trading platforms where you can trade CFDs with leverage on multiple asset classes. The major difference between them is the platform layout — MT5 has a simple all-in-one view, while on Deriv X you can customise the layout according to your preference._t_',
                    has_margin_top: true,
                    translation_components: [
                        { key: 0, type: 'link', to: '/dmt5/' },
                        { key: 1, type: 'link', to: '/derivx/' },
                    ],
                },
            ],
        },
        {
            question: "_t_What's the difference between Deriv MT5 and Deriv X?_t_",
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'differences-of-dmt5-deriv-x',
            answer: [
                {
                    translation_text:
                        '_t_Deriv MT5 has a fixed all-in-one view while Deriv X offers a modular, widget-based user interface, which is easy to customise. You can trade CFDs with leverage on multiple asset classes on both._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/dmt5/' },
                        { key: 1, type: 'link', to: '/derivx/' },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I add a Deriv X account?_t_',
            category: 'Deriv X',
            sub_category: '_t_Accounts_t_',
            label: 'add-account',
            answer: [
                {
                    translation_text: '_t_Follow these steps to add a Deriv X account:_t_',
                },

                {
                    translation_text: '_t_1. Log in to your Deriv account._t_',
                    has_margin_top: true,
                },
                {
                    translation_text: '_t_2. Go to the Deriv X dashboard._t_',
                    has_margin_top: true,
                },
                {
                    translation_text: '_t_3. Select Real account or Demo account._t_',
                    has_margin_top: true,
                },
                {
                    translation_text: '_t_4. Hit Add real account or Add demo account._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_5. If you're adding your first Deriv X account, you'll need to set your Deriv X password. If you've already set your Deriv X password, you'll need to enter it now._t_",
                    has_margin_top: true,
                },
                {
                    translation_text: '_t_6. Your new Deriv X account is now ready._t_',
                    has_margin_top: true,
                },
            ],
        },

        {
            question: '_t_How do I log in to Deriv X?_t_',
            category: 'Deriv X',
            sub_category: '_t_Accounts_t_',
            label: 'log-in',
            answer: [
                {
                    translation_text:
                        "_t_You'll need to add a Deriv X account first. After that, follow these steps to log in:_t_",
                },
                {
                    translation_text: '_t_1. Go to your Deriv X dashboard._t_',
                    has_margin_top: true,
                },
                {
                    translation_text: '_t_2. Take note of your username and password._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_3. To log in on your desktop, click Trade on web terminal._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_4. To log in on your mobile, you'll need the app. If you haven't got the app, you can <0>scan the QR code</0> from your Deriv X dashboard._t_",
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What are the differences between Synthetics and Financial accounts?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'differences-of-synthetic-and-financial',
            answer: [
                {
                    translation_text:
                        '_t_The Synthetics account allows you to trade on Deriv’s proprietary synthetic indices that are available 24/7 and simulate real-world market movements._t_',
                },
                {
                    translation_text:
                        '_t_The Financial account is where you trade contracts for difference (CFDs) on financial markets such as forex, cryptocurrencies, and commodities._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What is a Deriv X password?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'trading-password',
            answer: [
                {
                    translation_text:
                        '_t_Your Deriv X password is linked to the stand-alone <0>Deriv X</0> trading platform while your Deriv password gives you access to platforms hosted on our website such as DTrader and DBot._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/derivx/' }],
                },
            ],
        },
        {
            question: '_t_How is my Deriv X password different from my Deriv password?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'differences-of-trading-and-deriv-password',
            answer: [
                {
                    translation_text:
                        '_t_Your Deriv X password is linked to the standalone Deriv X trading platform while your Deriv password gives you access to platforms hosted on our website such as DTrader and DBot._t_',
                },
            ],
        },
        {
            question: '_t_How do I reset my Deriv X password?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'reset-deriv-x-password',
            answer: [
                {
                    translation_text:
                        '_t_Go to your Account settings. Click the “Security and safety” drop-down menu, and select “Email and passwords”. Under “Deriv X password”, click “Change password” to reset your password._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/account/personal-details` },
                    ],
                },
            ],
        },
        {
            question: '_t_Where can I find my Deriv X account information?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'deriv-x-account-information',
            answer: [
                {
                    translation_text:
                        '_t_You can view your account information (account type and login information) on the <0>Deriv X dashboard</0>._t_',
                    translation_components: [{ key: 0, type: 'link', to: derivx_app_url }],
                },
            ],
        },
        {
            question: '_t_How can I deposit funds into my Deriv X real money account?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'deposit-funds',
            answer: [
                {
                    translation_text:
                        '_t_To deposit funds into your Deriv X account, you’ll need to transfer the funds from your Deriv account to your Deriv X account. Go to Cashier, click <0>Transfer</0>, and follow the instructions on the screen._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/account-transfer` },
                    ],
                },
                {
                    translation_text:
                        '_t_Transfers are instant. Once you’ve completed all the steps, your Deriv X account balance will be updated._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How do I withdraw funds from my Deriv X real money account?_t_',
            category: 'Deriv X',
            sub_category: '_t_Platforms_t_',
            label: 'withdraw-funds-from-deriv-x',
            answer: [
                {
                    translation_text:
                        '_t_To withdraw funds from your Deriv X account, you’ll first need to transfer the funds to your Deriv account. Go to Cashier, click "Transfer", and follow the instructions on the screen._t_',
                },
                {
                    has_margin_top: true,
                    translation_text:
                        '_t_To withdraw from your Deriv account into your personal account, go to Cashier, click "Withdrawal", and follow the instructions on the screen. You’ll need to verify your withdrawal request and confirm your withdrawal amount._t_',
                },
                {
                    has_margin_top: true,
                    translation_text:
                        '_t_After the withdrawal is fully processed from the respective payment method, your funds will be deposited into your personal account. You can check processing times on our <0>Payment methods</0> page._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/payment-methods/' }],
                },
            ],
        },
    ],
}

export default derivx
