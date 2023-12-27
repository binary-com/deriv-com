import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    LightDependableTestIcon,
    LightSafeAndSecureTestIcon,
    LightRegulatedTestIcon,
    LightTwentyFourSevenSupportTestIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustration'
import { Localize } from 'components/localization'

export const cards: CardContent[] = [
    {
        id: 1,
        header: <Localize translate_text="_t_Dependable_t_" />,
        description: (
            <Localize translate_text="_t_Cutting-edge technology with 99.97% uptime for uninterrupted trading._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: <LightDependableTestIcon width={120} height={145} />,
        className: 'h-full',
    },
    {
        id: 2,
        header: <Localize translate_text="_t_Safe & Secure_t_" />,
        description: (
            <Localize translate_text="_t_Your personal data is private, and your funds are safely segregated._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: <LightSafeAndSecureTestIcon width={120} height={145} />,
        className: 'h-full',
    },
    {
        id: 3,
        header: <Localize translate_text="_t_Regulated_t_" />,
        description: (
            <Localize translate_text="_t_We’re regulated and licensed by global financial authorities._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: <LightRegulatedTestIcon width={120} height={145} />,
        className: 'h-full',
    },
    {
        id: 4,
        header: <Localize translate_text="_t_24/7 support_t_" />,
        description: (
            <Localize translate_text="_t_Our professional multilingual team is here for you anytime._t_" />
        ),
        size: 'md',
        color: 'gray',
        align: 'center',
        icon: <LightTwentyFourSevenSupportTestIcon width={120} height={145} />,
        className: 'h-full',
    },
]
