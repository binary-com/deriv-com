import React, { ReactNode } from 'react'
import {
    OurPlatforms,
    Signup,
    WhatOurClientsSay,
    TradeTypes,
    P2PHomeBanner,
} from './home/_lazy-load'
import MarketsFold from './home/_markets_fold'
import Hero from './home/_hero'
import { useHandleLazyLoad } from 'components/hooks/use-handle-lazy-load'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import useRegion from 'components/hooks/use-region'

const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    const target = '#market-fold'
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    }
    const lazy_components: ReactNode = (
        <>
            <TradeTypes />
            <OurPlatforms />
            <WhatOurClientsSay />
            {is_p2p_allowed_country && <P2PHomeBanner />}
            <Signup appearance={Appearances.public} />
        </>
    )
    const lazyTemplate = useHandleLazyLoad(lazy_components, target, options)
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
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(Home)
