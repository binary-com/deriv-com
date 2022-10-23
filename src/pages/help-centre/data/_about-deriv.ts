import { TArticlesData } from './_data-types'

const about_deriv_data: TArticlesData = {
    section: 'General',
    category: '_t_About Deriv_t_',
    articles: [
        {
            question: '_t_Is Deriv regulated?_t_',
            category: 'About Deriv',
            sub_category: '_t_Regulation_t_',
            label: 'Deriv-regulated',
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
