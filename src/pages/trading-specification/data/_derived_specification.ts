import { THeaders } from '../_types'

const derived_specification: THeaders[] = [
    {
        instrument: 'Boom 1000 Index',
        contract_size: 1,
        base_currency: 'AUD',
        minimum_size: 0.2,
        minimum_spread: 0.144,
        target_spread: 0.1485,
        max_effective_leverage: 100,
        margin_requirement: 1,
        swap_long: -0.06,
        swap_short: -0.06,
        trading_hours: 'Sun 22:05 - Friday 21:55 GMT Daily Break: 22:00-22:05',
    },
    {
        instrument: 'Crash 1000 Index',
        contract_size: 1,
        base_currency: 'USD',
        minimum_size: 0.2,
        minimum_spread: 0.088,
        target_spread: 0.0925,
        max_effective_leverage: 100,
        margin_requirement: 1,
        swap_long: -0.06,
        swap_short: -0.06,
        trading_hours: 'Sun 22:05 - Friday 21:55 GMT Daily Break: 22:00-22:05',
    },
]
export default derived_specification
