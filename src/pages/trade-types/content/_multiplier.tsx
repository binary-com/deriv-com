import Risk from 'images/svg/trade-types/risk.svg'
import Exposure from 'images/svg/trade-types/exposure.svg'
import Responsive from 'images/svg/trade-types/responsive.svg'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import TradeAnytime from 'images/svg/trade-types/trade-anytime.svg'
import Crash from 'images/svg/trade-types/crash.svg'
import { TString } from 'types/generics'

type multipliers_content = {
    src: string
    text: TString
    item_title: TString
    item_title_eu?: TString
    text_eu?: TString
    alt: TString
}

export const multipliers_content: multipliers_content[] = [
    {
        src: Risk,
        alt: '_t_Better risk management_t_',
        item_title_eu: '_t_Better risk management_t_',
        item_title: '_t_Better risk management_t_',
        text: '_t_Customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation._t_',
        text_eu:
            '_t_Customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation._t_',
    },
    {
        src: Exposure,
        alt: '_t_Increased market exposure_t_',
        item_title: '_t_Increased market exposure_t_',
        item_title_eu: '_t_Increased market exposure_t_',
        text: '_t_Get more market exposure while limiting risk to your stake amount._t_',
        text_eu: '_t_Get more market exposure while limiting risk to your stake amount._t_',
    },
    {
        src: Responsive,
        alt: '_t_Secure, responsive platform_t_',
        item_title: '_t_Secure, responsive platform_t_',
        item_title_eu: '_t_Secure, responsive platform_t_',
        text: '_t_Enjoy trading on a secure, intuitive platform built for new and expert traders._t_',
        text_eu:
            '_t_Enjoy trading on a secure, intuitive platform built for new and expert traders._t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_Expert and friendly support_t_',
        item_title: '_t_Expert and friendly support_t_',
        item_title_eu: '_t_Expert and friendly support_t_',
        text: '_t_Get expert, friendly support when you need it._t_',
        text_eu: '_t_Get expert, friendly support when you need it._t_',
    },
    {
        src: TradeAnytime,
        alt: '_t_Trade 24/7, 365 days a year_t_',
        item_title: '_t_Trade 24/7, 365 days a year_t_',
        item_title_eu: '_t_Trade 24/7, 365 days a year_t_',
        text: '_t_Offered on forex and synthetics, you can trade multipliers 24/7, all-year-round._t_',
        text_eu:
            '_t_Trade multipliers on synthetics 24/7, 365 days a year. Trade multipliers on forex and cryptocurrencies round the clock on weekdays._t_',
    },
    {
        src: Crash,
        alt: '_t_Crash/Boom indices_t_',
        item_title: '_t_Crash/Boom indices_t_',
        item_title_eu: '_t_Crash/Boom indices_t_',
        text: '_t_Predict and gain from exciting spikes and dips with our Crash/Boom indices._t_',
        text_eu:
            '_t_Predict and gain from exciting spikes and dips with our Crash/Boom indices._t_',
    },
]
