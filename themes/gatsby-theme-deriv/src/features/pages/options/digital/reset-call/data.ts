import ResetCallWinSecondary from 'images/svg/trade-types/options/digital/reset_call_win_2.svg'
import ResetCallLossSecondary from 'images/svg/trade-types/options/digital/reset_call_loss_2.svg'
import ResetLossIcon from 'images/svg/trade-types/options/digital/reset_call_loss.svg'
import ResetCallWin from 'images/svg/trade-types/options/digital/reset_call_win.svg'
import ResetRecallIcon from 'images/svg/trade-types/options/digital/reset-icon.svg'
import ResetPutWinIcon from 'images/svg/trade-types/options/digital/reset-put-win.svg'
import ResetPutLossIcon from 'images/svg/trade-types/options/digital/reset-put-loss.svg'
import ResetPutWinIconSecondary from 'images/svg/trade-types/options/digital/reset-put-win-2.svg'
import ResetPutLossIconSecondary from 'images/svg/trade-types/options/digital/reset-put-loss_2.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const reset_and_recall_content_items: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: ResetRecallIcon,
            alt: '_t_Reset Call/Reset Put_t_',
        },
        title: '_t_Reset Call/Reset Put_t_',
        images: [
            {
                src: ResetCallWin,
                alt: '_t_A chart illustrating winning a payout if the Reset Call exit price exceeds the reset time_t_',
            },
            {
                src: ResetLossIcon,
                alt: '_t_A chart illustrating the loss of a contract if the Reset Call exit price is below the reset time_t_',
            },
            {
                src: ResetCallWinSecondary,
                alt: '_t_A chart illustrating winning a payout if the Reset Call exit price exceeds the entry price_t_',
            },
            {
                src: ResetCallLossSecondary,
                alt: '_t_A chart illustrating the loss of a contract if the Reset Call exit price is below the entry price_t_',
            },
            {
                src: ResetPutWinIcon,
                alt: '_t_A chart illustrating winning a payout if the Reset Put exit price is below the reset time_t_',
            },
            {
                src: ResetPutLossIcon,
                alt: '_t_A chart illustrating the loss of a contract if the Reset Put exit price exceeds the reset time_t_',
            },
            {
                src: ResetPutWinIconSecondary,
                alt: '_t_A chart illustrating winning a payout if the Reset Put exit price exceeds the reset price_t_',
            },
            {
                src: ResetPutLossIconSecondary,
                alt: '_t_A chart illustrating the loss of a contract if the Reset Put exit price exceeds the entry price_t_',
            },
        ],
        texts: [
            '_t_Predict whether the exit price will be higher or lower than either the entry price or the price at reset time (always snapped at half the contract period)._t_',
            "_t_If you select 'Reset Call', you receive the payout if the exit price is higher than either the entry price or the price at reset time._t_",
            "_t_If you select 'Reset Put', you receive the payout if the exit price is lower than either the entry price or the price at reset time._t_",
            '_t_If the selected condition is not met or the exit price is equal to either the entry price or price at reset time, your stake is lost._t_',
        ],
    },
]

export const reset_call_markets: OptionContentAvailability[] = [allOptionsMarkets.derived_indices]

export const reset_call_Platforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.smart_trader,
    allOptionsTradePlatforms.deriv_bot,
]

export const reset_call_faq: OptionsFAQDataItem[] = [
    {
        id: 1,
        question:
            '_t_Which Deriv trading platforms can I use to trade Reset Call/Reset Put contracts?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can find Reset Call/Reset Put contracts in SmartTrader and Deriv Bot, and they are available on synthetics._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_How can I open a Reset Call/Reset Put contract?_t_',
        answers: [
            {
                type: 'list',
                id: 1,
                list_title: "_t_To open a Reset Call/Reset Put contract, you'll need to:_t_",
                list_items: [
                    '_t_- Select your preferred trading asset._t_',
                    '_t_- Specify the trade duration._t_',
                    '_t_- Enter your stake amount or desired potential payout amount._t_',
                    '_t_- Select the price direction based on your market predictions._t_',
                    '_t_- Open your contract._t_',
                ],
            },
        ],
    },
    {
        id: 3,
        question: '_t_How does Reset Call/Reset Put work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: `_t_A Reset Call/Reset Put option provides the opportunity for the contract's entry price (also known as strike price) to be reset automatically at the midpoint of the trade duration, if the underlying asset's price moves favourably with your market prediction._t_`,
            },
            {
                id: 2,
                type: 'text',
                text: `_t_The reset spot price is set at the precise midpoint of the total trade duration. For example, if you enter a 10-hour Reset Call option, the reset would occur at the 5 hour point, and the price at that exact 5 hour mark becomes the reset spot._t_`,
            },
            {
                type: 'list',
                id: 3,
                list_title:
                    '_t_If the reset spot is beneficial based on your market prediction, it replaces your original entry price (or strike price). For it to be beneficial, the reset spot needs to be:_t_',
                list_items: [
                    '_t_- lower than the entry price for a Reset Call contract, or_t_',
                    '_t_- higher than the entry price for a Reset Put contract._t_',
                ],
            },
            {
                id: 4,
                type: 'text',
                text: `_t_Your potential payout will then depend on whether the underlying asset's exit price is higher than the reset spot price (for Reset Call) or lower than the reset spot price (for Reset Put)._t_`,
            },
            {
                id: 5,
                type: 'text',
                text: `_t_If the reset spot price is less favourable, your original contract terms remain in effect (which means, it is the contract's original entry price that is considered). The reset is automatic, but whether it is applied depends on which price (original or reset) is more optimal for a potential payout._t_`,
            },
        ],
    },
    {
        id: 4,
        question: '_t_Can I exit an open Reset Call/Reset Put contract before expiry?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, early exits are not available for Reset Call/Reset Put contracts._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_Please note that the availability of early exit from your trading position depends on the specific trade type, or it may only be available within a certain timeframe._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_What are the durations for Reset Call/Reset Put contracts?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Durations for Reset Call/Reset Put contracts range from 5 ticks to 120 minutes (2 hours)._t_',
            },
        ],
    },
    {
        id: 6,
        question:
            '_t_Can I open multiple Reset Call/Reset Put contracts with different barriers simultaneously?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can open multiple Reset Call/Reset Put contracts with different durations and different stake amounts or desired potential payouts at the same time._t_',
            },
        ],
    },
    {
        id: 7,
        question:
            '_t_How does the Reset Call/Reset Put contract type differ from the Rise/Fall contract type?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: `_t_Reset Call/Reset Put contracts offer the ability to reset the strike price at a potentially more advantageous level. In this contract, your market prediction is your contract's exit price against the reset price (instead of the entry price). Reset contract types also typically offer a lower fixed payout percentage compared to Rise/Fall contracts._t_`,
            },
            {
                id: 2,
                type: 'text',
                text: `_t_Meanwhile, Rise/Fall contracts consider the contract's exit price against the contract's entry price, based on your market prediction._t_`,
            },
            {
                id: 3,
                type: 'text',
                text: `_t_In both instances, the potential payout is fixed upon entry._t_`,
            },
        ],
    },
    {
        id: 8,
        question: '_t_What does "reset" mean in Reset Call and Reset Put trades?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: `_t_In Reset Call and Reset Put trades, "reset" refers to the condition where the strike price is reset at the midpoint of the trade duration. This happens if the market is moving in the opposite of your market prediction. When this happens, the contract will compare your predicted direction against the reset price instead of the original spot price at the contract's expiry._t_`,
            },
        ],
    },
]
