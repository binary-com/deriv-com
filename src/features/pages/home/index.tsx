/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import loadable from '@loadable/component'
import { PageLayout } from '@deriv-com/components'
import QuillLayout from 'features/components/quill/quill-layout'
import TwentyYearsStrong from './years'
import FastPaymentSection from './fast-payment'
import LiveMarketSection from './live-pricing-migration'
import TradeTypeSection from './trade-type'
import UserFriendlyPlatforms from './user-platfroms'
import StatSection from './stats'
import HomeHero from './hero'
import CTA from './cta'
import StartTradingSteps from './start-trading-steps'
import TrustpilotSection from './trustpilot'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import MainNav from 'features/components/templates/navigation/main-nav'
import MainFooter from 'features/components/templates/footer'

const HomePage = () => {
    useOpenLiveChat(true)
    console.log()

    return (
        <QuillLayout>
            <MainNav />
            <PageLayout>
                <HomeHero />
                <TrustpilotSection />
                <StatSection />
                <TwentyYearsStrong />
                <LiveMarketSection
                // fallback={<div className="h-[695px] md:h-[638.5px] lg:h-[811.78px]" />}
                />
                <UserFriendlyPlatforms
                // fallback={<div className="h-[1805px] md:h-[1007.5px] lg:h-[999px]" />}
                />
                <TradeTypeSection
                // fallback={<div className="h-[1086px] md:h-[750.5px] lg:h-[624.24px]" />}
                />
                <StartTradingSteps />
                <FastPaymentSection
                // fallback={<div className="h-[493px] md:h-[436.5px] lg:h-[579.96px]" />}
                />
                <CTA />
            </PageLayout>
            <MainFooter />
        </QuillLayout>
    )
}

export default HomePage
