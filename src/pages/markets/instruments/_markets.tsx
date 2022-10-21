import React from 'react'
import Symbol from '../components/helper/_symbol'
import {
    american_stocks,
    stocks_american_indices,
    americas,
    asia_oceania,
    stocks_asian_indices,
    continuous_indices,
    crash_boom_multipliers,
    crash_boom_eu,
    crash_boom,
    crash_boom_trade_type_eu,
    cryptocurrencies_cfds,
    cryptocurrencies_multipliers,
    cryptocurrencies_trade_type,
    daily_reset_indices,
    energy_options,
    europe,
    stocks_european_indices,
    exotic_pairs,
    jump_indices,
    major_pairs,
    metals_options,
    micro_pairs,
    range_break,
    step_indices,
    swap_free_pairs,
    volatility_indices_eu,
    volatility_indices,
    volatility_indices_trade_type_eu,
} from './_market-symbols'
import { useCountryRule } from 'components/hooks/use-country-rule'

export const AmericanIndices = () => <Symbol instruments_type={stocks_american_indices} />

export const AmericanStocks = () => {
    return <Symbol instruments_type={american_stocks} />
}

export const Americas = () => <Symbol instruments_type={americas} />

export const AsiaOceania = () => <Symbol instruments_type={asia_oceania} />

export const AsianIndices = () => <Symbol instruments_type={stocks_asian_indices} />

export const ContinuousIndices = () => <Symbol instruments_type={continuous_indices} />

export const CrashBoomEU = () => <Symbol instruments_type={crash_boom_eu} />

export const CrashBoomMultipliers = () => {
    const { is_eu } = useCountryRule()
    return <Symbol instruments_type={is_eu ? crash_boom_eu : crash_boom_multipliers} />
}

export const CrashBoom = () => {
    const { is_eu } = useCountryRule()
    return <Symbol instruments_type={is_eu ? crash_boom_trade_type_eu : crash_boom} />
}

export const CryptocurrenciesCFDs = () => {
    return <Symbol instruments_type={cryptocurrencies_cfds} />
}

export const CryptocurrenciesMultipliers = () => (
    <Symbol instruments_type={cryptocurrencies_multipliers} />
)

export const CryptocurrenciesTradeType = () => (
    <Symbol instruments_type={cryptocurrencies_trade_type} />
)

export const DailyResetIndices = () => <Symbol instruments_type={daily_reset_indices} />

export const EnergyCFDs = () => <Symbol instruments_type={energy_cfds} />

export const EnergyOptions = () => <Symbol instruments_type={energy_options} />

export const Europe = () => <Symbol instruments_type={europe} />

export const EuropeanIndices = () => <Symbol instruments_type={stocks_european_indices} />

export const ExoticPairs = () => <Symbol instruments_type={exotic_pairs} />

export const JumpIndices = () => <Symbol instruments_type={jump_indices} />

export const MajorPairs = () => <Symbol instruments_type={major_pairs} />

export const MetalsCFDs = () => <Symbol instruments_type={metals_cfds} />

export const MetalsOptions = () => {
    const { is_row } = useCountryRule()
    return is_row ? <Symbol instruments_type={metals_options} /> : <></>
}

export const MicroPairs = () => <Symbol instruments_type={micro_pairs} />

export const MinorPairsCFDS = () => <Symbol instruments_type={minor_pairs_cfds} />

export const MinorPairsOptions = () => <Symbol instruments_type={minor_pairs_options} />

export const RangeBreak = () => <Symbol instruments_type={range_break} />

export const StepIndices = () => <Symbol instruments_type={step_indices} />

export const SwapFreePairs = () => <Symbol instruments_type={swap_free_pairs} />

export const VolatilityIndicesEU = () => <Symbol instruments_type={volatility_indices_eu} />

export const VolatilityIndices = () => {
    const { is_eu } = useCountryRule()
    return (
        <Symbol instruments_type={is_eu ? volatility_indices_trade_type_eu : volatility_indices} />
    )
}
