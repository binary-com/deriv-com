import React, { useRef } from 'react'
import styled from 'styled-components'
import OtherMarkets from './_other-markets.js'
import { WhatTrade } from './_what-trade'
import { WhyTrade } from './_why-trade'
import SimpleSteps from 'common/_simple-steps'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import NoCommission from 'images/svg/no-commission.svg'
import MetalAndOil from 'images/svg/precious-metals-and-oils.svg'
import VariableSpreads from 'images/svg/variable-spreads.svg'
import PractiseIcon from 'images/svg/cross-hair-icon.svg'
import TradeIcon from 'images/svg/chart-icon.svg'
import WithdrawIcon from 'images/svg/withdraw-icon.svg'

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
const simple_step_content = [
    {
        header: localize('Practise'),
        text: localize(
            'Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds.',
        ),
        icon: <PractiseIcon />,
    },
    {
        header: localize('Trade'),
        text: localize(
            'Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more.',
        ),
        icon: <TradeIcon />,
    },
    {
        header: localize('Withdraw'),
        text: localize(
            'Conveniently withdraw your funds through any of our supported withdrawal methods.',
        ),
        icon: <WithdrawIcon />,
    },
]
const LinkButtonWrapper = styled.div`
    margin-top: 6.1rem;   
    text-align: center;
`
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
            <SimpleSteps
                header={localize('Start trading commodities on Deriv in 3 simple steps')}
                content={simple_step_content}
                component={
                    <LinkButtonWrapper>
                        <LinkButton to="/signup/" secondary="true">
                            {localize('Sign up now')}
                        </LinkButton>
                    </LinkButtonWrapper>
                }
            />
            <OtherMarkets except="commodities" />
        </div>
    )
}

export default Commodities
