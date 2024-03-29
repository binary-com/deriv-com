import React, { ReactNode } from 'react'
import { TableColumnType } from 'features/components/atoms/table/types'
import dclsx from 'features/utils/dclsx'
import { Localize } from 'components/localization'

type Data = {
    monthly_requirement: ReactNode
    fee_per_million: ReactNode
}

export const data: Data[] = [
    {
        monthly_requirement: <Localize translate_text="_t_0 - 3 billion_t_" />,
        fee_per_million: <Localize translate_text="_t_$ 8.00_t_" />,
    },
    {
        monthly_requirement: <Localize translate_text="_t_> 3 - 5 billion_t_" />,
        fee_per_million: <Localize translate_text="_t_$ 7.00_t_" />,
    },
    {
        monthly_requirement: <Localize translate_text="_t_> 5 - 10 billion_t_" />,
        fee_per_million: <Localize translate_text="_t_$ 6.00_t_" />,
    },
    {
        monthly_requirement: <Localize translate_text="_t_> 10 billion_t_" />,
        fee_per_million: <Localize translate_text="_t_$ 5.00_t_" />,
    },
    {
        monthly_requirement: (
            <Localize
                translate_text="_t_0 - 15 million <0>(Crypto)</0>_t_"
                components={[<span key={0} className={dclsx('at-typography-color-light')} />]}
            />
        ),
        fee_per_million: <Localize translate_text="_t_5.5 bps / 0.055%_t_" />,
    },
    {
        monthly_requirement: (
            <Localize
                translate_text="_t_> 15 million <0>(Crypto)</0>_t_"
                components={[<span key={0} className={dclsx('at-typography-color-light')} />]}
            />
        ),
        fee_per_million: <Localize translate_text="_t_5 bps / 0.05%_t_" />,
    },
]

export const column_data: TableColumnType<Data, keyof Data>[] = [
    {
        accessor: 'monthly_requirement',
        header: <Localize translate_text="_t_Monthly volume requirement_t_" />,
    },
    {
        accessor: 'fee_per_million',
        header: <Localize translate_text="_t_Fee per million_t_" />,
    },
]
