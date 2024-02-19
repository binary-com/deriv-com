import { TSpecification } from '../_types'

const derived_specification: TSpecification = {
    market: 'derived',
    data: [
        {
            instrument: {
                symbol: 'BOOM1000NEW',
                instrument: 'Boom 1000 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            volume_limit: 120,
            minimum_spread: 0.992,
            target_spread: 0.9949,
            max_effective_leverage: 400,
            margin_requirement: 0.25,
            swap_long: -0.0556,
            swap_short: -0.0194,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VBOOMIC300',
                instrument: 'Boom 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            volume_limit: 250,
            minimum_spread: 0.097,
            target_spread: 0.101,
            max_effective_leverage: 100,
            margin_requirement: '1.000',
            swap_long: -0.1111,
            swap_short: -0.0833,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'BOOM500NEW',
                instrument: 'Boom 500 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            volume_limit: 150,
            minimum_spread: 0.23,
            target_spread: 0.232,
            max_effective_leverage: 400,
            margin_requirement: '0.250',
            swap_long: -0.0694,
            swap_short: -0.0278,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'CRASH1000NEW',
                instrument: 'Crash 1000 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            volume_limit: 250,
            minimum_spread: 0.3055,
            target_spread: 0.3067,
            max_effective_leverage: 400,
            margin_requirement: '0.250',
            swap_long: -0.0194,
            swap_short: -0.0556,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VCRASHIC300',
                instrument: 'Crash 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            volume_limit: 50,
            minimum_spread: 0.412,
            target_spread: 0.423,
            max_effective_leverage: 100,
            margin_requirement: '1.000',
            swap_long: -0.0833,
            swap_short: -0.1111,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'CRASH500NEW',
                instrument: 'Crash 500 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            volume_limit: 250,
            minimum_spread: 0.168,
            target_spread: 0.17,
            max_effective_leverage: 400,
            margin_requirement: '0.250',
            swap_long: -0.0278,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP10NEW',
                swf_icon: true,
                instrument: 'Jump 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 20,
            minimum_spread: 2.14,
            target_spread: 2.16,
            max_effective_leverage: 2000,
            margin_requirement: '0.050',
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP100NEW',
                swf_icon: true,
                instrument: 'Jump 100 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 50,
            minimum_spread: 0.19,
            target_spread: 0.22,
            max_effective_leverage: 400,
            margin_requirement: '0.250',
            swap_long: -0.0278,
            swap_short: -0.0278,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP25NEW',
                swf_icon: true,
                instrument: 'Jump 25 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 10,
            minimum_spread: 4.75,
            target_spread: 4.82,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: -0.0069,
            swap_short: -0.0069,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP50NEW',
                swf_icon: true,
                instrument: 'Jump 50 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 14,
            minimum_spread: 3.55,
            target_spread: 3.7,
            max_effective_leverage: 500,
            margin_requirement: '0.200',
            swap_long: -0.0139,
            swap_short: -0.0139,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP75NEW',
                swf_icon: true,
                instrument: 'Jump 75 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 10,
            minimum_spread: 3.13,
            target_spread: 3.35,
            max_effective_leverage: 400,
            margin_requirement: '0.250',
            swap_long: -0.0208,
            swap_short: -0.0208,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'RANGEBREAK100New',
                swf_icon: true,
                instrument: 'Range Break 100 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 15,
            minimum_spread: 1,
            target_spread: 1,
            max_effective_leverage: '-',
            margin_requirement: '400 USD margin per lot',
            swap_long: -30,
            swap_short: -30,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'RANGEBREAK200New',
                swf_icon: true,
                instrument: 'Range Break 200 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 15,
            minimum_spread: 1,
            target_spread: 1,
            max_effective_leverage: '-',
            margin_requirement: '800 USD margin per lot',
            swap_long: -30,
            swap_short: -30,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'STEPINDICES',
                swf_icon: true,
                instrument: 'Step Index',
            },
            contract_size: 10,
            base_currency: 'USD',
            minimum_size: 0.1,
            volume_limit: 150,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: '-',
            margin_requirement: '25 USD margin per lot',
            swap_long: -0.0015,
            swap_short: -0.0015,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX10S1NEW',
                swf_icon: true,
                instrument: 'Volatility 10 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            volume_limit: 700,
            minimum_spread: 0.21,
            target_spread: 0.21,
            max_effective_leverage: 4000,
            margin_requirement: '0.025',
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX10NEW',
                swf_icon: true,
                instrument: 'Volatility 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            volume_limit: 800,
            minimum_spread: 0.165,
            target_spread: 0.165,
            max_effective_leverage: 4000,
            margin_requirement: '0.025',
            swap_long: '-0.0028',
            swap_short: '-0.0028',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX100S1NEW',
                swf_icon: true,
                instrument: 'Volatility 100 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            volume_limit: 340,
            minimum_spread: 0.47,
            target_spread: 0.47,
            max_effective_leverage: 2000,
            margin_requirement: '0.050',
            swap_long: '-0.0278',
            swap_short: '-0.0278',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX100NEW',
                swf_icon: true,
                instrument: 'Volatility 100 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            volume_limit: 400,
            minimum_spread: 0.56,
            target_spread: 0.56,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0278',
            swap_short: '-0.0278',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX2001S',
                swf_icon: true,
                instrument: 'Volatility 200 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.02,
            volume_limit: 10,
            minimum_spread: 0.01,
            target_spread: 0.01,
            max_effective_leverage: 300,
            margin_requirement: '0.333',
            swap_long: '-0.0556',
            swap_short: '-0.0556',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX25S1NEW',
                swf_icon: true,
                instrument: 'Volatility 25 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            volume_limit: 4,
            minimum_spread: 23.74,
            target_spread: 23.74,
            max_effective_leverage: 4000,
            margin_requirement: '0.025',
            swap_long: '-0.0069',
            swap_short: '-0.0069',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX25NEW',
                swf_icon: true,
                instrument: 'Volatility 25 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            volume_limit: 1200,
            minimum_spread: 0.148,
            target_spread: 0.148,
            max_effective_leverage: 3000,
            margin_requirement: '0.033',
            swap_long: '-0.0069',
            swap_short: '-0.0069',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX3001S',
                swf_icon: true,
                instrument: 'Volatility 300 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            volume_limit: 60,
            minimum_spread: 0.01,
            target_spread: 0.01,
            max_effective_leverage: 200,
            margin_requirement: '0.500',
            swap_long: '-0.0833',
            swap_short: '-0.0833',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX50S1NEW',
                swf_icon: true,
                instrument: 'Volatility 50 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            volume_limit: 6,
            minimum_spread: 31.78,
            target_spread: 31.78,
            max_effective_leverage: 3000,
            margin_requirement: '0.033',
            swap_long: '-0.0139',
            swap_short: '-0.0139',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX50NEW',
                swf_icon: true,
                instrument: 'Volatility 50 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 4,
            volume_limit: 5000,
            minimum_spread: 0.024,
            target_spread: 0.024,
            max_effective_leverage: 2000,
            margin_requirement: '0.050',
            swap_long: '-0.0139',
            swap_short: '-0.0139',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX75S1NEW',
                swf_icon: true,
                instrument: 'Volatility 75 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.05,
            volume_limit: 100,
            minimum_spread: 1.36,
            target_spread: 1.36,
            max_effective_leverage: 2000,
            margin_requirement: '0.050',
            swap_long: '-0.0208',
            swap_short: '-0.0208',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX75NEW',
                swf_icon: true,
                instrument: 'Volatility 75 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.001,
            volume_limit: 3,
            minimum_spread: 80,
            target_spread: 80,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0208',
            swap_short: '-0.0208',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX1501S',
                swf_icon: true,
                instrument: 'Volatility 150 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 50,
            minimum_spread: 2.86,
            target_spread: 2.86,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0417',
            swap_short: '-0.0417',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX2501S',
                swf_icon: true,
                instrument: 'Volatility 250 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            volume_limit: 2,
            minimum_spread: 146.38,
            target_spread: 146.38,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0694',
            swap_short: '-0.0694',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'AUDUSD10',
                instrument: 'AUDUSD DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 7.59,
            target_spread: 9.65,
            max_effective_leverage: 500,
            margin_requirement: '0.200',
            swap_long: '-0.0028',
            swap_short: '-0.0028',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'EURUSD10',
                instrument: 'EURUSD DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 8.68,
            target_spread: 9.96,
            max_effective_leverage: 500,
            margin_requirement: '0.200',
            swap_long: '-0.0028',
            swap_short: '-0.0028',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'GBPUSD10',
                instrument: 'GBPUSD DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 8.12,
            target_spread: 9.39,
            max_effective_leverage: 500,
            margin_requirement: '0.200',
            swap_long: '-0.0028',
            swap_short: '-0.0028',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'USDCHF10',
                instrument: 'USDCHF DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 8.34,
            target_spread: 10.67,
            max_effective_leverage: 500,
            margin_requirement: '0.200',
            swap_long: '-0.0028',
            swap_short: '-0.0028',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'USDJPY10',
                instrument: 'USDJPY DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 12.87,
            target_spread: 16.39,
            max_effective_leverage: 500,
            margin_requirement: '0.200',
            swap_long: '-0.0028',
            swap_short: '-0.0028',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'AUDBASKET',
                instrument: 'AUD Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 10,
            minimum_spread: 0.088,
            target_spread: 0.153,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0083',
            swap_short: '-0.0028',
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'EURBASKET',
                instrument: 'EUR Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 10,
            minimum_spread: 0.065,
            target_spread: 0.126,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0083',
            swap_short: '-0.0028',
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'GBPBASKET',
                instrument: 'GBP Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 10,
            minimum_spread: 0.078,
            target_spread: 0.159,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0083',
            swap_short: '-0.0028',
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'GOLDBASKET',
                instrument: 'Gold Basket',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 1,
            minimum_spread: 114.228,
            target_spread: 126.324,
            max_effective_leverage: 200,
            margin_requirement: '0.500',
            swap_long: '-0.0139',
            swap_short: '-0.0003',
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'USDBASKET',
                instrument: 'USD Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 10,
            minimum_spread: 0.067,
            target_spread: 0.135,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0083',
            swap_short: '-0.0028',
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'AUDUSD20',
                instrument: 'AUDUSD DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 12.67,
            target_spread: 16.47,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0056',
            swap_short: '-0.0056',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'EURUSD20',
                instrument: 'EURUSD DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 11.46,
            target_spread: 15.85,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0056',
            swap_short: '-0.0056',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'GBPUSD20',
                instrument: 'GBPUSD DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 13.49,
            target_spread: 16.77,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0056',
            swap_short: '-0.0056',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'USDCHF20',
                instrument: 'USDCHF DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 10.88,
            target_spread: 15.23,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0056',
            swap_short: '-0.0056',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'USDJPY20',
                instrument: 'USDJPY DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 2,
            minimum_spread: 12.67,
            target_spread: 16.91,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0056',
            swap_short: '-0.0056',
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'DEX900DN',
                instrument: 'DEX 900 DOWN Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 20,
            minimum_spread: 1.02,
            target_spread: 1.04,
            max_effective_leverage: 50,
            margin_requirement: '2.000',
            swap_long: '-0.0694',
            swap_short: '-0.0694',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX900UP',
                instrument: 'DEX 900 UP Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 50,
            minimum_spread: 0.88,
            target_spread: 0.89,
            max_effective_leverage: 50,
            margin_requirement: '2.000',
            swap_long: '-0.0694',
            swap_short: '-0.0694',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX600DN',
                instrument: 'DEX 600 DOWN Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 60,
            minimum_spread: 0.84,
            target_spread: 0.86,
            max_effective_leverage: 80,
            margin_requirement: '1.250',
            swap_long: '-0.0694',
            swap_short: '-0.0694',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX600UP',
                instrument: 'DEX 600 UP Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 40,
            minimum_spread: 0.76,
            target_spread: 0.77,
            max_effective_leverage: 80,
            margin_requirement: '1.250',
            swap_long: '-0.0694',
            swap_short: '-0.0694',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX1500DN',
                instrument: 'DEX 1500 DOWN Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 40,
            minimum_spread: 0.92,
            target_spread: 0.94,
            max_effective_leverage: 100,
            margin_requirement: '1.000',
            swap_long: '-0.0694',
            swap_short: '-0.0694',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX1500UP',
                instrument: 'DEX 1500 UP Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 40,
            minimum_spread: 0.89,
            target_spread: 0.91,
            max_effective_leverage: 100,
            margin_requirement: '1.000',
            swap_long: '-0.0694',
            swap_short: '-0.0694',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DSI10M',
                instrument: 'Drift Switch Index 10',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 40,
            minimum_spread: 0.79,
            target_spread: 9.45,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0208',
            swap_short: '-0.0208',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DSI20M',
                instrument: 'Drift Switch Index 20',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 100,
            minimum_spread: 0.43,
            target_spread: 5.19,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0208',
            swap_short: '-0.0208',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DSI30M',
                instrument: 'Drift Switch Index 30',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 60,
            minimum_spread: 0.58,
            target_spread: 7.63,
            max_effective_leverage: 1000,
            margin_requirement: '0.100',
            swap_long: '-0.0208',
            swap_short: '-0.0208',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
    ],
    eu_data: [
        {
            instrument: {
                symbol: 'BOOM300EU',
                instrument: 'Boom 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            volume_limit: 40,
            minimum_spread: 0.147,
            target_spread: 0.151,
            max_effective_leverage: 5,
            margin_requirement: '20.00',
            swap_long: '-0.11',
            swap_short: '-0.08',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'CRASH300EU',
                instrument: 'Crash 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            volume_limit: 10,
            minimum_spread: 0.215,
            target_spread: 0.226,
            max_effective_leverage: 5,
            margin_requirement: '20.00',
            swap_long: '-0.08',
            swap_short: '-0.11',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX1501S',
                instrument: 'Volatility 150 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            volume_limit: 5,
            minimum_spread: 2.86,
            target_spread: 2.86,
            max_effective_leverage: 5,
            margin_requirement: '20.00',
            swap_long: '-0.04',
            swap_short: '-0.04',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX2501S',
                instrument: 'Volatility 250 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            volume_limit: 0.25,
            minimum_spread: 146.38,
            target_spread: 146.38,
            max_effective_leverage: 5,
            margin_requirement: '20.00',
            swap_long: '-0.07',
            swap_short: '-0.07',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
    ],
}
export default derived_specification
