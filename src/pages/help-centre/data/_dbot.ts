import ControlLosses from '../components/_control-losses'
import { TQuestionsData } from './_data-types'
// images
import BlockMenuImage from 'images/common/help-centre/dbot-block-menu.png'
import BlockMenuSearchBarImage from 'images/common/help-centre/dbot-block-menu-search-bar.png'
import ClearStatImage from 'images/common/help-centre/dbot-clear-stat.png'
import AreYouSureImage from 'images/common/help-centre/dbot-are-you-sure.png'

const dbot: TQuestionsData = {
    section: 'Platforms',
    category: '_t_DBot_t_',
    hide_for_eu: true,
    questions: [
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
            question: '_t_Where do I find the blocks I need?_t_',
            category: 'DBot',
            sub_category: '_t_Blocks_t_',
            label: 'find-blocks',
            answer: [
                {
                    translation_text: '_t_Follow these steps:_t_',
                },
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        padding_left: '1.8rem',
                        items: [
                            {
                                translation_text: '_t_Go to <0>Bot Builder</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    "_t_Under the <0>Blocks menu</0>, you'll see a list of categories. Blocks are grouped within these categories. Choose the block you want and drag them to the workspace. _t_",
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: BlockMenuImage,
                                    alt: 'Search',
                                    width: '60rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_You can also search for the blocks you want using the search bar above the categories._t_',
                                img: {
                                    src: BlockMenuSearchBarImage,
                                    alt: 'Search',
                                    width: '60rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                        ],
                    },
                },
                {
                    translation_text:
                        '_t_For more info, <0>check out this blog post</0> on the basics of building a trading bot._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/academy/blog/posts/how-to-build-a-basic-trading-bot-with-dbot/',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I remove blocks from the workspace?_t_',
            category: 'DBot',
            sub_category: '_t_Blocks_t_',
            label: 'remove-blocks',
            answer: [
                {
                    translation_text:
                        '_t_Click on the block you want to remove and press <0>Delete</0> on your keyboard._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
        {
            question: '_t_How do I create variables?_t_',
            category: 'DBot',
            sub_category: '_t_Variables_t_',
            label: 'create-variables',
            answer: [
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '1.7rem',
                        padding_left: '2rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Under the <0>Blocks</0> menu, go to <0>Utility > Variables<0/>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Enter a name for your variable, and hit <0>Create</0>. New block containing your new variable will appear below._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Choose the block you want and drag it to the workspace._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_Do you offer pre-built trading bots on DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Platforms_t_',
            label: 'offer-pre-built',
            answer: [
                {
                    translation_text:
                        "_t_Yes, you can get started with a pre-built bot using the <0>Quick strategy</0> feature. You’ll find some of the most popular trading strategies here: Martingale, D'Alembert, and Oscar's Grind. Just select the strategy, enter your trade parameters, and your bot will be created for you. You can always tweak the parameters later._t_",
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
        {
            question: '_t_What is a quick strategy?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'quick-strategy',
            answer: [
                {
                    translation_text:
                        "_t_A quick strategy is a ready-made strategy that you can use in DBot. There are 3 quick strategies you can choose from: Martingale, D'Alembert, and Oscar's Grind._t_",
                },
                {
                    translation_text: '_t_<0>Using a quick strategy</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    margin_top: '2rem',
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '1.7rem',
                        margin_top: '1.6rem',
                        padding_left: '2.2rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Go to <0>Quick strategy</0> and select the strategy you want._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text: '_t_Select the asset and trade type._t_',
                            },
                            {
                                translation_text:
                                    '_t_Set your trade parameters and hit <0>Create</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Once the blocks are loaded onto the workspace, tweak the parameters if you want, or hit <0>Run</0> to start trading._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Hit <0>Save</0> to download your bot. You can choose to download your bot to your device or your Google Drive._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I save my strategy?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'save-strategy',
            answer: [
                {
                    translation_text:
                        '_t_In <0>Bot</0> Builder, hit <0>Save</0> on the toolbar at the top to download your bot. Give your bot a name, and choose to download your bot to your device or Google Drive. Your bot will be downloaded as an XML file._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
        {
            question: '_t_How do I import my own trading bot into DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'import-strategy',
            answer: [
                {
                    translation_text:
                        '_t_Just drag the XML file from your computer onto the workspace, and your bot will be loaded accordingly. Alternatively, you can hit <0>Import</0> in <0>Bot Builder</0>, and choose to import your bot from your computer or from your Google Drive._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
                {
                    translation_text: '_t_<0>Importing from your computer</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    margin_top: '1.8rem',
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '2rem',
                        margin_top: '0.7rem',
                        padding_left: '2.2rem',
                        items: [
                            {
                                translation_text:
                                    '_t_After hitting <0>Import</0>, select <0>Local</0> and click <0>Continue</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text: '_t_Select your XML file and hit <0>Open</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text: '_t_Your bot will be loaded accordingly._t_',
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_<0>Importing from your Google Drive</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    margin_top: '1.8rem',
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '2rem',
                        margin_top: '0.7rem',
                        padding_left: '2.2rem',
                        items: [
                            {
                                translation_text:
                                    '_t_After hitting <0>Import</0>, select <0>Google Drive</0> and click <0>Continue</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text:
                                    '_t_Select your XML file and hit <0>Select</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text: '_t_Your bot will be loaded accordingly._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I reset the workspace?_t_',
            category: 'DBot',
            sub_category: '_t_Workspace_t_',
            label: 'reset-workspace',
            answer: [
                {
                    translation_text:
                        '_t_In <0>Bot Builder</0>, hit <0>Reset</0> on the toolbar at the top. This will clear the workspace. Please note that any unsaved changes will be lost._t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                },
            ],
        },
        {
            question: '_t_How do I clear my transaction log?_t_',
            category: 'DBot',
            sub_category: '_t_Logs_t_',
            label: 'clear-transaction-log',
            answer: [
                {
                    list: {
                        list_style: 'decimal',
                        margin_top: '0',
                        padding_left: '2rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Hit <0>Reset</0> at the bottom of stats panel._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: ClearStatImage,
                                    alt: 'Clear stat',
                                    width: '60rem',
                                    margin: '1rem 0 0 -1.8rem',
                                },
                            },
                            {
                                translation_text: '_t_Hit <0>OK</0> to confirm._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                                img: {
                                    src: AreYouSureImage,
                                    alt: 'Are you sure?',
                                    width: '60rem',
                                    margin: '1rem 0 0 -2rem',
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I control my losses with DBot?_t_',
            category: 'DBot',
            sub_category: '_t_How to trade_t_',
            label: 'control-loss',
            renderProp: ControlLosses,
        },
        {
            question: '_t_Can I run DBot on multiple tabs in my web browser?_t_',
            category: 'DBot',
            sub_category: '_t_Logs_t_',
            label: 'mutilpile-tab',
            answer: [
                {
                    translation_text:
                        '_t_Yes, you can. However, there are limits on your account, such as maximum number of open positions and maximum aggregate payouts on open positions. So, just keep these limits in mind when opening multiple positions. You can find more info about these limits at <0>Settings > Account limits</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'deriv_app_link',
                            to: '/account/account-limits',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I trade cryptocurrencies on DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'trade-cryptocurrencies',
            answer: [
                {
                    translation_text: "_t_No, we don't offer cryptocurrencies on DBot._t_",
                },
            ],
        },
        {
            question: '_t_Do you sell trading bots?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'sell-bots',
            answer: [
                {
                    translation_text:
                        "_t_No, we don't. However, you'll find quick strategies on DBot that'll help you build your own trading bot for free._t_",
                },
            ],
        },
        {
            question: '_t_In which countries is DBot available?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'available-countries',
            answer: [
                {
                    translation_text:
                        '_t_We offer our services in all countries, except for the ones <0>mentioned in our terms and conditions</0>._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/tnc/general-terms.pdf',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_If I close my web browser, will DBot continue to run?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'close-browser',
            answer: [
                {
                    translation_text:
                        '_t_No, DBot will stop running when your web browser is closed._t_',
                },
            ],
        },
        {
            question: '_t_What are the most popular strategies for automated trading?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'popular-strategies',
            answer: [
                {
                    translation_text:
                        "_t_Three of the most commonly used strategies in automated trading are Martingale, D'Alembert, and Oscar's Grind — you can find them already-made and waiting for you in DBot._t_",
                },
            ],
        },
        {
            question: '_t_How do I build a trading bot?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'build-trading-bot',
            answer: [
                {
                    translation_text:
                        '_t_<0>Watch this video</0> to learn how to build a trading bot on DBot. Also, <1>check out this blog post</1> on building a trading bot._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://www.youtube.com/watch?v=QdI5zCkO4Gk&t=203s',
                        },
                        {
                            key: 1,
                            type: 'link',
                            to: '/academy/blog/posts/how-to-build-a-basic-trading-bot-with-dbot/',
                        },
                    ],
                },
            ],
        },
    ],
}

export default dbot
