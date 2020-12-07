import React from 'react'
import Loadable from '@loadable/component'
// import Ticker from './home/_ticker'
import Markets from './home/_markets'
import WhatOurClientsSay from './home/_what-our-clients-say'
import TradeTypes from './home/_trade-types'
import TradeTypesMobile from './home/_trade-types-mobile'
import { Hero } from './home/_hero'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'
import Signup, { Appearances } from 'components/custom/signup'
import SimpleSteps from 'components/custom/_simple-steps'
import PractiseIcon from 'images/svg/aim.svg'
import TradeIcon from 'images/svg/trade.svg'
import WithdrawIcon from 'images/svg/withdraw.svg'

const Trade = Loadable(() => import('./home/_trade'))
const TradeTheWayYouLike = Loadable(() => import('./home/_trade-the-way-you-like'))

const simple_step_content = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="aim" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more." />
        ),
        icon: <img src={TradeIcon} alt="trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Get your funds quickly and easily. We support a variety of withdrawal options." />
        ),
        icon: <img src={WithdrawIcon} alt="withdraw" width="32" height="32" />,
    },
]
const Home = () => {
    return (
        <Layout>
            <SEO
                title={localize('Online trading platform | Forex, commodities and indices | Deriv')}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
                has_organization_schema
            />
            <Hero />

            <Show.Mobile>
                <TradeTheWayYouLike />
            </Show.Mobile>
            <Show.Desktop>
                <Trade />
            </Show.Desktop>

            <Show.Mobile>
                <TradeTypesMobile />
            </Show.Mobile>
            <Show.Desktop>
                <TradeTypes />
            </Show.Desktop>
            <Markets />
            <SimpleSteps
                content={simple_step_content}
                header={<Localize translate_text="3 simple steps"/>}
                sign_up={true}
            />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
            {/* TODO: investigate performance and enable later */}
            {/* {!isProduction() && <Ticker />} */}
        </Layout>
    )
}

export default WithIntl()(Home)
