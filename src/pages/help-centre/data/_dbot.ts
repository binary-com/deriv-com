import RemoveBlocks from '../components/_remove-blocks'
import ControlLosses from '../components/_control-losses'
import { TQuestionsData } from './_data-types'
// images
import GetStartedImage from 'images/common/help-centre/dbot-button-get-started.png'
import SearchBarImage from 'images/common/help-centre/dbot-search-bar.png'
import CreateVariableImage from 'images/common/help-centre/dbot-create-variable.png'
import NameVariableImage from 'images/common/help-centre/dbot-name-variable.png'
import UserDefinedVariableImage from 'images/common/help-centre/dbot-user-defined-variable.png'
import BotNameImage from 'images/common/help-centre/dbot-botname.png'
import SaveBotImage from 'images/common/help-centre/dbot-save.png'
import GoogleDriveImage from 'images/common/help-centre/dbot-google-drive.png'
import SaveBotOptionImage from 'images/common/help-centre/dbot-save-bot.png'
import SaveBotDriveImage from 'images/common/help-centre/dbot-savebot-drive.png'
import ImportantStrategyImage from 'images/common/help-centre/dbot-import-strategy.png'
import LoadBotImage from 'images/common/help-centre/dbot-load-bot.png'
import LoadBotGDImage from 'images/common/help-centre/dbot-load-bot-gd.png'
import ResetImage from 'images/common/help-centre/dbot-reset.png'
import ClearStatImage from 'images/common/help-centre/dbot-clear-stat.png'
import AreYouSureImage from 'images/common/help-centre/dbot-are-you-sure.png'
import SummaryTabImage from 'images/common/help-centre/dbot-summary-tab.png'
import TransactionsImage from 'images/common/help-centre/dbot-transactions.png'
import ChartImage from 'images/common/help-centre/dbot-chart.png'
import QuickStrategyImage from 'images/common/help-centre/dbot-quick-strategy.png'
import StrategiesImage from 'images/common/help-centre/dbot-strategies.png'
import AssetTradeTypeImage from 'images/common/help-centre/dbot-asset-trade-type.png'
import ParametersImage from 'images/common/help-centre/dbot-parameters.png'
import RunBotImage from 'images/common/help-centre/dbot-run-bot.png'

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
            question: '_t_How do I find the blocks I need?_t_',
            category: 'DBot',
            sub_category: '_t_Blocks_t_',
            label: 'find-blocks',
            answer: [
                {
                    list: {
                        list_style: 'none',
                        margin_top: '1.7rem',
                        padding_left: '0',
                        items: [
                            {
                                translation_text:
                                    "_t_1. Click 'Get started' at the top left corner to open the blocks menu._t_",
                                img: {
                                    src: GetStartedImage,
                                    alt: 'Get Started',
                                    width: '14.2rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_2. The blocks are categorised accordingly. Just choose the blocks you want and drag them to the workspace._t_',
                            },
                            {
                                translation_text:
                                    '_t_3. You can also search for the blocks you want using the search field on the toolbar at the top of the workspace._t_',
                                img: {
                                    src: SearchBarImage,
                                    alt: 'Search',
                                    width: '17.9rem',
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I remove blocks from the workspace?_t_',
            category: 'DBot',
            sub_category: '_t_Blocks_t_',
            label: 'remove-blocks',
            renderProp: RemoveBlocks,
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
                                    "_t_Click 'Get started' to open the blocks menu._t_",
                                img: {
                                    src: GetStartedImage,
                                    alt: 'Get Started',
                                    width: '14.2rem',
                                },
                            },
                            {
                                translation_text: '_t_Go to <0>Utility > Variables</0>._t_',
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                            {
                                translation_text: "_t_Click 'Create variable'._t_",
                                img: {
                                    src: CreateVariableImage,
                                    alt: 'Create variable',
                                    width: '40.2rem',
                                },
                            },
                            {
                                translation_text: '_t_Enter a name for the variable._t_',
                                img: {
                                    src: NameVariableImage,
                                    alt: 'Name variable',
                                    width: '40.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_The newly created variable is now available to be used in your strategy._t_',
                                img: {
                                    src: UserDefinedVariableImage,
                                    alt: 'User defined variable',
                                    width: '27.2rem',
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_What is a quick strategy and how do I use it?_t_',
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
                    margin_top: '4rem',
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '1.7rem',
                        margin_top: '0',
                        padding_left: '2rem',
                        items: [
                            {
                                translation_text:
                                    "_t_Click 'Get started' on the toolbar at the top._t_",
                                img: {
                                    src: GetStartedImage,
                                    alt: 'Get Started',
                                    width: '14.2rem',
                                },
                            },
                            {
                                translation_text: "_t_Click 'Quick Strategy_t_",
                                img: {
                                    src: QuickStrategyImage,
                                    alt: 'Quick strategy',
                                    width: '16.6rem',
                                },
                            },
                            {
                                translation_text: '_t_Choose the strategy that you want._t_',
                                img: {
                                    src: StrategiesImage,
                                    alt: 'Strategies',
                                    width: '42.1rem',
                                },
                            },
                            {
                                translation_text: '_t_Select the asset and trade type._t_',
                                img: {
                                    src: AssetTradeTypeImage,
                                    alt: 'Asset and trade type',
                                    width: '44rem',
                                },
                            },
                            {
                                translation_text:
                                    "_t_Enter your preferred trade parameters and click 'Create'._t_",
                                img: {
                                    src: ParametersImage,
                                    alt: 'Parameters',
                                    width: '44rem',
                                },
                            },
                            {
                                translation_text:
                                    "_t_The strategy is loaded onto the workspace. You may adjust your strategy however you want and when you’re ready to run your bot, click 'Run bot'._t_",
                                img: {
                                    src: RunBotImage,
                                    alt: 'Run bot',
                                    width: '11.8rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_You may save your bot by either downloading it into your computer or by saving it on your Google Drive._t_',
                            },
                        ],
                    },
                },
            ],
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
            answer: [
                {
                    translation_text:
                        "_t_First, give your strategy a name. Click the 'Bot name' field on the toolbar at the top and enter a name._t_",
                    img: {
                        src: BotNameImage,
                        alt: 'Bot name',
                        width: '21.1rem',
                    },
                },
                {
                    translation_text:
                        "_t_Next, click 'Save' on the toolbar at the top of the workspace. You can choose to save to your computer or to your Google Drive. Your strategy will be saved in the XML format._t_",
                    img: {
                        src: SaveBotImage,
                        alt: 'Save',
                        width: '40.7rem',
                    },
                    margin_top: '2.5rem',
                },
                {
                    translation_text: '_t_<0>Saving to your computer</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    margin_top: '2.5rem',
                    list: {
                        list_style: 'decimal',
                        margin_top: '2.4rem',
                        padding_left: '2rem',
                        items: [
                            {
                                translation_text: "_t_Select 'Local' and click 'Continue'._t_",
                                img: {
                                    src: SaveBotOptionImage,
                                    alt: 'Save bot',
                                    width: '40rem',
                                },
                            },
                            {
                                translation_text:
                                    "_t_The XML file will be saved in the 'Downloads' folder of your internet browser._t_",
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_<0>Saving to Google Drive</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    margin_top: '4rem',
                    list: {
                        list_style: 'decimal',
                        margin_top: '2.4rem',
                        padding_left: '2rem',
                        items: [
                            {
                                translation_text: "_t_Click 'Connect'._t_",
                                img: {
                                    src: GoogleDriveImage,
                                    alt: 'Google Drive',
                                    width: '12.1rem',
                                },
                            },
                            {
                                translation_text:
                                    '_t_Select your Google account and grant the necessary permission for DBot to access your Google Drive._t_',
                            },
                            {
                                translation_text: "_t_Click 'Continue'._t_",
                                img: {
                                    src: SaveBotDriveImage,
                                    alt: 'Save bot Google Drive',
                                    width: '38.4rem',
                                },
                            },
                            {
                                translation_text:
                                    "_t_Choose the folder you want to save your strategy in and click  'Select'._t_",
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I import my strategies into DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Strategy_t_',
            label: 'import-strategy',
            answer: [
                {
                    translation_text:
                        "_t_Just drag the XML file from your computer onto the workspace. Your blocks will be loaded accordingly. Alternatively, you can click 'Import' on the toolbar at the top of the workspace and choose to load your strategy from your computer or from your Google Drive._t_",
                    img: {
                        src: ImportantStrategyImage,
                        alt: 'Import strategy',
                        width: '40.7rem',
                    },
                },
                {
                    translation_text: '_t_<0>Importing from your computer</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    margin_top: '4rem',
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '2.4rem',
                        margin_top: '1.7rem',
                        padding_left: '2rem',
                        items: [
                            {
                                translation_text: "_t_Select 'Local' and click 'Continue'._t_",
                                img: {
                                    src: LoadBotImage,
                                    alt: 'Load bot',
                                    width: '40.7rem',
                                },
                            },
                            {
                                translation_text:
                                    "_t_Select your strategy and click 'Open'. Your blocks will be loaded accordingly._t_",
                            },
                        ],
                    },
                },
                {
                    translation_text: '_t_<0>Importing from your Google Drive</0>_t_',
                    translation_components: [{ key: 0, type: 'strong' }],
                    margin_top: '4rem',
                    list: {
                        list_style: 'decimal',
                        first_child_margin_top: '2.4rem',
                        margin_top: '1.7rem',
                        padding_left: '2rem',
                        items: [
                            {
                                translation_text:
                                    "_t_Select 'Google Drive' and click 'Continue'._t_",
                                img: {
                                    src: LoadBotGDImage,
                                    alt: 'Load bot google Drive',
                                    width: '40.7rem',
                                },
                            },
                            {
                                translation_text:
                                    "_t_Select your strategy and click 'Select'. Your blocks will be loaded accordingly._t_",
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
                        "_t_Click 'Reset' on the toolbar at the top of the workspace. This will revert the workspace back to its original state and any unsaved changes will be lost._t_",
                    img: {
                        src: ResetImage,
                        alt: 'Reset',
                        width: '40.7rem',
                    },
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
                                    "_t_In the panel on the right of the workspace, click 'Clear stat'._t_",
                                img: {
                                    src: ClearStatImage,
                                    alt: 'Clear stat',
                                    width: '24.8rem',
                                },
                            },
                            {
                                translation_text: "_t_Click 'Ok'._t_",
                                img: {
                                    src: AreYouSureImage,
                                    alt: 'Are you sure?',
                                    width: '40rem',
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
            question: '_t_Where can I see the status of my trades in DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Logs_t_',
            label: 'status-of-trades',
            answer: [
                {
                    translation_text:
                        "_t_The panel on the right of the workspace gives you information about all your trades in DBot. The 'Summary' tab shows information such as your total stake, total payout, profit/loss, etc._t_",
                    img: {
                        src: SummaryTabImage,
                        alt: 'Summary tab',
                        width: '33.3rem',
                    },
                },
                {
                    translation_text:
                        "_t_The 'Transactions' tab gives you more detailed information on each trade such as duration, barrier, start and end times, etc._t_",
                    img: {
                        src: TransactionsImage,
                        alt: 'Transactions',
                        width: '33.3rem',
                    },
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How do I view the chart in DBot?_t_',
            category: 'DBot',
            sub_category: '_t_Chart_t_',
            label: 'view-chart',
            answer: [
                {
                    translation_text:
                        "_t_Click 'Chart' at the bottom left corner of the workspace to view the chart._t_",
                    img: {
                        src: ChartImage,
                        alt: 'Chart',
                        width: '22.5rem',
                    },
                },
            ],
        },
    ],
}

export default dbot
