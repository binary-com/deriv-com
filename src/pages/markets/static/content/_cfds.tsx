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
    DerivedCFDsDetails,
    DexIndicesDetails,
    EuropeanIndicesDetails,
    JumpIndicesDetails,
    RangeBreakIndicesDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
    VolatilityIndicesDetailsEU,
    DriftSwitchDetails,
} from './_details'
import { TMarketContent } from './_types'

export const commodities_cfds: TMarketContent = {
    markets_list: {
        col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'metals',
            title: '_t_Metals_t_',
            component: <Metals />,
        },
        {
            id: 'energy',
            title: '_t_Energy_t_',
            component: <Energy />,
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
            component: <MajorPairs />,
        },
        {
            id: 'minor-pairs',
            title: '_t_Minor pairs_t_',
            component: <MinorPairs />,
        },
        {
            id: 'exotic-pairs',
            title: '_t_Exotic pairs_t_',
            component: <ExoticPairs />,
        },
        {
            id: 'micro-pairs',
            title: '_t_Micro pairs_t_',
            component: <MicroPairs />,
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
            component: <MajorPairs />,
        },
        {
            id: 'minor-pairs',
            title: '_t_Minor pairs_t_',
            component: <MinorPairs />,
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
            title: '_t_Drift switch indices_t_',
            component: <DriftSwitchIndices />,
            details: <DriftSwitchDetails />,
        },
        {
            id: 'dex-indices',
            title: '_t_DEX indices_t_',
            component: <DexIndices />,
            details: <DexIndicesDetails />,
        },
        {
            id: 'volatility-indices',
            title: '_t_Volatility indices_t_',
            component: <VolatilityIndices />,
            details: <VolatilityIndicesDetails />,
        },
        {
            id: 'crash-boom',
            title: '_t_Crash/Boom_t_',
            mobile_title: '_t_Crash/Boom_t_',
            component: <CrashBoom />,
            details: <CrashBoomDetails />,
        },
        {
            id: 'jump-indices',
            title: '_t_Jump indices_t_',
            component: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
        {
            id: 'step-indices',
            title: '_t_Step indices_t_',
            component: <StepIndices />,
            details: <StepIndicesDetails />,
        },
        {
            id: 'range-break-indices',
            title: '_t_Range break indices_t_',
            component: <RangeBreak />,
            details: <RangeBreakIndicesDetails />,
        },
    ],
}

export const synthetic_cfds_eu: TMarketContent = {
    has_global_accordion: true,
    template: 3,
    markets_list: {
        col: 2,
        tablet_col: 2,
        mobile_col: 2,
    },
    content: [
        {
            id: 'volatility-indices',
            title: '_t_Volatility indices_t_',
            component: <VolatilityIndicesEU />,
            details: <VolatilityIndicesDetailsEU />,
        },
        {
            id: 'crash-boom',
            title: '_t_Crash/Boom_t_',
            mobile_title: '_t_Crash/Boom_t_',
            component: <CrashBoomEU />,
            details: <CrashBoomDetailsEU />,
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
            component: <AmericanIndices />,
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
            component: <AsianIndices />,
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
            component: <EuropeanIndices />,
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
            component: <CryptocurrenciesCFDs />,
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
            component: <BasketIndicesCommodities />,
            details: <BasketCommoditiesDetails />,
        },
        {
            id: 'forex-basket',
            title: '_t_Forex Basket_t_',
            component: <BasketIndicesCfds />,
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
            component: <DerivedCFDs />,
            details: <DerivedCFDsDetails />,
        },
    ],
}
