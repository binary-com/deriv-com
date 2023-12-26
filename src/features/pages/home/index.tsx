import React from 'react'
import loadable from '@loadable/component'
import Layout from 'features/components/templates/layout'
// eslint-disable-next-line import/no-unresolved
import { BrandDerivWordmarkCoralIcon } from '@deriv/quill-icons/Logo'
import HomeHero from './hero'
import LivePricing from './live-pricing'
import P2PBanner from './p2p-banner'
import ClientTestimonial from './client-testimonial'
import TradeTypes from './trade-types'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import AwardBanner from 'features/components/templates/banners/award-banners'
import useRegion from 'components/hooks/use-region'
import SignupPublic from 'features/components/templates/signup/with-banner'
import MainRowNavigation from 'features/components/templates/navigation/main-nav'

const OurPlatforms = loadable(() => import('./our-platforms'))
const MainFooter = loadable(() => import('features/components/templates/footer'))

const HomePage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country, is_eu } = useRegion()

    return (
        <Layout>
            <MainRowNavigation />
            <HomeHero />
            {/* <BrandDerivWordmarkCoralIcon width={100} height={50} /> */}
            <LivePricing />
            <TradeTypes />
            <OurPlatforms />
            {is_eu ? null : <AwardBanner title="_t_Awards_t_" />}
            <ClientTestimonial />
            {is_p2p_allowed_country && <P2PBanner />}
            <SignupPublic />
            <MainFooter />
        </Layout>
    )
}
export default HomePage
