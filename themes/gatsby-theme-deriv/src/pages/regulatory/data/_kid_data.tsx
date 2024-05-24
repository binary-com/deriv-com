import { TString } from 'types/generics'

type kidType = {
    title: TString
    ref: string
    is_only_en?: boolean
}

const kid_data: kidType[] = [
    {
        title: '_t_CFDs - Forex_t_',
        ref: 'kid_deriv_forex.pdf',
    },
    {
        title: '_t_CFDs - Stocks_t_',
        ref: 'kid_deriv_Stocks.pdf',
    },

    {
        title: '_t_CFDs - Stock indices_t_',
        ref: 'kid_deriv_Stock_Indices.pdf',
    },
    {
        title: '_t_CFDs - Cryptocurrencies_t_',
        ref: 'kid_deriv_crypto.pdf',
    },
    {
        title: '_t_CFDs - Commodities_t_',
        ref: 'kid_deriv_commodities.pdf',
    },
    {
        title: '_t_CFDs - Derived indices: Volatility Indices_t_',
        ref: 'kid_deriv_volatility.pdf',
    },
    {
        title: '_t_CFDs - Synthetics: Crash 300 Index_t_',
        ref: 'kid_deriv_CFD_synthetic_crash_300.pdf',
        is_only_en: true,
    },
    {
        title: '_t_CFDs - ETFs_t_',
        ref: 'kid_deriv_cfds_etfs.pdf',
        is_only_en: true,
    },
    {
        title: '_t_CFDs - Synthetics: DEX_t_',
        ref: 'kid_deriv_cfds_dex.pdf',
        is_only_en: true,
    },
    {
        title: '_t_CFDs - Synthetics: Drift Switch Index_t_',
        ref: 'kid_deriv_cfds_dsi.pdf',
        is_only_en: true,
    },
    {
        title: '_t_CFDs - Derived indices: Jump Indices_t_',
        ref: 'kid_deriv_cfds_jump_indices.pdf',
        is_only_en: true,
    },
]

const kid_data_options = [
    {
        title: '_t_Vanilla Options - Derived indices_t_',
        ref: 'kid_deriv_vanilla.pdf',
        is_only_en: true,
    },
]
const kid_data_multiplier = [
    {
        title: '_t_Multipliers - Forex_t_',
        ref: 'kid_deriv_multipliers_forex.pdf',
    },
    {
        title: '_t_Multipliers - Cryptocurrencies_t_',
        ref: 'kid_deriv_multipliers_cryptocurrencies.pdf',
    },
    {
        title: '_t_Multipliers - Synthetics: Volatility 250 (1s) Index_t_',
        ref: 'kid_deriv_multipliers_synthetics_vol_250.pdf',
        is_only_en: true,
    },
    {
        title: '_t_Multipliers - Synthetics: Crash 300 Index_t_',
        ref: 'kid_deriv_multipliers_synthetics_crash_300.pdf',
        is_only_en: true,
    },
]

export { kid_data, kid_data_multiplier, kid_data_options}
