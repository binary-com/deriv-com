import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from '../../components/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from '../../components/available-markets-platforms/data'
import MatchesDiffersIcon from 'images/svg/trade-types/options/digital/matches_differs_icon.svg'
import RiseWinIcon from 'images/svg/trade-types/options/digital/matches_win.svg'
import RiseLoseIcon from 'images/svg/trade-types/options/digital/matches_loss.svg'
import FallWinIcon from 'images/svg/trade-types/options/digital/differs_win.svg'
import FallLoseIcon from 'images/svg/trade-types/options/digital/differs_loss.svg'

export const digitsContentItems: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: MatchesDiffersIcon,
            alt: '_t_Digits Matches/Differs_t_',
        },
        title: '_t_Rise/Fall_t_',
        images: [
            {
                src: RiseWinIcon,
                alt: '_t_Rise Win_t_',
            },
            {
                src: RiseLoseIcon,
                alt: '_t_Rise Lose_t_',
            },
            {
                src: FallWinIcon,
                alt: '_t_Fall Win_t_',
            },
            {
                src: FallLoseIcon,
                alt: '_t_Fall Lose_t_',
            },
        ],
        texts: [
            '_t_Predict whether the last digit of the exit price will match or differ from your selected number._t_',
            "_t_If you select 'Matches', you receive the payout if the last digit of the exit price is the same as your prediction._t_",
            "_t_If you select 'Differs', you receive the payout if the last digit of the exit price is different than your prediction._t_",
            '_t_If the selected condition is not met, your stake is lost._t_',
        ],
    },
    {
        type: 'single',
        icon: {
            src: MatchesDiffersIcon,
            alt: '_t_Rise/Fall Icon_t_',
        },
        title: '_t_Higher/Lower_t_',
        images: [
            {
                src: RiseWinIcon,
                alt: '_t_Rise Win_t_',
            },
            {
                src: RiseLoseIcon,
                alt: '_t_Rise Lose_t_',
            },
            {
                src: FallWinIcon,
                alt: '_t_Fall Win_t_',
            },
            {
                src: FallLoseIcon,
                alt: '_t_Fall Lose_t_',
            },
        ],
        texts: [
            '_t_Predict whether the market price will be higher or lower than a price target (the barrier) at the end of the contract._t_',
            "_t_If you select 'Higher', you receive the payout if the exit price is above the barrier._t_",
            "_t_If you select 'Lower', you receive the payout if the exit price is below the barrier._t_",
            '_t_If the selected condition is not met or if the exit price is equal to the barrier, your stake is lost._t_',
        ],
    },
]

export const digitsMarkets: OptionContentAvailability[] = [
    allOptionsMarkets.derived_indices,
    allOptionsMarkets.commodities,
    allOptionsMarkets.forex,
]

export const digitsPlatforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.deriv_trader,
    allOptionsTradePlatforms.deriv_bot,
    allOptionsTradePlatforms.smart_trader,
]

export const digitsFAQ: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Where can I trade Up/Down options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can trade Up/Down options on the Deriv Trader, SmartTrader, and Deriv Bot trading platforms. They are available to trade on forex, stock indices, commodities, and derived indices._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_How can I open an Up/Down contract?_t_',
        answers: [
            {
                type: 'list',
                id: 1,
                list_title: "_t_To open a Up/Down contract, you'll need to:_t_",
                list_items: [
                    '_t_- Select your preferred market and trading asset._t_',
                    '_t_- Choose the type of Up/Down option you want to trade (Rise/Fall; Rise Equals/Falls Equals; Higher/Lower)._t_',
                    '_t_- Set other optional contract parameters._t_',
                    '_t_- Choose the contract duration._t_',
                    '_t_- Enter your stake or preferred potential payout amount._t_',
                    '_t_- Open your contract._t_',
                ],
            },
        ],
    },
]
