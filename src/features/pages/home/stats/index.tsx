import React from 'react'
import { StatBlock } from '@deriv-com/blocks'
import { Localize } from 'components/localization'

const cards = [
    {
        id: 1,
        title: <Localize translate_text="_t_2.5M+_t_" />,
        description: <Localize translate_text="_t_Users worldwide_t_" />,
    },
    {
        id: 2,
        title: <Localize translate_text="_t_$650B+_t_" />,
        description: <Localize translate_text="_t_Monthly volume_t_" />,
    },
    {
        id: 3,
        title: <Localize translate_text="_t_1999_t_" />,
        description: <Localize translate_text="_t_Established since_t_" />,
    },
    {
        id: 4,
        title: <Localize translate_text="_t_168M+_t_" />,
        description: <Localize translate_text="_t_Monthly deals_t_" />,
    },
]

const StatSection = () => {
    return <StatBlock.V3 items={cards} className="bg-solid-slate-75" />
}

export default StatSection
