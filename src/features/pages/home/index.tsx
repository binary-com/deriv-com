import React from 'react'
import { PageLayout } from '@deriv-com/components'
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design'
import Layout from 'features/components/templates/layout'
import ROWFooter from './footer'
import LiveMarketSection from './live-pricing-migration'
import TwentyYearsStrong from './years'
import StatSection from './stats'
import UserFriendlyPlatforms from './user-platfroms'
import TradeTypeSection from './trade-type'
import MainRowNavigation from './navigation'
import HomeHero from './hero'
import FooterCTA from './footer-cta'
import FastPaymentSection from './fast-payment'
import StartTradingSteps from './start-trading-steps'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'

const HomePage = () => {
    useOpenLiveChat(true)

    return (
        <BreakpointProvider>
            <ThemeProvider theme="light">
                <Layout>
                    <MainRowNavigation />
                    <PageLayout>
                        <HomeHero />
                        <StatSection />
                        <TwentyYearsStrong />
                        <LiveMarketSection />
                        <UserFriendlyPlatforms />
                        <TradeTypeSection />
                        <FastPaymentSection />
                        <StartTradingSteps />
                        <FooterCTA />
                        <ROWFooter />
                    </PageLayout>
                </Layout>
            </ThemeProvider>
        </BreakpointProvider>
    )
}

export default HomePage
