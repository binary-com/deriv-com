import { TSpecification } from '../_types'

const crypto_specification: TSpecification = {
    market: 'cryptocurrency',
    dl_title: '_t_Dynamic tiers ⁠— Cryptocurrencies_t_',
    dl_data: [
        {
            from: 0.01,
            to: 1,
            leverage: 300,
        },
        {
            from: 1.01,
            to: 3,
            leverage: 200,
        },
        {
            from: 3.01,
            to: 5,
            leverage: 100,
        },
        {
            from: 5.01,
            to: 10,
            leverage: 50,
        },
    ],
    data: [
        {
            instrument: {
                symbol: 'ADAUSD',
                swf_icon: true,
                instrument: 'ADA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00051,
            target_spread: 0.00093,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ALGORAND',
                swf_icon: true,
                instrument: 'ALG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0003,
            target_spread: 0.0006,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'AVALANCHE',
                swf_icon: true,
                instrument: 'AVA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            minimum_spread: 0.05,
            target_spread: 0.07,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.07',
            swap_short: '-0.07',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BAT',
                swf_icon: true,
                instrument: 'BAT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.00021,
            target_spread: 0.00039,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BCHNEW',
                swf_icon: true,
                instrument: 'BCH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.659,
            target_spread: 0.834,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.05',
            swap_short: '-0.05',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BNBUSD',
                swf_icon: true,
                instrument: 'BNB/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.215,
            target_spread: 0.256,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCETH',
                swf_icon: true,
                instrument: 'BTC/ETH',
            },
            contract_size: 1,
            base_currency: 'ETH',
            minimum_size: 0.01,
            minimum_spread: 0.04904,
            target_spread: 0.04929,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCLTC',
                swf_icon: true,
                instrument: 'BTC/LTC',
            },
            contract_size: 1,
            base_currency: 'LTC',
            minimum_size: 0.01,
            minimum_spread: 0.13576,
            target_spread: 0.22495,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCUSD',
                dl_icon: true,
                swf_icon: true,
                instrument: 'BTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 32.806,
            target_spread: 35.865,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOGUSD',
                swf_icon: true,
                instrument: 'DOG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00008,
            target_spread: 0.00014,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOTUSD',
                swf_icon: true,
                instrument: 'DOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.007,
            target_spread: 0.0011,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DSHUSD1',
                swf_icon: true,
                instrument: 'DSH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.027,
            target_spread: 0.053,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'EOSUSD1',
                swf_icon: true,
                instrument: 'EOS/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00159,
            target_spread: 0.00261,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.07',
            swap_short: '-0.07',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETCUSD',
                swf_icon: true,
                instrument: 'ETC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.018,
            target_spread: 0.024,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETHUSD',
                dl_icon: true,
                swf_icon: true,
                instrument: 'ETH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 1.55709,
            target_spread: 2.18886,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'FILUSD',
                swf_icon: true,
                instrument: 'FIL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.04,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'IOTUSD',
                swf_icon: true,
                instrument: 'IOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0003,
            target_spread: 0.0007,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LNKUSD',
                swf_icon: true,
                instrument: 'LNK/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.012,
            target_spread: 0.016,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LTCUSD',
                swf_icon: true,
                instrument: 'LTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.16348,
            target_spread: 0.21985,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MKRUSD',
                swf_icon: true,
                instrument: 'MKR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 1.08,
            target_spread: 1.47,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MTCUSD',
                swf_icon: true,
                instrument: 'MTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00068,
            target_spread: 0.00087,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'NEOUSD',
                swf_icon: true,
                instrument: 'NEO/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.05,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'OMGUSD',
                swf_icon: true,
                instrument: 'OMG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.003,
            target_spread: 0.005,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'SOLUSD',
                swf_icon: true,
                instrument: 'SOL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            minimum_spread: 0.077,
            target_spread: 0.1,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'TRXUSD',
                swf_icon: true,
                instrument: 'TRX/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00013,
            target_spread: 0.00027,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'UNIUSD',
                swf_icon: true,
                instrument: 'UNI/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.0051,
            target_spread: 0.0079,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XLMUSD',
                swf_icon: true,
                instrument: 'XLM/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1000,
            minimum_spread: 0.00011,
            target_spread: 0.00017,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.03',
            swap_short: '-0.03',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XMRUSD',
                swf_icon: true,
                instrument: 'XMR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.163,
            target_spread: 0.329,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XRPUSD1',
                swf_icon: true,
                instrument: 'XRP/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.001,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XTZUSD',
                swf_icon: true,
                instrument: 'XTZ/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.00177,
            target_spread: 0.00506,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ZECUSD',
                swf_icon: true,
                instrument: 'ZEC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.025,
            target_spread: 0.051,
            max_effective_leverage: 100,
            margin_requirement: '1',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
    ],
    eu_data: [
        {
            instrument: {
                symbol: 'ADAUSD',
                instrument: 'ADA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00051,
            target_spread: 0.00093,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ALGORAND',
                instrument: 'ALG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0003,
            target_spread: 0.0006,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'AVALANCHE',
                instrument: 'AVA/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            minimum_spread: 0.05,
            target_spread: 0.07,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.07',
            swap_short: '-0.07',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BAT',
                instrument: 'BAT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.00021,
            target_spread: 0.00039,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BCHUSD',
                instrument: 'BCH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.659,
            target_spread: 0.834,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.05',
            swap_short: '-0.05',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BNBUSD',
                instrument: 'BNB/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.215,
            target_spread: 0.256,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCETH',
                instrument: 'BTC/ETH',
            },
            contract_size: 1,
            base_currency: 'ETH',
            minimum_size: 0.01,
            minimum_spread: 0.04904,
            target_spread: 0.04929,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCLTC',
                instrument: 'BTC/LTC',
            },
            contract_size: 1,
            base_currency: 'LTC',
            minimum_size: 0.01,
            minimum_spread: 1.36755,
            target_spread: 1.37366,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'BTCUSD',
                instrument: 'BTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 32.806,
            target_spread: 35.865,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOGUSD',
                instrument: 'DOG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00008,
            target_spread: 0.00014,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DOTUSD',
                instrument: 'DOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.007,
            target_spread: 0.011,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'DSHUSD',
                instrument: 'DSH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.027,
            target_spread: 0.053,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'EOSUSD',
                instrument: 'EOS/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00159,
            target_spread: 0.00261,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.07',
            swap_short: '-0.07',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETCUSD',
                instrument: 'ETC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.018,
            target_spread: 0.024,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ETHUSD',
                instrument: 'ETH/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 1.55709,
            target_spread: 2.18886,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'FILUSD',
                instrument: 'FIL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.04,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'IOTUSD',
                instrument: 'IOT/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0003,
            target_spread: 0.0007,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LNKUSD',
                instrument: 'LNK/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.012,
            target_spread: 0.016,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'LTCUSD',
                instrument: 'LTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.16348,
            target_spread: 0.21985,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MKRUSD',
                instrument: 'MKR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 1.08,
            target_spread: 1.47,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'MTCUSD',
                instrument: 'MTC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 100,
            minimum_spread: 0.00068,
            target_spread: 0.00087,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'NEOUSD',
                instrument: 'NEO/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.03,
            target_spread: 0.05,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'OMGUSD',
                instrument: 'OMG/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.003,
            target_spread: 0.005,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'SOLUSD',
                instrument: 'SOL/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            minimum_spread: 0.077,
            target_spread: 0.1,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'TRXUSD',
                instrument: 'TRX/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1500,
            minimum_spread: 0.00013,
            target_spread: 0.00027,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.06',
            swap_short: '-0.06',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'UNIUSD',
                instrument: 'UNI/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.0051,
            target_spread: 0.0079,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XLMUSD',
                instrument: 'XLM/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1000,
            minimum_spread: 0.00011,
            target_spread: 0.00017,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.03',
            swap_short: '-0.03',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XMRUSD',
                instrument: 'XMR/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.163,
            target_spread: 0.329,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XRPUSD',
                instrument: 'XRP/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 500,
            minimum_spread: 0.0005,
            target_spread: 0.001,
            max_effective_leverage: 2,
            margin_requirement: '50.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'XTZUSD',
                instrument: 'XTZ/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 10,
            minimum_spread: 0.00177,
            target_spread: 0.00506,
            max_effective_leverage: 60,
            margin_requirement: '1.67',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
        {
            instrument: {
                symbol: 'ZECUSD',
                instrument: 'ZEC/USD',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.025,
            target_spread: 0.051,
            max_effective_leverage: 60,
            margin_requirement: '1.67',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Sun 00:00 - Sat 23:59',
        },
    ],
}
export default crypto_specification
