import { TMarket, TSimpleStepContent } from './_types'
import ExtendedTime from 'images/svg/stock-indices/stocks-extented-time.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import LowCapital from 'images/svg/stock-indices/lowcapital.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'
import WithdrawIcon from 'images/svg/stock-indices/deposit-and-withdrawal-new.svg'

export const simple_step_content_stock: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading stocks & indices and other markets._t_',
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

const stocks: TMarket[] = [
    {
        src: LowCapital,
        alt: '_t_Low capital_t_',
        text: '_t_Minimal capital requirements, limited risk_t_',
    },
    {
        src: ExtendedTime,
        alt: '_t_Time to trade_t_',
        text: '_t_Extended trading time, up to 18 hours a day_t_',
    },
    {
        src: WithdrawIcon,
        alt: '_t_Easy deposits and withdrawals_t_',
        text: '_t_Fast and secure deposit and withdrawal options_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_Simple trading platforms_t_',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_Smart support team_t_',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]

export default stocks
