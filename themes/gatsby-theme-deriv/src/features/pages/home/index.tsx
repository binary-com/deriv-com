/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import loadable from '@loadable/component'
import { PageLayout } from '@deriv-com/components'
import QuillLayout from 'features/components/quill/quill-layout'
import TwentyYearsStrong from './years'
import StatSection from './stats'
import HomeHero from './hero'
import CTA from './cta'
import StartTradingSteps from './start-trading-steps'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import MainFooter from 'features/components/templates/footer'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
const FastPaymentSection = loadable(() => import('./fast-payment'))
const LiveMarketSection = loadable(() => import('./live-pricing-migration'))
const TradeTypeSection = loadable(() => import('./trade-type'))
const UserFriendlyPlatforms = loadable(() => import('./user-platfroms'))

type PageProps = {
    region: BuildVariantContextType['region']
}

const HomePage = ({ region }: PageProps) => {
    useOpenLiveChat(true)
    const isLivePricing = useThirdPartyFlags('live_pricing')

    return (
        <QuillLayout region={region}>
            <MainRowNavigation />
            <PageLayout>
                <HomeHero />
                <StatSection />
                <TwentyYearsStrong />
                {isLivePricing && (
                    <LiveMarketSection
                        fallback={<div className="h-[695px] md:h-[638.5px] lg:h-[811.78px]" />}
                    />
                )}
                <UserFriendlyPlatforms
                    fallback={<div className="h-[1805px] md:h-[1007.5px] lg:h-[999px]" />}
                />
                <TradeTypeSection
                    fallback={<div className="h-[1086px] md:h-[750.5px] lg:h-[624.24px]" />}
                />
                <StartTradingSteps />
                <FastPaymentSection
                    fallback={<div className="h-[493px] md:h-[436.5px] lg:h-[579.96px]" />}
                />
                <CTA />
            </PageLayout>
            <MainFooter />
        </QuillLayout>
    )
}

export default HomePage
