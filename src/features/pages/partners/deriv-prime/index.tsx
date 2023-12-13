import React from 'react'
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
import MainFooter from 'features/components/templates/footer'
import PrimeNav from 'features/components/templates/navigation/partners-nav/prime-nav'

const DerivPrime = () => {
    return (
        <Layout>
            <PrimeNav />
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
            <MainFooter />
        </Layout>
    )
}

export default DerivPrime
