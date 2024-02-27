/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { lazy, Suspense } from 'react'
import { PageLayout } from '@deriv-com/components'
import QuillLayout from 'features/components/quill/quill-layout'
import TwentyYearsStrong from './years'
import StatSection from './stats'
import HomeHero from './hero'
import CTA from './cta'
import StartTradingSteps from './start-trading-steps'
import TrustpilotSection from './trustpilot'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import MainFooter from 'features/components/templates/footer'
import { isFeatureEnabled } from 'common/utility'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
const FastPaymentSection = lazy(() => import('./fast-payment'))
const LiveMarketSection = lazy(() => import('./live-pricing-migration'))
const TradeTypeSection = lazy(() => import('./trade-type'))
const UserFriendlyPlatforms = lazy(() => import('./user-platfroms'))

const HomePage = () => {
    useOpenLiveChat(true)
    const isTrustpilot = useThirdPartyFlags('trustpilot')
    const isLivePricing = useThirdPartyFlags('live_pricing')

    return (
        <QuillLayout>
            <MainRowNavigation />
            <PageLayout>
                <HomeHero />
                {isTrustpilot && <TrustpilotSection />}
                <StatSection />
                <TwentyYearsStrong />
                {isLivePricing && (
                    <Suspense
                        fallback={<div className="h-[695px] md:h-[638.5px] lg:h-[811.78px]" />}
                    >
                        <LiveMarketSection />
                    </Suspense>
                )}
                <Suspense fallback={<div className="h-[1805px] md:h-[1007.5px] lg:h-[999px]" />}>
                    <UserFriendlyPlatforms />
                </Suspense>
                <Suspense fallback={<div className="h-[1086px] md:h-[750.5px] lg:h-[624.24px]" />}>
                    <TradeTypeSection />
                </Suspense>
                <StartTradingSteps />
                <Suspense fallback={<div className="h-[493px] md:h-[436.5px] lg:h-[579.96px]" />}>
                    <FastPaymentSection />
                </Suspense>
                <CTA />
            </PageLayout>
            <MainFooter />
        </QuillLayout>
    )
}

export default HomePage
