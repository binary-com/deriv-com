import React from 'react'
import {
    CrashBoom,
    CryptocurrenciesCFDs,
    Energy,
    ExoticPairs,
    MajorPairs,
    Metals,
    MinorPairs,
    RangeBreak,
    SmartFX,
    StepIndices,
    VolatilityIndices,
    AmericanIndices,
    AmericanStocks,
    AsianIndices,
    EuropeanIndices,
    JumpIndices,
} from '../../instruments/_submarkets'
import {
    CrashBoomDetails,
    RangeBreakIndicesDetails,
    SmartFXDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
    AmericanIndicesDetails,
    AsianIndicesDetails,
    EuropeanIndicesDetails,
    JumpIndicesDetails,
} from './_details'
import { Localize } from 'components/localization'

export const commodities_cfds = {
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

export const forex_cfds = {
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
            mobile_fullwidth: true,
            mobileSetup: true,
            mobileStyle: {
                tablet_col: 2,
                mobile_col: 2,
                padding: '16px',
                flex: true,
                gap: '8px',
            },
        },
    ],
}

export const synthetic_cfds = {
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
            title: <Localize translate_text="Jump indices" />,
            component: <JumpIndices />,
            details: JumpIndicesDetails,
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

export const stock_cfds = {
    template: 2,
    content: [
        {
            title: (
                <Localize translate_text="American<0></0>indices" components={[<br key={0} />]} />
            ),
            component: <AmericanIndices />,
            details: AmericanIndicesDetails,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            flex: true,
            gap: '16px',
        },
        {
            title: <Localize translate_text="Asian<0></0>indices" components={[<br key={0} />]} />,
            component: <AsianIndices />,
            details: AsianIndicesDetails,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            flex: true,
            gap: '16px',
        },
        {
            title: (
                <Localize translate_text="European<0></0>indices" components={[<br key={0} />]} />
            ),
            component: <EuropeanIndices />,
            details: EuropeanIndicesDetails,
            col: 4,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            title: <Localize translate_text="Stocks" />,
            component: <AmericanStocks />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '24px 16px',
            gap: '0',
            gap_mobile: '0',
            mobile_template: true,
        },
    ],
}

export const crypto_cfds = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 1,
    },
    content: [
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            component: <CryptocurrenciesCFDs />,
        },
    ],
}
