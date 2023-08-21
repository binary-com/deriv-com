import React from 'react'
import PrimeNumbers from './numbers'
import MeetUsThere from './meet-us-there'
import ConnectivityReliabilityType from './connectivity-reliability'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import Flex from 'features/components/atoms/flex-box'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import Footer from 'features/components/templates/footer'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'
import { other_markets_items_deriv_prime } from 'pages/partners/deriv-prime/available-instruments/_data'

const DerivPrime = () => {
    return (
        <Layout>
            <SEO
                description="_t_With Deriv Prime's liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
                title="_t_Liquidity solutions provider | Deriv Prime_t_"
            />
            <PaymentAgentAffiliateNav />
            <Flex.Box pt={'40x'}>
                <OtherMarketsSlider
                    available_markets={other_markets_items_deriv_prime}
                    title="_t_Available instruments_t_"
                />
            </Flex.Box>
            <Flex.Box pt="40x" mt="40x">
                <PrimeNumbers />
            </Flex.Box>
            <Flex.Box pt="40x" mt="40x">
                <ConnectivityReliabilityType />
            </Flex.Box>
            <MeetUsThere />
            <Footer />
        </Layout>
    )
}

export default DerivPrime
