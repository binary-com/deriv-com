import React from 'react'
import { CrashBoom, StepIndices } from '../../instruments/_submarkets'
import {
    continuous_indices,
    crash_boom_eu,
    cryptocurrencies_multipliers,
    jump_indices,
    major_pairs,
    smart_fx,
    volatility_indices_eu,
} from '../../instruments/_market-symbols'
import Symbol from '../../components/helper/_symbol'
import {
    ContinuousIndicesDetails,
    CrashBoomDetails,
    CrashBoomDetailsEU,
    StepIndicesDetails,
    CryptocurrenciesDetails,
    VolatilityIndicesDetailsEU,
    SmartFXDetails,
    JumpIndicesDetails,
} from './_details'
import { Localize } from 'components/localization'

export const forex_multiplier = {
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
            title: <Localize translate_text="SmartFX" />,
            component: <Symbol instruments_type={smart_fx} />,
            details: SmartFXDetails,
        },
    ],
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
            component: <Symbol instruments_type={major_pairs} />,
        },
    ],
}

export const synthetic_multiplier = {
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Continuous indices" />,
            component: <Symbol instruments_type={continuous_indices} />,
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
            title: <Localize translate_text="Jump indices" />,
            component: <Symbol instruments_type={jump_indices} />,
            details: JumpIndicesDetails,
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

export const synthetic_multiplier_eu = {
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

export const crypto_multiplier = {
    markets_list: {
        col: 4,
        tablet_col: 4,
        mobile_col: 2,
    },
    has_global_accordion: true,
    content: [
        {
            title: <Localize translate_text="Crypto pairs" />,
            component: <Symbol instruments_type={cryptocurrencies_multipliers} />,
            details: CryptocurrenciesDetails,
        },
    ],
}
