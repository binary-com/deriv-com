import React from 'react'
import Symbol from '../../components/helper/_symbol'
import {
    CrashBoom,
    Energy,
    ExoticPairs,
    MajorPairs,
    Metals,
    MinorPairs,
    RangeBreak,
    SmartFX,
    StepIndices,
    VolatilityIndices,
} from '../../instruments/_submarkets'
import { smart_gold_index } from '../../instruments/_market-symbols'
import {
    CrashBoomDetails,
    EuropeDetails,
    RangeBreakIndicesDetails,
    SmartFXDetails,
    SmartGoldIndexDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
} from './_details'
import { OTCGERMAN } from 'components/elements/symbols'
import { Localize } from 'components/localization'

export const commodities_margin = {
    markets_list: {
        col: 4,
    },
    content: [
        {
            title: <Localize translate_text="Metals" />,
            component: <Metals />,
        },
        {
            title: <Localize translate_text="Energy" />,
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
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
        {
            title: <Localize translate_text="Minor pairs" />,
            component: <MinorPairs />,
        },
        {
            title: <Localize translate_text="Exotic pairs" />,
            component: <ExoticPairs />,
        },
        {
            title: <Localize translate_text="Smart FX" />,
            component: <SmartFX />,
            details: SmartFXDetails,
        },
        {
            title: <Localize translate_text="Smart Gold Index" />,
            component: <Symbol instruments_type={smart_gold_index} />,
            details: SmartGoldIndexDetails,
        },
    ],
}

export const stock_margin = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Europe" />,
            component: <Symbol src={OTCGERMAN} text={<Localize translate_text="German Index" />} />,
            details: EuropeDetails,
            custom_index: 4,
        },
    ],
}

export const synthetic_margin = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndices />,
            details: VolatilityIndicesDetails,
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
        {
            title: <Localize translate_text="Range break indices" />,
            component: <RangeBreak />,
            details: RangeBreakIndicesDetails,
        },
    ],
}
