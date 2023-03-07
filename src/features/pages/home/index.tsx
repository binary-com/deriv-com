import React from 'react'
import HomeHero from './hero'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import LayoutComponent from 'features/components/layout-component'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import MainNav from 'features/components/navigation/main'
import MarketsFold from 'pages/home/_markets_fold'
import useRegion from 'components/hooks/use-region'
import OurPlatforms from 'pages/home/_our_platforms'
import WhatOurClientsSay from 'pages/home/_what-our-clients-say'
import P2PHomeBanner from 'pages/home/_p2p_home_banner'
import Signup, { Appearances } from 'components/custom/signup'
import TradeTypes from 'pages/home/_trade-types'
import Footer from 'components/layout/footer'
import SmartSection from 'features/components/smart-section'

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

            <SmartSection name={'trade-types'}>
                <TradeTypes />
            </SmartSection>

            <SmartSection name={'platforms'}>
                <OurPlatforms />
            </SmartSection>
            <SmartSection name={'clients'}>
                <WhatOurClientsSay />
            </SmartSection>
            {is_p2p_allowed_country && (
                <SmartSection name={'p2p-banner'}>
                    <P2PHomeBanner />
                </SmartSection>
            )}
            <SmartSection name={'sign-up'}>
                <Signup appearance={Appearances.public} />
            </SmartSection>
            <SmartSection name={'footer'}>
                <Footer />
            </SmartSection>
        </LayoutComponent>
    )
}

export default HomePage
