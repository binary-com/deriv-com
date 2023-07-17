import {
    OptionContentAvailability,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'
export const asiansMarkets: OptionContentAvailability[] = [allOptionsMarkets.derived_indices]

export const asiansPlatforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.smart_trader,
    allOptionsTradePlatforms.deriv_bot,
]

export const asiansFAQ: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Where can I trade Asian options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Asian options are available on the SmartTrader and Deriv Bot trading platforms. You can trade Asian options on synthetics._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_How can I open an Asians trade?_t_',
        answers: [
            {
                id: 1,
                type: 'list',
                list_title: '_t_You can open an Asians trade by:_t_',
                list_items: [
                    '_t_- Choosing your preferred instrument._t_',
                    '_t_- Setting the duration of your trade._t_',
                    '_t_- Entering your preferred stake amount or desired potential payout._t_',
                    '_t_- Making your market prediction._t_',
                ],
            },
            {
                id: 2,
                type: 'text',
                text: '_t_Once you have determined the above parameters, you can open an Asians trade on SmartTrader and Deriv Bot._t_',
            },
        ],
    },
    {
        id: 3,
        question: '_t_How do Asians contracts work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: "_t_Asians contracts calculate the average price of an underlying asset over a predetermined trade duration of 5 to 10 ticks. When you open an Asians trade, you'll predict whether the final price tick (the last tick) will be higher or lower than the average price throughout the contract period._t_",
            },
        ],
    },
    {
        id: 4,
        question: '_t_Can I close an Asians contract before the contract expires?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, you cannot close an Asians contract before it expires._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Can I select the duration for an Asians contract?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can choose the duration of your Asians contract anywhere between 5 and 10 ticks._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Can I open multiple Asians contracts simultaneously?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can. You can open contracts with different parameters to take advantage of more market opportunities._t_',
            },
        ],
    },
]
