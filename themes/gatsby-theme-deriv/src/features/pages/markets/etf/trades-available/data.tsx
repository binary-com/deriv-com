import MT5 from 'images/common/markets/mt5.svg'
import DerivX from 'images/common/markets/derivx.svg'
import { TradeType } from 'features/components/organisms/markets/trade-tab/types'
import DerivcTrader from 'images/svg/trading-platforms/ctrader/ctrader-main-logo.svg'

export const trade_types: TradeType[] = [
    {
        trade_name: '_t_CFDs_t_',
        trade_description_1:
            '_t_CFD trading allows you to trade on the price movement of an asset without buying or owning the underlying asset._t_',
        trade_description_2:
            '_t_On Deriv, you can trade CFDs with high leverage, enabling you to pay just a fraction of the contract’s value. It will amplify your potential gain and also increase your potential loss._t_',
        trade_items: [
            {
                id: 1,
                data: {
                    icon: MT5,
                    name: 'Deriv MT5',
                    link: {
                        type: 'internal',
                        to: '/dmt5',
                    },
                },
            },
            {
                id: 2,
                data: {
                    icon: DerivX,
                    name: '_t_Deriv X_t_',
                    link: {
                        type: 'internal',
                        to: '/derivx',
                    },
                },
                visibility: {
                    is_eu: false,
                },
            },
            {
                id: 3,
                data: {
                    icon: DerivcTrader,
                    name: '_t_Deriv cTrader_t_',
                    link: {
                        type: 'internal',
                        to: '/deriv-ctrader',
                    },
                },
                visibility: {
                    is_eu: false,
                },
            },
        ],
    },
]
