import { TMarket, TSimpleStepContent } from './_types'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import MetalAndOil from 'images/svg/markets/precious-metals-and-oils-new.svg'
import NoCommission from 'images/svg/markets/no-commission-new.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/responsive.svg'
import VariableSpreads from 'images/svg/markets/variable-spreads-new.svg'

export const simple_step_content_commodities: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading commodities and other markets. _t_',
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
    },
]

const commodities: TMarket[] = [
    {
        src: VariableSpreads,
        alt: '_t_Fixed and variable_t_',
        text: '_t_Competitive fixed and variable spreads_t_',
    },
    {
        src: NoCommission,
        alt: '_t_No commission_t_',
        text: '_t_No commission on any commodity contract_t_',
    },
    {
        src: MetalAndOil,
        alt: '_t_Trading platform_t_',
        text: '_t_All four precious metals and crude oil available_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_Easy platform_t_',
        text: '_t_Easy-to-use platforms, superior charts_t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_Customer help_t_',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]

export default commodities
