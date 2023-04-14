import React from 'react'
import loadable from '@loadable/component'
import HomeHero from './hero'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import MainNav from 'features/components/templates/navigation/main-nav'

const HomeMarkets = loadable(() => import('./markets'))
const OurPlatforms = loadable(() => import('./our-platforms'))
const TradeTypes = loadable(() => import('./trade-types'))
const P2PBanner = loadable(() => import('./p2p-banner'))
const ClientTestimonial = loadable(() => import('./client-testimonial'))
const SignupPublic = loadable(() => import('features/components/templates/signup/with-banner'))
const Footer = loadable(() => import('features/components/templates/footer'))

const HomePage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    return (
        <Layout>
            <SEO
                title={localize(
                    '_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_',
                )}
                description={localize(
                    '_t_Deriv: an online trading platform available 24/7 with a wide selection of derivatives._t_',
                )}
                has_organization_schema
            />
            <MainNav />
            <HomeHero />
            <HomeMarkets />
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
