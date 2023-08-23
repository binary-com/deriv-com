import React from 'react'
import CommercialPlan from './commercial-plan'
import BrowseOurFaq from './browse-our-faq'
import Potential from './potential'
import WhyDerivPrime from './why-deriv-prime'
import PrimeNumbers from './numbers'
import MeetUsThere from './meet-us-there'
import ConnectivityReliabilityType from './connectivity-reliability'
import AvailableInstruments from './available-instruments'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import Footer from 'features/components/templates/footer'

const DerivPrime = () => {
    return (
        <Layout>
            <SEO
                description="_t_With Deriv Prime's liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
                title="_t_Liquidity solutions provider | Deriv Prime_t_"
            />
            <PaymentAgentAffiliateNav />
            <CommercialPlan />
            <Flex.Box pt="40x" mt="40x">
                <Potential />
            </Flex.Box>
            <ConnectivityReliabilityType />
            <AvailableInstruments />
            <WhyDerivPrime />
            <PrimeNumbers />
            <MeetUsThere />
            <BrowseOurFaq />
            <Footer />
        </Layout>
    )
}

export default DerivPrime
