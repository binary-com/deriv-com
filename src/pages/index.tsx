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
import TRADE_DUMMY from 'images/common/trade-type-dummy.png'
import PLATFORM_DUMMY from 'images/common/platforms-dummy.png'
import WCS_DUMMY from 'images/common/wcs-dummy.png'
import { DerivStore } from 'store'

const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = React.useContext(DerivStore)

    const target = '#market-fold'
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    }
    const lazy_components: ReactNode = (
        <>
            <TradeTypes
                fallback={
                    <div>
                        <img src={TRADE_DUMMY} style={{ width: '95%' }} alt="trade-type" />
                    </div>
                }
            />
            <OurPlatforms
                fallback={
                    <div>
                        <img src={PLATFORM_DUMMY} style={{ width: '95%' }} alt="platform" />
                    </div>
                }
            />
            <WhatOurClientsSay
                fallback={
                    <div>
                        <img src={WCS_DUMMY} style={{ width: '95%' }} alt="wcs" />
                    </div>
                }
            />
            {is_p2p_allowed_country && (
                <P2PHomeBanner
                    fallback={
                        <div>
                            <img src={WCS_DUMMY} style={{ width: '95%' }} alt="p2p" />
                        </div>
                    }
                />
            )}
            <Signup
                appearance={Appearances.public}
                fallback={
                    <div>
                        <img src={WCS_DUMMY} style={{ width: '95%' }} alt="signup" />
                    </div>
                }
            />
        </>
    )
    const lazyTemplate = useHandleLazyLoad(lazy_components, target, options)
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
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(Home)
