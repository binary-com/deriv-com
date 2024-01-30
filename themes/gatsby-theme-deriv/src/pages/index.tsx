import React from 'react'
import HomePage from 'features/pages/home'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import { WithIntl } from 'components/localization'

const Home = () => {
    return <HomePage />
}

export default WithIntl()(Home)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Online trading platform | Forex, cryptos, stocks | Deriv_t_"
        description="_t_A global online trading broker for forex, commodities & other financial markets. Sign up for a demo account and join over 2.5 million traders._t_"
        has_organization_schema
        pageContext={pageContext}
    />
)
