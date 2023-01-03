import React, { ReactNode } from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import TRADE_DUMMY from 'images/common/trade-type-dummy.png'
import PLATFORM_DUMMY from 'images/common/platforms-dummy.png'
import WCS_DUMMY from 'images/common/wcs-dummy.png'
import CFD_DUMMY from 'images/common/cfd_dummy.png'
import WHY_DUMMY from 'images/common/why-cfd-dummy.png'
import START_DUMMY from 'images/common/start-cfd-dummy.png'
import CFD_TRADE_DUMMY from 'images/common/cfd-trading-dummy.png'
import CFD_MARKETS_DUMMY from 'images/common/cfd-markets-dummy.png'
import { useHandleLazyLoad } from 'components/hooks/use-handle-lazy-load'
const WhatIsCFD = Loadable(() => import('./_what_is_cfd'))
const WhyTradeCFD = Loadable(() => import('./_why-trade-cfd'))
const TradingCFDIncreases = Loadable(() => import('./_trading-cfd-increases'))
const StartTrading = Loadable(() => import('./_start-trading'))
const ThingsToKeep = Loadable(() => import('./_mind-when-trading'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))

const CFD = () => {
    const target = '#gatsby-focus-wrapper'
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    }
    const lazy_components: ReactNode = (
        <>
            <WhatIsCFD
                fallback={
                    <div>
                        <img src={CFD_DUMMY} style={{ width: '95%' }} alt="trade-type" />
                    </div>
                }
            />
            <ThingsToKeep
                fallback={
                    <div>
                        <img src={CFD_DUMMY} style={{ width: '95%' }} alt="trade-type" />
                    </div>
                }
            />
            <TradingCFDIncreases
                fallback={
                    <div>
                        <img src={CFD_TRADE_DUMMY} style={{ width: '95%' }} alt="platform" />
                    </div>
                }
            />

            <WhyTradeCFD
                fallback={
                    <div>
                        <img src={WHY_DUMMY} style={{ width: '95%' }} alt="wcs" />
                    </div>
                }
            />
            <StartTrading
                fallback={
                    <div>
                        <img src={START_DUMMY} style={{ width: '95%' }} alt="wcs" />
                    </div>
                }
            />
            <AvailableMarkets
                fallback={
                    <div>
                        <img src={CFD_MARKETS_DUMMY} style={{ width: '95%' }} alt="wcs" />
                    </div>
                }
            />
        </>
    )
    const lazyTemplate = useHandleLazyLoad(lazy_components, target, options)
    return (
        <Layout>
            <SEO
                title={localize('CFD trading | Online trading platform | Deriv')}
                description={localize(
                    'Trade CFDs on multiple markets. Enjoy high leverage, tight spreads, and risk management features to amplify your potential profits and limit losses.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('CFD trading')}
                    </Header>
                </SmallContainer>
            </Hero>
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(CFD)
