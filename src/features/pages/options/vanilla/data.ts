import CallPutIcon from 'images/svg/trade-types/options/vanilla/vanilla_call_put.svg'
import CallPayout from 'images/svg/trade-types/options/vanilla/call_payout.svg'
import CallNoPayout from 'images/svg/trade-types/options/vanilla/call_no_payout.svg'
import PutPayout from 'images/svg/trade-types/options/vanilla/put_payout.svg'
import PutNoPayout from 'images/svg/trade-types/options/vanilla/put_no_payout.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const vanillaOptionsContentItems: OptionContentItemData[] = [
    {
        type: 'sections',
        icon: {
            src: CallPutIcon,
            alt: '_t_Call/Put_t_',
        },
        title: '_t_Call/Put_t_',
        sections: [
            {
                title: '_t_Call option_t_',
                images: [
                    {
                        src: CallPayout,
                        alt: '_t_A chart illustrating a vanilla call option trade payout_t_',
                    },
                    {
                        src: CallNoPayout,
                        alt: '_t_A chart illustrating a vanilla call option trade with no payout_t_',
                    },
                ],
                texts: [
                    "_t_You will receive a payout at the contract's expiry if the final price is higher than the strike price (which is determined at the beginning of the contract period). If the final price is at or below the strike price, you will lose your initial stake (premium)._t_",
                    '_t_Your net profit will depend on how much the final price is above the predetermined strike price, with the maximum potential gains growing if the price of the underlying asset rises significantly. Your losses are limited to the initial stake required to purchase the call option._t_',
                ],
            },
            {
                title: '_t_Put option_t_',
                images: [
                    {
                        src: PutPayout,
                        alt: '_t_A chart illustrating a vanilla put option trade payout_t_',
                    },
                    {
                        src: PutNoPayout,
                        alt: '_t_A chart illustrating a vanilla put option trade with no payout_t_',
                    },
                ],
                texts: [
                    "_t_You will receive a payout at the contract's expiry if the final price is lower than the strike price (which is determined at the beginning of the contract period). If the final price is at or above the strike price, you will lose your initial stake (premium)._t_",
                    '_t_Your net profit will depend on how much the final price is below the predetermined strike price, with the maximum potential gains growing if the price of the underlying asset falls significantly. Your losses are limited to the initial stake required to purchase the put option._t_',
                ],
            },
        ],
    },
]

export const vanillaMarkets: OptionContentAvailability[] = [allOptionsMarkets.derived_indices]

export const vanillaPlatforms: OptionContentAvailability[] = [allOptionsTradePlatforms.deriv_trader]

export const vanillaFAQ: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_How do I place a vanilla options trade?_t_',
        answers: [
            {
                id: 1,
                type: 'list',
                list_title: '_t_To place a vanilla options contract, you’ll need to:_t_',
                list_items: [
                    '_t_- Select the underlying asset you want to trade._t_',
                    '_t_- Determine your contract duration or end time._t_',
                    '_t_- Predict the asset’s price movement by choosing Call or Put._t_',
                    '_t_- Select your preferred strike price_t_',
                    '_t_- Enter your stake._t_',
                    '_t_- Purchase the contract_t_',
                ],
            },
        ],
    },
    {
        id: 2,
        question: '_t_Can I buy and sell vanilla options?_t_',
        answers: [
            {
                type: 'text',
                id: 1,
                text: '_t_Currently, you can only buy vanilla call and put options on Deriv._t_',
            },
        ],
    },
    {
        id: 3,
        question: '_t_How are vanilla options contracts settled?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_When you purchase a contract, you’ll pay a stake (also known as an option premium). This is the cost of entering a vanilla options trade._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_If your market predictions are right within the contract period, you will receive a payout that is equivalent to the asset’s movement when the contract ends (or upon early termination)._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_If you decide to manually terminate the trade early (before the contract’s expiry), you will be charged an additional exit fee. Please note that it is not possible to terminate a contract with less than 15 seconds before expiry._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_What is payout per point?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Payout per point indicates the payout you will receive for each point above or below the strike price (which is selected before you enter the contract) within the contract period. This amount will depend on your stake._t_',
            },
            {
                id: 2,
                type: 'text',
                text: "_t_For Call options, payout per point indicates the amount of payout you’ll gain for each point above the predetermined strike price, at the contract's expiry._t_",
            },
            {
                id: 3,
                type: 'text',
                text: "_t_For Put options, payout per point indicates the amount of payout you’ll gain for each point below the predetermined strike price, at the contract's expiry._t_",
            },
            {
                id: 4,
                type: 'text',
                text: "_t_Please note that this payout does not equal to potential profit. You'll only earn potential profit once the payout amount exceeds your stake amount._t_",
            },
        ],
    },
    {
        id: 5,
        question: '_t_Where can I trade vanilla options on Deriv?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can trade vanilla options on Deriv Trader. They are offered on volatility indices._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I open multiple vanilla options contracts at the same time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can open multiple vanilla options contracts at the same time, depending on your options trading strategies._t_',
            },
        ],
    },
    {
        id: 7,
        question: '_t_Are vanilla options available on Deriv Bot?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, vanilla options are not currently available on the Deriv Bot trading platform._t_',
            },
        ],
    },
]
