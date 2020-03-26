import React from 'react'
// import Ticker from './home/_ticker'
import SimpleSteps from '../common/_simple-steps'
import { Hero } from './home/_hero'
import { Trade } from './home/_trade'
import TradeTheWayYouLike from './home/_trade-the-way-you-like'
import Markets from './home/_markets'
import WhatOurClientsSay from './home/_what-our-clients-say'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import Signup, { Appearances } from 'components/custom/signup'

const Home = () => {
    return (
        <Layout>
            <SEO
                title={localize('Online trading platform | Forex, commodities and indices')}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
            />
            <Hero />
            <Show.Mobile>
                <TradeTheWayYouLike />
            </Show.Mobile>
            <Show.Desktop>
                <Trade />
            </Show.Desktop>
            <Markets />
            <SimpleSteps />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
            {/* TODO: investigate performance and enable later */}
            {/* {!isProduction() && <Ticker />} */}
        </Layout>
    )
}

export default WithIntl()(Home)
