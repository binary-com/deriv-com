import React from 'react'
import loadable from '@loadable/component'
import { StatBlock } from '@deriv-com/blocks'
import Layout from 'features/components/templates/layout'
import HomeHero from './hero'
import LivePricing from './live-pricing'
import P2PBanner from './p2p-banner'
import ClientTestimonial from './client-testimonial'
import TradeTypes from './trade-types'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import AwardBanner from 'features/components/templates/banners/award-banners'
import useRegion from 'components/hooks/use-region'
import MainNav from 'features/components/templates/navigation/main-nav'
import SignupPublic from 'features/components/templates/signup/with-banner'
import { localize } from 'components/localization'

const OurPlatforms = loadable(() => import('./our-platforms'))
const Footer = loadable(() => import('features/components/templates/footer'))

const HomePage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country, is_eu } = useRegion()

    return (
        <Layout>
            <MainNav />
            <HomeHero />
            <LivePricing />
            <TradeTypes />
            <StatBlock.NumbersWithTitle
                title={localize('_t_Why choose Deriv?_t_')}
                cards={[
                    { header: 'hassan', description: 'is cool', color: 'coral' },
                    { header: 'nuzhy', description: 'is cool', color: 'dark' },
                    { header: 'fasih', description: 'is NOT cool', color: 'dark' },
                    { header: 'michio', description: 'is cool', color: 'coral' },
                ]}
            />
            <OurPlatforms />
            {is_eu ? null : <AwardBanner title="_t_Awards_t_" />}
            <ClientTestimonial />
            {is_p2p_allowed_country && <P2PBanner />}
            <SignupPublic />
            <Footer />
        </Layout>
    )
}

export default HomePage
