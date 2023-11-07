import { TSpecification } from '../_types'

const etfs_specification: TSpecification = {
    market: 'etfs',
    dl_title: '_t_Dynamic tiers ⁠— Stock indices_t_',
    dl_data: [
        {
            from: 0.1,
            to: 5,
            leverage: 300,
        },
        {
            from: 5.01,
            to: 50,
            leverage: 200,
        },
        {
            from: 50.01,
            to: 100,
            leverage: 100,
        },
    ],
    data: [
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'AGG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.13,
            target_spread: 0.13,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -4,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'ARKK.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -2,
            swap_short: -5,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'DIA.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.22,
            target_spread: 0.23,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -3,
            swap_short: -11,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'EEM.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -2,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'EFA.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -3,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'ERX.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'GDX.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'GLD.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.16,
            target_spread: 0.16,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -2,
            swap_short: -5,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'HYG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -4,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IEMG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -2,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IJR.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.13,
            target_spread: 0.13,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -4,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IVV.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.24,
            target_spread: 0.25,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -4,
            swap_short: -14,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IVW.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -2,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IWM.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.16,
            target_spread: 0.16,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -2,
            swap_short: -7,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'LQD.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.13,
            target_spread: 0.13,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -2,
            swap_short: -6,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'QID.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SDS.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SLV.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SPXS.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -3,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SPY.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.24,
            target_spread: 0.24,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -4,
            swap_short: -14,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'TBT.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'TQQQ.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'UNG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -1,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VEA.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -2,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VNQ.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -4,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VOO.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.23,
            target_spread: 0.24,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -4,
            swap_short: -12,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VTI.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.17,
            target_spread: 0.17,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -4,
            swap_short: -13,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VWO.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -2,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'XLE.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -2,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'XLF.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -1,
            swap_short: -2,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'XLK.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.14,
            target_spread: 0.14,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: -2,
            swap_short: -6,
            trading_hours: 'Mon-Fri\n13:35-20:00 GMT',
        },
    ],
    eu_data: [
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'AGG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.13,
            target_spread: 0.13,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-4',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'ARKK.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-2',
            swap_short: '-5',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'DIA.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.22,
            target_spread: 0.23,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-3',
            swap_short: '-11',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'EEM.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-2',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'EFA.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-3',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'ERX.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.15,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'GDX.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'GLD.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.16,
            target_spread: 0.16,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-2',
            swap_short: '-5',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'HYG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-4',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IEMG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-2',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IJR.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.13,
            target_spread: 0.13,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-4',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IVV.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.24,
            target_spread: 0.25,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-4',
            swap_short: '-14',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IVW.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-2',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'IWM.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.16,
            target_spread: 0.16,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-2',
            swap_short: '-7',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'LQD.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.13,
            target_spread: 0.13,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-2',
            swap_short: '-6',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'QID.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SDS.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SLV.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SPXS.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-3',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'SPY.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.24,
            target_spread: 0.24,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-4',
            swap_short: '-14',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'TBT.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'TQQQ.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'UNG.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-1',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VEA.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-2',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VNQ.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-4',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VOO.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.23,
            target_spread: 0.24,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-4',
            swap_short: '-12',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VTI.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.17,
            target_spread: 0.18,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-4',
            swap_short: '-13',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'VWO.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.11,
            target_spread: 0.11,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-2',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'XLE.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.12,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-2',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'XLF.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-1',
            swap_short: '-2',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
        {
            instrument: {
                symbol: 'STOCKSUS500',
                instrument: 'XLK.US',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.14,
            target_spread: 0.14,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-2',
            swap_short: '-6',
            trading_hours: 'Mon-Fri 13:35-20:00 GMT',
        },
    ],
}

export default etfs_specification
