import { TSpecification } from '../_types'

const crypto_specification: TSpecification = {
    market: 'cryptocurrency',
    data: [
        {
            is_row: true,
            symbol: 'ADAUSD',
            instrument: 'ADAUSD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00035,
            target_spread: 0.0006,
            max_effective_leverage: 2,
            margin_requirement: 50,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            is_row: true,
            symbol: 'ALGUSD',
            instrument: 'ALGUSD',
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.0006,
            max_effective_leverage: 2,
            margin_requirement: 50,
            swap_long: -0.04,
            swap_short: -0.04,
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
    ],
}
export default crypto_specification
