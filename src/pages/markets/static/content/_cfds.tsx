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
            id: 'metals',
            title: <Localize translate_text="Metals" />,
            component: <Metals />,
        },
        {
            id: 'energy',
            title: <Localize translate_text="Energy" />,
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
            id: 'major-pairs',
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
        {
            id: 'minor-pairs',
            title: <Localize translate_text="Minor pairs" />,
            component: <MinorPairs />,
        },
        {
            id: 'exotic-pairs',
            title: <Localize translate_text="Exotic pairs" />,
            component: <ExoticPairs />,
        },
        {
            id: 'micro-pairs',
            title: <Localize translate_text="Micro pairs" />,
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
            id: 'major-pairs',
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
        {
            id: 'minor-pairs',
            title: <Localize translate_text="Minor pairs" />,
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
            id: 'dex-indices',
            title: <Localize translate_text="_t_DEX indices_t_" />,
            component: <DexIndices />,
            details: <DexIndicesDetails />,
        },
        {
            id: 'volatility-indices',
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndices />,
            details: <VolatilityIndicesDetails />,
        },
        {
            id: 'crash-boom',

            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: <Localize translate_text="Crash/Boom" />,
            component: <CrashBoom />,
            details: <CrashBoomDetails />,
        },
        {
            id: 'jump-indices',
            title: <Localize translate_text="Jump indices" />,
            component: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
        {
            id: 'step-indices',
            title: <Localize translate_text="Step indices" />,
            component: <StepIndices />,
            details: <StepIndicesDetails />,
        },
        {
            id: 'range-break-indices',
            title: <Localize translate_text="Range break indices" />,
            component: <RangeBreak />,
            details: <RangeBreakIndicesDetails />,
        },
    ],
}

export const synthetic_cfds_eu: MarketInstrumentsElement = {
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
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndicesEU />,
            details: <VolatilityIndicesDetailsEU />,
        },
        {
            id: 'crash-boom',
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: <Localize translate_text="Crash/Boom" />,
            component: <CrashBoomEU />,
            details: <CrashBoomDetailsEU />,
        },
    ],
}

export const stock_cfds: MarketInstrumentsElement = {
    template: 2,
    content: [
        {
            id: 'american-indices',
            title: (
                <Localize translate_text="American <0></0>indices" components={[<br key={0} />]} />
            ),
            mobile_title: <Localize translate_text="American indices" />,
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
            title: <Localize translate_text="Asian <0></0>indices" components={[<br key={0} />]} />,
            mobile_title: <Localize translate_text="Asian indices" />,
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
            title: <Localize translate_text="European indices" components={[<br key={0} />]} />,
            mobile_title: <Localize translate_text="European indices" />,
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
            title: <Localize translate_text="Stocks" />,
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
            id: 'crypto-pairs',
            title: <Localize translate_text="Crypto pairs" />,
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
            id: 'commodities-basket',
            title: <Localize translate_text="Commodities Basket" />,
            component: <BasketIndicesCommodities />,
            details: <BasketCommoditiesDetails />,
        },
        {
            id: 'forex-basket',
            title: <Localize translate_text="Forex Basket" />,
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
            id: 'cfds-derived-fx',
            title: <Localize translate_text="Derived FX" />,
            component: <DerivedCFDs />,
            details: <DerivedCFDsDetails />,
        },
    ],
}
