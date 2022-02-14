import React, { ReactElement } from 'react'
import {
    ContinuousIndices,
    CrashBoom,
    CrashBoomEU,
    MajorPairs,
    StepIndices,
    CryptocurrenciesMultipliers,
    VolatilityIndicesEU,
    SmartFX,
    BasketIndicesCfds,
} from '../../instruments/_submarkets'
import {
    ContinuousIndicesDetails,
    CrashBoomDetails,
    CrashBoomDetailsEU,
    StepIndicesDetails,
    CryptocurrenciesDetails,
    VolatilityIndicesDetailsEU,
    SmartFXDetails,
    BasketFXDetails,
} from './_details'
import { Localize } from 'components/localization'

type Option = {
    title: ReactElement
    component: ReactElement
    mobile_title?: ReactElement
    details?: () => ReactElement
}

export type ForexAndBasketMultiplier = {
    markets_list: {
        col: number
        tablet_col: number
        mobile_col: number
    }
    content: Option[]
}
export type SyntheticMultiplier = {
    has_global_accordion: boolean
    content: Option[]
    eu_content?: ReactElement[]
    template?: number
}
export type CryptoMultiplier = {
    has_global_accordion: boolean
    markets_list: {
        col: number
        tablet_col: number
        mobile_col: number
    }
    content: Option[]
}

export const forex_multiplier: ForexAndBasketMultiplier = {
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
            title: <Localize translate_text="SmartFX" />,
            component: <SmartFX />,
            details: SmartFXDetails,
        },
    ],
}
export const basket_multiplier: ForexAndBasketMultiplier = {
    markets_list: {
        col: 5,
        tablet_col: 3,
        mobile_col: 1,
    },
    content: [
        {
            title: <Localize translate_text="Basket indices" />,
            component: <BasketIndicesCfds />,
            details: BasketFXDetails,
        },
    ],
}

export const synthetic_multiplier: SyntheticMultiplier = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Continuous indices" />,
            component: <ContinuousIndices />,
            details: ContinuousIndicesDetails,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
            component: <CrashBoom />,
            details: CrashBoomDetails,
        },
        {
            title: <Localize translate_text="Step indices" />,
            component: <StepIndices />,
            details: StepIndicesDetails,
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
    template: 2,
    content: [
        {
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndicesEU />,
            details: VolatilityIndicesDetailsEU,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
            component: <CrashBoomEU />,
            details: CrashBoomDetailsEU,
        },
    ],
}

export const crypto_multiplier: CryptoMultiplier = {
    markets_list: {
        col: 4,
        tablet_col: 4,
        mobile_col: 2,
    },
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            component: <CryptocurrenciesMultipliers />,
            details: CryptocurrenciesDetails,
        },
    ],
}
