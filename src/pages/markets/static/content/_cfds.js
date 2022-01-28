import React from 'react'
import {
    CrashBoom,
    Energy,
    StepIndices,
    VolatilityIndices,
    AmericanStocks,
} from '../../instruments/_submarkets'
import {
    crash_boom_eu,
    cryptocurrencies_cfds,
    exotic_pairs,
    jump_indices,
    major_pairs,
    metals,
    micro_pairs,
    minor_pairs_cfds,
    range_break,
    smart_fx,
    stocks_american_indices,
    stocks_asian_indices,
    stocks_european_indices,
    volatility_indices_eu,
} from '../../instruments/_market-symbols'
import {
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
import Symbol from 'pages/markets/components/helper/_symbol'
import { Localize } from 'components/localization'

export const commodities_cfds = {
    markets_list: {
        col: 4,
    },
    content: [
        {
            title: <Localize translate_text="Metals" />,
            component: <Symbol instruments_type={metals} />,
        },
        {
            title: <Localize translate_text="Energy" />,
            component: <Energy />,
        },
    ],
}

export const forex_cfds = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="Major pairs" />,
            component: <Symbol instruments_type={major_pairs} />,
        },
        {
            title: <Localize translate_text="Minor pairs" />,
            component: <Symbol instruments_type={minor_pairs_cfds} />,
        },
        {
            title: <Localize translate_text="Exotic pairs" />,
            component: <Symbol instruments_type={exotic_pairs} />,
        },
        {
            title: <Localize translate_text="Micro pairs" />,
            component: <Symbol instruments_type={micro_pairs} />,
        },
        {
            title: <Localize translate_text="SmartFX" />,
            component: <Symbol instruments_type={smart_fx} />,
            details: SmartFXDetails,
        },
    ],
}

export const forex_cfds_eu_uk = {
    markets_list: {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    },
    content: [
        {
            title: <Localize translate_text="Major pairs" />,
            component: <Symbol instruments_type={major_pairs} />,
        },
        {
            title: <Localize translate_text="Minor pairs" />,
            component: <Symbol instruments_type={minor_pairs_cfds} />,
        },
    ],
}

export const synthetic_cfds = {
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
            component: <Symbol instruments_type={jump_indices} />,
            details: JumpIndicesDetails,
        },
        {
            title: <Localize translate_text="Step indices" />,
            component: <StepIndices />,
            details: StepIndicesDetails,
        },
        {
            title: <Localize translate_text="Range break indices" />,
            component: <Symbol instruments_type={range_break} />,
            details: RangeBreakIndicesDetails,
        },
    ],
}

export const synthetic_cfds_eu = {
    has_global_accordion: true,
    template: 2,
    content: [
        {
            title: <Localize translate_text="Volatility indices" />,
            component: <Symbol instruments_type={volatility_indices_eu} />,
            details: VolatilityIndicesDetailsEU,
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            mobile_title: (
                <Localize translate_text="Crash/<0></0>Boom" components={[<br key={0} />]} />
            ),
            component: <Symbol instruments_type={crash_boom_eu} />,
            details: CrashBoomDetailsEU,
        },
    ],
}

export const stock_cfds = {
    template: 2,
    content: [
        {
            title: (
                <Localize translate_text="American<0></0>indices" components={[<br key={0} />]} />
            ),
            component: <Symbol instruments_type={stocks_american_indices} />,
            details: AmericanIndicesDetails,
            tablet_col: 2,
            mobile_col: 2,
            padding: '32px 16px',
            flex: true,
            gap: '16px',
        },
        {
            title: <Localize translate_text="Asian<0></0>indices" components={[<br key={0} />]} />,
            component: <Symbol stocks_asian_indices={stocks_asian_indices} />,
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
            component: <Symbol instruments_type={stocks_european_indices} />,
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
            title: <Localize translate_text="Crypto pairs" />,
            component: <Symbol instruments_type={cryptocurrencies_cfds} />,
        },
    ],
}
