import React, { Suspense } from 'react'
import { OurPlatforms, Signup, WhatOurClientsSay, TradeTypes } from './home/_lazy-load'
import MarketsFold from './home/_markets_fold'
import Hero from './home/_hero'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
//const MarketsFold = React.lazy(() => import('./home/_markets_fold'));
const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat()
    const [has_scrolled, setScrolled] = React.useState(false)
    React.useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onScroll = () => {
        if (!has_scrolled) {
            setScrolled(true)
        }
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                <Hero />
                {has_scrolled ? (
                    <>
                        <MarketsFold />
                        <TradeTypes />
                        <OurPlatforms />
                        <WhatOurClientsSay />
                    </>
                ) : (
                    <>loading</>
                )}
                <Signup appearance={Appearances.public} />
            </Layout>
        </Suspense>
    )
}

export default WithIntl()(Home)
