/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { PageLayout } from '@deriv-com/components'
import QuillLayout from 'features/components/quill/quill-layout'
import LiveMarketSection from './live-pricing-migration'
import TwentyYearsStrong from './years'
import StatSection from './stats'
import UserFriendlyPlatforms from './user-platfroms'
import TradeTypeSection from './trade-type'
import HomeHero from './hero'
import FastPaymentSection from './fast-payment'
import CTA from './cta'
import StartTradingSteps from './start-trading-steps'
import TrustpilotSection from './trustpilot'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import MainFooter from 'features/components/templates/footer'

const HomePage = () => {
    useOpenLiveChat(true)

    return (
        <QuillLayout>
            <MainRowNavigation />
            <PageLayout>
                <HomeHero />
                <TrustpilotSection />
                <StatSection />
                <TwentyYearsStrong />
                <LiveMarketSection />
                <UserFriendlyPlatforms />
                <TradeTypeSection />
                <StartTradingSteps />
                <FastPaymentSection />
                <CTA />
            </PageLayout>
            <MainFooter />
        </QuillLayout>
    )
}

export default HomePage
