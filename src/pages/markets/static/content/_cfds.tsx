import React, { ReactElement } from 'react'
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
    SmartFX,
    BasketIndicesCfds,
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
    BasketFXDetails,
    CrashBoomDetails,
    CrashBoomDetailsEU,
    RangeBreakIndicesDetails,
    SmartFXDetails,
    StepIndicesDetails,
    VolatilityIndicesDetails,
    VolatilityIndicesDetailsEU,
    AmericanIndicesDetails,
    AsianIndicesDetails,
    EuropeanIndicesDetails,
    JumpIndicesDetails,
} from './_details'
import { Localize } from 'components/localization'

export type Content = {
    title: ReactElement
    component: ReactElement
    details?: () => ReactElement
    mobile_title?: ReactElement
}
export type StockContent = {
    title: ReactElement
    component: ReactElement
    tablet_col: number
    mobile_col: number
    padding: string
    gap: string
    flex?: boolean
    col?: number
    details?: () => ReactElement
    gap_mobile?: string
    mobile_template?: boolean
}

export type Cfds = {
    markets_list: {
        col: number
    }
    content: Content[]
}
export type ForexCfds = {
    markets_list: {
        col: number
        tablet_col: number
        mobile_col: number
    }
    content: Content[]
}
export type SyntheticCfds = {
    has_global_accordion: boolean
    content: Content[]
    template?: number
}

export type StockCfds = {
    template: number
    content: StockContent[]
}

export const commodities_cfds: Cfds = {
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

export const forex_cfds: ForexCfds = {
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
            title: <Localize translate_text="SmartFX" />,
            component: <SmartFX />,
            details: SmartFXDetails,
        },
    ],
}

export const synthetic_cfds: SyntheticCfds = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Volatility indices" />,
            component: <VolatilityIndices />,
            details: VolatilityIndicesDetails,
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

export const synthetic_cfds_eu: SyntheticCfds = {
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

export const stock_cfds: StockCfds = {
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

export const basket_cfds = {
    markets_list: {
        col: 4,
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
