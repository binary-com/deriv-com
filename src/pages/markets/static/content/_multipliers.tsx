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
            title: <Localize translate_text="Major pairs" />,
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
            title: <Localize translate_text="Major pairs" />,
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

export const synthetic_multiplier: SyntheticMultiplier = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    content: [
        {
            title: <Localize translate_text="Continuous indices" />,
            component: <ContinuousIndices />,
            details: <ContinuousIndicesDetails />,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
            component: <CrashBoomMultipliers />,
            details: <CrashBoomMultipliersDetails />,
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
    ],
    eu_content: [
        <Localize
            key={0}
            translate_text="Return to player for mulitplier options is in the range of 95.0-99.9% for all indices on an average. Using a different multiplier or duration may affect the RTP."
        />,
    ],
}

export const synthetic_multiplier_eu: SyntheticMultiplier = {
    has_global_accordion: true,
    markets_list: {
        col: 3,
        tablet_col: 3,
    },
    template: 1,
    content: [
        {
            title: <Localize translate_text="Continuous indices" />,
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
            title: <Localize translate_text="Crypto pairs" />,
            component: <CryptocurrenciesMultipliers />,
            details: <CryptocurrenciesDetails />,
        },
    ],
}
