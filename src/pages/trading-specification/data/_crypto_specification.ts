import { THeaders } from '../_types'

const crypto_specification: THeaders[] = [
    {
        instrument: 'BTCUSD',
        contract_size: 1,
        base_currency: 'AUD',
        minimum_size: 0.01,
        minimum_spread: 18.15,
        target_spread: 20.905,
        max_effective_leverage: 100,
        margin_requirement: 1,
        swap_long: -0.06,
        swap_short: -0.06,
        trading_hours: 'Sun 22:05 - Friday 21:55 GMT Daily Break: 22:00-22:05',
    },
    {
        instrument: 'BTCXAG',
        contract_size: 1,
        base_currency: 'XAG',
        minimum_size: 0.01,
        minimum_spread: 1.7984,
        target_spread: 1.7984,
        max_effective_leverage: 100,
        margin_requirement: 1,
        swap_long: -0.06,
        swap_short: -0.06,
        trading_hours: 'Sun 22:05 - Friday 21:55 GMT Daily Break: 22:00-22:05',
    },
]
export default crypto_specification
