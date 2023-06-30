import React from 'react'
import { TMarket, TSimpleStepContent } from './_types'
import { localize } from 'components/localization'
import RealWorld from 'images/svg/markets/real-world.svg'
import TightSpreads from 'images/svg/markets/tight-spread-new.svg'
import TwentyFourHourTrading from 'images/svg/jump-indices/jump-indices-24-7-trading.svg'
import Deposit from 'images/svg/markets/deposit-and-withdrawal-new.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'
import PractiseIcon from 'images/svg/markets/aim-new.svg'
import TradeIcon from 'images/svg/markets/trade-new.svg'

export const simple_step_content_derived: TSimpleStepContent[] = [
    {
        header: '_t_Practise_t_',
        text: '_t_Open a demo account and practise with an unlimited amount of virtual funds._t_',
        icon: <img src={PractiseIcon} alt={localize('_t_Practise_t_')} width="32" height="32" />,
    },
    {
        header: '_t_Trade_t_',
        text: '_t_Open a real account, make a deposit, and start trading forex and other markets._t_',
        icon: <img src={TradeIcon} alt={localize('_t_Trade_t_')} width="32" height="28" />,
    },
    {
        header: '_t_Withdraw_t_',
        text: '_t_Conveniently withdraw your funds through any of our supported withdrawal methods._t_',
        icon: <img src={Deposit} alt={localize('_t_Withdraw_t_')} width="32" height="32" />,
    },
]

export const derived_content: TMarket[] = [
    {
        src: RealWorld,
        alt: '_t_realworld market values_t_',
        text: '_t_Market-based values with limited influence from real-world events_t_',
    },
    {
        src: TightSpreads,
        alt: '_t_tighter spreads_t_',
        text: '_t_Competitively tighter spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_responsive platform_t_',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: TwentyFourHourTrading,
        alt: '_t_twenty four hour trading_t_',
        text: '_t_24-hour trading (Monday-Friday), based on forex market hours_t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_friendly support_t_',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]

export const derived_content_eu: TMarket[] = [
    {
        src: RealWorld,
        alt: '_t_realworld market values_t_',
        text: '_t_Market-based values with limited influence from real-world events_t_',
    },
    {
        src: TightSpreads,
        alt: '_t_tighter spreads_t_',
        text: '_t_Competitively tighter spreads_t_',
    },
    {
        src: ResponsiveWebsite,
        alt: '_t_responsive platform_t_',
        text: '_t_Responsive, easy-to-use platforms_t_',
    },
    {
        src: TwentyFourHourTrading,
        alt: '_t_twenty four hour trading_t_',
        text: '_t_24-hour trading (Monday-Friday), based on forex market hours_t_',
    },
    {
        src: FriendlySupport,
        alt: '_t_friendly support_t_',
        text: '_t_Smart and friendly support, 7 days a week_t_',
    },
]
