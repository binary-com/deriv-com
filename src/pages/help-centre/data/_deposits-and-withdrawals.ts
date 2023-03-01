import { TQuestionsData } from './_data-types'
import { deriv_com_url, deriv_app_url } from 'common/constants'

const deposits_and_withdrawals: TQuestionsData = {
    section: 'General',
    category: '_t_Deposits and withdrawals_t_',
    questions: [
        {
            question: '_t_What payment methods can I use for deposits and withdrawals?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Payment methods_t_',
            hide_for_non_eu: true,
            label: 'payment-methods',
            answer: [
                {
                    translation_text:
                        '_t_You can use debit and credit cards, e-wallets, cryptocurrency wallets, and payment agents for deposits and withdrawals (see our <0>payment methods page</0> for a complete list). Once you log in to your Deriv account, you’ll be able to see payment methods available in your country on the <1>Cashier page</1>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/payment-methods/' },
                        { key: 1, type: 'link', to: `${deriv_app_url}/cashier/` },
                    ],
                },
            ],
        },
        {
            question: '_t_What payment methods can I use for deposits and withdrawals?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Payment methods_t_',
            label: 'payment-methods',
            hide_for_eu: true,
            answer: [
                {
                    translation_text:
                        '_t_You can use debit and credit cards, e-wallets, cryptocurrency wallets, Deriv P2P, online banking, fiat onramp, and payment agents for deposits and withdrawals (see our <0>Payment methods page</0> for a detailed list). Once you log in to your Deriv account, you’ll be able to see payment methods available in your country on the <1>Cashier page</1>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/payment-methods/' },
                        { key: 1, type: 'link', to: `${deriv_app_url}/cashier/` },
                    ],
                },
            ],
        },
        {
            question:
                '_t_How long does it take for my deposits and withdrawals to be processed?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Cashier limits_t_',
            hide_for_non_eu: true,
            label: 'deposit-withdrawal-processing-time',
            answer: [
                {
                    translation_text:
                        '_t_We process your deposits and withdrawals internally within 1 to 3 business days (depending on your <0>payment method</0>). It may take longer for your funds to reach you due to the different processing times by banks and payment service providers. See our <0>Payment methods</0> page for a complete list of the processing times for each payment method._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/payment-methods/' }],
                },
            ],
        },
        {
            question:
                '_t_How long does it take for my deposits and withdrawals to be processed?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Cashier limits_t_',
            hide_for_eu: true,
            label: 'deposit-withdrawal-processing-time',
            answer: [
                {
                    translation_text:
                        '_t_We process your deposits and withdrawals internally within 24 hours (depending on your payment method and internal checks). It may take longer for your funds to reach you due to the different processing times by banks and payment service providers. See our <0>Payment methods</0> page for a complete list of the processing times for each payment method._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/payment-methods/' }],
                },
            ],
        },
        {
            question: '_t_What is the minimum deposit or withdrawal amount?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Cashier limits_t_',
            hide_for_non_eu: true,
            label: 'minimum-deposit-or-withdrawal',
            answer: [
                {
                    translation_text:
                        '_t_The minimum deposit and withdrawal amount varies depending on the payment method. The lowest deposit and withdrawal amount is 5 USD/EUR/GBP/AUD via e-wallets. See our <0>Payment methods</0> page for a complete list of payment methods and their minimum deposit and withdrawal amounts._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/payment-methods/' }],
                },
            ],
        },
        {
            question: '_t_What is the minimum deposit or withdrawal amount?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Cashier limits_t_',
            hide_for_eu: true,
            label: 'minimum-deposit-or-withdrawal',
            answer: [
                {
                    translation_text:
                        '_t_The minimum deposit and withdrawal amount varies depending on the payment method. The lowest deposit and withdrawal amount is 5 to 10 USD/EUR/GBP/AUD via e-wallets. See our <0>Payment methods</0> page for a complete list of payment methods and their minimum deposit and withdrawal amounts._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/payment-methods/' }],
                },
            ],
        },
        {
            question: '_t_My withdrawal verification link has expired. What should I do?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_non_eu: true,
            label: 'expired-verification-link',
            answer: [
                {
                    translation_text:
                        "_t_You can get a new link on the Cashier page. Go to <0>Withdrawal</0> and click Verify my request. We'll email you a new link; please remember to use it within 1 hour._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/withdrawal` },
                    ],
                },
            ],
        },
        {
            question: '_t_My withdrawal verification link has expired. What should I do?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_eu: true,
            label: 'expired-verification-link',
            answer: [
                {
                    translation_text:
                        '_t_Be sure to check the spam or junk section of your email as well if you do not receive the link in your inbox._t_',
                },
                {
                    translation_text:
                        "_t_You can request a new link on the Cashier page. Go to <0>Withdrawal</0> and click Verify my request. We'll email you a new link; please remember to use it within 1 hour._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/withdrawal` },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How can I remove the withdrawal limit on my account?_t_',
            category: 'Deposits and withdrawals',
            hide_for_non_eu: true,
            sub_category: '_t_Withdrawals_t_',
            label: 'lift-withdrawal-limits',
            answer: [
                {
                    translation_text:
                        "_t_We'll remove the <0>withdrawal limit</0> once your account has been verified._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/account/account-limits` },
                    ],
                },
            ],
        },
        {
            question: '_t_How can I remove the withdrawal limit on my account?_t_',
            category: 'Deposits and withdrawals',
            hide_for_eu: true,
            sub_category: '_t_Withdrawals_t_',
            label: 'lift-withdrawal-limits',
            answer: [
                {
                    translation_text:
                        "_t_We'll remove the 10,000 USD withdrawal limit once your account has been verified._t_",
                },
            ],
        },
        {
            question: '_t_Why did my credit card deposit get declined?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Deposits_t_',
            hide_for_non_eu: true,
            label: 'credit-card-deposit-declined',
            answer: [
                {
                    translation_text:
                        '_t_Here are some reasons why your credit card deposit was declined:_t_',
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        first_child_margin_top: '1.6rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Your card issuer may have blocked your transaction. Please contact your card issuer to check._t_',
                            },
                            {
                                translation_text:
                                    '_t_Your 3D SecureCode may not be activated. Please contact your bank to check._t_',
                            },
                            {
                                translation_text:
                                    '_t_Your country of residence does not match the country that your card was issued in._t_',
                            },
                            {
                                translation_text:
                                    '_t_Your credit card balance may be insufficient._t_',
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_If you need help, please contact us via <0>live chat</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: `/contact_us?is_livechat_open=true`,
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_Why did my credit card deposit get declined?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Deposits_t_',
            hide_for_eu: true,
            label: 'credit-card-deposit-declined',
            answer: [
                {
                    translation_text:
                        '_t_Here are some reasons why your credit card deposit was declined:_t_',
                },
                {
                    translation_text: '_t_1. CVV failure. Please contact your bank to check._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_2. Deposit limit, please try again after 1 - 2 hours to make a deposit._t_',
                },
                {
                    translation_text: '_t_3. SCA failure. Please contact your bank to check._t_',
                },
                {
                    translation_text:
                        '_t_4. RCS reject, allowed number of cards exceeded. Please contact your bank to check._t_',
                },
                {
                    translation_text:
                        '_t_If you need help, please contact us via <0>live chat</0>._t_',
                    has_margin_top: true,
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://deriv.com/?is_livechat_open=true',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I withdraw my deposit bonus?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            label: 'withdraw-deposit-bonus',
            hide_for_eu: true,
            answer: [
                {
                    translation_text:
                        "_t_Yes, but only once your turnover exceeds an amount that's 25 times the deposit bonus value. The bonus is to help you get familiar with our trading platforms, so we'd love for you to use it to trade and earn a potential profit (which you may withdraw at any time)._t_",
                },
            ],
        },
        {
            question: "_t_Why can't I withdraw using Maestro or Mastercard?_t_",
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_non_eu: true,
            label: 'withdraw-to-maestro-mastercard',
            answer: [
                {
                    translation_text:
                        '_t_Making withdrawals using Maestro and Mastercard is not possible in your country. You can check the <0>list of  our payment methods</0> to find a withdrawal method available to you._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/payment-methods/' }],
                },
            ],
        },
        {
            question: "_t_Why can't I withdraw using Maestro or Mastercard?_t_",
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_eu: true,
            label: 'withdraw-to-maestro-mastercard',
            answer: [
                {
                    translation_text:
                        '_t_Mastercard and Maestro are not among our withdrawal methods. To find alternative payment methods available in your country, go to <0>Withdrawal</0> on the Cashier page._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/withdrawal` },
                    ],
                },
            ],
        },
        {
            question: '_t_What conversion rates do you use for deposits and withdrawals?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            label: 'What-conversion-rates-do-you-use-for-deposits-and-withdrawals',
            answer: [
                {
                    translation_text:
                        '_t_The currency conversion for your deposits and withdrawals are done by your payment service provider. For example, if you use Skrill, your transaction amount will be converted by Skrill. Please check with your service provider regarding the conversion rates used for your deposits and withdrawals._t_',
                },
            ],
        },
        {
            question: '_t_How can I cancel my withdrawal?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_non_eu: true,
            label: 'How-can-I-cancel-my-withdrawal',
            hide_for_eu: true,
            answer: [
                {
                    translation_text:
                        '_t_You can cancel your withdrawal on the <0>Cashier page</0> by following the steps mentioned in the next paragraph. Please note that you cannot cancel withdrawals if:_t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/` },
                    ],
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            { translation_text: '_t_you reside in the UK, or_t_' },
                            {
                                translation_text:
                                    '_t_your withdrawal request has already been authorised and processed_t_',
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_To cancel your withdrawal, follow these steps:_t_',
                    has_margin_top: true,
                    list: {
                        list_style: 'decimal',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text: '_t_Go to <0>Cashier > Withdrawal</0>._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: `${deriv_app_url}/cashier/withdrawal`,
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    "_t_We'll send you an email with a verification link. Click that link._t_",
                            },
                            {
                                translation_text:
                                    "_t_You’ll be brought back to the Cashier page. Click <0>Review pending</0> and select the transaction that you'd like to cancel._t_",
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Click <0>Yes</0> to confirm the cancellation. Your funds will be returned to your Deriv account, and your account balance will be updated accordingly._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How can I cancel my withdrawal?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_eu: true,
            label: 'How-can-I-cancel-my-withdrawal',
            answer: [
                {
                    translation_text:
                        '_t_(Please note that you cannot cancel withdrawals if your withdrawal request has already been authorised and processed.)_t_',
                },
                {
                    translation_text: '_t_To cancel your withdrawal, follow these steps:_t_',
                    has_margin_top: true,
                },
                {
                    translation_text: '_t_Go to <0>Cashier > Withdrawal</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: `${deriv_app_url}/cashier/withdrawal`,
                        },
                    ],
                },
                {
                    translation_text:
                        "_t_We'll send you an email with a verification link. Click that link._t_",
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_You’ll be brought back to the Cashier page. Click Review pending and select the transaction that you'd like to cancel._t_",
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Click Yes to confirm the cancellation. Your funds will be returned to your Deriv account, and your account balance will be updated accordingly._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question:
                "_t_Can I deposit with my friend's/family member's debit/credit card or e-wallet?_t_",
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            label: 'deposit-with-friends-and-family-card',
            answer: [
                {
                    translation_text:
                        '_t_No. To keep your funds safe, you are strictly prohibited from using payment methods that are not yours. If you do use someone else’s payment method, we’ll suspend your Deriv account for security purposes._t_',
                },
            ],
        },
        {
            question: "_t_Why can't I see any payment methods on the Withdrawal page?_t_",
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            label: 'payment-methods-on-the-Withdrawal-page',
            answer: [
                {
                    translation_text:
                        "_t_Your payment method will only appear on the Withdrawal page after you've made your first deposit. If you've made a deposit and still don't see your payment method on the Withdrawal screen, it's probably because the payment method you used for the deposit cannot be used for withdrawals. In this case, you may need to use a different payment method that supports withdrawals, too. <0>Contact us via live chat</0> if you need help._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat_open=true' },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I use the same address to make a cryptocurrency deposit?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_eu: true,
            label: 'can-I-use-the-same-address-to-make-a-cryptocurrency-deposit',
            answer: [
                {
                    translation_text:
                        '_t_Please generate an address on the cryptocurrency deposit page whenever you want to make a deposit. Always use a freshly generated address to ensure accuracy._t_',
                },
            ],
        },
        {
            question: '_t_Can I use my Binance wallet to make the cryptocurrency deposit?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_eu: true,
            label: 'can-i-use-my-binance-wallet-to-make-the-cryptocurrency-deposit?',
            answer: [
                {
                    translation_text:
                        '_t_You can use any wallet to make the deposit as long as the wallet support the network we are using._t_',
                },
            ],
        },
        {
            question: '_t_What is the minimum deposit and withdrawal for cryptocurrency?_t_',
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_eu: true,
            label: 'what-is-the-minimum-deposit-and-withdrawal-for-cryptocurrency?',
            answer: [
                {
                    translation_text:
                        '_t_There is no minimum deposit for cryptocurrency. The minimum withdrawal is not fixed, so please check for the amount on the <0>Withdrawal</0> page._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/cashier/withdrawal` },
                    ],
                },
            ],
        },
        {
            question: "_t_Can I transfer the funds in my account to another person's account?_t_",
            category: 'Deposits and withdrawals',
            sub_category: '_t_Withdrawals_t_',
            hide_for_eu: true,
            label: "can-i-transfer-the-fund-in-my-account-to-another-person's-account?",
            answer: [
                {
                    translation_text:
                        '_t_No. Fund transfer can only be made within your own accounts._t_',
                },
            ],
        },
    ],
}

export default deposits_and_withdrawals
