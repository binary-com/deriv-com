import HighCloseIcon from 'images/svg/trade-types/options/digital/high-close-icon.svg'
import HighClose from 'images/svg/trade-types/options/digital/high-close.svg'
import HighLowIcon from 'images/svg/trade-types/options/digital/high-low-icon.svg'
import HighLow from 'images/svg/trade-types/options/digital/high-low.svg'
import CloseLowIcon from 'images/svg/trade-types/options/digital/close-low-icon.svg'
import CloseLow from 'images/svg/trade-types/options/digital/close-low.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const lookbacks_content_items: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: HighCloseIcon,
            alt: '_t_High-Close Icon_t_',
        },
        title: '_t_High-Close_t_',
        images: [
            {
                src: HighClose,
                alt: '_t_A chart illustrating a High-Close contract_t_',
            },
        ],
        texts: [
            "_t_When you purchase a 'High-Close' contract, your payout will be equal to the difference between the highest price and the exit price over the duration of the contract multiplied by the multiplier._t_",
        ],
    },
    {
        type: 'single',
        icon: {
            src: HighLowIcon,
            alt: '_t_High-Low Icon_t_',
        },
        title: '_t_High-Low_t_',
        images: [
            {
                src: HighLow,
                alt: '_t_A chart illustrating a High-Low contract_t_',
            },
        ],
        texts: [
            "_t_When you purchase a 'High-Low' contract, your payout will be equal to the difference between the highest price and the lowest price over the duration of the contract multiplied by the multiplier._t_",
        ],
    },
    {
        type: 'single',
        icon: {
            src: CloseLowIcon,
            alt: '_t_Close-Low Icon_t_',
        },
        title: '_t_Close-Low_t_',
        images: [
            {
                src: CloseLow,
                alt: '_t_A chart illustrating a Close-Low contract_t_',
            },
        ],
        texts: [
            "_t_When you purchase a 'Close-Low' contract, your payout will be equal to the difference between the exit price and the lowest price over the duration of the contract multiplied by the multiplier._t_",
        ],
    },
]

export const lookbacksMarkets: OptionContentAvailability[] = [allOptionsMarkets.derived_indices]

export const lookbacksPlatforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.smart_trader,
]

export const lookbacksFAQ: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Where can I trade lookbacks on Deriv?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can trade lookbacks on the SmartTrader trading platform on synthetics._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_How do I place a lookbacks trade?_t_',
        answers: [
            {
                id: 1,
                type: 'list',
                list_items: [
                    '_t_- Select your preferred trading instrument._t_',
                    '_t_- Choose the type of lookback option you want to trade (High-Close; Close-Low; High-Low)._t_',
                    '_t_- Enter your preferred contract duration._t_',
                    '_t_- Choose the multiplier by which you want your potential payout to grow._t_',
                    '_t_- Make your market prediction._t_',
                    '_t_- Place your trade._t_',
                ],
            },
        ],
    },
    {
        id: 3,
        question: '_t_How do lookbacks contracts work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_The lookbacks options contract allows you to speculate on the spread between 2 price points reached by an underlying asset over a specified period. Lookbacks payouts are based on a multiplier applied to the difference between those selected price points._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_Can I close a lookbacks contract before the expiry time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, you cannot close a lookbacks contract before its expiry. However, you can choose your preferred contract duration or expiry time before you open a trade._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_Can I customise a lookbacks contract time period?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can customise the time your lookbacks contract. You can select any time period from 1 to 30 minutes._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I enter multiple lookbacks contracts simultaneously?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can open multiple contracts at the same time to take advantage of market opportunities._t_',
            },
        ],
    },
]
