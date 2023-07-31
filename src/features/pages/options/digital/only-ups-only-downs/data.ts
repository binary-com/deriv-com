import OnlyUpsDownsIcon from 'images/svg/trade-types/options/digital/only-ups-downs-icon.svg'
import OnlyUpsWin from 'images/svg/trade-types/options/digital/only-ups-win.svg'
import OnlyUpsLoss from 'images/svg/trade-types/options/digital/only-ups-loss.svg'
import OnlyDownsWin from 'images/svg/trade-types/options/digital/only-downs-win.svg'
import OnlyDownsLoss from 'images/svg/trade-types/options/digital/only-down-loss.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const only_ups_downs_content_items: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: OnlyUpsDownsIcon,
            alt: '_t_Only Ups/Only Downs Icon_t_',
        },
        title: '_t_Only Ups/Only Downs_t_',
        texts: [
            '_t_Predict whether consecutive ticks will rise or fall successively after the entry._t_',
            "_t_If you select 'Only Ups', you receive the payout if all consecutive ticks rise successively after the entry._t_",
            "_t_If you select 'Only Downs', you receive the payout if all consecutive ticks fall successively after the entry._t_",
            '_t_If the selected condition is not met including if the tick is equal to any of the previous ticks, your stake is lost._t_',
        ],
        images: [
            {
                src: OnlyUpsWin,
                alt: '_t_A chart illustrating a winning Only Ups trade type contract_t_',
            },
            {
                src: OnlyUpsLoss,
                alt: '_t_A chart illustrating a losing Only Ups trade type contract_t_',
            },
            {
                src: OnlyDownsWin,
                alt: '_t_A chart illustrating a winning Only Downs trade type contract_t_',
            },
            {
                src: OnlyDownsLoss,
                alt: '_t_A chart illustrating a losing Only Downs trade type contract_t_',
            },
        ],
    },
]

export const only_ups_downs_markets: OptionContentAvailability[] = [
    allOptionsMarkets.derived_indices,
]

export const only_ups_downs_platforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.smart_trader,
    allOptionsTradePlatforms.deriv_bot,
]

export const only_ups_downs_FAQ: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Are Only Ups/Only Downs available to trade on Deriv Trader?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Only Ups/Only Downs are currently only available on the Deriv Bot and SmartTrader trading platforms. These options contracts can be traded on synthetics._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_How do I open an Only Ups/Only Downs contract?_t_',
        answers: [
            {
                id: 1,
                type: 'list',
                list_items: [
                    '_t_- Choose the instrument you want to trade._t_',
                    '_t_- Select the duration of your contract._t_',
                    '_t_- Enter your stake or desired potential payout._t_',
                    '_t_- Predict the price direction of the instrument._t_',
                    '_t_- Open your contract._t_',
                ],
            },
        ],
    },
    {
        id: 3,
        question: '_t_How do Only Ups/Only Downs contracts work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: "_t_Only Ups/Only Downs contracts allow you to make market predictions speculating the direction of an underlying asset's price movements._t_",
            },
            {
                id: 2,
                type: 'text',
                text: '_t_If you choose an Only Ups contract, you will win a potential payout if the price only increases during the selected time period._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_If you choose an Only Downs contract, you will win a potential payout if the price only decreases during the selected time period._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_Can I exit an Only Ups/Only Downs contract before it expires?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, you cannot exit the contract before it expires._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Can I customise the duration for an Only Ups/Only Downs contract?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can customise the trade duration of your Only Ups/Only Downs contracts. The available time periods range from 2 ticks to 5 ticks._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I open multiple Only Ups/Only Downs contracts at the same time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can enter multiple contracts with varying parameters at the same time._t_',
            },
        ],
    },
]
