import { TQuestionsData } from './_data-types'

const dtrader: TQuestionsData = {
    section: 'Platforms',
    category: '_t_DTrader_t_',
    questions: [
        {
            question: '_t_What is DTrader?_t_',
            category: 'DTrader',
            hide_for_non_eu: true,
            sub_category: '_t_Platforms_t_',
            label: 'what-is-dtrader',
            answer: [
                {
                    translation_text:
                        '_t_<0>DTrader</0> is one of our trading platforms. It offers digital options and multipliers on a variety of assets in financial and synthetic markets._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/dtrader/' }],
                },
            ],
        },
        {
            question: '_t_What is DTrader?_t_',
            category: 'DTrader',
            sub_category: '_t_Platforms_t_',
            hide_for_eu: true,
            label: 'what-is-dtrader',
            answer: [
                {
                    translation_text:
                        '_t_DTrader is an advanced trading platform on which you can trade more than 50 assets in the form of digital, multipliers, and lookback options._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/dtrader/' }],
                },
            ],
        },
        {
            question: '_t_What markets can I trade on DTrader?_t_',
            category: 'DTrader',
            sub_category: '_t_Markets_t_',
            label: 'markets-on-dtrader',
            answer: [
                {
                    eu_translation_text:
                        '_t_You can trade forex, stocks, stock indices, commodities, cryptocurrencies, and derived on DTrader. Some markets may not be available in certain countries._t_',
                    translation_text:
                        '_t_You can trade forex, stock indices, commodities, cryptocurrencies, and derived on DTrader. Some markets may not be available in certain countries._t_',
                },
            ],
        },
        {
            question: '_t_What contract types do you offer on DTrader?_t_',
            category: 'DTrader',
            sub_category: '_t_Contracts_t_',
            label: 'contracts-on-dtrader',
            answer: [
                {
                    translation_text: '_t_These contracts are available on DTrader:_t_',
                    list: {
                        list_style: 'disc',
                        margin_top: '0.3rem',
                        items: [
                            {
                                translation_text: '_t_Multipliers_t_',
                            },
                            {
                                translation_text: '_t_Ups & Downs_t_',
                                sub_items: {
                                    list_style: 'circle',
                                    margin_top: '0.3rem',
                                    items: [{ translation_text: '_t_Rise/Fall_t_' }],
                                },
                            },
                            {
                                translation_text: '_t_Highs & Lows_t_',
                                sub_items: {
                                    list_style: 'circle',
                                    margin_top: '0.3rem',
                                    items: [
                                        { translation_text: '_t_Higher/Lower_t_' },
                                        { translation_text: '_t_Touch/No Touch_t_' },
                                    ],
                                },
                            },
                            {
                                translation_text: '_t_Digits_t_',
                                sub_items: {
                                    list_style: 'circle',
                                    margin_top: '0.3rem',
                                    items: [
                                        { translation_text: '_t_Matches/Differs_t_' },
                                        { translation_text: '_t_Even/Odd_t_' },
                                        { translation_text: '_t_Over/Under_t_' },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_Some trade types may not be available in certain countries._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_Can I download the chart on DTrader?_t_',
            category: 'DTrader',
            sub_category: '_t_Contracts_t_',
            label: 'download-the-chart-on-DTrader',
            answer: [
                {
                    translation_text:
                        '_t_Yes, you can download the chart on DTrader (in .csv and .png) by clicking <0>Download</0> on the toolbar on the left._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
    ],
}

export default dtrader
