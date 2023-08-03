import React from 'react'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import DerivPrime from 'features/pages/partners/deriv-prime'
import PaymentAgentAffiliateNav from 'features/components/templates/navigation/payment-agent-nav'

const DerivPrimePage = () => {
    return (
        <Layout type="noNav">
            <SEO
                description="_t_With Deriv Prime's liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
                title="_t_Liquidity solutions provider | Deriv Prime_t_"
            />
            <PaymentAgentAffiliateNav />
            <DerivPrime />
        </Layout>
    )
}

export default WithIntl()(DerivPrimePage)
