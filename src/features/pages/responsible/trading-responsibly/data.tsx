import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    DerivLightDemoAccountIcon,
    DerivLightSetLimitIcon,
    DerivLightTradeWiselyIcon,
    DerivLightUnderstandTheRiskIcon,
} from '@deriv/quill-icons'
import { Localize } from 'components/localization'

export const cards: CardContent[] = [
    {
        id: 1,
        description: (
            <Localize translate_text="_t_Understand the risks of online trading. Never trade using borrowed money or money you can’t afford to lose._t_" />
        ),
        size: 'md',
        color: 'light',
        align: 'start',
        icon: <DerivLightUnderstandTheRiskIcon height="120px" width="120px" />,
        className: 'h-full',
    },
    {
        id: 2,
        description: (
            <Localize translate_text="_t_Use our free demo account, and trade with unlimited virtual funds. It’s the easiest way to learn how to use our products._t_" />
        ),
        size: 'md',
        color: 'light',
        align: 'start',
        icon: <DerivLightDemoAccountIcon height="120px" width="120px" />,
        className: 'h-full',
    },
    {
        id: 3,
        description: (
            <Localize translate_text="_t_Set a limit for your losses, and stick to it. Put aside some of your winnings to avoid losing all your money._t_" />
        ),
        size: 'md',
        color: 'light',
        align: 'start',
        icon: <DerivLightSetLimitIcon height="120px" width="120px" />,
        className: 'h-full',
    },
    {
        id: 4,
        description: (
            <Localize translate_text="_t_Trade wisely, and don’t let your emotions influence your decisions. Don’t trade when you’re prone to bad judgement._t_" />
        ),
        size: 'md',
        color: 'light',
        align: 'start',
        icon: <DerivLightTradeWiselyIcon height="120px" width="120px" />,
        className: 'h-full',
    },
]
