import React, { lazy } from 'react'
import Layout from 'features/components/templates/layout'
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
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import SuspenseHelper from 'features/components/atoms/suspense-helper'
const Footer = lazy(() => import('features/components/templates/footer'))

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
            <SuspenseHelper fallback={<></>}>
                <Footer />
            </SuspenseHelper>
        </Layout>
    )
}

export default DerivPrime
