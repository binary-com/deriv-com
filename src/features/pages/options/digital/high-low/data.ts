import HighAndLowIcon from 'images/svg/trade-types/options/digital/high-and-low.svg'
import HighWinIcon from 'images/svg/trade-types/options/digital/high-win.svg'
import HighLossIcon from 'images/svg/trade-types/options/digital/high-loss.svg'
import LowWinIcon from 'images/svg/trade-types/options/digital/low-win.svg'
import LowLossIcon from 'images/svg/trade-types/options/digital/low-loss.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const high_and_low_content_items: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: HighAndLowIcon,
            alt: '_t_High/Low Ticks_t_',
        },
        title: '_t_High/Low Ticks_t_',
        images: [
            {
                src: HighWinIcon,
                alt: '_t_A chart illustrating a winning High Ticks trade type contract_t_',
            },
            {
                src: HighLossIcon,
                alt: '_t_A chart illustrating a losing High Ticks trade type contract_t_',
            },
            {
                src: LowWinIcon,
                alt: '_t_A chart illustrating a winning Low Ticks trade type contract_t_',
            },
            {
                src: LowLossIcon,
                alt: '_t_A chart illustrating a losing Low Ticks trade type contract_t_',
            },
        ],
        texts: [
            '_t_Predict which of the next 5 price ticks will be the highest or the lowest._t_',
            "_t_If you select 'High Tick', you receive a payout if your selected tick is the highest of the 5 ticks._t_",
            "_t_If you select 'Low Tick', you receive a payout if your selected tick is the lowest of the 5 ticks._t_",
            '_t_If the selected condition is not met, your stake is lost._t_',
        ],
    },
]

export const high_and_low_markets: OptionContentAvailability[] = [allOptionsMarkets.derived_indices]

export const high_and_low_Platforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.smart_trader,
    allOptionsTradePlatforms.deriv_bot,
]

export const high_and_low_faq: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Are High/Low Ticks options available on Deriv Trader?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, the High/Low Ticks options are only available on the SmartTrader and Deriv Bot trading platforms, and are available to trade on synthetics._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_How can I place a High/Low Ticks trade?_t_',
        answers: [
            {
                type: 'list',
                id: 1,
                list_title: "_t_Here's how to place a High/Low Ticks trade:_t_",
                list_items: [
                    '_t_- Choose your preferred trading asset._t_',
                    '_t_- Predict which of the next 5 ticks will be the highest or lowest in the series._t_',
                    '_t_- Enter your stake or preferred potential payout amount._t_',
                    '_t_- Open your trade._t_',
                ],
            },
        ],
    },
    {
        id: 3,
        question: '_t_How do High/Low Ticks contracts work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_To trade High/Low Ticks, all you need to do is predict which of the next 5 ticks within the contract period is the highest or lowest in the series._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_Can I close a High/Low Ticks contract before the contract expires?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, you cannot close a High/Low Ticks contract before it expires as the contract considers the highest or lowest tick in a 5-tick contract duration._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Can I change the tick duration for the High/Low Ticks contract type?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, you cannot change the tick duration for High/Low Ticks. This contract type is always based on the next 5 price ticks after the contract is open. This is fixed across all instruments that can be traded with this contract type._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I enter many High/Low Ticks contracts at the same time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you are allowed to enter multiple High/Low Ticks contracts at the same time._t_',
            },
        ],
    },
    {
        id: 7,
        question: '_t_Is High/Low Ticks the same contract type as Higher/Lower?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, these are two different contract types._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_With High/Low Ticks, you predict which of the 5 ticks within the trade duration will be the highest or lowest._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_With Higher/Lower, you predict the overall price direction of a trading instrument over a specified time period._t_',
            },
        ],
    },
]
