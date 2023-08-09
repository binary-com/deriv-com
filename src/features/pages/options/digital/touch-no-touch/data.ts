import TouchLossIcon from 'images/svg/trade-types/options/digital/touch_loss.svg'
import NoTouchWinIcon from 'images/svg/trade-types/options/digital/no-touch-win.svg'
import TouchWinIcon from 'images/svg/trade-types/options/digital/touch_win.svg'
import NoTouchLossIcon from 'images/svg/trade-types/options/digital/no-touch-loss.svg'
import TouchNoTouchIcon from 'images/svg/trade-types/options/digital/touch-no-touch-icon.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const touch_and_no_touch_content_items: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: TouchNoTouchIcon,
            alt: '_t_Touch/NoTouch_t_',
        },
        title: '_t_Touch/No Touch_t_',
        images: [
            {
                src: TouchWinIcon,
                alt: '_t_A chart illustrating a winning Touch trade type contract_t_',
            },
            {
                src: TouchLossIcon,
                alt: '_t_A chart illustrating a losing Touch trade type contract’_t_',
            },
            {
                src: NoTouchWinIcon,
                alt: '_t_A chart illustrating a winning No Touch trade type contract’_t_',
            },
            {
                src: NoTouchLossIcon,
                alt: '_t_A chart illustrating a losing No Touch trade type contract_t_',
            },
        ],
        texts: [
            '_t_Predict whether the market price will touch or not touch the chosen barrier (target) during the contract period._t_',
            "_t_If you select 'Touch', you receive the payout if the market price touches the barrier at any time during the contract period._t_",
            "_t_If you select 'No Touch', you receive the payout if the market never touches the barrier at any time during the contract period._t_",
            '_t_If the selected condition is not met, your stake is lost._t_',
        ],
    },
]

export const touch_no_touch_markets: OptionContentAvailability[] = [
    allOptionsMarkets.derived_indices,
    allOptionsMarkets.forex,
    allOptionsMarkets.stock_indices,
    allOptionsMarkets.commodities,
]

export const touch_and_no_touch_platforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.deriv_trader,
    allOptionsTradePlatforms.smart_trader,
    allOptionsTradePlatforms.deriv_bot,
]

export const touch_and_no_touch_faq: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Where can I trade Touch/No Touch options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can trade Touch/No Touch options on the Deriv Trader, SmartTrader, and Deriv Bot trading platforms. They are available on multiple markets — forex, commodities, stock indices, and synthetics._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_How do I open a Touch/No Touch contract on Deriv?_t_',
        answers: [
            {
                type: 'list',
                id: 1,
                list_title: "_t_Here's how to open a Touch/No Touch contract:_t_",
                list_items: [
                    '_t_- Choose an instrument to trade._t_',
                    '_t_- Set the duration of your contract. _t_',
                    '_t_- Set your preferred barrier._t_',
                    '_t_- Enter your stake or desired potential payout._t_',
                    '_t_- Place your trade._t_',
                ],
            },
        ],
    },
    {
        id: 3,
        question: '_t_How do Touch/No Touch contracts work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_With Touch/No Touch contracts, you predict whether the market price of the underlying instrument touches or does not touch a predetermined barrier at any time during a specified contract period._t_',
            },
        ],
    },
    {
        id: 4,
        question:
            '_t_Will my contract close automatically if the market price touches the barrier at any time during the "Touch" contract period?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, your contract will close automatically if the market price touches the selected barrier at any time during the contract period, no matter which contract type you are trading._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_If you are trading a "Touch" contract and the market price touches the selected barrier, the contract will close and you will win the potential payout._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_On the other hand, if you are trading a "No Touch" contract and the market price touches the selected barrier, the contract will close and you will lose your stake._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Can I choose the duration of a Touch/No Touch contract?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can select the duration of your Touch/No Touch contract. You can choose to open a contract for as short as 5 ticks to as long as 365 days (depending on the trading asset selected)._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I open multiple Touch/No Touch contracts at the same time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can open multiple contracts with different parameters simultaneously._t_',
            },
        ],
    },
    {
        id: 7,
        question:
            '_t_Why does the "Touch" contract have a higher potential payout amount compared to the "No Touch" contract?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_The predicted payout is actually based on the barrier that is selected._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_If the selected barrier is far from the current price of the underlying instrument, the probability of the spot price touching the barrier in a "Touch" contract is lower compared to a "No Touch" contract. In this scenario, the potential payout amount for a "Touch" contract is higher._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_If the selected barrier is close to the current price of the underlying instrument, the probability of the spot price touching the barrier in a "Touch" contract is higher compared to a "No Touch" contract. In this scenario, the potential payout amount for a "Touch" contract is lower._t_',
            },
            {
                id: 4,
                type: 'text',
                text: '_t_The potential payout and loss (your initial stake) amounts are clearly displayed before you open the trade._t_',
            },
        ],
    },
    {
        id: 8,
        question: '_t_What is the price barrier in Touch/No Touch contracts?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: `_t_The price barrier in Touch/No Touch contracts refers to the specified price level that the underlying instrument's price needs to touch or not touch during the contract duration._t_`,
            },
            {
                id: 2,
                type: 'text',
                text: `_t_It acts as a reference point to determine the trade's outcome._t_`,
            },
            {
                id: 3,
                type: 'text',
                text: '_t_The potential payout percentage varies and depends on the barrier level selected as well as the probability of the condition being met at any time during the contract duration._t_',
            },
        ],
    },
]
