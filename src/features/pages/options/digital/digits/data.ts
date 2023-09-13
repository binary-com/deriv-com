import {
    DigitsMatchesDiffers,
    DigitsEvenOdd,
    DigitsOverUnder,
    MatchesWinIcon,
    MatchesLossIcon,
    DiffersWinIcon,
    DiffersLossIcon,
    EvenWinIcon,
    EvenLossIcon,
    OddWinIcon,
    OddLossIcon,
    OverWinIcon,
    OverLossIcon,
    UnderWinIcon,
    UnderLossIcon,
} from './constant'
import {
    OptionContentAvailability,
    OptionContentItemData,
    OptionsFAQDataItem,
} from 'features/components/templates/options-content/type'
import {
    allOptionsMarkets,
    allOptionsTradePlatforms,
} from 'features/components/organisms/available-markets-platforms/data'

export const digits_content_items: OptionContentItemData[] = [
    {
        type: 'single',
        icon: {
            src: DigitsMatchesDiffers,
            alt: '_t_Digits Matches/Differs_t_',
        },
        title: '_t_Digits Matches/Differs_t_',
        images: [
            {
                src: MatchesWinIcon,
                alt: '_t_A chart illustrating a winning Matches trade type contract_t_',
            },
            {
                src: MatchesLossIcon,
                alt: '_t_A chart illustrating a losing Matches trade type contract_t_',
            },
            {
                src: DiffersWinIcon,
                alt: '_t_A chart illustrating a winning Differs trade type contract_t_',
            },
            {
                src: DiffersLossIcon,
                alt: '_t_A chart illustrating a losing Differs trade type contract_t_',
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
            src: DigitsEvenOdd,
            alt: '_t_Digits Even/Odd_t_',
        },
        title: '_t_Digits Even/Odd_t_',
        images: [
            {
                src: EvenWinIcon,
                alt: '_t_A chart illustrating a winning Even trade type contract_t_',
            },
            {
                src: EvenLossIcon,
                alt: '_t_A chart illustrating a losing Even trade type contract_t_',
            },
            {
                src: OddWinIcon,
                alt: '_t_A chart illustrating a winning Odd trade type contract_t_',
            },
            {
                src: OddLossIcon,
                alt: '_t_A chart illustrating a losing Odd trade type contract_t_',
            },
        ],
        texts: [
            '_t_Predict whether the last digit of the exit price will be an even or odd number._t_',
            "_t_If you select 'Even', you receive the payout if the last digit of the exit price is an even number (e.g. 2, 4, 6, 8, 0)._t_",
            "_t_If you select 'Odd', you receive the payout if the last digit of the exit price is an odd number (e.g. 1, 3, 5, 7, 9)._t_",
            '_t_If the selected condition is not met, your stake is lost._t_',
        ],
    },
    {
        type: 'single',
        icon: {
            src: DigitsOverUnder,
            alt: '_t_Digit Over/Under_t_',
        },
        title: '_t_Digits Over/Under_t_',
        images: [
            {
                src: OverWinIcon,
                alt: '_t_A chart illustrating a winning Over trade type contract_t_',
            },
            {
                src: OverLossIcon,
                alt: '_t_A chart illustrating a losing Over trade type contract_t_',
            },
            {
                src: UnderWinIcon,
                alt: '_t_A chart illustrating a winning Under trade type contract_t_',
            },
            {
                src: UnderLossIcon,
                alt: '_t_A chart illustrating a losing Under trade type contract_t_',
            },
        ],
        texts: [
            '_t_Predict whether the last digit of the exit price will be higher or lower than your selected number._t_',
            "_t_If you select 'Over', you receive the payout if the last digit of the exit price is greater than your prediction._t_",
            "_t_If you select 'Under', you receive the payout if the last digit of the exit price is less than your prediction._t_",
            '_t_If the selected condition is not met, your stake is lost._t_',
        ],
    },
]

export const digit_options_markets: OptionContentAvailability[] = [
    allOptionsMarkets.derived_indices,
]

export const digit_options_platforms: OptionContentAvailability[] = [
    allOptionsTradePlatforms.deriv_trader,
    allOptionsTradePlatforms.smart_trader,
    allOptionsTradePlatforms.deriv_bot,
]

export const digit_options_faq: OptionsFAQDataItem[] = [
    {
        id: 1,
        question: '_t_Which Deriv trading platforms can I use to trade Digits contracts?_t_',
        answers: [
            {
                type: 'text',
                id: 1,
                text: '_t_You can trade Digits contracts on the Deriv Trader, SmartTrader, and Deriv Bot trading platforms, on synthetics._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_What are the steps to open a Digits trade on Deriv?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_1. Select the market and asset you want to trade._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_2. Choose which Digits contract to open (Matches/Differs; Even/Odd; Over/Under)._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_3. Set your preferred tick duration and last digit prediction._t_',
            },
            {
                id: 4,
                type: 'text',
                text: '_t_4. Enter your stake or desired potential payout amount._t_',
            },
            {
                id: 5,
                type: 'text',
                text: '_t_5. Open your Digits trade._t_',
            },
        ],
    },
    {
        id: 3,
        question: '_t_Can I close a Digits contract before the expiry time?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_No, the trade types allow you to choose the duration or expiry time but the contract will be held till the end of duration or expiry selected._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_What are Digits contracts?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_With a Digits contract, you predict whether the last digit of the last tick of your contract will meet specified criteria, depending on the contract type you select._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_If you trade a Matches/Differs contract, you predict whether the last digit will match or be different from a selected number._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_If you trade an Even/Odd contract, you predict whether the last digit will be an even or odd number._t_',
            },
            {
                id: 4,
                type: 'text',
                text: '_t_If you trade an Over/Under contract, you predict whether the last digit will be over or under a specific number._t_',
            },
        ],
    },
    {
        id: 5,
        question: '_t_What are the contract duration ranges for Digits contract types?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_The contract durations range from 1 tick up to 10 ticks, depending on your selected trading asset and market conditions._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_Can I trade multiple Digits contracts simultaneously?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes. Given the contract types available, you can trade multiple Digits simultaneously, depending on your trading strategy. You can open separate trades for different digits and take advantage of different market predictions within the same timeframe._t_',
            },
        ],
    },
    {
        id: 7,
        question:
            '_t_Why does the "Matches" contract have a higher predicted payout compared to "Differs"?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_This is because to win a Digits "Matches" contract, the number you choose must exactly match the last digit of your contract\'s last tick. Since the probability of this outcome is lower (with possible digits ranging from 0 to 9), the potential payout is higher._t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_With a Digits "Differs" contract, there is a higher chance that the last digit of your contract\'s last tick will be different, so potential payouts are lower._t_',
            },
            {
                id: 3,
                type: 'text',
                text: '_t_Payouts for all potential outcomes are calculated based strictly on the probabilities of each occurring at the time the trade is placed._t_',
            },
        ],
    },
]
