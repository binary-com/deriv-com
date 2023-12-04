import React from 'react'
import { PageLayout } from '@deriv-com/components'
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design'
import { LanguageProvider } from '@deriv-com/providers'
import Layout from 'features/components/templates/layout'
import ROWFooter from './footer'
import LiveMarketSection from './live-pricing-migration'
import TwentyYearsStrong from './years'
import StatSection from './stats'
import UserFriendlyPlatforms from './user-platfroms'
import TradeTypeSection from './trade-type'
import MainRowNavigation from './navigation'
import HomeHero from './hero'
import CTA from './cta'
import StartTradingSteps from './start-trading-steps'
import { langItemsROW } from './data'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'

const HomePage = () => {
    useOpenLiveChat(true)

    return (
        <BreakpointProvider>
            <ThemeProvider theme="light">
                <LanguageProvider langItems={langItemsROW}>
                    <Layout>
                        <MainRowNavigation />
                        <PageLayout>
                            <HomeHero />
                            <StatSection />
                            <TwentyYearsStrong />
                            <LiveMarketSection />
                            <UserFriendlyPlatforms />
                            <TradeTypeSection />
                            <StartTradingSteps />
                            <CTA />
                            <ROWFooter />
                        </PageLayout>
                    </Layout>
                </LanguageProvider>
            </ThemeProvider>
        </BreakpointProvider>
    )
}

export default HomePage
