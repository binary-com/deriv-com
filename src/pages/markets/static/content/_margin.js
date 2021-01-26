import React from 'react'
import Symbol from '../../components/_symbol'
import {
    CrashBoom,
    Energy,
    ExoticPairs,
    MajorPairs,
    Metals,
    MinorPairs,
    RangeBreak,
    StepIndices,
    VolatilityIndices,
} from '../../sub-markets/_submarkets'
import {
    CrashBoomDetails,
    EuropeDetails,
    RangeBreakIndicesDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
} from './_details'
import { OTCGERMAN } from 'components/elements/symbols'
import { localize } from 'components/localization'

export const commodities_margin = {
    markets_list: {
        col: 4,
    },
    content: [
        {
            title: localize('Metals'),
            component: <Metals />,
        },
        {
            title: localize('Energy'),
            component: <Energy />,
        },
    ],
}

export const forex_margin = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: localize('Major pairs'),
            component: <MajorPairs />,
        },
        {
            title: localize('Minor pairs'),
            component: <MinorPairs />,
        },
        {
            title: localize('Exotic pairs'),
            component: <ExoticPairs />,
        },
    ],
}

export const stock_margin = {
    has_global_accordion: true,
    content: [
        {
            title: localize('Europe'),
            component: <Symbol src={OTCGERMAN} text={localize('German Index')} />,
            details: EuropeDetails,
            custom_index: 4,
        },
    ],
}

export const synthetic_margin = {
    has_global_accordion: true,
    content: [
        {
            title: localize('Europe'),
            component: <VolatilityIndices />,
            details: VolatilityIndicesDetails,
        },
        {
            title: localize('Crash/Boom'),
            component: <CrashBoom />,
            details: CrashBoomDetails,
        },
        {
            title: localize('Step indices'),
            component: <StepIndices />,
            details: StepIndicesDetails,
        },
        {
            title: localize('Range break indices'),
            component: <RangeBreak />,
            details: RangeBreakIndicesDetails,
        },
    ],
}
