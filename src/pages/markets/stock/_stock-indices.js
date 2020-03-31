import React, { useRef } from 'react'
import styled from 'styled-components'
import OtherMarkets from '../_other-markets.js'
import { WhatTrade } from '../_what-trade'
import { WhyTrade } from '../_why-trade'
import AvailableTrades from '../_available-trades.js'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
import SimpleSteps from 'common/_simple-steps'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import ExtendedTime from 'images/svg/extended-trading-times.svg'
import MinimalCapital from 'images/svg/minimal-capital.svg'
import PractiseIcon from 'images/svg/cross-hair-icon.svg'
import TradeIcon from 'images/svg/chart-icon.svg'
import WithdrawIcon from 'images/svg/withdraw-icon.svg'

const what_trade_sub_header = [
    {
        text: localize(
            'Stock indices track the performance of the broad stock market or a particular market sector. Stock indices trading allows you to profit from the price movements in a market without buying assets.',
        ),
    },
    {
        text: localize(
            'At Deriv, our stock indices are sourced from over-the-counter (OTC) markets. So you get competitively priced asset baskets and can trade outside regular hours of major stock markets.',
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
const StockIndices = () => {
    const learn_more_section = useRef(null)

    return (
        <div>
            <WhatTrade
                sub_header={what_trade_sub_header}
                header={localize('What are stock indices?')}
                learn_more_section={learn_more_section}
            />
            <WhyTrade header={localize('Why trade stock indices on Deriv')}>
                <div
                    text={localize('Minimal capital requirements, limited risk')}
                    icon={<MinimalCapital />}
                ></div>
                <div
                    text={localize('Extended trading time, up to 18 hours a day')}
                    icon={<ExtendedTime />}
                ></div>
                <div
                    text={localize('Fast and secure deposit and withdrawal options')}
                    icon={<Deposit />}
                ></div>
                <div
                    text={localize('Responsive, easy-to-use platforms')}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div
                    text={localize('Smart and friendly support, 7 days a week')}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            <AvailableTrades Margin={Margin} DigitalOptions={DigitalOptions} name="Stock indices" />
            <SimpleSteps
                header={localize('Start trading stock indices on Deriv in 3 simple steps')}
                content={simple_step_content}
                component={
                    <LinkButtonWrapper>
                        <LinkButton to="/signup/" secondary="true">
                            {localize('Sign up now')}
                        </LinkButton>
                    </LinkButtonWrapper>
                }
            />
            <OtherMarkets except="stock indices" />
        </div>
    )
}

export default StockIndices
