import { ArticlesDataType } from './_data-types'

const multiplier: ArticlesDataType = {
    section: 'Platforms',
    category: '_t_Multipliers_t_',
    articles: [
        {
            question: '_t_What are multipliers?_t_',
            category: 'Multipliers',
            sub_category: '_t_Platforms_t_',
            label: 'what-are-multipliers',
            answer: [
                {
                    translation_text:
                        '_t_Multipliers (also known as multiplier options) is a trade type that gives you an opportunity to amplify your profit without risking more than your stake. To find out more, visit <0>the Multipliers page</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/trade-types/multiplier' },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I trade multipliers?_t_',
            category: 'Multipliers',
            sub_category: '_t_Platforms_t_',
            label: 'how-trade-multipliers',
            answer: [
                {
                    translation_text:
                        '_t_Watch <0>this video</0> to know more about trading multipliers._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://www.youtube.com/watch?v=viS-dhJuHek&t=1s&ab_channel=Deriv',
                        },
                    ],
                },
            ],
        },
    ],
}

export default multiplier
