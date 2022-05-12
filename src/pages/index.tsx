import React from 'react'
import { Helmet } from 'react-helmet'
import { OurPlatforms, Signup, WhatOurClientsSay, TradeTypes } from './home/_lazy-load'
import MarketsFold from './home/_markets_fold'
import Hero from './home/_hero'
import { isBrowser } from 'common/utility'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'

const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat()

    // To block eu.deriv.com domain for search engines
    const block_eu =
        isBrowser() &&
        (window.location.hostname === 'eu.deriv.com' ||
            window.location.hostname === 'staging.deriv.com') // qa testing

    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize(
                    'Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv',
                )}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
                has_organization_schema
            />
            {block_eu && (
                <Helmet>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>
            )}
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
