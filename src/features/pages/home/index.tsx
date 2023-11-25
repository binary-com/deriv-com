import React from 'react'
import { PageLayout } from '@deriv-com/components'
import Layout from 'features/components/templates/layout'
import ROWFooter from './footer'
import LiveMarketSection from './live-pricing-migration'
import TwentyYearsStrong from './years'
import StatSection from './stats'
import UserFriendlyPlatforms from './user-platfroms'
import TradeTypeSection from './trade-type'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import MainNav from 'features/components/templates/navigation/main-nav'

const HomePage = () => {
    useOpenLiveChat(true)

    return (
        <Layout>
            <MainNav />
            <PageLayout>
                <StatSection />
                <TwentyYearsStrong />

                <LiveMarketSection />
                <UserFriendlyPlatforms />
                <TradeTypeSection />
                <ROWFooter />
            </PageLayout>
        </Layout>
    )
}

export default HomePage
