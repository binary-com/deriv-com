import React from 'react'
import { Features } from '@deriv-com/blocks'
import { CardContent } from '@deriv-com/components'
// eslint-disable-next-line import/no-unresolved
import { StandaloneRectangleAdBoldIcon } from '@deriv/quill-icons/Standalone'
import { localize } from 'components/localization'

const cards: CardContent[] = [
    {
        header: localize('_t_Dependable_t_'),
        description: localize(
            '_t_Cutting-edge technology with 99.97% uptime for uninterrupted trading._t_',
        ),
        size: 'sm',
        color: 'light',
        align: 'center',
        icon: <StandaloneRectangleAdBoldIcon width={256} height={256} />,
    },
    {
        header: localize('_t_Safe & Secure_t_'),
        description: localize(
            '_t_Your personal data is private, and your funds are safely segregated._t_',
        ),
        size: 'sm',
        color: 'light',
        align: 'center',
        icon: <StandaloneRectangleAdBoldIcon width={256} height={256} />,
    },
    {
        header: localize('_t_Regulated_t_'),
        description: localize(
            '_t_We’re regulated and licensed by global financial authorities._t_',
        ),
        size: 'sm',
        color: 'light',
        align: 'center',
        icon: <StandaloneRectangleAdBoldIcon width={256} height={256} />,
    },
    {
        header: localize('_t_24/7 support_t_'),
        description: localize('_t_Our professional multilingual team is here for you anytime._t_'),
        size: 'sm',
        color: 'light',
        align: 'center',
        icon: <StandaloneRectangleAdBoldIcon width={256} height={256} />,
    },
]

const TwentyYearsStrong = () => {
    return (
        <Features.Card title={localize("_t_We're 24+ years strong_t_")} cards={cards} cols="four" />
    )
}

export default TwentyYearsStrong
