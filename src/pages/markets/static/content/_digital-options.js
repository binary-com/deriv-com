import React from 'react'
import {
    Americas,
    AsiaOceania,
    Europe,
    MajorPairs,
    MinorPairs,
    SmartFX,
    Metals,
    Energy,
} from '../../sub-markets/_submarkets.js'
import { AmericasDetails, AsiaOceaniaDetails, EuropeDetails } from './_details'
import { localize, Localize } from 'components/localization'
import RiseFall from 'images/svg/options/rise-fall.svg'
import HigherLower from 'images/svg/options/higher-lower.svg'
import EbEo from 'images/svg/options/eb-eo.svg'
import SbGo from 'images/svg/options/sb-go.svg'
import TNT from 'images/svg/options/tnt.svg'

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
    options,
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
    options,
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
    options,
}
