import React from 'react'
import HomeHero from './hero'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import LayoutComponent from 'features/components/templates/page'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import MarketsFold from 'pages/home/_markets_fold'
import useRegion from 'components/hooks/use-region'
import { Appearances } from 'components/custom/signup'
import {
    OurPlatforms,
    Signup,
    WhatOurClientsSay,
    TradeTypes,
    P2PHomeBanner,
} from 'pages/home/_lazy-load'
import MainNav from 'features/components/templates/navigation/main-nav'

const HomePage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    return (
        <LayoutComponent>
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
            <MarketsFold />
            <TradeTypes />
            <OurPlatforms />
            <WhatOurClientsSay />
            {is_p2p_allowed_country && <P2PHomeBanner />}
            <Signup appearance={Appearances.public} />
        </LayoutComponent>
    )
}

export default HomePage
