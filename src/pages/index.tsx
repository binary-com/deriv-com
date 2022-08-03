import React from 'react'
import {
    OurPlatforms,
    Signup,
    WhatOurClientsSay,
    TradeTypes,
    P2PHomeBanner,
} from './home/_lazy-load'
import MarketsFold from './home/_markets_fold'
import Hero from './home/_hero'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import { useWebsiteStatus } from 'components/hooks/use-website-status'

const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat()

    const is_p2p_allowed = useWebsiteStatus()[3]
    console.log('isp2pallowed', is_p2p_allowed)
    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize(
                    'Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv',
                )}
                description={localize(
                    'Deriv: an online trading platform available 24/7 with a wide selection of derivatives.',
                )}
                has_organization_schema
            />
            <Hero />
            <MarketsFold />
            <TradeTypes />
            <OurPlatforms />
            <WhatOurClientsSay />
            {is_p2p_allowed && <P2PHomeBanner />}
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(Home)
