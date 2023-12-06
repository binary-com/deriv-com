import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import Tight from 'images/svg/markets/forex/tight.svg'
import Favourite from 'images/svg/markets/forex/favourite.svg'
import Golong from 'images/svg/markets/forex/go-long.svg'
import Instant from 'images/svg/markets/forex/instant.svg'
import SwapFree from 'images/svg/markets/forex/swap-free.svg'
import { TRegion, TSmartContent, TString } from 'types/generics'

type TCFD = {
    text: TString | ((config: Partial<TRegion>) => TString)
    title: TString | ((config: Partial<TRegion>) => TString)
    text_eu?: TString
    title_eu?: TString
    src: string
    alt: TString
}

type CFDConfig = {
    is_eu: boolean
}

type SmartCFD = TSmartContent<TCFD, CFDConfig>

export const cfd_content: SmartCFD[] = [
    {
        id: 0,
        data: {
            title: '_t_High leverage, tight spreads_t_',
            text: '_t_Take advantage of high leverage and tight spreads on Deriv’s CFD trading platforms._t_',
            src: Tight,
            alt: '_t_High leverage, tight spreads_t_',
        },
        visibility: {
            is_eu: false,
        },
    },
    {
        id: 11,
        data: {
            title: '_t_Tight spreads_t_',
            text: '_t_Take advantage of tight spreads on Deriv’s CFD trading platforms._t_',
            src: Tight,
            alt: '_t_High leverage, tight spreads_t_',
        },
        visibility: {
            is_eu: true,
        },
    },
    {
        id: 1,
        data: {
            title: '_t_All your favourite markets_t_',
            text: '_t_Trade on financial markets plus our proprietary synthetics that are available 24/7._t_',
            src: Favourite,
            alt: '_t_All your favourite markets_t_',
        },
    },
    {
        id: 2,
        data: {
            title: '_t_Go long or short_t_',
            text: '_t_Open long or short positions based on your predictions of the market price movements._t_',
            src: Golong,
            alt: '_t_Easy deposits and withdrawals_t_',
        },
    },
    {
        id: 3,
        data: {
            title: '_t_Expert and friendly support_t_',
            text: '_t_Get expert, friendly support when you need it._t_',
            src: FriendlySupport,
            alt: '_t_Expert and friendly support_t_',
        },
    },
    {
        id: 4,
        data: {
            title: '_t_Instant access_t_',
            text: '_t_Open an account and start trading in minutes._t_',
            src: Instant,
            alt: '_t_Instant access_t_',
        },
    },
    {
        id: 5,
        data: {
            title: '_t_Swap-free MT5 account_t_',
            text: '_t_Leave your trades open overnight with no additional charges._t_',
            src: SwapFree,
            alt: '_t_Swap free_t_',
        },
        visibility: {
            is_eu: false,
        },
    },
]

export const non_eu_cfd_content: TCFD[] = [
    {
        title: '_t_Swap-free MT5 account_t_',
        text: '_t_Leave your trades open overnight with no additional charges._t_',
        src: SwapFree,
        alt: '_t_Swap free_t_',
    },
]
