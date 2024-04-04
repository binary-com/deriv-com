import UpDownIcon from 'images/svg/trade-types/options/turbo/turbo_up_down.svg'
import UpPayout from 'images/svg/trade-types/options/turbo/turbo_up_payout.svg'
import UpNoPayout from 'images/svg/trade-types/options/turbo/turbo_up_no_payout.svg'
import DownPayout from 'images/svg/trade-types/options/turbo/turbo_down_payout.svg'
import DownNoPayout from 'images/svg/trade-types/options/turbo/turbo_down_no_payout.svg'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const turboOptionsContentItems: OptionContentItemData[] = [
    {
        type: 'sections',
        icon: {
            src: UpDownIcon,
            alt: '_t_Up/Down_t_',
        },
        title: '_t_Up/Down_t_',
        sections: [
            {
                title: '_t_Up_t_',
                images: [
                    {
                        src: UpPayout,
                        alt: '_t_A chart illustrating a turbos Up contract payout_t_',
                    },
                    {
                        src: UpNoPayout,
                        alt: '_t_A chart illustrating a terminated turbos Up contract_t_',
                    },
                ],
                texts: [
                    '_t_You will receive a payout if the spot price remains above a predetermined barrier throughout the entire trade duration. If the spot price touches or breaches the barrier at any time before the contract expires, the initial stake (premium) is lost._t_',
                    '_t_Your net profit will depend on how much the spot price exceeds the barrier, with the maximum potential gains growing if the underlying price rises significantly. Your losses are limited to the initial stake required to purchase the Up turbo option._t_',
                ],
            },
            {
                title: '_t_Down_t_',
                images: [
                    {
                        src: DownPayout,
                        alt: '_t_A chart illustrating a turbos Down contract payout_t_',
                    },
                    {
                        src: DownNoPayout,
                        alt: '_t_A chart illustrating a terminated turbos Down contract_t_',
                    },
                ],
                texts: [
                    '_t_You will receive a payout if the spot price remains below a predetermined barrier throughout the entire trade duration. If the spot price touches or breaches the barrier at any time before the contract expires, the initial stake (premium) is lost._t_',
                    '_t_Your net profit will depend on how much the spot price falls below the barrier, with the maximum potential gains growing if the underlying price falls significantly. Your losses are limited to the initial stake required to purchase the Down turbo option._t_',
                ],
            },
        ],
    },
]

export const turboMarkets: OptionContentAvailability[] = [allOptionsMarkets.derived_indices]

export const turboPlatforms: OptionContentAvailability[] = [allOptionsTradePlatforms.deriv_trader]

export const turboFAQ: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_How can I open a turbo options trade on Deriv?_t_',
        answers: [
            {
                id: 1,
                type: 'list',
                list_title: '_t_To place a turbo options trade on Deriv, you’ll need to:_t_',
                list_items: [
                    '_t_- Select the underlying asset you want to trade._t_',
                    '_t_- Choose your preferred contract duration or end time._t_',
                    '_t_- Select Up or Down depending on your market predictions._t_',
                    '_t_- Determine a trade barrier._t_',
                    '_t_- Enter your stake amount._t_',
                    '_t_- Open your contract._t_',
                ],
            },
        ],
    },
    {
        id: 2,
        question: '_t_Can I buy or sell turbo options on Deriv?_t_',
        answers: [
            {
                type: 'text',
                id: 1,
                text: '_t_Currently, you can only buy Up and Down turbo options contracts on Deriv._t_',
            },
        ],
    },
    {
        id: 3,
        question: '_t_How do turbo options work?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_When you open a turbo options contract, you’ll pay an initial stake amount. This is the cost of entering the turbo options trade. You’ll also need to determine a trade barrier. The spot price must not touch or breach this barrier throughout your contract duration, otherwise your contract will be terminated early without any gains._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_If the spot price never touches or breaches your predetermined barrier, you will receive a potential payout based on the movement of the underlying asset, when your contract expires._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_Please bear in mind that if you decide to manually terminate the trade early (before expiry), you will be charged an additional exit fee. Additionally, early termination less than 15 seconds before expiry is not possible._t_',
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
                text: '_t_Payout per point indicates the potential payout you will receive at the contract’s expiry for every point above or below your predetermined barrier._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_This amount is calculated based on your stake and the barrier you have selected._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_For Up turbo options, the payout per point indicates the amount of potential payout you gain for each point above the barrier, at the contract’s expiry._t_',
            },
            {
                id: 4,
                type: 'text',
                text: '_t_For Down turbo options, the payout per point indicates the amount of potential payout you gain for each point below the barrier, at the contract’s expiry._t_',
            },
            {
                id: 5,
                type: 'text',
                text: "_t_Please note that this payout amount does not equal the potential profit. You'll only earn profit once this amount exceeds your stake amount. In case the spot price touches or breaches the barrier, your contract is terminated and you will not receive a payout._t_",
            },
        ],
    },
    {
        id: 5,
        question: '_t_Where can I trade turbo options on Deriv?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can trade turbo options on the Deriv Trader trading platform, on volatility indices under Deriv’s derived indices._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I open multiple turbo options contracts simultaneously?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, you can open multiple turbo options contracts at the same time._t_',
            },
        ],
    },
    {
        id: 7,
        question: '_t_What is the maximum I can lose when I trade turbo options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_The maximum you can lose is the initial stake amount that you pay when you open a turbo options contract._t_',
            },
        ],
    },
    {
        id: 8,
        question: '_t_Can I adjust or remove the barrier once a position is open?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, the trade barrier can only be set before you open a contract. Once your turbo options contract is opened, the barrier cannot be changed._t_',
            },
        ],
    },
    {
        id: 9,
        question: '_t_How are payouts calculated for different stake amounts?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_The higher your stake amount, the higher the payout per point._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_This means that the potential payout amount you’ll receive at your contract’s expiry will be higher for every point between the barrier and the spot price, as long as the barrier is not touched or breached throughout the contract duration._t_',
            },
        ],
    },
    {
        id: 10,
        question: '_t_How are payouts calculated for different barriers?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_The closer the barrier is to the spot price, the higher the chance for your turbo options contract to expire worthless (which means, your contract will expire without any payout or profit)._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_Deriv offers a higher potential payout per point to compensate for this risk. The amount you’ll potentially receive at your contract’s expiry will be higher for every point above or below the barrier, as long as the barrier is not touched or breached throughout the contract duration._t_',
            },
        ],
    },
    {
        id: 11,
        question:
            '_t_Can I close a turbo options contract before the end of the contract duration?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can only close time-based contracts up to 15 seconds before the contract duration expires. If you have opened a tick-based contract, you cannot close your position before it expires._t_',
            },
        ],
    },
    {
        id: 12,
        question: '_t_What are the different contract durations available for turbo options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can open turbo options contracts with trade durations of 5 to 10 ticks, or from 15 seconds up to 365 days._t_',
            },
        ],
    },
    {
        id: 13,
        question: '_t_What is the difference between turbo and vanilla options?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_With turbo options, you need to define a barrier before opening a contract. If the spot price touches or breaches this barrier at any time throughout the contract duration, your contract will expire worthless. This means that you will not receive a payout and will lose your initial stake amount. To compensate for this risk, turbo options will have a higher payout per point and potential payout, depending on how far the selected barrier is from the opening spot price. Another difference to note is that trading turbo options carries more risk than trading vanilla options._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_With vanilla options, there are no barriers involved and your potential payout is determined by how much the final price is above or below the predetermined strike price._t_',
            },
        ],
    },
]
