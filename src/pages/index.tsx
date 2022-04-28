import React, { ReactNode } from 'react'
import { Signup, OurPlatforms, WhatOurClientsSay, TradeTypes } from './home/_lazy-load'
import MarketsFold from './home/_markets_fold'
import Hero from './home/_hero'
import UseHandleLazyLoad from 'components/hooks/use-handle-lazy-load'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import TRADE_DUMMY from 'images/common/trade-type-dummy.png'
import PLATFORM_DUMMY from 'images/common/platforms-dummy.png'
import WCS_DUMMY from 'images/common/wcs-dummy.png'
//const MarketsFold = React.lazy(() => import('./home/_markets_fold'));
const Home = () => {
    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat()
    const target = '#market-fold'
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    }
    const templates: ReactNode = (
        <>
            <TradeTypes
                fallback={
                    <div>
                        <img
                            src={TRADE_DUMMY}
                            style={{ marginLeft: '331px' }}
                            alt="trade-type-dummy"
                        />
                    </div>
                }
            />
            <OurPlatforms
                fallback={
                    <div>
                        <img
                            src={PLATFORM_DUMMY}
                            style={{ marginLeft: '331px' }}
                            alt="platform-dummy"
                        />
                    </div>
                }
            />
            <WhatOurClientsSay
                fallback={
                    <div>
                        <img src={WCS_DUMMY} style={{ marginLeft: '331px' }} alt="wcs-dummy" />
                    </div>
                }
            />
            <Signup
                appearance={Appearances.public}
                fallback={
                    <div>
                        <img src={WCS_DUMMY} style={{ marginLeft: '331px' }} alt="wcs-dummy" />
                    </div>
                }
            />
        </>
    )
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
            <Hero />
            <MarketsFold />
            <UseHandleLazyLoad lazytemplates={templates} targetId={target} options={options} />
        </Layout>
    )
}

export default WithIntl()(Home)
