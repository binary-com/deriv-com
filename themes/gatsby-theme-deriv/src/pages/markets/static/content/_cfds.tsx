import React from 'react'
import {
    AmericanIndices,
    AmericanStocks,
    AsianIndices,
    BasketIndicesCfds,
    BasketIndicesCommodities,
    CrashBoom,
    CrashBoomEU,
    CryptocurrenciesCFDs,
    DerivedCFDs,
    DexIndices,
    Energy,
    EuropeanIndices,
    ExoticPairs,
    JumpIndices,
    MajorPairs,
    Metals,
    MicroPairs,
    MinorPairs,
    RangeBreak,
    StepIndices,
    VolatilityIndices,
    VolatilityIndicesEU,
    DriftSwitchIndices,
} from '../../instruments/_submarkets'
import {
    AmericasDetails,
    AsianIndicesDetails,
    BasketCommoditiesDetails,
    BasketFXDetails,
    CrashBoomDetails,
    CrashBoomDetailsEU,
    JumpIndicesDetailsEU,
    DerivedCFDsDetails,
    DexIndicesDetails,
    EuropeanIndicesDetails,
    JumpIndicesDetails,
    RangeBreakIndicesDetails,
    VolatilityIndicesDetails,
    VolatilityIndicesDetailsEU,
    DriftSwitchDetails,
    StepIndicesDetails_CFD,
} from './_details'
import { TMarketContent } from './_types'
import { JumpIndicesEU } from 'pages/markets/instruments/_markets'

export const commodities_cfds: TMarketContent = {
    markets_list: {
        col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'metals',
            title: '_t_Metals_t_',
            instruments: <Metals />,
        },
        {
            id: 'energy',
            title: '_t_Energy_t_',
            instruments: <Energy />,
        },
    ],
}

export const forex_cfds: TMarketContent = {
    markets_list: {
        col: 5,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'major-pairs',
            title: '_t_Major pairs_t_',
            instruments: <MajorPairs />,
        },
        {
            id: 'minor-pairs',
            title: '_t_Minor pairs_t_',
            instruments: <MinorPairs />,
        },
        {
            id: 'exotic-pairs',
            title: '_t_Exotic pairs_t_',
            instruments: <ExoticPairs />,
        },
        {
            id: 'micro-pairs',
            title: '_t_Micro pairs_t_',
            instruments: <MicroPairs />,
        },
    ],
}

export const forex_cfds_eu: TMarketContent = {
    markets_list: {
        col: 5,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'major-pairs',
            title: '_t_Major pairs_t_',
            instruments: <MajorPairs />,
        },
        {
            id: 'minor-pairs',
            title: '_t_Minor pairs_t_',
            instruments: <MinorPairs />,
        },
    ],
}

export const synthetic_cfds: TMarketContent = {
    has_global_accordion: true,
    // template: 2,
    markets_list: {
        col: 3,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'drift-switch-indices',
            title: '_t_Drift switching indices_t_',
            instruments: <DriftSwitchIndices />,
            details: <DriftSwitchDetails />,
        },
        {
            id: 'dex-indices',
            title: '_t_DEX indices_t_',
            instruments: <DexIndices />,
            details: <DexIndicesDetails />,
        },
        {
            id: 'volatility-indices',
            title: '_t_Volatility indices_t_',
            instruments: <VolatilityIndices />,
            details: <VolatilityIndicesDetails />,
        },
        {
            id: 'crash-boom',
            title: '_t_Crash/Boom_t_',
            mobile_title: '_t_Crash/Boom_t_',
            instruments: <CrashBoom />,
            details: <CrashBoomDetails />,
        },
        {
            id: 'jump-indices',
            title: '_t_Jump indices_t_',
            instruments: <JumpIndices is_cfd />,
            details: <JumpIndicesDetails />,
        },
        {
            id: 'step-indices',
            title: '_t_Step indices_t_',
            instruments: <StepIndices is_cfd />,
            details: <StepIndicesDetails_CFD />,
        },
        {
            id: 'range-break-indices',
            title: '_t_Range break indices_t_',
            instruments: <RangeBreak />,
            details: <RangeBreakIndicesDetails />,
        },
    ],
}

export const synthetic_cfds_eu: TMarketContent = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'drift-switch-indices',
            title: '_t_Drift switching indices_t_',
            instruments: <DriftSwitchIndices />,
            details: <DriftSwitchDetails />,
        },
        {
            id: 'dex-indices',
            title: '_t_DEX indices_t_',
            instruments: <DexIndices />,
            details: <DexIndicesDetails />,
        },
        {
            id: 'volatility-indices',
            title: '_t_Volatility indices_t_',
            instruments: <VolatilityIndicesEU />,
            details: <VolatilityIndicesDetailsEU />,
            content_template: 3,
        },
        {
            id: 'crash-boom',
            title: '_t_Crash/Boom_t_',
            mobile_title: '_t_Crash/Boom_t_',
            instruments: <CrashBoomEU />,
            details: <CrashBoomDetailsEU />,
            content_template: 3,
        },
        {
            id: 'jump-indices',
            title: '_t_Jump indices_t_',
            mobile_title: '_t_Jump Indices_t_',
            instruments: <JumpIndicesEU />,
            details: <JumpIndicesDetailsEU />,
        },
    ],
}

export const stock_cfds: TMarketContent = {
    template: 2,
    content: [
        {
            id: 'american-indices',
            title: '_t_American <0></0>indices_t_',
            title_components: [<br key={0} />],
            mobile_title: '_t_American indices_t_',
            instruments: <AmericanIndices />,
            details: <AmericasDetails />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            id: 'asian-indices',
            title: '_t_Asian <0></0>indices_t_',
            title_components: [<br key={0} />],
            mobile_title: '_t_Asian indices_t_',
            instruments: <AsianIndices />,
            details: <AsianIndicesDetails />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            id: 'european-indices',
            title: '_t_European <0></0>indices_t_',
            title_components: [<br key={0} />],
            mobile_title: '_t_European indices_t_',
            instruments: <EuropeanIndices />,
            details: <EuropeanIndicesDetails />,
            col: 3,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            gap: '16px',
        },
        {
            id: 'stocks',
            title: '_t_Stocks_t_',
            instruments: <AmericanStocks />,
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

export const crypto_cfds: TMarketContent = {
    markets_list: {
        col: 4,
        tablet_col: 2,
        mobile_col: 2,
    },
    template: 2,
    content: [
        {
            id: 'crypto-pairs',
            title: '_t_Crypto pairs_t_',
            instruments: <CryptocurrenciesCFDs />,
        },
    ],
}

export const basket_cfds: TMarketContent = {
    markets_list: {
        col: 4,
        tablet_col: 4,
        mobile_col: 2,
    },
    template: 2,
    content: [
        {
            id: 'commodities-basket',
            title: '_t_Commodities Basket_t_',
            instruments: <BasketIndicesCommodities />,
            details: <BasketCommoditiesDetails />,
        },
        {
            id: 'forex-basket',
            title: '_t_Forex Basket_t_',
            instruments: <BasketIndicesCfds />,
            details: <BasketFXDetails />,
        },
    ],
}

export const derived_fx_cfds: TMarketContent = {
    markets_list: {
        col: 3,
        tablet_col: 3,
        mobile_col: 3,
    },
    template: 3,
    content: [
        {
            id: 'cfds-derived-fx',
            title: '_t_Derived FX_t_',
            instruments: <DerivedCFDs />,
            details: <DerivedCFDsDetails />,
        },
    ],
}
