import StraightForward from 'images/svg/options/straightforward.svg'
import Significant from 'images/svg/options/significant.svg'
import LowCapital from 'images/svg/options/low_capital.svg'
import RiskManagement from 'images/svg/options/risk_management.svg'
import TradeSmartly from 'images/svg/options/trade_smartly.svg'
import { TString } from 'types/generics'

type AccumulatorContentProps = {
    src: string
    alt: TString
    item_title: TString
    text: TString
}

const accumulator_content: AccumulatorContentProps[] = [
    {
        src: StraightForward,
        alt: '_t_Low_t_',
        item_title: '_t_Straightforward trading_t_',
        text: '_t_Define your stake amount, choose your accumulator value, and start trading._t_',
    },
    {
        src: Significant,
        alt: '_t_Low_t_',
        item_title: '_t_Significant profit potential_t_',
        text: '_t_Your payout can potentially grow by 1% or 5% on average per tick._t_',
    },
    {
        src: LowCapital,
        alt: '_t_Low_t_',
        item_title: '_t_Low capital requirement_t_',
        text: '_t_You can open a position for as low as 1 USD._t_',
    },
    {
        src: RiskManagement,
        alt: '_t_Low_t_',
        item_title: '_t_Risk management_t_',
        text: '_t_You can set a take profit/payout level. When this level is reached, your contract will be automatically closed._t_',
    },
    {
        src: TradeSmartly,
        alt: '_t_Low_t_',
        item_title: '_t_Trade smartly_t_',
        text: '_t_Tick counters are available between consecutive barrier crosses to help you make smart trading decisions._t_',
    },
]

export default accumulator_content
