import React from 'react'
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
import Layout from 'features/components/templates/layout'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import Footer from 'features/components/templates/footer'

const DerivPrime = () => {
    return (
        <Layout>
            <PaymentAgentAffiliateNav is_prime_page />
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
