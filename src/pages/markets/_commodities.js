import React, { useRef } from 'react'
import OtherMarkets from './_other-markets.js'
import { WhatTrade } from './_what-trade'
import { WhyTrade } from './_why-trade'
import SimpleSteps from 'common/_simple-steps'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import NoCommission from 'images/svg/no-commission.svg'
import MetalAndOil from 'images/svg/precious-metals-and-oils.svg'
import VariableSpreads from 'images/svg/variable-spreads.svg'

const what_trade_sub_header = [
    {
        text: localize(
            'Commodities are resources that are grown or extracted from the ground, such as silver, gold, and oil.',
        ),
    },
    {
        text: localize(
            'On Deriv, commodities trading lets you speculate on the price movement of a particular asset to profit from the price difference when the market moves in the direction that you have predicted.',
        ),
    },
]
const Commodities = () => {
    const learn_more_section = useRef(null)
    return (
        <div>
            <WhatTrade
                sub_header={what_trade_sub_header}
                header={localize('What are commodities?')}
                learn_more_section={learn_more_section}
            />
            <WhyTrade header={localize('Why trade commodities on Deriv')}>
                <div
                    text={localize('Competitive fixed and variable spreads')}
                    icon={<VariableSpreads />}
                ></div>
                <div
                    text={localize('No commission on any commodity contract')}
                    icon={<NoCommission />}
                ></div>
                <div
                    text={localize('All four precious metals and crude oil available ')}
                    icon={<MetalAndOil />}
                ></div>
                <div
                    text={localize('Easy-to-use platforms, superior chart technology')}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div
                    text={localize('Smart and friendly support, 7 days a week')}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            <SimpleSteps />
            <OtherMarkets except="commodities" />
        </div>
    )
}

export default Commodities
