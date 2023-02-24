import React from 'react'
import {
    CrashBoom,
    CrashBoomEU,
    CryptocurrenciesCFDs,
    Energy,
    ExoticPairs,
    MajorPairs,
    Metals,
    MinorPairs,
    RangeBreak,
    MicroPairs,
    BasketIndicesCfds,
    BasketIndicesCommodities,
    StepIndices,
    VolatilityIndices,
    VolatilityIndicesEU,
    AmericanIndices,
    AmericanStocks,
    AsianIndices,
    EuropeanIndices,
    JumpIndices,
    DerivedCFDs,
} from '../../instruments/_submarkets'
import {
    BasketCommoditiesDetails,
    BasketFXDetails,
    CrashBoomDetails,
    CrashBoomDetailsEU,
    DerivedCFDsDetails,
    RangeBreakIndicesDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
    VolatilityIndicesDetailsEU,
    AmericasDetails,
    AsianIndicesDetails,
    EuropeanIndicesDetails,
    JumpIndicesDetails,
} from './_details'
import type { MarketInstrumentsElement } from 'pages/markets/components/sections/_market_instruments'
import { Localize } from 'components/localization'

export const commodities_cfds: MarketInstrumentsElement = {
    markets_list: {
        col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="_t_Metals_t_" />,
            component: <Metals />,
        },
        {
            title: <Localize translate_text="_t_Energy_t_" />,
            component: <Energy />,
        },
    ],
}

export const forex_cfds: MarketInstrumentsElement = {
    markets_list: {
        col: 5,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="_t_Major pairs_t_" />,
            component: <MajorPairs />,
        },
        {
            title: <Localize translate_text="_t_Minor pairs_t_" />,
            component: <MinorPairs />,
        },
        {
            title: <Localize translate_text="_t_Exotic pairs_t_" />,
            component: <ExoticPairs />,
        },
        {
            title: <Localize translate_text="_t_Micro pairs_t_" />,
            component: <MicroPairs />,
        },
    ],
}
export const forex_cfds_eu: MarketInstrumentsElement = {
    markets_list: {
        col: 5,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="_t_Major pairs_t_" />,
            component: <MajorPairs />,
        },
        {
            title: <Localize translate_text="_t_Minor pairs_t_" />,
            component: <MinorPairs />,
        },
    ],
}

export const synthetic_cfds: MarketInstrumentsElement = {
    has_global_accordion: true,
    // template: 2,
    markets_list: {
        col: 3,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="_t_Volatility indices_t_" />,
            component: <VolatilityIndices />,
            details: <VolatilityIndicesDetails />,
        },
        {
            title: <Localize translate_text="_t_Crash/Boom_t_" />,
            mobile_title: <Localize translate_text="_t_Crash/Boom_t_" />,
            component: <CrashBoom />,
            details: <CrashBoomDetails />,
        },
        {
            title: <Localize translate_text="_t_Jump indices_t_" />,
            component: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
        {
            title: <Localize translate_text="_t_Step indices_t_" />,
            component: <StepIndices />,
            details: <StepIndicesDetails />,
        },
        {
            title: <Localize translate_text="_t_Range break indices_t_" />,
            component: <RangeBreak />,
            details: <RangeBreakIndicesDetails />,
        },
    ],
}

export const synthetic_cfds_eu: MarketInstrumentsElement = {
    has_global_accordion: true,
    // template: 2,
    markets_list: {
        col: 3,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="_t_Volatility indices_t_" />,
            component: <VolatilityIndicesEU />,
            details: <VolatilityIndicesDetailsEU />,
        },
        {
            title: <Localize translate_text="_t_Crash/Boom_t_" />,
            mobile_title: <Localize translate_text="_t_Crash/Boom_t_" />,
            component: <CrashBoomEU />,
            details: <CrashBoomDetailsEU />,
        },
    ],
}

export const stock_cfds: MarketInstrumentsElement = {
    template: 2,
    content: [
        {
            title: (
                <Localize
                    translate_text="_t_American<0></0>indices_t_"
                    components={[<br key={0} />]}
                />
            ),
            component: <AmericanIndices />,
            details: <AmericasDetails />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            title: (
                <Localize
                    translate_text="_t_Asian<0></0>indices_t_"
                    components={[<br key={0} />]}
                />
            ),
            component: <AsianIndices />,
            details: <AsianIndicesDetails />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            title: (
                <Localize
                    translate_text="_t_European<0></0>indices_t_"
                    components={[<br key={0} />]}
                />
            ),
            component: <EuropeanIndices />,
            details: <EuropeanIndicesDetails />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            title: <Localize translate_text="_t_Stocks_t_" />,
            component: <AmericanStocks />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '40px 32px',
            gap: '32px',
            gap_mobile: '28px 20px',
            mobile_template: true,
        },
    ],
}

export const crypto_cfds: MarketInstrumentsElement = {
    markets_list: {
        col: 4,
        tablet_col: 2,
        mobile_col: 2,
    },
    template: 2,
    content: [
        {
            title: <Localize translate_text="_t_Crypto pairs_t_" />,
            component: <CryptocurrenciesCFDs />,
        },
    ],
}

export const basket_cfds: MarketInstrumentsElement = {
    markets_list: {
        col: 4,
        tablet_col: 4,
        mobile_col: 2,
    },
    template: 2,
    content: [
        {
            title: <Localize translate_text="_t_Commodities Basket_t_" />,
            component: <BasketIndicesCommodities />,
            details: <BasketCommoditiesDetails />,
        },
        {
            title: <Localize translate_text="_t_Forex Basket_t_" />,
            component: <BasketIndicesCfds />,
            details: <BasketFXDetails />,
        },
    ],
}
export const derived_fx_cfds: MarketInstrumentsElement = {
    markets_list: {
        col: 2,
        tablet_col: 2,
        mobile_col: 2,
    },
    template: 3,
    content: [
        {
            title: <Localize translate_text="_t_Derived FX_t_" />,
            component: <DerivedCFDs />,
            details: <DerivedCFDsDetails />,
        },
    ],
}
