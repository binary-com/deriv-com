import { THeaders } from '../_types'

const stocks_specification: THeaders[] = [
    {
        instrument: 'AAPL',
        contract_size: 1,
        base_currency: 'AUD',
        minimum_size: 0.01,
        minimum_spread: 0.013,
        target_spread: 0.02,
        max_effective_leverage: 1000,
        margin_requirement: 0.1,
        swap_long: 0,
        swap_short: 0,
        trading_hours: 'Sun 22:05 - Friday 21:55 GMT Daily Break: 22:00-22:05',
    },
    {
        instrument: 'BMW',
        contract_size: 1,
        base_currency: 'EUR',
        minimum_size: 0.01,
        minimum_spread: 0.013,
        target_spread: 0.02,
        max_effective_leverage: 1000,
        margin_requirement: 0.1,
        swap_long: 0,
        swap_short: 0,
        trading_hours: 'Sun 22:05 - Friday 21:55 GMT Daily Break: 22:00-22:05',
    },
]
export default stocks_specification
