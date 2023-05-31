import React, { ReactElement, ReactNode } from 'react'
import { CrashBoom, JumpIndices, AccumulatorsIndices } from '../../instruments/_submarkets'
import { CrashBoomDetails, JumpIndicesDetails, ContinuousIndicesDetails } from './_details'
import { Localize } from 'components/localization'

type Option = {
    title: ReactElement
    component: ReactElement
    mobile_title?: ReactElement
    details?: ReactNode
}

export type SyntheticAccumulator = {
    has_global_accordion: boolean
    markets_list: {
        col: number
        tablet_col: number
    }
    content: Option[]
    eu_content?: ReactElement[]
    template?: number
}

export const accumulators: SyntheticAccumulator = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    template: 1,
    content: [
        {
            title: <Localize translate_text="Volatility indices" />,
            component: <AccumulatorsIndices />,
            details: <ContinuousIndicesDetails />,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: <Localize translate_text="Crash/Boom" />,
            component: <CrashBoom />,
            details: <CrashBoomDetails />,
        },
        {
            title: <Localize translate_text="Jump indices" />,
            mobile_title: <Localize translate_text="Jump indices" />,
            component: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
    ],
}
