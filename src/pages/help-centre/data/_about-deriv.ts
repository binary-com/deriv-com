import { ArticlesDataType } from './_data-types'

const about_deriv_data: ArticlesDataType = {
    section: 'General',
    category: '_t_About Deriv_t_',
    articles: [
        {
            question: '_t_Is Deriv regulated?_t_',
            category: 'About Deriv',
            sub_category: '_t_Regulation_t_',
            label: 'Deriv-regulated',
            answer: [
                {
                    translation_text: '_t_Yes, we’re regulated by_t_',
                    list: {
                        list_style: 'disc',
                        padding_left: '5rem',
                        margin_top: '0.3rem',
                        items: [
                            { translation_text: '_t_the Malta Financial Services Authority_t_' },
                            { translation_text: '_t_the Labuan Financial Services Authority_t_' },
                            { translation_text: '_t_the Vanuatu Financial Services Commission_t_' },
                            {
                                translation_text:
                                    '_t_the British Virgin Islands Financial Services Commission_t_',
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_You can get more info about this on our <0>Regulatory information</0> page._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/regulatory/' }],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_Where is my money held?_t_',
            category: 'About Deriv',
            sub_category: '_t_Finance_t_',
            label: 'money-held',
            answer: [
                {
                    translation_text:
                        "_t_Your money is held in secure financial institutions and is always available to you, should you wish to withdraw. We don't use your money for our business purposes._t_",
                },
            ],
        },
    ],
}

export default about_deriv_data
