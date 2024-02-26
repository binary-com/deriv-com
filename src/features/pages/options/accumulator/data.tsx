import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    IllustrativePayoutIcon,
    IllustrativeMinimalCapitalIcon,
    IllustrativeSupport247Icon,
    IllustrativePaidProgrammeIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustrative'
import Image from 'features/components/atoms/image'
import TickDuration from 'images/svg/options/tick_duration.svg'
import { Localize } from 'components/localization'
import { OptionsFAQDataItem } from 'features/components/templates/options-content/type'

export const accumulatorCards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_Controlled Risk_t_" />,
        description: (
            <Localize translate_text="_t_Potential loss is limited to the initial amount you decide to trade._t_" />
        ),
        icon: <IllustrativePayoutIcon width="48" height="48" />,
        color: 'gray',
        align: 'start',
        size: 'md',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_30-260 tick duration_t_" />,
        description: (
            <Localize translate_text="_t_Fast-paced action with durations up to 260 ticks._t_" />
        ),
        icon: <Image src={TickDuration} width="48" height="48" />,
        color: 'gray',
        align: 'start',
        size: 'md',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_1-5% growth rate_t_" />,
        description: (
            <Localize translate_text="_t_Choose your growth rate to tailor risk/reward. _t_" />
        ),
        icon: <IllustrativeMinimalCapitalIcon width="48" height="48" />,
        color: 'gray',
        align: 'start',
        size: 'md',
    },
    {
        id: 4,
        header: <Localize translate_text="_t_Practise with demo_t_" />,
        description: (
            <Localize translate_text="_t_Hone your strategies risk-free with a demo account._t_" />
        ),
        icon: <IllustrativePaidProgrammeIcon width="48" height="48" />,
        color: 'gray',
        align: 'start',
        size: 'md',
    },
    {
        id: 5,
        header: <Localize translate_text="_t_24/7 support_t_" />,
        description: (
            <Localize translate_text="_t_Get round-the-clock assistance from our Customer Support team._t_" />
        ),
        icon: <IllustrativeSupport247Icon width="48" height="48" />,
        color: 'gray',
        align: 'start',
        size: 'md',
    },
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
