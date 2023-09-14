import { TString } from 'types/generics'

type kidType = {
    title: TString
    ref: string
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
        ref: 'kid_deriv_Stock Indices.pdf',
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
        title: '_t_CFDs - synthetics: Volatility 250 (1s) Index_t_',
        ref: 'kid_deriv_CFD_synthetic_vol_250.pdf',
    },

    {
        title: '_t_CFDs - synthetics: Crash 300 Index_t_',
        ref: 'kid_deriv_CFD_synthetic_crash_300.pdf',
    },
    {
        title: '_t_CFDs - ETFs_t_',
        ref: 'kid_deriv_cfds_etfs.pdf',
    },
]
const kid_data_multiplier = [
    {
        title: '_t_Multipliers - forex_t_',
        ref: 'kid_deriv_multipliers_forex.pdf',
    },
    {
        title: '_t_Multipliers - cryptocurrencies_t_',
        ref: 'kid_deriv_multipliers_cryptocurrencies.pdf',
    },
    {
        title: '_t_Multipliers - synthetics: Volatility 250 (1s) Index_t_',
        ref: 'kid_deriv_multipliers_synthetics_vol_250.pdf',
    },
    {
        title: '_t_Multipliers - synthetics: Crash 300 Index_t_',
        ref: 'kid_deriv_multipliers_synthetics_crash_300.pdf',
    },
]

export { kid_data, kid_data_multiplier }
