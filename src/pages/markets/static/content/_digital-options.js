import React from 'react'
import {
    Americas,
    AsiaOceania,
    ContinuousIndices,
    DailyResetIndices,
    Energy,
    Europe,
    MajorPairs,
    Metals,
    MinorPairs,
    SmartFX,
} from '../../sub-markets/_submarkets.js'
import {
    AmericasDetails,
    AsiaOceaniaDetails,
    ContinuousIndicesDetails,
    DailyResetIndicesDetails,
    EuropeDetails,
} from './_details'
import { localize, Localize } from 'components/localization'
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

const getOptions = (is_synthetic_options) => {
    const options = [
        [
            {
                title: localize('Up/Down'),
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
                        translate_text="<0>Higher/Lower:</0> Predict whether the exit spot will be higher or lower than a price target (the barrier) at the end of the contract period. "
                        components={[<strong key={0} />]}
                    />
                ),
            },
        ],
        [
            {
                title: localize('In/Out'),
                svg: EbEo,
                text: (
                    <Localize
                        translate_text="<0>Ends Between/Ends Outside:</0> Predict whether the exit spot will be inside or outside two price targets at the end of the contract period. "
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
                title: localize('Touch/No Touch'),
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
                    title: localize('Digits'),
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
                    title: localize('Reset Call/Reset Put'),
                    svg: RcRp,
                    text: (
                        <Localize translate_text="Predict whether the exit spot will be higher or lower than either the entry spot or the spot at reset time." />
                    ),
                },
                {
                    title: localize('High/Low Ticks'),
                    svg: HighLowTicks,
                    text: (
                        <Localize translate_text="Predict which will be the highest or the lowest tick in a series of five ticks." />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: localize('Touch/No Touch'),
                    svg: TNT,
                    text: (
                        <Localize translate_text="Predict whether the market will touch or not touch a target at any time during the contract period." />
                    ),
                },
                {
                    title: localize('Asians'),
                    svg: Asians,
                    text: (
                        <Localize translate_text="Predict whether the exit spot (last tick) will be higher or lower than the average of the ticks at the end of the contract period." />
                    ),
                    mobile_pt: '2.4rem',
                },
            ],
            [
                {
                    title: localize('Only Ups/Only Downs'),
                    svg: OuOd,
                    text: (
                        <Localize translate_text="Predict whether consecutive ticks will rise or fall successively after the entry spot." />
                    ),
                },
            ],
            [
                {
                    wrap: 'wrap',
                    title: localize('Lookbacks'),
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

export const commodities_options = {
    market_instruments: {
        content: [
            {
                title: localize('Metals'),
                component: <Metals />,
            },
            {
                title: localize('Energy'),
                component: <Energy />,
            },
        ],
        markets_list: {
            col: 4,
        },
    },
    options: getOptions(false),
}

export const forex_options = {
    market_instruments: {
        content: [
            {
                title: localize('Major pairs'),
                component: <MajorPairs />,
            },
            {
                title: localize('Minor pairs'),
                component: <MinorPairs />,
            },
            {
                title: localize('SmartFX'),
                component: <SmartFX />,
            },
        ],
        markets_list: {
            col: 4,
            tablet_col: 3,
            mobile_col: 2,
        },
    },
    options: getOptions(false),
}

export const stock_options = {
    market_instruments: {
        has_global_accordion: true,
        content: [
            {
                title: localize('Americas'),
                component: <Americas />,
                details: AmericasDetails,
            },
            {
                title: localize('Asia/ Oceania'),
                component: <AsiaOceania />,
                details: AsiaOceaniaDetails,
            },
            {
                title: localize('Europe'),
                component: <Europe />,
                details: EuropeDetails,
                custom_index: -1,
            },
        ],
    },
    options: getOptions(false),
}

export const synthetic_options = {
    market_instruments: {
        has_global_accordion: true,
        content: [
            {
                title: localize('Continuous indices'),
                component: <ContinuousIndices />,
                details: ContinuousIndicesDetails,
            },
            {
                title: localize('Daily reset indices'),
                component: <DailyResetIndices />,
                details: DailyResetIndicesDetails,
            },
        ],
    },
    options: getOptions(true),
    eu_content: [
        localize(
            'Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average.',
        ),
    ],
}
