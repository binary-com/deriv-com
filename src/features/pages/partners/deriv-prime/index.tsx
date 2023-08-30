import React from 'react'
import { Helmet } from 'react-helmet'
import CommercialPlan from './commercial-plan'
import GetInTouchBanner from './get-in-touch'
import BrowseOurFaq from './browse-our-faq'
import Potential from './potential'
import WhyDerivPrime from './why-deriv-prime'
import PrimeNumbers from './numbers'
import MeetUsThere from './meet-us-there'
import ConnectivityReliabilityType from './connectivity-reliability'
import AvailableInstruments from './available-instruments'
import Hero from './hero'
import { faq_schema } from './browse-our-faq/_faq-schema'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import Footer from 'features/components/templates/footer'

const DerivPrime = () => {
    return (
        <Layout>
            <SEO
                description="_t_With Deriv Prime’s liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
                title="_t_Liquidity solutions provider | Deriv Prime_t_"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            </Helmet>
            <PaymentAgentAffiliateNav />
            <Hero />
            <Potential />
            <CommercialPlan />
            <AvailableInstruments />
            <ConnectivityReliabilityType />
            <WhyDerivPrime />
            <PrimeNumbers />
            <GetInTouchBanner />
            <MeetUsThere />
            <BrowseOurFaq />
            <Footer />
        </Layout>
    )
}

export default DerivPrime
