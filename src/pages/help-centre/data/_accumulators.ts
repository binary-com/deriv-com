import { TQuestionsData } from './_data-types'

const accumulators: TQuestionsData = {
    section: 'General',
    category: '_t_Accumulators_t_',
    hide_for_eu: true,
    questions: [
        {
            question: '_t_What are accumulators?_t_',
            category: 'accumulators',
            hide_for_eu: true,
            sub_category: '_t_Accumulators_t_',
            label: 'what-are-accumulators',
            answer: [
                {
                    translation_text:
                        '_t_Accumulators (also known as accumulator options) is amongst our simplest trade types that offer almost unlimited potential profit._t_',
                },
                {
                    translation_text:
                        '_t_Available on <0>DTrader</0>, accumulators give you up to a 99% chance of growing your payout exponentially at every tick._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_You can trade accumulators on the <0>Crash/Boom</0>, <0>Jump</0>, and <0>Volatility</0> indices. We’ll enable accumulators for <0>Derived FX</0> indices soon._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_<0>Note</0>: Accumulators aren’t available in Singapore, Japan, and the EU._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    has_margin_top: true,
                },
                {
                    translation_text: '_t_To find out more, visit the <0>Accumulators page</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/trade-types/accumulators' },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How do I trade accumulators?_t_',
            category: 'accumulators',
            hide_for_eu: true,
            sub_category: '_t_Accumulators_t_',
            label: 'how-do-i-trade-accumulators',
            answer: [
                {
                    translation_text:
                        '_t_Visit the <0>Accumulators page</0> to learn more about trading accumulators._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/trade-types/accumulators' },
                    ],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Watch <0>this video</0> or visit the <1>Accumulators page</1> to learn more about trading accumulators._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '' },
                        { key: 1, type: 'link', to: '/trade-types/accumulators' },
                    ],

                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How are accumulators different from multipliers?_t_',
            category: 'accumulators',
            hide_for_eu: true,
            sub_category: '_t_Accumulators_t_',
            label: 'how-are-accumulators-different-from-multipliers',
            answer: [
                {
                    translation_text:
                        '_t_With multipliers, your payout is amplified when the market price moves in the direction you predicted. If the market price moves in the opposite direction, your payout decreases, and you may lose your stake._t_',
                },
                {
                    translation_text:
                        '_t_With accumulators, your payout grows exponentially at each tick, and you can earn an almost unlimited potential profit as long as the price remains within the barriers. If the market price touches or moves out of the barriers, you’ll lose your stake, and there won’t be a payout._t_',
                },
            ],
        },
        {
            question: '_t_Do accumulators have any trade protection features?_t_',
            category: 'accumulators',
            hide_for_eu: true,
            sub_category: '_t_Accumulators_t_',
            label: 'do-accumulators-have-any-trade-protection-features',
            answer: [
                {
                    translation_text:
                        '_t_Yes, accumulators have a <0>take profit</0> feature: set your desired profit amount, and your contract will close automatically when your profit reaches (or exceeds) the amount you set._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
        {
            question: '_t_When can I close an accumulator trade?_t_',
            category: 'accumulators',
            sub_category: '_t_Accumulators_t_',
            hide_for_eu: true,
            label: 'when-can-i-close-an-accumulator-trade',
            answer: [
                {
                    translation_text:
                        '_t_You may close your trade at any time. If you prefer to close your trades automatically, you may set a <0>take profit</0> amount._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
    ],
}

export default accumulators
