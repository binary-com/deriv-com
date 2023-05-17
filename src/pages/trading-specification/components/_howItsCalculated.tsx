import React from 'react'
import CalculationCard from './_calculationCard'
import FxOneLot from 'images/svg/trading-specification/fx_one_lot.svg'
import FxFourLot from 'images/svg/trading-specification/fx_four_lot.svg'
import FxFiveLot from 'images/svg/trading-specification/fx_five_lot.svg'
import FxTotalMargin from 'images/svg/trading-specification/fx_total_margin.svg'
import CommoditiesOneLot from 'images/svg/trading-specification/commodities_one_lot.svg'
import CommoditiesFourLot from 'images/svg/trading-specification/commodities_four_lot.svg'
import CommoditiesFiveLot from 'images/svg/trading-specification/commodities_five_lot.svg'
import CommoditiesTotalMargin from 'images/svg/trading-specification/commodities_total_margin.svg'
import CryptoOneLot from 'images/svg/trading-specification/crypto_one_lot.svg'
import CryptoTwoLot from 'images/svg/trading-specification/crypto_two_lot.svg'
import Crypto200Lot from 'images/svg/trading-specification/crypto_two_lot_hundred.svg'
import CryptoTotalMargin from 'images/svg/trading-specification/crypto_total_margin.svg'
import StockOneLot from 'images/svg/trading-specification/stocks_five_lot.svg'
import Stock45Lot from 'images/svg/trading-specification/stocks_fourty_five_lot.svg'
import Stock50Lot from 'images/svg/trading-specification/stocks_fifty_lot.svg'
import StockTotalMargin from 'images/svg/trading-specification/stocks_total_margin.svg'

type TCalculationProps = {
    market: string
}
type ListType = {
    details?: string
    icon?: string
}[]
type DlMarketType = {
    title: string
    description: string
    list: ListType
}
export type DlMarketTypeProps = {
    data: DlMarketType
}
const HowItsCalculated = ({ market }: TCalculationProps) => {
    return (
        <>
            {market == 'forex' && <CalculationCard data={forex_dynamic_leverage} />}
            {market == 'indices' && <CalculationCard data={stocks_dynamic_leverage} />}
            {market == 'cryptocurrency' && <CalculationCard data={crypto_dynamic_leverage} />}
            {market == 'commodities' && <CalculationCard data={commodities_dynamic_leverage} />}
        </>
    )
}

const forex_dynamic_leverage: DlMarketType = {
    title: '_t_Example of dynamic leverage calculation for forex_t_',
    description: '_t_<0>10 lots</0> traded with DL on <0>USD/JPY</0> is split between:_t_',
    list: [
        {
            details: '_t_<0>1 lot</0> with 1,500 leverage:_t_',
            icon: FxOneLot,
        },
        {
            details: '_t_<0>4 lots</0> with 1,000 leverage:_t_',
            icon: FxFourLot,
        },
        {
            details: '_t_<0>5 lots</0> with 500 leverage:_t_',
            icon: FxFiveLot,
        },
        {
            details: '_t_<0>Total margin</0> requirement:_t_',
            icon: FxTotalMargin,
        },
    ],
}
const commodities_dynamic_leverage: DlMarketType = {
    title: '_t_Example of dynamic leverage calculation for metals_t_',
    description: '_t_<0>10 lots</0> traded with DL on <0>XAU/USD</0> is split between:_t_',
    list: [
        {
            details: '_t_<0>1 lot</0> with 1000 leverage:_t_',
            icon: CommoditiesOneLot,
        },
        {
            details: '_t_<0>4 lots</0> with 500 leverage:_t_',
            icon: CommoditiesFourLot,
        },
        {
            details: '_t_<0>5 lots</0> with 100 leverage:_t_',
            icon: CommoditiesFiveLot,
        },
        {
            details: '_t_<0>Total margin</0> requirement:_t_',
            icon: CommoditiesTotalMargin,
        },
    ],
}
const crypto_dynamic_leverage: DlMarketType = {
    title: '_t_Example of dynamic leverage calculation for cryptocurrencies_t_',
    description: '_t_<0>5 lots</0> traded with DL on <0>BTC/USD</0> is split between:_t_',
    list: [
        {
            details: '_t_<0>1 lot</0> with 300 leverage:_t_',
            icon: CryptoOneLot,
        },
        {
            details: '_t_<0>2 lots</0> with 200 leverage:_t_',
            icon: CryptoTwoLot,
        },
        {
            details: '_t_<0>2 lots</0> with 100 leverage:_t_',
            icon: Crypto200Lot,
        },
        {
            details: '_t_<0>Total margin</0> requirement:_t_',
            icon: CryptoTotalMargin,
        },
    ],
}
const stocks_dynamic_leverage: DlMarketType = {
    title: '_t_Example of dynamic leverage calculation for stock indices_t_',
    description: '_t_<0>100 lots</0> traded with DL on <0>US Tech 100</0> is split between:_t_',
    list: [
        {
            details: '_t_<0>5 lots</0> with 300 leverage:_t_',
            icon: StockOneLot,
        },
        {
            details: '_t_<0>45 lots</0> with 200 leverage:_t_',
            icon: Stock45Lot,
        },
        {
            details: '_t_<0>50 lots</0> with 100 leverage:_t_',
            icon: Stock50Lot,
        },
        {
            details: '_t_<0>Total margin</0> requirement:_t_',
            icon: StockTotalMargin,
        },
    ],
}

export default HowItsCalculated
