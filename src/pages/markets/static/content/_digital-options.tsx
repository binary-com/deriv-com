import React, { ReactElement } from 'react'
import {
    Americas,
    AsiaOceania,
    BasketIndicesCfds,
    BasketIndicesCommodities,
    ContinuousIndices,
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
    ContinuousIndicesDetails,
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
                title: <Localize translate_text="Up/Down" />,
                svg: RiseFall,
                text: (
                    <Localize
                        translate_text="<0>Rise/Fall:</0> Predict whether the exit spot will be strictly higher or lower than the entry spot at the end of the contract period."
                        components={[<strong key={0} />]}
                    />
                ),
            },
            {
                svg: HigherLower,
                text: (
                    <Localize
                        translate_text="<0>Higher/Lower:</0> Predict whether the exit spot will be higher or lower than a price target (the barrier) at the end of the contract period."
                        components={[<strong key={0} />]}
                    />
                ),
            },
        ],
        [
            {
                title: <Localize translate_text="In/Out" />,
                svg: EbEo,
                text: (
                    <Localize
                        translate_text="<0>Ends Between/Ends Outside:</0> Predict whether the exit spot will be inside or outside two price targets at the end of the contract period."
                        components={[<strong key={0} />]}
                    />
                ),
            },
            {
                svg: SbGo,
                text: (
                    <Localize
                        translate_text="<0>Stays Between/Goes Outside:</0> Predict whether the market will stay inside or go outside two price targets at any time during the contract period."
                        components={[<strong key={0} />]}
                    />
                ),
            },
        ],
        [
            {
                title: <Localize translate_text="Touch/No Touch" />,
                svg: TNT,
                text: (
                    <Localize translate_text="Predict whether the market will touch or not touch a target at any time during the contract period." />
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
                    title: <Localize translate_text="Digits" />,
                    svg: MatchesDiffers,
                    text: (
                        <Localize
                            translate_text="<0>Matches/Differs:</0> Predict what number will be the last digit of the last tick of a contract."
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    svg: OuOd,
                    text: (
                        <Localize
                            translate_text="<0>Over/Under:</0> Predict whether the last digit of the last tick of a contract will be higher or lower than a specific number."
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    remove_title: true,
                    svg: EvenOdd,
                    text: (
                        <Localize
                            translate_text="<0>Even/Odd:</0> Predict whether the last digit of the last tick of a contract will be an even number or an odd number."
                            components={[<strong key={0} />]}
                        />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: <Localize translate_text="Reset Call/Reset Put" />,
                    svg: RcRp,
                    text: (
                        <Localize translate_text="Predict whether the exit spot will be higher or lower than either the entry spot or the spot at reset time." />
                    ),
                },
                {
                    title: <Localize translate_text="High/Low Ticks" />,
                    svg: HighLowTicks,
                    text: (
                        <Localize translate_text="Predict which will be the highest or the lowest tick in a series of five ticks." />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: <Localize translate_text="Touch/No Touch" />,
                    svg: TNT,
                    text: (
                        <Localize translate_text="Predict whether the market will touch or not touch a target at any time during the contract period." />
                    ),
                },
                {
                    title: <Localize translate_text="Asians" />,
                    svg: Asians,
                    text: (
                        <Localize translate_text="Predict whether the exit spot (last tick) will be higher or lower than the average of the ticks at the end of the contract period." />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: <Localize translate_text="Only Ups/Only Downs" />,
                    svg: OuOd,
                    text: (
                        <Localize translate_text="Predict whether consecutive ticks will rise or fall successively after the entry spot." />
                    ),
                },
            ],
            [
                {
                    wrap: 'wrap',
                    title: <Localize translate_text="Lookbacks" />,
                    svg: HighClose,
                    text: (
                        <Localize
                            translate_text="<0>High-Close:</0> When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract."
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    svg: HighLow,
                    text: (
                        <Localize
                            translate_text="<0>High-Low:</0> When you purchase a ‘High-Low’ contract, your win or loss will be equal to the multiplier times the difference between the high and the low over the duration of the contract."
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    remove_title: true,
                    svg: CloseLow,
                    text: (
                        <Localize
                            translate_text="<0>Close-Low:</0> When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract."
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
                title: <Localize translate_text="Metals" />,
                component: <MetalsOptions />,
            },
            {
                title: <Localize translate_text="Energy" />,
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
                title: <Localize translate_text="Major pairs" />,
                component: <MajorPairs />,
            },
            {
                title: <Localize translate_text="Minor pairs" />,
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
                title: <Localize translate_text="Commodities Basket" />,
                component: <BasketIndicesCommodities />,
                details: <BasketCommoditiesDetails />,
            },
            {
                title: <Localize translate_text="Forex Basket" />,
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
                title: (
                    <Localize
                        translate_text="American<0></0>indices"
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
                title: (
                    <Localize translate_text="Asian<0></0>indices" components={[<br key={0} />]} />
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
                title: (
                    <Localize
                        translate_text="European<0></0>indices"
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
                title: <Localize translate_text="Continuous indices" />,
                component: <ContinuousIndices />,
                details: <ContinuousIndicesDetails />,
            },
            {
                title: <Localize translate_text="Jump indices" />,
                component: <JumpIndices />,
                details: <JumpIndicesDetails />,
            },
            {
                title: <Localize translate_text="Daily reset indices" />,
                component: <DailyResetIndices />,
                details: <DailyResetIndicesDetails />,
            },
        ],
    },
    options: getOptions(true),
    eu_content: [
        <Localize
            key={0}
            translate_text="Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average."
        />,
    ],
}
