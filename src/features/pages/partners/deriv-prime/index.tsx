import React from 'react'
import GetInTouchBanner from './get-in-touch'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'
import Footer from 'features/components/templates/footer'
import Flex from 'features/components/atoms/flex-box'

const DerivPrime = () => {
    return (
        <Layout>
            <SEO
                description="_t_With Deriv Prime's liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
                title="_t_Liquidity solutions provider | Deriv Prime_t_"
            />
            <PaymentAgentAffiliateNav />
            <Flex.Box padding_block={'40x'} margin_block="20x">
                <GetInTouchBanner />
            </Flex.Box>
            <Footer />
        </Layout>
    )
}

export default DerivPrime
