import React from 'react'
import { MarketsFold, OurPlatforms, Signup, WhatOurClientsSay } from './home/_lazy-load'
import TradeTypes from './home/_trade-types'
import Hero from './home/_hero'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'

const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat()

    return (
        <Layout is_nav_transparent margin_top="0">
            <SEO
                title={localize(
                    'Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv',
                )}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
                has_organization_schema
            />
            <Hero />
            <MarketsFold />
            <TradeTypes />
            <OurPlatforms />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(Home)
