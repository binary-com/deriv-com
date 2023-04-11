import React from 'react'
import Hero from './home/_hero'
import MarketsFold from './home/_markets_fold'
import TradeTypes from './home/_trade-types'
import OurPlatforms from './home/_our_platforms'
import WhatOurClientsSay from './home/_what-our-clients-say'
import P2PHomeBanner from './home/_p2p_home_banner'
import Signup, { Appearances } from 'components/custom/signup'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize(
                    '_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_',
                )}
                description={localize(
                    '_t_Deriv: an online trading platform available 24/7 with a wide selection of derivatives._t_',
                )}
                has_organization_schema
            />
            <Hero />
            <MarketsFold />
            <TradeTypes />
            <OurPlatforms />
            <WhatOurClientsSay />
            {is_p2p_allowed_country && <P2PHomeBanner />}
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(Home)
