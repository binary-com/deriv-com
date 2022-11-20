import { TQuestionsData } from './_data-types'
import { deriv_app_url, oauth_url } from 'common/constants'

const account: TQuestionsData = {
    section: 'General',
    category: '_t_Account_t_',
    questions: [
        {
            question: '_t_How can I change my personal details?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'changing-your-personal-details',
            answer: [
                {
                    translation_text:
                        '_t_You can do so on the <0>Personal details</0> page. If you’re unable to update your details, please <1>contact us via live chat</1>. We may need you to send us some documents for verification._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: `${deriv_app_url}/account/personal-details`,
                        },
                        { key: 1, type: 'link', to: '/contact_us/?is_livechat' },
                    ],
                },
            ],
        },
        {
            question: '_t_How can I change the currency of my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'change-account-currency',
            answer: [
                {
                    translation_text:
                        '_t_While the currencies of your virtual and cryptocurrency accounts are fixed, you can change the currency of your fiat account by following the steps below._t_',
                },
                {
                    translation_text:
                        '_t_If you haven’t made a deposit or added a real MT5 account, follow these steps:_t_',
                    has_margin_top: true,
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '1.6rem',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Click on your account balance and click <0>Add or manage account.</0>_t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Select <0>Fiat currencies,</0> choose the currency you want, and click <0>Change currency.</0>_t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_Need help? Please <0>contact us via live chat.</0>_t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat' },
                    ],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_If you have made a deposit or have added a real MT5 account, follow these steps:_t_',
                    has_margin_top: true,
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.6rem',
                        items: [
                            {
                                translation_text:
                                    '_t_If you have open positions, close them first._t_',
                                sub_items: {
                                    list_style: 'circle',
                                    margin_top: '0.3rem',
                                    items: [
                                        {
                                            translation_text:
                                                '_t_For your Deriv real account, go to <0>Reports</0> to close or sell your open positions._t_',
                                            translation_components: [{ key: 0, type: 'strong' }],
                                        },
                                        {
                                            translation_text:
                                                '_t_For your Deriv MT5 and Deriv X real accounts, log in to close any open positions._t_',
                                        },
                                    ],
                                },
                            },
                            {
                                translation_text: '_t_Then, withdraw your funds._t_',
                                sub_items: {
                                    list_style: 'circle',
                                    margin_top: '0.3rem',
                                    items: [
                                        {
                                            translation_text:
                                                '_t_For your Deriv real account, go to <0>Cashier</0> to withdraw your funds._t_',
                                            translation_components: [{ key: 0, type: 'strong' }],
                                        },
                                        {
                                            translation_text:
                                                '_t_For your Deriv MT5 and Deriv X real accounts, go to your dashboard to withdraw your funds._t_',
                                        },
                                    ],
                                },
                            },
                            {
                                translation_text:
                                    '_t_<0>Contact us via live chat</0> and we’ll help you change the currency of your account._t_',
                                translation_components: [
                                    { key: 0, type: 'link', to: '/contact_us/?is_livechat' },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_Can I change my email address?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'change-my-email-address',
            answer: [
                {
                    translation_text:
                        "_t_Yes. <0>Contact us via live chat</0> and we'll help you with it._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat' },
                    ],
                },
            ],
        },
        {
            question: "_t_Why can't I create an account?_t_",
            category: 'account',
            sub_category: '_t_Opening an account_t_',
            label: 'who-can-open-an-account',
            answer: [
                {
                    translation_text:
                        "_t_Here are some possible reasons you aren't able to create an account:_t_",
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text: '_t_You’re below 18 years old._t_',
                            },
                            {
                                translation_text: '_t_You may already have a Deriv account._t_',
                            },
                            {
                                translation_text:
                                    "_t_Our services aren't available in your country of residence._t_",
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_You may refer to <0>our terms</0> for more information. If you need help getting into your account, <1>contact us via live chat.</1>_t_',
                    has_margin_top: true,
                    translation_components: [
                        { key: 0, type: 'link', to: '/tnc/general-terms.pdf' },
                        { key: 1, type: 'link', to: '/contact_us/?is_livechat' },
                    ],
                },
            ],
        },
        {
            question:
                '_t_I forgot my Google/Facebook/Apple account password. How can I log in to my Deriv account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'recovering-your-password',
            answer: [
                {
                    translation_text:
                        '_t_If you created your Deriv account using Apple/Google/Facebook, try resetting your Apple/Google/Facebook password. After that, you should be able to log in to Deriv as usual._t_',
                },
                {
                    translation_text:
                        "_t_If you'd like to log in using your email address instead, follow these steps:_t_",
                    has_margin_top: true,
                    list: {
                        list_style: 'decimal',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Hit <0>Forgot password?</0> on the <1>login page.</1>_t_',
                                translation_components: [
                                    { key: 0, type: 'link', to: '/reset-password' },
                                    {
                                        key: 1,
                                        type: 'link',
                                        to: `${oauth_url}/oauth2/authorize?app_id=16929`,
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_Enter the same email address you use for your Apple/Google/Facebook account._t_',
                            },
                            {
                                translation_text:
                                    "_t_We'll email you a verification link. Click that link and set a new password for your Deriv account._t_",
                            },
                            {
                                translation_text:
                                    "_t_Now, you'll be able to log in to your Deriv account using your email address and password._t_",
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How can I close my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'close-your-account',
            answer: [
                {
                    translation_text: '_t_Click <0>here</0> to close your account._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: `${deriv_app_url}/account/deactivate-account`,
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I unsubscribe from marketing emails?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'unsubscribe-marketing-emails',
            answer: [
                {
                    translation_text:
                        '_t_You can unsubscribe by going to the <0>Personal details</0> page. Uncheck the checkbox that says "Get updates about Deriv products, services and events." at the bottom of the page, and click <1>Submit.</1>_t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: `${deriv_app_url}/account/personal-details`,
                        },
                        { key: 1, type: 'strong' },
                    ],
                },
            ],
        },
        {
            question: '_t_What is a dormant fee?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'what-is-dormant-fee',
            answer: [
                {
                    translation_text:
                        "_t_It's a fee that we charge for accounts that have been inactive for the last 12 months. Refer to <0>our terms</0> for more info._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/tnc/general-terms.pdf' },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I open a corporate or business account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'open-a-corporate-or-business-account',
            answer: [
                {
                    translation_text:
                        "_t_Yes. <0>Contact us via live chat</0>, and we'll help you through it. We'll need the following information:_t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat' },
                    ],
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            { translation_text: '_t_Name of entity_t_' },
                            { translation_text: '_t_Certificate of incorporation_t_' },
                            { translation_text: '_t_Memorandum and articles of association_t_' },
                            { translation_text: '_t_List of directors_t_' },
                            { translation_text: '_t_List of shareholders_t_' },
                            {
                                translation_text:
                                    '_t_Authorisation to manage the account (if your business has more than one director)_t_',
                            },
                            {
                                translation_text:
                                    '_t_Passport and utility bill/bank statement of the person managing the account and of each director and shareholder (if your business has more than 1)_t_',
                            },
                            {
                                translation_text:
                                    '_t_Utility bill/bank statement containing the address of the business_t_',
                            },
                            { translation_text: '_t_Source of wealth documentation_t_' },
                        ],
                    },
                },
                {
                    has_margin_top: true,
                    translation_text:
                        '_t_We may request more information during the signup process._t_',
                },
            ],
        },
        {
            question: '_t_Do I need to pay taxes on my trades/profits?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'pay-taxes-on-my-trades-profits',
            answer: [
                {
                    translation_text:
                        "_t_It depends on the laws in your country of residence. Please get professional advice on whether you're required to pay taxes on <0>your profits</0>._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/reports/profit` },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I open more than one Deriv account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'open-more-than-one-deriv-account',
            answer: [
                {
                    translation_text:
                        '_t_As per <0>our terms</0>, we only allow one account per client, which you can open in the currency of your choice (either fiat or crypto). If you want to trade with other currencies, you can add multiple cryptocurrency accounts to your profile._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/tnc/general-terms.pdf' },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I create an API token?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'create-an-API-token',
            answer: [
                {
                    translation_text:
                        '_t_You can create an API token <0>here</0>. Give your token a name, select the scope, and click <1>Create</1>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/account/api-token` },
                        { key: 1, type: 'strong' },
                    ],
                },
            ],
        },
        {
            question: '_t_How can I set self-exclusion limits on my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'self-exclusion-limits-on-my-account',
            answer: [
                {
                    translation_text: '_t_You can do so on the <0>Self-exclusion</0> page._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/account/self-exclusion` },
                    ],
                },
            ],
        },
        {
            question: '_t_How can I adjust or remove my self-exclusion limits?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'remove-self-exclusion-limits',
            answer: [
                {
                    translation_text:
                        "_t_If you're residing in the EU or UK, <0>contact us via live chat</0>, and we'll help you with it._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat_open=true' },
                    ],
                },
                {
                    translation_text:
                        '_t_If you reside in any other country, you can adjust or remove your limits on the <1>Self-exclusion</1> page. If you’re unable to change your limits, <0>let us know via live chat</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat_open=true' },
                        { key: 1, type: 'link', to: `${deriv_app_url}/account/self-exclusion` },
                    ],
                },
            ],
        },
        {
            question: '_t_How can I reactivate my Deriv account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'reactivate-my-Deriv-account',
            answer: [
                {
                    translation_text:
                        "_t_You may reactivate your account by <1>logging in</1> with your email address and password. If you're unable to do so, please <0>contact us via live chat</0>, and we'll help you further._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat_open=true' },
                        {
                            key: 1,
                            type: 'link',
                            to: `${oauth_url}/oauth2/authorize?app_id=16929`,
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_When do I need to verify my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'need-to-verify-my-account',
            answer: [
                {
                    translation_text:
                        '_t_We’ll prompt you to verify your account when it’s needed._t_',
                },
            ],
        },
        {
            question: '_t_How do I verify my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'How-do-I-verify-my-account',
            answer: [
                {
                    translation_text:
                        '_t_When we prompt you to verify your account, follow these steps:_t_',
                    list: {
                        list_style: 'decimal',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text: '_t_<0>Log in</0> to your Deriv account._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: `${oauth_url}/oauth2/authorize?app_id=16929`,
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_Go to <0>Settings</0> > <1>Proof of identity</1> or <1>Proof of address</1>._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: `${deriv_app_url}/account/personal-details`,
                                    },
                                    { key: 1, type: 'strong' },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_Follow the instructions on the screen to verify your account._t_',
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_<0>Note:</0> The <0>Proof of identity</0> and <0>Proof of address</0> pages will not be available if your account doesn’t need verification at this time._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What documents do I need to verify my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'documents-do-I-need-to-verify-my-account',
            answer: [
                {
                    translation_text:
                        '_t_You’ll need the following documents to verify your account:_t_',
                    list: {
                        list_style: 'disc',
                        margin_top: '1.6rem',
                        items: [
                            {
                                translation_text:
                                    "_t_<0>Proof of identity</0><br />You’ll need a valid government-issued identity document such as a national ID card, passport, or driver's licence. Your document must clearly show your name, photo, and date of birth._t_",
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_<0>Proof of address</0><br/>You’ll need a bank statement, credit card statement, tax statement, or utility bill. Your document must be issued within the last 6 months. It must contain your name, address, the name of the company that issued the document, and the issue date._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_Why do I need to verify my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'Why-do-I-need-to-verify-my-account',
            answer: [
                {
                    translation_text:
                        "_t_Our regulators require us to verify your account in accordance with anti-money laundering (AML) and Know Your Customer (KYC) laws. If we have prompted you to upload your documents to verify your account, it means that you'll only be able to continue using our services after your account is verified._t_",
                },
            ],
        },
        {
            question: '_t_Can I trade without verifying my account?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'Can-I-trade-without-verifying-my-account',
            answer: [
                { translation_text: '_t_If you’re in the EU or UK:_t_' },
                { translation_text: '_t_No, you must verify your account before trading._t_' },
                {
                    translation_text: '_t_If you’re in any other country:_t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Yes, as long as you haven’t opened a Deriv MT5 Financial STP account, you can still trade without verifying your account._t_',
                },
            ],
        },
        {
            question: '_t_How long does verification take?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'How-long-does-verification-take',
            answer: [
                {
                    translation_text:
                        '_t_We try to review your verification documents within the same day. In some cases, due to high traffic, it may take up to 3 business days. You’ll get a confirmation email from us once the review is complete. You can also check the status of your documents at_t_',
                },
                {
                    translation_text: '_t_<0>Settings > Proof of identity</0>_t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: `${deriv_app_url}/account/proof-of-identity`,
                        },
                    ],
                },
                {
                    translation_text: '_t_<0>Setting > Proof of address</0>_t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: `${deriv_app_url}/account/proof-of-address`,
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_Why were my documents declined?_t_',
            category: 'account',
            sub_category: '_t_Managing your account_t_',
            label: 'Why-were-my-documents-declined',
            answer: [
                {
                    translation_text:
                        '_t_We may have declined your documents because they were unclear, invalid, expired, had cropped edges, or showed details that did not match your Deriv profile. If you need help, please <0>contact us via live chat</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/contact_us/?is_livechat_open=true',
                        },
                    ],
                },
            ],
        },
    ],
}

export default account
