import React from 'react'
import HomeHero from './hero'
import HomeMarkets from './markets'
import TradeTypes from './trade-types'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { Appearances } from 'components/custom/signup'
import { OurPlatforms, Signup, WhatOurClientsSay, P2PHomeBanner } from 'pages/home/_lazy-load'
import MainNav from 'features/components/templates/navigation/main-nav'

const HomePage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    return (
        <Layout>
            <SEO
                title={localize(
                    '_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_',
                )}
                description={localize(
                    '_t_Deriv: an online trading platform available 24/7 with a wide selection of derivatives._t_',
                )}
                has_organization_schema
            />
            <MainNav />
            <HomeHero />
            <HomeMarkets />
            {/* <TradeTypes /> */}
            <TradeTypes />
            <OurPlatforms />
            <WhatOurClientsSay />
            {is_p2p_allowed_country && <P2PHomeBanner />}
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default HomePage
