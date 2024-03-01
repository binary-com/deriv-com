import React from 'react'
import { CrashBoom, JumpIndices, AccumulatorsIndices } from '../../instruments/_submarkets'
import { CrashBoomDetails, JumpIndicesDetails, ContinuousIndicesDetails } from './_details'
import { TMarketContent } from './_types'

export const accumulators: TMarketContent = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    template: 1,
    content: [
        {
            title: '_t_Volatility indices_t_',
            component: <AccumulatorsIndices />,
            details: <ContinuousIndicesDetails />,
        },
        {
            title: '_t_Crash/Boom_t_',
            mobile_title: '_t_Crash/Boom_t_',
            component: <CrashBoom />,
            details: <CrashBoomDetails />,
        },
        {
            title: '_t_Jump indices_t_',
            mobile_title: '_t_Jump indices_t_',
            component: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
    ],
}
