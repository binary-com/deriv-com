import React, { ReactElement } from 'react'
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
import type { MarketInstrumentsElement } from 'pages/markets/components/sections/_market_instruments'
import { Localize } from 'components/localization'
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

type OptionElement = {
    svg: string
    text: ReactElement
    wrap?: string
    remove_title?: boolean
    title?: ReactElement
    mobile_pt?: string
}
export type Options = {
    market_instruments: MarketInstrumentsElement
    options: Array<OptionElement[]>
    eu_content?: ReactElement[]
}

const getOptions = (is_synthetic_options: boolean) => {
    const options: Array<OptionElement[]> = [
        [
            {
                title: <Localize translate_text="_t_Up/Down_t_" />,
                svg: RiseFall,
                text: (
                    <Localize
                        translate_text="_t_<0>Rise/Fall:</0> Predict whether the exit spot will be strictly higher or lower than the entry spot at the end of the contract period._t_"
                        components={[<strong key={0} />]}
                    />
                ),
            },
            {
                svg: HigherLower,
                text: (
                    <Localize
                        translate_text="_t_<0>Higher/Lower:</0> Predict whether the exit spot will be higher or lower than a price target (the barrier) at the end of the contract period._t_"
                        components={[<strong key={0} />]}
                    />
                ),
            },
        ],
        [
            {
                title: <Localize translate_text="_t_In/Out_t_" />,
                svg: EbEo,
                text: (
                    <Localize
                        translate_text="_t_<0>Ends Between/Ends Outside:</0> Predict whether the exit spot will be inside or outside two price targets at the end of the contract period._t_"
                        components={[<strong key={0} />]}
                    />
                ),
            },
            {
                svg: SbGo,
                text: (
                    <Localize
                        translate_text="_t_<0>Stays Between/Goes Outside:</0> Predict whether the market will stay inside or go outside two price targets at any time during the contract period._t_"
                        components={[<strong key={0} />]}
                    />
                ),
            },
        ],
        [
            {
                title: <Localize translate_text="_t_Touch/No Touch_t_" />,
                svg: TNT,
                text: (
                    <Localize translate_text="_t_Predict whether the market will touch or not touch a target at any time during the contract period._t_" />
                ),
            },
        ],
    ]

    if (is_synthetic_options) {
        options.pop()
        options.push(
            [
                {
                    wrap: 'wrap',
                    title: <Localize translate_text="_t_Digits_t_" />,
                    svg: MatchesDiffers,
                    text: (
                        <Localize
                            translate_text="_t_<0>Matches/Differs:</0> Predict what number will be the last digit of the last tick of a contract._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    svg: OuOd,
                    text: (
                        <Localize
                            translate_text="_t_<0>Over/Under:</0> Predict whether the last digit of the last tick of a contract will be higher or lower than a specific number._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    remove_title: true,
                    svg: EvenOdd,
                    text: (
                        <Localize
                            translate_text="_t_<0>Even/Odd:</0> Predict whether the last digit of the last tick of a contract will be an even number or an odd number._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: <Localize translate_text="_t_Reset Call/Reset Put_t_" />,
                    svg: RcRp,
                    text: (
                        <Localize translate_text="_t_Predict whether the exit spot will be higher or lower than either the entry spot or the spot at reset time._t_" />
                    ),
                },
                {
                    title: <Localize translate_text="_t_High/Low Ticks_t_" />,
                    svg: HighLowTicks,
                    text: (
                        <Localize translate_text="_t_Predict which will be the highest or the lowest tick in a series of five ticks._t_" />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: <Localize translate_text="_t_Touch/No Touch_t_" />,
                    svg: TNT,
                    text: (
                        <Localize translate_text="_t_Predict whether the market will touch or not touch a target at any time during the contract period._t_" />
                    ),
                },
                {
                    title: <Localize translate_text="_t_Asians_t_" />,
                    svg: Asians,
                    text: (
                        <Localize translate_text="_t_Predict whether the exit spot (last tick) will be higher or lower than the average of the ticks at the end of the contract period._t_" />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: <Localize translate_text="_t_Only Ups/Only Downs_t_" />,
                    svg: OuOd,
                    text: (
                        <Localize translate_text="_t_Predict whether consecutive ticks will rise or fall successively after the entry spot._t_" />
                    ),
                },
            ],
            [
                {
                    wrap: 'wrap',
                    title: <Localize translate_text="_t_Lookbacks_t_" />,
                    svg: HighClose,
                    text: (
                        <Localize
                            translate_text="_t_<0>High-Close:</0> When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    svg: HighLow,
                    text: (
                        <Localize
                            translate_text="_t_<0>High-Low:</0> When you purchase a ‘High-Low’ contract, your win or loss will be equal to the multiplier times the difference between the high and the low over the duration of the contract._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    remove_title: true,
                    svg: CloseLow,
                    text: (
                        <Localize
                            translate_text="_t_<0>Close-Low:</0> When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract._t_"
                            components={[<strong key={0} />]}
                        />
                    ),
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
                title: <Localize translate_text="_t_Metals_t_" />,
                component: <MetalsOptions />,
            },
            {
                id: 'energy',
                title: <Localize translate_text="_t_Energy_t_" />,
                component: <EnergyOptions />,
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
                title: <Localize translate_text="_t_Major pairs_t_" />,
                component: <MajorPairs />,
            },
            {
                id: 'minor-pairs',
                title: <Localize translate_text="_t_Minor pairs_t_" />,
                component: <MinorOptionsPairs />,
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
                title: <Localize translate_text="_t_Commodities Basket_t_" />,
                component: <BasketIndicesCommodities />,
                details: <BasketCommoditiesDetails />,
            },
            {
                id: 'forex-basket',
                title: <Localize translate_text="_t_Forex Basket_t_" />,
                component: <BasketIndicesCfds />,
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
                title: (
                    <Localize
                        translate_text="_t_American<0></0>indices_t_"
                        components={[<br key={0} />]}
                    />
                ),
                component: <Americas />,
                details: <AmericasDetails />,
                tablet_col: 2,
                mobile_col: 2,
                padding: '32px 16px',
                flex: true,
                gap: '16px',
            },
            {
                id: 'asian-indices',
                title: (
                    <Localize
                        translate_text="_t_Asian<0></0>indices_t_"
                        components={[<br key={0} />]}
                    />
                ),
                component: <AsiaOceania />,
                details: <AsiaOceaniaDetails />,
                tablet_col: 2,
                mobile_col: 2,
                padding: '32px 16px',
                flex: true,
                gap: '16px',
            },
            {
                id: 'european-indices',
                title: (
                    <Localize
                        translate_text="_t_European<0></0>indices_t_"
                        components={[<br key={0} />]}
                    />
                ),
                component: <Europe />,
                details: <EuropeDetails custom_index={-1} />,
                col: 4,
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
                title: <Localize translate_text="_t_Continuous indices_t_" />,
                component: <ContinuousIndicesOptions />,
                details: <ContinuousIndicesOptionsDetails />,
            },
            {
                id: 'jump-indices',
                title: <Localize translate_text="_t_Jump indices_t_" />,
                component: <JumpIndices />,
                details: <JumpIndicesDetails />,
            },
            {
                id: 'daily-reset-indices',
                title: <Localize translate_text="_t_Daily reset indices_t_" />,
                component: <DailyResetIndices />,
                details: <DailyResetIndicesDetails />,
            },
        ],
    },
    options: getOptions(true),
    eu_content: [
        <Localize
            key={0}
            translate_text="_t_Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average._t_"
        />,
    ],
}
