import React from 'react'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { PageDirection, SEO } from 'components/containers'
import MarketNav from 'features/components/templates/navigation/market-nav'
import ETFMarket from 'features/pages/markets/etf'
import SignupPublic from 'features/components/templates/signup/with-banner'
import useRegion from 'components/hooks/use-region'
import PageNotFound from 'features/pages/404'
import { TGatsbyHeadApi } from 'features/types'

const StocksAndIndicesPage = () => {
    const { is_row } = useRegion()

    return is_row ? (
        <Layout type="noNav">
            <PageDirection />
            <MarketNav />
            <ETFMarket />
            <SignupPublic />
        </Layout>
    ) : (
        <PageNotFound />
    )
}

export default WithIntl()(StocksAndIndicesPage)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        description="_t_Trade ETFs on Deriv and diversify your portfolio with assets that track bonds, commodities, and indices, without needing to own the underlying assets._t_"
        title="_t_Exchange-traded funds | ETF trading | Deriv_t_"
        pageContext={pageContext}
    />
)
