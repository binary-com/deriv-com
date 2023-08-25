import PayoutWin from 'images/svg/trade-types/options/accumulator/payout_win.svg'
import PayoutKnockedOut from 'images/svg/trade-types/options/accumulator/payout_knocked_out.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const accumulatorOptionsContentItems: OptionContentItemData[] = [
    {
        type: 'single',
        images: [
            {
                src: PayoutWin,
                alt: '_t_A chart illustrating an accumulators contract payout_t_',
            },
            {
                src: PayoutKnockedOut,
                alt: '_t_A chart illustrating a terminated accumulators contract_t_',
            },
        ],
        texts: [
            '_t_Accumulator options allow you to express your view on the range of movement of an index. With accumulators, your payout will grow exponentially as long as the current spot price remains within a predefined range from the previous spot price._t_',
            '_t_The size of the predefined range depends on the growth rate and the chosen index when opening the contract. You can set the growth rate at 1%, 2%, 3%, 4%, or 5%. A higher growth rate means a narrower range, and vice versa._t_',
            '_t_Your payout will grow exponentially based on the chosen growth rate for each small movement (tick) in the spot price, as long as the current spot price remains within the range. The payout can continue to grow until either the maximum number of ticks or the maximum payout is reached._t_',
            '_t_You can manually close the contract any time before the price touches or breaches either the upper or lower range. By doing so, you will receive the current accumulated payout, which is the sum of your initial stake and profit. However, if the current spot price touches or moves outside the range, the contract is terminated, and you lose the accumulated payout._t_',
        ],
    },
]

export const accumulatorMarkets: OptionContentAvailability[] = [allOptionsMarkets.derived_indices]

export const accumulatorPlatforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.deriv_trader,
]

export const accumulatorFAQ: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_What markets can I trade with accumulator options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Accumulator options are currently offered on volatility indices under derived indices._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_Can I open multiple accumulator contracts at the same time?_t_',
        answers: [
            {
                type: 'text',
                id: 1,
                text: '_t_Not at the moment. You can only open one contract per instrument at a time._t_',
            },
        ],
    },
    {
        id: 3,
        question: '_t_Can I change my growth rate after opening the contract?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, the growth rate can only be set before opening the contract. Once you open the contract, the growth rate cannot be changed._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_Can I open an accumulator contract at any time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Opening accumulator contracts for a specific instrument and growth rate may be temporarily unavailable when our internal aggregate stake limits have been reached for that particular combination. If this happens, you can choose another instrument or the same instrument with a different growth rate. The limits will reset when a loss condition is triggered or when someone trading the same combination closes their position. When this happens, you’ll be able to open new contracts again as normal. _t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Can I close an accumulator contract at any time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can close your accumulator contract whenever you are satisfied with the payout amount. However, if the current spot price touches or breaches the limits of the predefined range, your contract will automatically close and you’ll lose your accumulated payout._t_',
            },
        ],
    },
    {
        id: 6,
        question:
            '_t_Is the accumulated payout correlated with the direction of the underlying index?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, the accumulated payout for accumulator options is not correlated with the direction of the underlying index. The payout growth depends solely on the underlying index’s price moving tick by tick while remaining within a predefined range. The range width is determined by the growth rate and the symbol selected. Whether the broader index moves up, down or sideways is irrelevant to the payout unless the price touches or breaches the range limits, triggering a loss._t_',
            },
        ],
    },
    {
        id: 7,
        question: '_t_Are accumulators available as a trade type on Deriv Bot?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, accumulator options are not currently available on Deriv Bot at the moment._t_',
            },
        ],
    },
]
