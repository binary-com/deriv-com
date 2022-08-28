import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import type { SimpleStepsContent } from 'components/custom/_simple-steps'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'
import WithdrawIcon from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import FriendlySupport from 'images/svg/markets/friendly-support-new.svg'
import MetalAndOil from 'images/svg/markets/precious-metals-and-oils-new.svg'
import NoCommission from 'images/svg/markets/no-commission-new.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website-new.svg'
import VariableSpreads from 'images/svg/markets/variable-spreads-new.svg'

export type CommoditiesContent = {
    src: string
    text: ReactElement
}
export const simple_step_content_commodities: SimpleStepsContent[] = [
    {
        header: <Localize translate_text="_t_Practise_t_" />,
        text: (
            <Localize translate_text="_t_Open a demo account and practise with an unlimited amount of virtual funds._t_" />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="_t_Trade_t_" />,
        text: (
            <Localize translate_text="_t_Open a real account, make a deposit, and start trading commodities and other markets. _t_" />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="_t_Withdraw_t_" />,
        text: (
            <Localize translate_text="_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_" />
        ),
        icon: <img src={WithdrawIcon} alt="" width="32" height="32" />,
    },
]
const commodities: CommoditiesContent[] = [
    {
        src: VariableSpreads,
        text: <Localize translate_text="_t_Competitive fixed and variable spreads_t_" />,
    },
    {
        src: NoCommission,
        text: <Localize translate_text="_t_No commission on any commodity contract_t_" />,
    },
    {
        src: MetalAndOil,
        text: <Localize translate_text="_t_All four precious metals and crude oil available_t_" />,
    },
    {
        src: ResponsiveWebsite,
        text: <Localize translate_text="_t_Easy-to-use platforms, superior chart technology_t_" />,
    },
    {
        src: FriendlySupport,
        text: <Localize translate_text="_t_Smart and friendly support, 7 days a week_t_" />,
    },
]

export default commodities
