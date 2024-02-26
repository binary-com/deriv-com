import React from 'react'
import {
    BasketIndicesCfds,
    BasketIndicesCommodities,
    ContinuousIndices,
    CrashBoomMultipliers,
    CrashBoomEU,
    CryptocurrenciesMultipliers,
    JumpIndices,
    MajorPairs,
    StepIndices,
    VolatilityIndicesEU,
} from '../../instruments/_submarkets'
import {
    BasketFXDetails,
    BasketCommoditiesDetails,
    ContinuousIndicesDetails,
    CrashBoomDetailsEU,
    CrashBoomMultipliersDetails,
    CryptocurrenciesDetails,
    JumpIndicesDetails,
    StepIndicesDetails,
    VolatilityIndicesDetailsEU,
} from './_details'
import { TMarketContent } from './_types'

export const forex_multiplier_eu: TMarketContent = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: '_t_Major pairs_t_',
            instruments: <MajorPairs />,
        },
    ],
}

export const forex_multiplier: TMarketContent = {
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
    ],
}

export const basket_multiplier: TMarketContent = {
    markets_list: {
        col: 5,
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

export const synthetic_multiplier: TMarketContent = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    content: [
        {
            id: 'continuous-indices',
            title: '_t_Continuous indices_t_',
            instruments: <ContinuousIndices />,
            details: <ContinuousIndicesDetails />,
        },
        {
            id: 'crash-boom',
            title: '_t_Crash/Boom_t_',
            mobile_title: '_t_Crash/Boom_t_',
            instruments: <CrashBoomMultipliers />,
            details: <CrashBoomMultipliersDetails />,
        },
        {
            id: 'jump-indices',
            title: '_t_Jump indices_t_',
            instruments: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
        {
            id: 'step-indices',
            title: '_t_Step indices_t_',
            instruments: <StepIndices />,
            details: <StepIndicesDetails />,
        },
    ],
    eu_content: [
        '_t_Return to player for mulitplier options is in the range of 95.0-99.9% for all indices on an average. Using a different multiplier or duration may affect the RTP._t_',
    ],
}

export const synthetic_multiplier_eu: TMarketContent = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    template: 3,
    content: [
        {
            title: '_t_Continuous indices_t_',
            id: 'continuous-indices',
            instruments: <VolatilityIndicesEU />,
            details: <VolatilityIndicesDetailsEU />,
        },
        {
            id: 'crash-boom',
            title: '_t_Crash/Boom_t_',
            mobile_title: '_t_Crash/Boom_t_',
            instruments: <CrashBoomEU />,
            details: <CrashBoomDetailsEU />,
        },
    ],
}

export const crypto_multiplier: TMarketContent = {
    markets_list: {
        col: 4,
        tablet_col: 4,
        mobile_col: 2,
    },
    template: 2,
    has_global_accordion: true,
    content: [
        {
            id: 'crypto-pairs',
            title: '_t_Crypto pairs_t_',
            instruments: <CryptocurrenciesMultipliers />,
            details: <CryptocurrenciesDetails />,
        },
    ],
}
