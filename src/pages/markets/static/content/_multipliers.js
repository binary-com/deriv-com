import React from 'react'
import {
    ContinuousIndices,
    CrashBoom,
    MajorPairs,
    StepIndices,
} from '../../instruments/_submarkets'
import { ContinuousIndicesDetails, CrashBoomDetails, StepIndicesDetails } from './_details'
import { Localize } from 'components/localization'

export const forex_multiplier = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
    ],
}

export const synthetic_multiplier = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Continuous indices" />,
            component: <ContinuousIndices />,
            details: ContinuousIndicesDetails,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            component: <CrashBoom />,
            details: CrashBoomDetails,
        },
        {
            title: <Localize translate_text="Step indices" />,
            component: <StepIndices />,
            details: StepIndicesDetails,
        },
    ],
    eu_content: [
        <Localize
            key={0}
            translate_text="Return to Player (RTP) for multiplier options using multiplier 100 and duration of 1 hour is in the range of 98-99 % on an average. Using a different multiplier or duration may affect the RTP."
        />,
    ],
}
