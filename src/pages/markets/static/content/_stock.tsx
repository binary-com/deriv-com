import React from 'react'
import { SimpleStepContentElement } from './_simple_step_content'
import ExtendedTime from 'images/svg/stock-indices/stocks-minimum-capital.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import MinimalCapital from 'images/svg/stock-indices/stocks-extended-time.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-another.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import { TString } from 'types/generics'

type Stock = {
    src: string
    text: TString
    alt: string
}

export const simple_step_content_stock: SimpleStepContentElement[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
        icon: <img src={PractiseIcon} alt="Practise" width="32" height="32" />,
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading stocks & indices and other markets._t_',
        icon: <img src={TradeIcon} alt="Trade" width="32" height="28" />,
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        icon: <img src={WithdrawIcon} alt="Withdraw" width="32" height="32" />,
    },
]

const stocks: Stock[] = [
    {
        src: ExtendedTime,
        alt: 'Low capital',
        text: '_t_Minimal capital requirements, limited risk_t_',
    },
    {
        src: MinimalCapital,
        alt: 'Time to trade',
        text: '_t_Extended trading time, up to 18 hours a day_t_',
    },
    {
        src: WithdrawIcon,
        alt: 'Easy deposits and withdrawals',
        text: '_t_Fast and secure deposit and withdrawal options_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: 'Simple trading platforms',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: FriendlySupport,
        alt: 'Smart support team',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]
export default stocks
