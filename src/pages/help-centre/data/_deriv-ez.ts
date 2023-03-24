import { TQuestionsData } from './_data-types'
// images
import DerivEZTrade from 'images/common/help-centre/derivez-trade.png'
import DerivEZDemoAccount from 'images/common/help-centre/derivez-demo-account.png'
import DerivEZGetButton from 'images/common/help-centre/derivez-get-button.png'
import DerivEZTradeButton from 'images/common/help-centre/derivez-trade-button.png'
import DerivEZRealAccount from 'images/common/help-centre/derivez-real-account.png'
import DerivEZTransferButton from 'images/common/help-centre/derivez-transfer-button.png'

const deriv_ez: TQuestionsData = {
    section: 'Platforms',
    category: '_t_Deriv EZ_t_',
    hide_for_eu: true,
    questions: [
        {
            question: '_t_What is Deriv EZ?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Platforms_t_',
            label: 'what-is-deriv-ez',
            answer: [
                {
                    translation_text:
                        '_t_Deriv EZ is an intuitive CFD trading platform within the Deriv GO mobile app._t_',
                },
            ],
        },
        {
            question: '_t_What markets can I trade on Deriv EZ?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Platforms_t_',
            label: 'what-markets-can-i-trade-on-deriv-ez',
            answer: [
                {
                    translation_text:
                        '_t_You can trade forex, commodities, cryptocurrencies, stocks, stock indices, and derived indices on Deriv EZ._t_',
                },
            ],
        },
        {
            question: '_t_How do I add a Deriv EZ account?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_add account_t_',
            label: 'how-do-i-add-a-deriv-ez-account',
            answer: [
                {
                    translation_text: '_t_Follow these steps:_t_',
                },
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        padding_left: '1.8rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Log in to your Deriv account on the Deriv GO mobile app._t_',
                            },
                            {
                                translation_text: '_t_Go to the <0>Trade</0> page._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: DerivEZTrade,
                                    alt: 'Trade',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Select <0>Demo account</0> (to practise with virtual money) or <1>Real account</1> (to trade with real money)._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                ],
                                img: {
                                    src: DerivEZDemoAccount,
                                    alt: 'Demo Account',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Hit <0>Get</0> under <1>CFDs</1> and Deriv EZ._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                ],
                                img: {
                                    src: DerivEZGetButton,
                                    alt: 'Get Button',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text: '_t_Your new Deriv EZ account is ready._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How many Deriv EZ accounts can I add?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Account_t_',
            label: 'how-many-deriv-ez-accounts-can-i-add',
            answer: [
                {
                    translation_text: '_t_You can only add 1 Deriv EZ account._t_',
                },
            ],
        },
        {
            question: '_t_How do I log in to my Deriv EZ account?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Log in_t_',
            label: 'how-do-i-log-in-to-my-deriv-ez-account',
            answer: [
                {
                    translation_text: '_t_Follow these steps:_t_',
                },
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        padding_left: '1.8rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Log in to your Deriv account on the Deriv GO mobile app._t_',
                            },
                            {
                                translation_text: '_t_Go to the <0>Trade</0> page._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: DerivEZTrade,
                                    alt: 'Trade',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Select <0>Demo account</0> (to practise with virtual money) or <1>Real account</1> (to trade with real money)._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                ],
                                img: {
                                    src: DerivEZDemoAccount,
                                    alt: 'Demo Account',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_You’ll see your Deriv EZ account under <0>CFDs</0>. Hit <1>Trade</1> to start trading._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                ],
                                img: {
                                    src: DerivEZTradeButton,
                                    alt: 'Get Button',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I make deposits into my Deriv EZ account?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Payment_t_',
            label: 'how-do-i-make-deposits-into-my-deriv-ez-account',
            answer: [
                {
                    translation_text: '_t_Follow these steps:_t_',
                },
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        padding_left: '1.8rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Log in to your Deriv account on the Deriv GO mobile app._t_',
                            },
                            {
                                translation_text: '_t_Go to the <0>Trade</0> page._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: DerivEZTrade,
                                    alt: 'Trade',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text: '_t_Select <0>Real account.</0>_t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: DerivEZRealAccount,
                                    alt: 'Real Account',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_You’ll see your Deriv EZ account under <0>CFDs</0>. Hit <1>Transfer</1>._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                ],
                                img: {
                                    src: DerivEZTransferButton,
                                    alt: 'Transfer Button',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Using the drop-down menus, select your Deriv account as the <0>From</0> account and your Deriv EZ account as the <1>To</1> account. Then, enter the <2>amount</2> and hit <3>Transfer</3>._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                    { key: 2, type: 'strong' },
                                    { key: 3, type: 'strong' },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_Your funds will be available in your Deriv EZ account immediately._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I make withdrawals from my Deriv EZ account?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Payment_t_',
            label: 'how-do-i-make-withdrawals-from-my-deriv-ez-account',
            answer: [
                {
                    translation_text: '_t_Follow these steps:_t_',
                },
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        padding_left: '1.8rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Log in to your Deriv account on the Deriv GO mobile app._t_',
                            },
                            {
                                translation_text: '_t_Go to the <0>Trade</0> page._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: DerivEZTrade,
                                    alt: 'Trade',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text: '_t_Select <0>Real account.</0>_t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: DerivEZRealAccount,
                                    alt: 'Real Account',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_You’ll see your Deriv EZ account under <0>CFDs</0>. Hit <1>Transfer</1>._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                ],
                                img: {
                                    src: DerivEZTransferButton,
                                    alt: 'Transfer Button',
                                    width: '43.9rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Using the drop-down menus, select your Deriv EZ account as the <0>From</0> account and your Deriv account as the <1>To</1> account. Then, enter the <2>amount</2> and hit <3>Transfer</3>._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                    { key: 1, type: 'strong' },
                                    { key: 2, type: 'strong' },
                                    { key: 3, type: 'strong' },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_Your funds will be available in your Deriv account immediately._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_What’s the minimum/maximum I can deposit into my Deriv EZ account?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Payment_t_',
            label: 'whats-the-minimum-maximum-i-can-deposit-into-my-deriv-ez-account',
            answer: [
                {
                    translation_text:
                        '_t_There is no minimum deposit. You can make a maximum deposit of 15,000 USD daily._t_',
                },
            ],
        },
        {
            question: '_t_What’s the minimum amount to open a position on Deriv EZ?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Payment_t_',
            label: 'whats-the-minimum-amount-to-open-a-position-on-deriv-ez',
            answer: [
                {
                    translation_text:
                        '_t_This depends on the margin required for each asset. You can calculate the margin required using our <0>margin calculator</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/trader-tools/margin-calculator/' },
                    ],
                },
            ],
        },
        {
            question: '_t_Does Deriv EZ offer any risk-management tools?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Risk management_t_',
            label: 'does-deriv-ez-offer-any-risk-management-tools',
            answer: [
                {
                    translation_text: '_t_Yes, Deriv EZ offers stop loss and take profit._t_',
                },
            ],
        },
        {
            question: '_t_Can I use expert advisors with Deriv EZ?_t_',
            category: 'Deriv EZ',
            sub_category: '_t_Advisors_t_',
            label: 'can-i-use-expert-advisors-with-deriv-ez',
            answer: [
                {
                    translation_text: '_t_No, Deriv EZ doesn’t support expert advisors._t_',
                },
            ],
        },
    ],
}

export default deriv_ez
