import React from 'react'
import { BreakpointProvider, FluidContainer, ThemeProvider } from '@deriv/quill-design'
import { Breadcrumbs, PageLayout } from '@deriv-com/components'
import MarketTab from '../market-tab'
import Layout from 'features/components/templates/layout'
import HeroBanner from './hero-banner'
import WhyTradeInDeriv from './why-trade-in-deriv'
import PlatformsToTrade from './platforms-available'
import TradingInDeriv from './trading-in-deriv'
import OtherMarkets from './other-markets'
import FAQSection from './faq-section'
import MainRowNavigation from 'features/pages/home/navigation'

const ForexMarket = () => {
    return (
        <BreakpointProvider>
            <ThemeProvider theme="light">
                <Layout>
                    <MainRowNavigation />
                    <PageLayout>
                        <FluidContainer>
                            <Breadcrumbs
                                className="py-general-md"
                                links={[
                                    {
                                        content: 'Home',
                                        href: '/',
                                    },
                                    {
                                        content: 'Markets',
                                        href: '',
                                    },
                                    {
                                        content: 'Forex',
                                        href: '',
                                    },
                                ]}
                            />
                        </FluidContainer>
                        <MarketTab />
                        <HeroBanner />
                        <WhyTradeInDeriv />
                        <PlatformsToTrade />
                        <TradingInDeriv />
                        <OtherMarkets />
                        <FAQSection />
                    </PageLayout>
                </Layout>
            </ThemeProvider>
        </BreakpointProvider>
    )
}
export default ForexMarket
