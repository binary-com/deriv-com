import React, { ReactElement, ReactNode } from 'react'
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
import { Localize } from 'components/localization'

type Option = {
    id: string
    title: ReactElement
    component: ReactElement
    mobile_title?: ReactElement
    details?: ReactNode
}

export type ForexAndBasketMultiplier = {
    markets_list: {
        col: number
        tablet_col: number
        mobile_col: number
    }
    eu_content?: ReactElement[]
    content: Option[]
    template?: number
}

export const forex_multiplier_eu = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="_t_Major pairs_t_" />,
            component: <MajorPairs />,
        },
    ],
}

export type SyntheticMultiplier = {
    has_global_accordion: boolean
    markets_list: {
        col: number
        tablet_col: number
    }
    content: Option[]
    eu_content?: ReactElement[]
    template?: number
}
export type CryptoMultiplier = {
    has_global_accordion: boolean
    template?: number
    markets_list: {
        col: number
        tablet_col: number
        mobile_col: number
    }
    eu_content?: ReactElement[]
    content: Option[]
}

export const forex_multiplier: ForexAndBasketMultiplier = {
    markets_list: {
        col: 5,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            id: 'major-pairs',
            title: <Localize translate_text="_t_Major pairs_t_" />,
            component: <MajorPairs />,
        },
    ],
}
export const basket_multiplier: ForexAndBasketMultiplier = {
    markets_list: {
        col: 5,
        tablet_col: 4,
        mobile_col: 2,
    },
    template: 2,
    content: [
        {
            id: 'commodities-basket',
            title: <Localize translate_text="_t_Commodities Basket_t_" />,
            component: <BasketIndicesCommodities />,
            details: <BasketCommoditiesDetails />,
        },
        {
            id: 'forex-basket',
            title: <Localize translate_text="_t_Forex Basket_t_" />,
            component: <BasketIndicesCfds />,
            details: <BasketFXDetails />,
        },
    ],
}

export const synthetic_multiplier: SyntheticMultiplier = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    content: [
        {
            id: 'continuous-indices',
            title: <Localize translate_text="_t_Continuous indices_t_" />,
            component: <ContinuousIndices />,
            details: <ContinuousIndicesDetails />,
        },
        {
            id: 'crash-boom',
            title: <Localize translate_text="_t_Crash/Boom_t_" />,
            mobile_title: <Localize translate_text="_t_Crash/Boom_t_" />,
            component: <CrashBoomMultipliers />,
            details: <CrashBoomMultipliersDetails />,
        },
        {
            id: 'jump-indices',
            title: <Localize translate_text="_t_Jump indices_t_" />,
            component: <JumpIndices />,
            details: <JumpIndicesDetails />,
        },
        {
            id: 'step-indices',
            title: <Localize translate_text="_t_Step indices_t_" />,
            component: <StepIndices />,
            details: <StepIndicesDetails />,
        },
    ],
    eu_content: [
        <Localize
            key={0}
            translate_text="_t_Return to player for mulitplier options is in the range of 95.0-99.9% for all indices on an average. Using a different multiplier or duration may affect the RTP._t_"
        />,
    ],
}

export const synthetic_multiplier_eu: SyntheticMultiplier = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    template: 3,
    content: [
        {
            title: <Localize translate_text="_t_Volatility indices_t_" />,
            id: 'continuous-indices',
            component: <VolatilityIndicesEU />,
            details: <VolatilityIndicesDetailsEU />,
        },
        {
            id: 'crash-boom',
            title: <Localize translate_text="_t_Crash/Boom_t_" />,
            mobile_title: <Localize translate_text="_t_Crash/Boom_t_" />,
            component: <CrashBoomEU />,
            details: <CrashBoomDetailsEU />,
        },
    ],
}

export const crypto_multiplier: CryptoMultiplier = {
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
            title: <Localize translate_text="_t_Crypto pairs_t_" />,
            component: <CryptocurrenciesMultipliers />,
            details: <CryptocurrenciesDetails />,
        },
    ],
}
