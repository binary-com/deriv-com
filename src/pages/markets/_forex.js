import React, { useRef } from 'react'
import styled from 'styled-components'
import { WhatTrade } from './_what-trade'
import { WhyTrade } from './_why-trade'
import OtherMarkets from './_other-markets.js'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import AdvancedCharting from 'images/svg/advanced-charting-widgets.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Leverage from 'images/svg/leverage.svg'

const sub_header = [
    {
        text: localize(
            'Foreign exchange, otherwise known as forex or FX, is the buying and selling of currencies. Forex relates to buying and selling currencies on the forex market with the aim to make a profit off the changes in their value.',
        ),
    },
    {
        text: localize(
            'Trading forex has several benefits including round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunity to trade on world events.',
        ),
    },
]

const StyledLeverage = styled(Leverage)`
    overflow: visible;
`
const Forex = () => {
    const learn_more_section = useRef(null)
    return (
        <>
            <WhatTrade
                sub_header={sub_header}
                header={localize('What is forex?')}
                learn_more_section={learn_more_section}
            />
            <WhyTrade header={localize('Why trade forex on Deriv')}>
                <div
                    text={localize('High leverage, tight spreads')}
                    icon={<StyledLeverage />}
                ></div>
                <div
                    text={localize('Responsive, easy-to-use platforms')}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div text={localize('Advanced charting widgets')} icon={<AdvancedCharting />}></div>
                <div
                    text={localize('Convenient deposit and withdrawal methods')}
                    icon={<Deposit />}
                ></div>
                <div
                    text={localize('Friendly support, 7 days a week')}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            <div ref={learn_more_section} />
            <OtherMarkets except='forex' />
        </>
    )
}

export default Forex
