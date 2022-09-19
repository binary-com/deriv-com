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
} from '../../instruments/_submarkets'
import {
    BasketCommoditiesDetails,
    BasketFXDetails,
    CrashBoomDetails,
    CrashBoomDetailsEU,
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
            title: <Localize translate_text="Metals" />,
            component: <Metals />,
        },
        {
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
            title: <Localize translate_text="Major pairs" />,
            component: <MajorPairs />,
        },
        {
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
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndices />,
            details: <VolatilityIndicesDetails />,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
            component: <CrashBoom />,
            details: <CrashBoomDetails />,
        },
        {
            title: <Localize translate_text="Jump indices" />,
            component: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
        {
            title: <Localize translate_text="Step indices" />,
            component: <StepIndices />,
            details: <StepIndicesDetails />,
        },
        {
            title: <Localize translate_text="Range break indices" />,
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
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndicesEU />,
            details: <VolatilityIndicesDetailsEU />,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
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
                <Localize translate_text="American<0></0>indices" components={[<br key={0} />]} />
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
            title: <Localize translate_text="Asian<0></0>indices" components={[<br key={0} />]} />,
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
                <Localize translate_text="European<0></0>indices" components={[<br key={0} />]} />
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
            title: <Localize translate_text="Commodities Basket" />,
            component: <BasketIndicesCommodities />,
            details: <BasketCommoditiesDetails />,
        },
        {
            title: <Localize translate_text="Forex Basket" />,
            component: <BasketIndicesCfds />,
            details: <BasketFXDetails />,
        },
    ],
}
