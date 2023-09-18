import React from 'react'
import loadable from '@loadable/component'
import HomeHero from './hero'
import LivePricing from './live-pricing'
import P2PBanner from './p2p-banner'
import ClientTestimonial from './client-testimonial'
import TradeTypes from './trade-types'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import Layout from 'features/components/templates/layout'
import useRegion from 'components/hooks/use-region'
import MainNav from 'features/components/templates/navigation/main-nav'
import SignupPublic from 'features/components/templates/signup/with-banner'

const OurPlatforms = loadable(() => import('./our-platforms'))
const Footer = loadable(() => import('features/components/templates/footer'))

const HomePage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    return (
        <Layout>
            <MainNav />
            <HomeHero />
            <LivePricing />
            <TradeTypes />
            <OurPlatforms />
            <ClientTestimonial />
            {is_p2p_allowed_country && <P2PBanner />}
            <SignupPublic />
            <Footer />
        </Layout>
    )
}

export default HomePage
