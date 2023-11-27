import { StatBlock } from '@deriv-com/blocks'
import React from 'react'
import { localize } from 'components/localization'

const cards = [
    {
        title: localize('_t_2.5M+_t_'),
        description: localize('_t_Users worldwide_t_'),
    },
    {
        title: localize('_t_$650B+_t_'),
        description: localize('_t_Monthly volume_t_'),
    },
    {
        title: localize('_t_1999_t_'),
        description: localize('_t_Established since_t_'),
    },
    {
        title: localize('_t_168M+_t_'),
        description: localize('_t_Monthly deals_t_'),
    },
]

const StatSection = () => {
    return <StatBlock.V3 items={cards} className="bg-solid-slate-75" />
}

export default StatSection
