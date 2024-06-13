import { TQuestionsData } from './_data-types'
//images
import LoginImage from 'images/common/help-centre/p2p-login.png'
import SwitchRealImage from 'images/common/help-centre/p2p-real-account.png'
import GetAccountImage from 'images/common/help-centre/p2p-get-account.png'
import MyAdsImage from 'images/common/help-centre/p2p-myads.png'
import NewAdImage from 'images/common/help-centre/p2p-new-ad.png'
import PostAdImage from 'images/common/help-centre/p2p-post-ad.png'
import FindCurrencyImage from 'images/common/help-centre/p2p-find-currency.png'
import InactiveAdImage from 'images/common/help-centre/p2p-myads-inactive.png'
import UseFloatingImage from 'images/common/help-centre/p2p-use-floating.png'
import AdvertiserImage from 'images/common/help-centre/p2p-advertise-page.png'
import CounterPartiesImage from 'images/common/help-centre/p2p-counterparties.png'

const deriv_p2p: TQuestionsData = {
    section: 'Platforms',
    category: '_t_Deriv P2P_t_',
    hide_non_p2p: true,
    questions: [
        {
            question: '_t_What is Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Platforms_t_',
            label: 'what-is-deriv-p2p',
            answer: [
                {
                    translation_text:
                        '_t_<0>Deriv P2P</0> is our peer-to-peer deposit and withdrawal service that’s part of our trading platform. Using Deriv P2P, you can get money in and out of your account in minutes via exchanges with fellow traders. We launched this service mainly for our clients in countries where currency exchange services are not widely accessible._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/p2p/' }],
                },
            ],
        },
        {
            question: '_t_How secure is Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Secure_t_',
            label: 'how-secure-deriv-p2p',
            answer: [
                {
                    translation_text:
                        '_t_Here are some of the ways we ensure that Deriv P2P is as secure as possible:_t_',
                },
                {
                    translation_text: '_t_<0>Everyone is verified</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_We verify everyone's identity before they can start using Deriv P2P. No anonymous transactions are allowed._t_",
                },
                {
                    translation_text: '_t_<0>Escrow fund protection</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_The order amount is locked in escrow until both parties confirm that the transaction has been completed from their end._t_',
                },
                {
                    translation_text: '_t_<0>Two-factor authentication</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Dual-layer verification is applied to every Deriv P2P transaction as an extra layer of security before funds are released._t_',
                },
            ],
        },
        {
            question: '_t_I did not receive the verification email. What should I do?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Platforms_t_',
            label: 'did-not-received-verification-email',
            answer: [
                {
                    translation_text: "_t_Here's what you can do:_t_",
                    has_margin_top: true,
                },
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        items: [
                            {
                                translation_text:
                                    "_t_Check if your email address is correct. If you've used an incorrect email address, you may sign up again with the correct email address._t_",
                            },
                            {
                                translation_text:
                                    '_t_Wait for a few minutes. There may be a delay in delivery._t_',
                            },
                            {
                                translation_text:
                                    '_t_Check your spam or junk folder. Sometimes, emails may end up there._t_',
                            },
                            {
                                translation_text:
                                    "_t_Check if your browser and device are updated. If they're not, compatibility issues may prevent the email from reaching you._t_",
                            },
                            {
                                translation_text:
                                    "_t_If all these fail, <0>contact us via live chat</0>, and we'll help you further._t_",
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: '/contact-us?is_livechat_open=true',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_Do I need a Deriv account to use Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'need-Deriv-account-to-use-Deriv-P2P',
            answer: [
                {
                    translation_text:
                        '_t_Yes, you’ll need a real Deriv USD account before using Deriv P2P._t_',
                },
                {
                    translation_text:
                        '_t_<0>Sign up for free</0> if you don’t have a Deriv account yet._t_',
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'link', to: '/signup/' }],
                },
                {
                    translation_text:
                        '_t_If you already have a demo account, here’s how to add a real account:_t_',
                    has_margin_top: true,
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        items: [
                            {
                                translation_text: '_t_<0>Log in</0> to your Deriv account._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://oauth.deriv.com/oauth2/authorize?app_id=16929',
                                    },
                                ],
                                img: {
                                    src: LoginImage,
                                    alt: 'Login',
                                    width: '60rem',
                                    margin: '1.6rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Select <0>Real</0> from the dropdown menu._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'strong',
                                    },
                                ],
                                img: {
                                    src: SwitchRealImage,
                                    alt: 'Switch to Real Account',
                                    width: '60rem',
                                    margin: '1.6rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Hit <0>Get</0> next to <0>Deriv account</0>._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'strong',
                                    },
                                ],
                                img: {
                                    src: GetAccountImage,
                                    alt: 'Get Account',
                                    width: '60rem',
                                    margin: '1.6rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Follow the instructions to create your real account._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How can I become a Deriv P2P user?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Platforms_t_',
            label: 'how-to-become-deriv-p2p-user',
            answer: [
                {
                    translation_text:
                        '_t_To use Deriv P2P, you’ll first need a Deriv real USD account. If you don’t already have one, <0>sign up for free</0>._t_',
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'link', to: '/signup/' }],
                },
                {
                    translation_text:
                        '_t_Then, you’ll need to verify your identity by submitting your document(s)._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Once your identity has been verified, you can use Deriv P2P on desktop or mobile._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_Why is my Deriv P2P balance different from my Deriv account balance?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'Deriv-P2P-balance-different-from-my-Deriv-account-balance',
            answer: [
                {
                    translation_text:
                        '_t_Your Deriv P2P balance may not include all deposits made to your Deriv account. Deposits via credit and debit cards (including Maestro and Diners Club), ZingPay, Skrill, Neteller, and Direct Banking Nigeria will not be available in Deriv P2P._t_',
                },
            ],
        },
        {
            question: '_t_Where can I see the terms of use for Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'the-terms-of-use-for-Deriv-P2P',
            answer: [
                {
                    translation_text: '_t_Go to Section 4, ‘Deriv P2P’ of <0>our terms</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/tnc/funds-and-transfers.pdf' },
                    ],
                },
            ],
        },
        {
            question: '_t_Why is my Deriv P2P account blocked?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'Deriv-P2P-account-blocked',
            answer: [
                {
                    translation_text:
                        '_t_Your Deriv P2P account may be blocked for one of the following reasons:_t_',
                },
                {
                    has_margin_top: true,
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Your Deriv account is suspended. Please contact us via <0>live chat</0> for more information._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: '/contact-us/?is_livechat_open=true',
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_One or more disputes were raised against you. Please contact us via <0>live chat</0> for more information._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: '/contact-us/?is_livechat_open=true',
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_You have cancelled 3 orders in the last 24 hours. Your account will be unblocked automatically after 24 hours._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_What payment methods can I use to exchange with other traders?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'payment-methods',
            answer: [
                {
                    translation_text:
                        '_t_You can use any payment method you want as long as it is agreed with the trader you’re dealing with._t_',
                },
                {
                    translation_text:
                        '_t_Note: Deriv has no control over payments made between Deriv P2P traders. Please ensure you follow the payment instructions as agreed between you and the trader you are dealing with, and provide your preferred method of payment and instructions when you post your ads._t_',
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'strong' }],
                },
                {
                    translation_text:
                        '_t_For further information, see Section 4 on Deriv P2P in <0>our terms and conditions</0>._t_',
                    has_margin_top: true,
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/tnc/funds-and-transfers.pdf',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I create an ad on Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'create-an-ad',
            answer: [
                {
                    translation_text: '_t_Follow these steps:_t_',
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        items: [
                            {
                                translation_text: '_t_Go to <0>Deriv P2P</0> > <1>My ads</1>._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://app.deriv.com/cashier/p2p',
                                    },
                                    { key: 1, type: 'strong' },
                                ],
                                img: {
                                    src: MyAdsImage,
                                    alt: 'Go to my ads',
                                    width: '60rem',
                                    margin: '1.6rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text: '_t_Hit <0>Create new ad</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: NewAdImage,
                                    alt: 'Go to my ads',
                                    width: '60rem',
                                    margin: '1.6rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text: '_t_Fill up the form and hit <0>Post ad</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: PostAdImage,
                                    alt: 'Go to my ads',
                                    width: '60rem',
                                    margin: '1.6rem 0 0 -1.8rem',
                                },
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_Once your ad is created successfully, it will appear on the <0>Buy/Sell</0> page._t_',
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'strong' }],
                },
                {
                    translation_text:
                        '_t_<0>Note:</0> You’ll only be able to create ads once your account has been verified. To learn more about verifying your account, see <1>How do I verify my account?</1>_t_',
                    has_margin_top: true,
                    translation_components: [
                        { key: 0, type: 'strong' },
                        {
                            key: 1,
                            type: 'link',
                            to: '/help-centre/account/#How-do-I-verify-my-account',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_Where can I see my ads?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'see-my-ads',
            answer: [
                {
                    translation_text:
                        '_t_Your ads are available in the <1>My ads</1> tab at <0>Cashier > Deriv P2P</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: 'https://app.deriv.com/cashier/p2p' },
                        { key: 1, type: 'strong' },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I make an order?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'make-an-order',
            answer: [
                {
                    translation_text: '_t_Follow these steps:_t_',
                    list: {
                        list_style: 'decimal',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text: '_t_Go to <0>Deriv P2P</0> > <1>Buy/Sell</1>._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://app.deriv.com/cashier/p2p',
                                    },
                                    { key: 1, type: 'strong' },
                                ],
                            },
                            {
                                translation_text: '_t_Select Buy or Sell ads._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Choose the ad you want by clicking <0>Buy</0> or <0>sell</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Fill up the form and click <0>Confirm</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_Note:_t_',
                    has_margin_top: true,
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    "_t_You'll only be able to make an order once your account has been verified._t_",
                            },
                            {
                                translation_text:
                                    "_t_If you're buying, you'll need to make payment and share your payment confirmation with the seller. Once the seller has confirmed that they've received your payment, the exchange amount will be credited into your Deriv account._t_",
                            },
                            {
                                translation_text:
                                    "_t_If you're selling, you'll need to wait for the buyer's payment before completing the order._t_",
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_Where can I see my orders?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'see-my-orders',
            answer: [
                {
                    translation_text:
                        '_t_Your orders are available in the <1>Orders</1> tab at <0>Cashier > Deriv P2P</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: 'https://app.deriv.com/cashier/p2p' },
                        { key: 1, type: 'strong' },
                    ],
                },
            ],
        },
        {
            question: '_t_What does ‘completion rate’ mean?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'completion-rate',
            answer: [
                {
                    translation_text:
                        '_t_The completion rate is the percentage of orders that the advertiser could complete within 1 hour._t_',
                },
            ],
        },
        {
            question: "_t_Why can't I see my ad in the Buy/Sell tab?_t_",
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'cannot-see-ads',
            answer: [
                {
                    translation_text:
                        '_t_The <0>Buy/Sell</0> tab shows you ads by other advertisers. You can see your ads in the <0>My ads</0> tab._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
        {
            question:
                '_t_What should I do if I have a dispute with the trader I’m dealing with?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Dispute_t_',
            label: 'dispute-with-the-trader',
            answer: [
                {
                    translation_text:
                        '_t_If you encounter any issues with a transaction on Deriv P2P, first try to resolve it with the trader you’re dealing with. If they’re not willing to help, please let us know via <0>live chat</0>, and we’ll help you resolve it._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact-us/?is_livechat_open=true' },
                    ],
                },
                {
                    translation_text:
                        '_t_To dispute a Deriv P2P transaction, follow these steps:_t_',
                    has_margin_top: true,
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '1.6rem',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Once the order has expired, click Complain on the order details screen._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text: '_t_Complete the form and click Submit._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_We’ll seek more info on the transaction by reaching out to you and the trader you are dealing with, and we’ll try to resolve the issue within 6 hours. We’ll keep you informed of the status._t_',
                    has_margin_top: true,
                },
                {
                    has_margin_top: true,
                    translation_text:
                        '_t_For further information, see Section 4 on Deriv P2P in <0>our terms and conditions</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/tnc/funds-and-transfers.pdf' },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I check my available balance for Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Balance_t_',
            label: 'available-balance-for-Deriv-P2P',
            answer: [
                {
                    translation_text:
                        '_t_You can see your available balance in the <0>My profile</0> tab._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
                {
                    translation_text: '_t_<0>Note:</0>_t_',
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'strong' }],
                },
                {
                    translation_text:
                        '_t_Your available balance for Deriv P2P may not reflect your entire Deriv balance. This is because deposits made via some payment methods won’t be available for Deriv P2P. See <0>Why is my Deriv P2P balance different from my Deriv account balance?</0> for more info._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/help-centre/deriv-p2p/#Deriv-P2P-balance-different-from-my-Deriv-account-balance',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I ensure my Deriv P2P transactions are successful?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Transaction_t_',
            label: 'Deriv-P2P-transactions-are-successful',
            answer: [
                {
                    translation_text:
                        '_t_To make successful Deriv P2P transactions, follow these guidelines:_t_',
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_If you have active orders, keep the app open (either on your phone or computer) until your orders are completed. Try to complete your orders within 1 hour._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Ensure that you’ve entered the correct amount and exchange rate in your ads._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Avoid creating ads with identical amounts and exchange rates._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Ensure that your account balance is sufficient to support your ads and orders._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_If you’re buying:_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Ensure that you make payment to the correct seller within 1 hour._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_After making your payment, share the receipt with the seller via the chat feature in Deriv P2P._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_If you’re selling:_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Check your bank or e-wallet balance to confirm that the buyer has made payment before completing the order._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Once you’ve received the payment from the buyer, try to complete the order as soon as you can._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
                {
                    has_margin_top: true,
                    translation_text:
                        '_t_For further information, see Section 4 on Deriv P2P in <0>our terms</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/tnc/funds-and-transfers.pdf',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I get in touch with the trader I’m dealing with?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Transaction_t_',
            label: 'in-touch-with-the-counterparty',
            answer: [
                {
                    translation_text:
                        "_t_Use the chat feature in Deriv P2P to communicate with the trader you're dealing with._t_",
                },
                {
                    translation_text:
                        '_t_<0>Note:</0> The chat feature is only available for active orders. Once an order is complete, the chat feature disappears._t_',
                    has_margin_top: true,
                    translation_components: [
                        {
                            key: 0,
                            type: 'strong',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I increase my daily buy or sell limit on Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Limit_t_',
            label: 'buy-or-sell-limit',
            answer: [
                {
                    translation_text:
                        "_t_Yes, as long as you pass our checks. Initially, you'll start with a 500 USD limit for buy and sell orders._t_",
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_Once you've met the required criteria, we'll increase your limits to 5,000 USD for buy orders and 2,000 USD for sell orders._t_",
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_If you continue to do well, you can increase your limit to 10,000 USD for buy and sell orders._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_<0>Note:</0> Your buy and sell limits on Deriv P2P are set at our discretion._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'strong',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How to register for Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Limit_t_',
            label: 'how-to-register-for-deriv-p2p',
            answer: [
                {
                    translation_text:
                        '_t_Age-verify your account by submitting <0>proof of identity</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://app.deriv.com/account/proof-of-identity)',
                        },
                    ],
                },
                {
                    translation_text:
                        '_t_Once your submitted document has been approved, go to Cashier > DP2P to register your Deriv P2P account._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How do I find ads in different currencies?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'how-to-find-ads-in-deriv-p2p',
            answer: [
                {
                    translation_text:
                        '_t_Use the drop-down menu (shown in the screenshot below) on the <0>Buy/Sell</0> page to look for ads in different currencies._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'strong',
                        },
                    ],
                    img: {
                        src: FindCurrencyImage,
                        alt: 'Find different currency',
                        width: '60rem',
                        margin: '1.7rem 0 0 0',
                    },
                },
            ],
        },
        {
            question: '_t_Why have my ads disappeared from the My ads page?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'why-my-ads-disappeared',
            answer: [
                {
                    translation_text:
                        "_t_This may be because your ads were inactive and may have been deleted. If your ad doesn't receive a response within the first 3 days, it'll be marked inactive. After 90 days of inactivity, it will be deleted permanently._t_",
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_To prevent this, check your ads regularly. If they've been deactivated, you can reactivate them by hitting <0>Activate</0> on the <0>My ads</0> page._t_",
                    has_margin_top: true,
                    translation_components: [
                        {
                            key: 0,
                            type: 'strong',
                        },
                    ],
                },
                {
                    img: {
                        src: InactiveAdImage,
                        alt: 'Find my disappeared ads',
                        width: '60rem',
                        margin: '1.7rem 0 0 0',
                    },
                },
            ],
        },
        {
            question: '_t_What is a floating exchange rate?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Transaction_t_',
            label: 'what-is-floating-exchange-rate',
            answer: [
                {
                    translation_text:
                        "_t_It refers to the exchange rate used in Deriv P2P ads. In some countries where it isn't feasible to use a fixed exchange rate (due to market volatility), you can set the exchange rate for your ad to a specific percentage of the market price._t_",
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_The main benefit is that you don't have to keep editing your ads whenever currency exchange rates go up or down._t_",
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_<0>Note:</0> This feature is only available in some countries. Where available, it's not optional._t_",
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
        {
            question: '_t_How do I use a floating exchange rate for my ads on Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Transaction_t_',
            label: 'how-to-use-floating-exchange-rate',
            answer: [
                {
                    translation_text:
                        '_t_You can set a floating exchange rate on the <0>Create new ad</0> page if available in your country._t_',
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'strong' }],
                },
                {
                    img: {
                        src: UseFloatingImage,
                        alt: 'Use floating exchange rate',
                        width: '60rem',
                        margin: '1.7rem 0 0 0',
                    },
                },
                {
                    translation_text:
                        '_t_Once your ad is created, the exchange rate will be a percentage of the market rate._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How do I rate or recommend my trade partners on Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Partners_t_',
            label: 'how-to-recommend-trade-partners',
            answer: [
                {
                    translation_text:
                        '_t_After every transaction, you can rate and recommend your trade partners: choose the number of stars and hit the thumbs-up button._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        "_t_You can find the rating and recommendation score of every Deriv P2P user on the <0>Buy/Sell</0> page and their individual <0>Advertiser's page</0>._t_",
                    has_margin_top: true,
                    translation_components: [{ key: 0, type: 'strong' }],
                },
                {
                    translation_text:
                        '_t_Rating a great experience lets you show your appreciation towards your trade partners. They’ll be encouraged to maintain their excellent standards upon receiving your positive ratings. Your ratings and recommendations will also help other Deriv P2P users find reliable trade partners._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How do I block someone on Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Partners_t_',
            label: 'how-to-block-someone-in-deriv-p2p',
            answer: [
                {
                    translation_text:
                        "_t_You can block a user on Deriv P2P by hitting the 3 dots on their <0>Advertiser's page</0> and choosing <0>Block</0>._t_",
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    img: {
                        src: AdvertiserImage,
                        alt: 'Block user in advertiser page',
                        width: '60rem',
                        margin: '1.7rem 0 0 0',
                    },
                },
                {
                    translation_text:
                        "_t_Alternatively, you can block anyone you've traded with at <0>My profile</0> > <0>My counterparties</0>._t_",
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    img: {
                        src: CounterPartiesImage,
                        alt: 'Block user in counterparties',
                        width: '60rem',
                        margin: '1.7rem 0 0 0',
                    },
                },
            ],
        },
        {
            question: '_t_How many ads can I create on Deriv P2P?_t_',
            category: 'Deriv P2P',
            sub_category: '_t_Payment_t_',
            label: 'how-many-ads-can-create-in-deriv-p2p',
            answer: [
                {
                    translation_text:
                        '_t_As many as you want. However, only 3 buy ads and 3 sell ads can be active at any time, and these ads cannot have identical descriptions, limits, and exchange rates._t_',
                },
                {
                    translation_text: '_t_For example,_t_',
                    has_margin_top: true,
                },
                {
                    has_margin_top: true,
                    list: {
                        list_style: 'disc',
                        margin_top: '1.7rem',
                        items: [
                            {
                                translation_text:
                                    "_t_If you already have an active ad with an exchange rate of 10%, you can't have another active ad with the same rate._t_",
                            },
                            {
                                translation_text:
                                    "_t_If you already have an active ad with a minimum order limit of 10 USD and a maximum order limit of 50 USD, you can't have another active ad with a minimum order limit of 40 USD and a maximum order limit of 100 USD because the range overlaps with the first ad._t_",
                            },
                        ],
                    },
                },
            ],
        },
    ],
}

export default deriv_p2p
