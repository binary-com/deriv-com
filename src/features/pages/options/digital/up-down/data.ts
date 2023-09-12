import RiseFallIcon from 'images/svg/trade-types/options/digital/up-down-rise-fall.svg'
import RiseWinImg from 'images/svg/trade-types/options/digital/rise_win.svg'
import RiseLoseImg from 'images/svg/trade-types/options/digital/rise_lose.svg'
import FallWinImg from 'images/svg/trade-types/options/digital/fall_win.svg'
import FallLoseImg from 'images/svg/trade-types/options/digital/fall_lose.svg'
import HightLowerIcon from 'images/svg/trade-types/options/digital/up-down-higher-lower.svg'
import HigherWinImg from 'images/svg/trade-types/options/digital/higher_win.svg'
import HigherLossImg from 'images/svg/trade-types/options/digital/higher_loss.svg'
import LowerWinImg from 'images/svg/trade-types/options/digital/lower_win.svg'
import LowerLossImg from 'images/svg/trade-types/options/digital/lower_loss.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const upAndDownContentItems: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: RiseFallIcon,
            alt: '_t_Rise/Fall Icon_t_',
        },
        title: '_t_Rise/Fall_t_',
        images: [
            {
                src: RiseWinImg,
                alt: '_t_A chart illustrating a winning Rise trade type contract_t_',
            },
            {
                src: RiseLoseImg,
                alt: '_t_A chart illustrating a losing Rise trade type contract_t_',
            },
            {
                src: FallWinImg,
                alt: '_t_A chart illustrating a winning Fall trade type contract_t_',
            },
            {
                src: FallLoseImg,
                alt: '_t_A chart illustrating a losing Fall trade type contract_t_',
            },
        ],
        texts: [
            '_t_Predict whether the market price will rise or fall by the end of the contract._t_',
            "_t_If you select 'Rise', you receive the payout if the exit price is higher than the entry price._t_",
            "_t_If you select 'Fall', you receive the payout if the exit price is lower than the entry price._t_",
            "_t_With the 'Allow equals' option (available on selected instruments):_t_",
            "_t_Select 'Rise' to receive the payout if the exit price is higher than or equal to the entry price._t_",
            "_t_Select 'Fall' to receive the payout if the exit price is lower than or equal to the entry price._t_",
            '_t_If the selected condition is not met, your stake is lost._t_',
        ],
    },
    {
        type: 'single',
        icon: {
            src: HightLowerIcon,
            alt: '_t_Higher/Lower Icon_t_',
        },
        title: '_t_Higher/Lower_t_',
        images: [
            {
                src: HigherWinImg,
                alt: '_t_A chart illustrating a winning Higher trade type contract_t_',
            },
            {
                src: HigherLossImg,
                alt: '_t_A chart illustrating a losing Higher trade type contract_t_',
            },
            {
                src: LowerWinImg,
                alt: '_t_A chart illustrating a winning Lower trade type contract’_t_',
            },
            {
                src: LowerLossImg,
                alt: '_t_A chart illustrating a losing Lower trade type contract_t_',
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

export const upAndDownMarkets: OptionContentAvailability[] = [
    allOptionsMarkets.derived_indices,
    allOptionsMarkets.forex,
    allOptionsMarkets.commodities,
]

export const upAndDownPlatforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.deriv_trader,
    allOptionsTradePlatforms.smart_trader,
    allOptionsTradePlatforms.deriv_bot,
]

export const upAndDownFAQ: OptionsFAQDataItem[] = [
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
    {
        id: 3,
        question: '_t_What are Up/Down options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Up/Down options are divided into two types:_t_',
            },
            {
                id: 2,
                type: 'text',
                text: "_t_Rise/Fall contracts, where you make a market prediction on whether your contract's exit price has risen or fallen by the end of the contract period. If you trade with the Allows Equals requirement, you're predicting that the contract's exit price can also be equal to the entry price._t_",
            },
            {
                id: 3,
                type: 'text',
                text: "_t_Higher/Lower contracts, where you set a barrier before opening your contract and make a market prediction on whether the underlying asset's price is higher or lower than the predetermined barrier at the end of the contract period._t_",
            },
        ],
    },
    {
        id: 4,
        question: '_t_Can I close an open position before expiry?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can close an open Ups/Downs position before its expiry regardless of trade duration._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_However, it is important to note that the availability of early exit may vary depending on the specific trade type. Some trade types may have restrictions or it may only be available within a certain timeframe._t_',
            },
        ],
    },
    {
        id: 5,
        question:
            '_t_Can I select the duration or expiry time for Rise/Fall and Higher/Lower trades?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: "_t_Yes, both trade types allow you to choose the trade duration or expiry time. You'll just need to select the timeframe within which you expect the asset's price to move in your predicted direction._t_",
            },
            {
                id: 2,
                type: 'text',
                text: '_t_For Rise/Fall, contract durations range from 1 tick and 365 days._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_For Higher/Lower, contract durations range from 5 ticks to 365 days._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I enter multiple Up/Down contracts at the same time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: "_t_Yes, you can enter multiple contracts at the same time. If you open multiple contract simultaneously, you'll get to diversify your trading portfolio and take advantage of various market opportunities._t_",
            },
            {
                id: 2,
                type: 'text',
                text: '_t_Do note that the specific rules and limitations on the number of contracts you can enter simultaneously may vary depending on trade type. Some may have restrictions on the number of contracts you can open, while others may have other specific conditions that may allow for greater flexibility._t_',
            },
        ],
    },
    {
        id: 7,
        question: '_t_How can I know my potential payout for a Rise/Fall or Higher/Lower trade?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_The potential payout is predetermined based on the specific details of the trade and if your market predictions are right._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_For Rise/Fall contracts, potential payouts generally range from 85% to 95% of your stake._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_For Higher/Lower contracts, potential payouts can range from 1% to 3,900% of your stake, depending on where the barrier is set._t_',
            },
            {
                id: 4,
                type: 'text',
                text: '_t_The potential payout and potential loss (your initial stake) will be clearly displayed before you enter the trade._t_',
            },
        ],
    },
    {
        id: 8,
        question: '_t_What is the difference between Rise/Fall and Higher/Lower contracts?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_A Higher/Lower contract is typically a Rise/Fall contract with an adjustable barrier that can be applied before purchasing the contract. For example, in a "Higher" contract, the further away the barrier is from the current market price, the higher the potential payout and vice versa for a Lower contract._t_',
            },
        ],
    },
    {
        id: 9,
        question: '_t_Are Higher/Lower contracts the same as High/Low Ticks?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, they are not the same._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_When you trade a Higher/Lower contract, you speculate on the price direction of an underlying asset over a time period._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_When you trade High/Low Ticks, you predict which tick is the highest within a 5-tick contract._t_',
            },
        ],
    },
    {
        id: 10,
        question: '_t_How do I predict the price movement in a Rise/Fall or Higher/Lower trade?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Traders typically analyse the underlying market and price trends to determine the likelihood of prices rising or falling over a given time period._t_',
            },
            {
                id: 2,
                type: 'list',
                list_title:
                    '_t_To identify trends, you can consider a number of factors, including:_t_',
                list_items: [
                    '_t_- Recent price swings and market volatility_t_',
                    '_t_- Economic news and events- Trends revealed by using technical indicators._t_',
                ],
            },
        ],
    },
]
