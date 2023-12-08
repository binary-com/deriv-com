import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    LightDependableIcon,
    LightSafeAndSecureIcon,
    LightRegulatedIcon,
    LightTwentyFourSevenSupportIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustration'
import { localize } from 'components/localization'

export const cards: CardContent[] = [
    {
        id: 1,
        header: localize('_t_Dependable_t_'),
        description: localize(
            '_t_Cutting-edge technology with 99.97% uptime for uninterrupted trading._t_',
        ),
        size: 'sm',
        color: 'gray',
        align: 'center',
        icon: <LightDependableIcon width={120} height={145} />,
    },
    {
        id: 2,
        header: localize('_t_Safe & Secure_t_'),
        description: localize(
            '_t_Your personal data is private, and your funds are safely segregated._t_',
        ),
        size: 'sm',
        color: 'light',
        align: 'center',
        icon: <LightSafeAndSecureIcon width={120} height={145} />,
    },
    {
        id: 3,
        header: localize('_t_Regulated_t_'),
        description: localize(
            '_t_We’re regulated and licensed by global financial authorities._t_',
        ),
        size: 'sm',
        color: 'light',
        align: 'center',
        icon: <LightRegulatedIcon width={120} height={145} />,
    },
    {
        id: 4,
        header: localize('_t_24/7 support_t_'),
        description: localize('_t_Our professional multilingual team is here for you anytime._t_'),
        size: 'sm',
        color: 'light',
        align: 'center',
        icon: <LightTwentyFourSevenSupportIcon width={120} height={145} />,
    },
]
