import FindBlocks from '../components/dbot/_find-blocks'
import { ArticlesDataType } from './_data-types'

const dbot_data: ArticlesDataType = {
    section: 'Platforms',
    category: '_t_DBot_t_',
    articles: [
        {
            question: '_t_What is DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Platforms_t_',
            label: 'what-is-dbot',
            answer: [
                {
                    translation_text:
                        "_t_DBot is a web-based strategy builder for trading digital options. It’s a platform where you can build your own trading bot using drag-and-drop 'blocks'._t_",
                },
            ],
        },
        {
            question: '_t_How do I find the blocks I need?_t_',
            category: 'DBot',
            sub_category: '_t_Blocks_t_',
            label: 'find-blocks',
            renderProp: FindBlocks,
        },
        {
            question: '_t_How do I remove blocks from the workspace?_t_',
            category: 'DBot',
            sub_category: '_t_Blocks_t_',
            label: 'remove-blocks',
        },
        {
            question: '_t_How do I create variables?_t_',
            category: 'DBot',
            sub_category: '_t_Variables_t_',
            label: 'create-variables',
        },
        {
            question: '_t_What is a quick strategy and how do I use it?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'quick-strategy',
        },
        {
            question: '_t_What is the Martingale strategy?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'martingale-strategy',
            answer: [
                {
                    translation_text:
                        '_t_The Martingale strategy is a classic trading technique that encourages traders to double contract size after a loss so that when they do win, they will regain what they have lost._t_',
                },
            ],
        },
        {
            question: '_t_What is the D’Alembert strategy?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'dalembert-strategy',
            answer: [
                {
                    translation_text:
                        '_t_Named after the popular 18th-century French roulette theorist, Jean le Rond d’Alembert, this strategy encourages traders to increase contract size after a loss and decrease it after a successful trade._t_',
                },
            ],
        },
        {
            question: "_t_What is the Oscar's Grind strategy?_t_",
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'oscars-grind-strategy',
            answer: [
                {
                    translation_text:
                        '_t_This is a low-risk positive progression strategy that first appeared in 1965. By using this strategy, you will increase the size of your contract after each successful trade, and decrease the size of your contract after each unsuccessful trade._t_',
                },
            ],
        },
        {
            question: '_t_How do I save my strategy?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'save-strategy',
        },
        {
            question: '_t_How do I import my strategies into DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'import-strategy',
        },
        {
            question: '_t_How do I reset the workspace?_t_',
            category: 'DBot',
            sub_category: '_t_Workspace_t_',
            label: 'reset-workspace',
        },
        {
            question: '_t_How do I clear my transaction log?_t_',
            category: 'DBot',
            sub_category: '_t_Logs_t_',
            label: 'clear-transaction-log',
        },
        {
            question: '_t_How do I control my losses with DBot?_t_',
            category: 'DBot',
            sub_category: '_t_How to trade_t_',
            label: 'control-loss',
        },
        {
            question: '_t_Where can I see the status of my trades in DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Logs_t_',
            label: 'status-of-trades',
        },
        {
            question: '_t_How do I view the chart in DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'view-chart',
        },
    ],
}

export default dbot_data
