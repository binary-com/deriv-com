import React from 'react'
import {
    Americas,
    AsiaOceania,
    BasketIndicesCfds,
    BasketIndicesCommodities,
    ContinuousIndicesOptions,
    DailyResetIndices,
    EnergyOptions,
    Europe,
    MajorPairs,
    MetalsOptions,
    MinorOptionsPairs,
} from '../../instruments/_submarkets'
import { JumpIndices } from '../../instruments/_index'
import {
    AmericasDetails,
    AsiaOceaniaDetails,
    BasketFXDetails,
    BasketCommoditiesDetails,
    ContinuousIndicesOptionsDetails,
    DailyResetIndicesDetails,
    EuropeDetails,
    JumpIndicesDetails,
} from './_details'
import { TMarketContent } from './_types'
import Asians from 'images/svg/options/asians.svg'
import CloseLow from 'images/svg/options/close-low.svg'
import EbEo from 'images/svg/options/eb-eo.svg'
import EvenOdd from 'images/svg/options/even-odd.svg'
import HighClose from 'images/svg/options/high-close.svg'
import HigherLower from 'images/svg/options/higher-lower.svg'
import HighLow from 'images/svg/options/high-low.svg'
import HighLowTicks from 'images/svg/options/hl-ticks.svg'
import MatchesDiffers from 'images/svg/options/matches-differs.svg'
import OuOd from 'images/svg/options/ou-od.svg'
import RcRp from 'images/svg/options/rc-rp.svg'
import RiseFall from 'images/svg/options/rise-fall.svg'
import SbGo from 'images/svg/options/sb-go.svg'
import TNT from 'images/svg/options/tnt.svg'
import { TString } from 'types/generics'
import { IconType } from 'features/types'

type OptionElement = {
    title?: TString
    text: TString
    text_component?: React.ReactElement[]
    svg: IconType
    wrap?: string
    remove_title?: boolean
    mobile_pt?: string
}

export type Options = {
    market_instruments: TMarketContent
    options: Array<OptionElement[]>
    eu_content?: TString[]
}

const getOptions = (is_synthetic_options: boolean) => {
    const options: Array<OptionElement[]> = [
        [
            {
                title: '_t_Up/Down_t_',
                svg: {
                    src: RiseFall,
                    alt: '_t_rise/fall option trade_t_',
                },
                text: '_t_<0>Rise/Fall:</0> Predict whether the exit spot will be strictly higher or lower than the entry spot at the end of the contract period._t_',
                text_component: [<strong key={0} />],
            },
            {
                svg: {
                    src: HigherLower,
                    alt: '_t_higher/lower option trade_t_',
                },
                text: '_t_<0>Higher/Lower:</0> Predict whether the exit spot will be higher or lower than a price target (the barrier) at the end of the contract period._t_',
                text_component: [<strong key={0} />],
            },
        ],
        [
            {
                title: '_t_In/Out_t_',
                svg: {
                    src: EbEo,
                    alt: '_t_ends between/ends outside option trade_t_',
                },
                text: '_t_<0>Ends Between/Ends Outside:</0> Predict whether the exit spot will be inside or outside two price targets at the end of the contract period._t_',
                text_component: [<strong key={0} />],
            },
            {
                svg: {
                    src: SbGo,
                    alt: '_t_stays between/goes outside option trade_t_',
                },
                text: '_t_<0>Stays Between/Goes Outside:</0> Predict whether the market will stay inside or go outside two price targets at any time during the contract period._t_',
                text_component: [<strong key={0} />],
            },
        ],
        [
            {
                title: '_t_Touch/No Touch_t_',
                svg: {
                    src: TNT,
                    alt: '_t_touch/no touch option trade_t_',
                },
                text: '_t_Predict whether the market will touch or not touch a target at any time during the contract period._t_',
            },
        ],
    ]

    if (is_synthetic_options) {
        options.pop()
        options.push(
            [
                {
                    wrap: 'wrap',
                    title: '_t_Digits_t_',
                    svg: {
                        src: MatchesDiffers,
                        alt: '_t_matches/differs option trade_t_',
                    },
                    text: '_t_<0>Matches/Differs:</0> Predict what number will be the last digit of the last tick of a contract._t_',
                    text_component: [<strong key={0} />],
                },
                {
                    svg: {
                        src: OuOd,
                        alt: '_t_over/under option trade_t_',
                    },
                    text: '_t_<0>Over/Under:</0> Predict whether the last digit of the last tick of a contract will be higher or lower than a specific number._t_',
                    text_component: [<strong key={0} />],
                },
                {
                    remove_title: true,
                    svg: {
                        src: EvenOdd,
                        alt: '_t_even/odd option trade_t_',
                    },
                    text: '_t_<0>Even/Odd:</0> Predict whether the last digit of the last tick of a contract will be an even number or an odd number._t_',
                    text_component: [<strong key={0} />],
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: '_t_Reset Call/Reset Put_t_',
                    svg: {
                        src: RcRp,
                        alt: '_t_reset call/reset put option trade_t_',
                    },
                    text: '_t_Predict whether the exit spot will be higher or lower than either the entry spot or the spot at reset time._t_',
                },
                {
                    title: '_t_High/Low Ticks_t_',
                    svg: {
                        src: HighLowTicks,
                        alt: '_t_high/low ticks option trade_t_',
                    },
                    text: '_t_Predict which will be the highest or the lowest tick in a series of five ticks._t_',
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: '_t_Touch/No Touch_t_',
                    svg: {
                        src: TNT,
                        alt: '_t_touch/no touch option trade_t_',
                    },
                    text: '_t_Predict whether the market will touch or not touch a target at any time during the contract period._t_',
                },
                {
                    title: '_t_Asians_t_',
                    svg: {
                        src: Asians,
                        alt: '_t_asians option trade_t_',
                    },
                    text: '_t_Predict whether the exit spot (last tick) will be higher or lower than the average of the ticks at the end of the contract period._t_',
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: '_t_Only Ups/Only Downs_t_',
                    svg: {
                        src: OuOd,
                        alt: '_t_only ups/only downs option trade_t_',
                    },
                    text: '_t_Predict whether consecutive ticks will rise or fall successively after the entry spot._t_',
                },
            ],
            [
                {
                    wrap: 'wrap',
                    title: '_t_Lookbacks_t_',
                    svg: {
                        src: HighClose,
                        alt: '_t_high-close option trade_t_',
                    },
                    text: '_t_<0>High-Close:</0> When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract._t_',
                    text_component: [<strong key={0} />],
                },
                {
                    svg: {
                        src: HighLow,
                        alt: '_t_high-low option trade_t_',
                    },
                    text: '_t_<0>High-Low:</0> When you purchase a ‘High-Low’ contract, your win or loss will be equal to the multiplier times the difference between the high and the low over the duration of the contract._t_',
                    text_component: [<strong key={0} />],
                },
                {
                    remove_title: true,
                    svg: {
                        src: CloseLow,
                        alt: '_t_close-low option trade_t_',
                    },
                    text: '_t_<0>Close-Low:</0> When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract._t_',
                    text_component: [<strong key={0} />],
                    mobile_pt: '2.4rem',
                },
            ],
        )
    }

    return options
}

export const commodities_options: Options = {
    market_instruments: {
        content: [
            {
                id: 'metals',
                title: '_t_Metals_t_',
                instruments: <MetalsOptions />,
            },
            {
                id: 'energy',
                title: '_t_Energy_t_',
                instruments: <EnergyOptions />,
            },
        ],
        markets_list: {
            col: 3,
            mobile_col: 2,
        },
    },
    options: getOptions(false),
}

export const forex_options: Options = {
    market_instruments: {
        markets_list: {
            col: 5,
            tablet_col: 3,
            mobile_col: 2,
        },
        content: [
            {
                id: 'major-pairs',
                title: '_t_Major pairs_t_',
                instruments: <MajorPairs />,
            },
            {
                id: 'minor-pairs',
                title: '_t_Minor pairs_t_',
                instruments: <MinorOptionsPairs />,
            },
        ],
    },
    options: getOptions(false),
}

export const basket_options: Options = {
    market_instruments: {
        markets_list: {
            col: 4,
            tablet_col: 4,
            mobile_col: 2,
        },
        template: 2,
        content: [
            {
                id: 'commodities-basket',
                title: '_t_Commodities Basket_t_',
                instruments: <BasketIndicesCommodities />,
                details: <BasketCommoditiesDetails />,
            },
            {
                id: 'forex-basket',
                title: '_t_Forex Basket_t_',
                instruments: <BasketIndicesCfds />,
                details: <BasketFXDetails />,
            },
        ],
    },
    options: getOptions(false),
}

export const stock_options: Options = {
    market_instruments: {
        has_global_accordion: true,
        template: 2,
        content: [
            {
                id: 'american-indices',
                title: '_t_American <0></0>indices_t_',
                title_components: [<br key={0} />],
                mobile_title: '_t_American indices_t_',
                instruments: <Americas />,
                details: <AmericasDetails />,
                tablet_col: 2,
                mobile_col: 2,
                padding: '32px 16px',
                flex: true,
                gap: '16px',
            },
            {
                id: 'asian-indices',
                title: '_t_Asian <0></0>indices_t_',
                title_components: [<br key={0} />],
                mobile_title: '_t_Asian indices_t_',
                instruments: <AsiaOceania />,
                details: <AsiaOceaniaDetails />,
                tablet_col: 2,
                mobile_col: 2,
                padding: '32px 16px',
                flex: true,
                gap: '16px',
            },
            {
                id: 'european-indices',
                title: '_t_European <0></0>indices_t_',
                title_components: [<br key={0} />],
                mobile_title: '_t_European indices_t_',
                instruments: <Europe />,
                details: <EuropeDetails custom_index={-1} />,
                col: 3,
                tablet_col: 2,
                mobile_col: 2,
                padding: '32px 16px',
                gap: '16px',
            },
        ],
    },
    options: getOptions(false),
}

export const synthetic_options: Options = {
    market_instruments: {
        has_global_accordion: true,
        content: [
            {
                id: 'continuous-indices',
                title: '_t_Continuous indices_t_',
                instruments: <ContinuousIndicesOptions />,
                details: <ContinuousIndicesOptionsDetails />,
            },
            {
                id: 'jump-indices',
                title: '_t_Jump indices_t_',
                instruments: <JumpIndices />,
                details: <JumpIndicesDetails />,
            },
            {
                id: 'daily-reset-indices',
                title: '_t_Daily reset indices_t_',
                instruments: <DailyResetIndices />,
                details: <DailyResetIndicesDetails />,
            },
        ],
    },
    options: getOptions(true),
    eu_content: [
        '_t_Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average._t_',
    ],
}
