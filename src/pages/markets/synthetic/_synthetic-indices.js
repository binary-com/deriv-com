import React, { useRef } from 'react'
import OtherMarkets from './_other-markets.js'
import { WhatTrade } from './_what-trade'
import { WhyTrade } from './_why-trade'
import SimpleSteps from 'common/_simple-steps'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import ExclusiveTradeType from 'images/svg/exclusive-trade-types.svg'
import MarketandRisk from 'images/svg/market-and-risk.svg'
import SevenTrading from 'images/svg/seven-trading.svg'

const what_trade_sub_header = [
    {
        text: localize(
            'Synthetic Indices are our own set of indices engineered to simulate real-world market movements, unaffected by the sways of actual events and other outside disruptions.',
        ),
    },
    {
        text: localize(
            'Unlike financial markets, Synthetic Indices are available 24/7, have constant volatility, fixed generation intervals, and are free of market and liquidity risks.',
        ),
    },
]
const StockIndices = () => {
    const learn_more_section = useRef(null)

    return (
        <div>
            <WhatTrade
                sub_header={what_trade_sub_header}
                header={localize('What are Synthetic Indices?')}
                learn_more_section={learn_more_section}
            />
            <WhyTrade header={localize('Why trade Synthetic Indices on Deriv')}>
                <div
                    text={localize('High leverage, tight spreads, and 24/7 trading')}
                    icon={<SevenTrading />}
                ></div>
                <div
                    text={localize('Free from real-world market and liquidity risks')}
                    icon={<MarketandRisk />}
                ></div>
                <div
                    text={localize('Responsive, easy-to-use platforms')}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div
                    text={localize('Exclusive access to innovative trade types')}
                    icon={<ExclusiveTradeType />}
                ></div>
                <div
                    text={localize('Smart and friendly support, 7 days a week')}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            <SimpleSteps />
            <OtherMarkets except="Synthetic Indices" />
        </div>
    )
}

export default StockIndices
