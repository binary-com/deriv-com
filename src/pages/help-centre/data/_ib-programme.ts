import { TQuestionsData } from './_data-types'

const ib_programme: TQuestionsData = {
    section: 'General',
    category: '_t_IB programme_t_',
    questions: [
        {
            question: '_t_How do I sign up as an introducing broker (IB)?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            hide_for_non_eu: true,
            label: 'ib-sign-up',
            answer: [
                {
                    translation_text:
                        "_t_To become an IB, you'll need to be an existing affiliate with a Deriv account and an MT5 Synthetic real account. If you do, you can apply to become an IB by writing to us at <0>affiliates@deriv.com</0>. <1>Get more info about our IB programme</1>._t_",
                    translation_components: [
                        { key: 0, type: 'strong' },
                        {
                            key: 1,
                            type: 'link',
                            to: '/contact_us/?is_livechat_open=true',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I sign up as an introducing broker (IB)?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            hide_for_eu: true,
            label: 'ib-sign-up',
            answer: [
                {
                    translation_text:
                        "_t_To become an IB, you'll need to be an existing affiliate with a Deriv <0>currency</0> account and an MT5 Derived real account. If you do, you can apply to become an IB by <1>contacting us via LiveChat</1>._t_",
                    translation_components: [
                        { key: 0, type: 'strong' },
                        {
                            key: 1,
                            type: 'link',
                            to: '/contact_us/?is_livechat_open=true',
                        },
                    ],
                },
                {
                    translation_text:
                        '_t_Get more info about our IB programme by clicking <0>here</0>._t_',
                    has_margin_top: true,
                    translation_components: [
                        { key: 0, type: 'link', to: 'https://deriv.com/partners/affiliate-ib/' },
                    ],
                },
            ],
        },
        {
            question: '_t_Why should I join your introducing broker (IB) programme?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            label: 'why-ib',
            answer: [
                {
                    translation_text: '_t_When you join our IB programme,_t_',
                    list: {
                        list_style: 'disc',
                        margin_top: '1rem',
                        items: [
                            {
                                translation_text:
                                    "_t_You'll earn commission whenever your clients trade CFDs on MT5, even on weekends and public holidays._t_",
                            },
                            {
                                translation_text:
                                    "_t_You'll get daily commission payouts in your MT5 Synthetic account._t_",
                            },
                            {
                                translation_text:
                                    "_t_You'll have access to various marketing tools to help promote our products and services to your clients._t_",
                            },
                            {
                                translation_text:
                                    "_t_You'll have a dedicated account manager to help you._t_",
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_Find out more about our IB programme <0>here</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: 'https://deriv.com/partners/affiliate-ib/' },
                    ],
                    margin_top: '1rem',
                },
            ],
        },
        {
            question: '_t_How much do you pay in commission?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            label: 'how-much-commission',
            answer: [
                {
                    translation_text:
                        "_t_You’ll earn a payout based on the volume of your clients' trades. Find out more <0>here</0>._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: 'https://deriv.com/partners/affiliate-ib/' },
                    ],
                },
            ],
        },
        {
            question: '_t_Are there any charges for joining your introducing broker programme?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            label: 'chargers-ib',
            answer: [{ translation_text: "_t_No, it's completely free of charge._t_" }],
        },
        {
            question: '_t_How and when will I receive my IB commission payout?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            label: 'receive-commission',
            answer: [
                {
                    eu_translation_text:
                        "_t_We'll pay your IB commission into your MT5 Synthetic account daily._t_",
                    translation_text:
                        "_t_We'll pay your IB commission into your MT5 (Derived account daily)._t_",
                },
            ],
        },
        {
            question: '_t_When can I withdraw my commission?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            label: 'withdraw-commission',
            answer: [
                {
                    translation_text:
                        "_t_Once we've paid your commission into your account, you can withdraw whenever you want._t_",
                },
            ],
        },
        {
            question:
                '_t_Are there any conditions that I should meet before I can withdraw my commission?_t_',
            category: 'IB programme',
            sub_category: '_t_Partners_t_',
            label: 'withdraw-condition',
            answer: [
                {
                    translation_text:
                        '_t_No. You can withdraw your commission whenever you want._t_',
                },
            ],
        },
    ],
}

export default ib_programme
