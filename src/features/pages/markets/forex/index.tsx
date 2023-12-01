import React from 'react'
import { BreakpointProvider, FluidContainer, ThemeProvider } from '@deriv/quill-design'
import { Breadcrumbs, PageLayout } from '@deriv-com/components'
import Layout from 'features/components/templates/layout'
import HeroBanner from './hero-banner'
import PlatformsToTrade from './platforms-available'
import TradingInDeriv from './trading-in-deriv'
import OtherMarkets from './other-markets'
import WhyTradeInDeriv from './why-trade-in-deriv'
import MainRowNavigation from 'features/pages/home/navigation'

const Forex = () => {
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
                        <HeroBanner />
                        <WhyTradeInDeriv />
                        <PlatformsToTrade />
                        <TradingInDeriv />
                        <OtherMarkets />
                    </PageLayout>
                </Layout>
            </ThemeProvider>
        </BreakpointProvider>
    )
}
export default Forex
