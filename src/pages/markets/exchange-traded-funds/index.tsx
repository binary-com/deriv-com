import React from 'react'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import MarketNav from 'features/components/templates/navigation/market-nav'
import ETFMarket from 'features/pages/markets/etf'
import SignupPublic from 'features/components/templates/signup/with-banner'

const StocksAndIndicesPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                '_t_Trade ETFs on Deriv and diversify your portfolio with assets that track bonds, commodities, and indices, without needing to own the underlying assets._t_',
            )}
            title={localize('_t_Exchange-traded funds | ETF trading | Deriv_t_')}
        />
        <MarketNav />
        <ETFMarket />

        <SignupPublic />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
