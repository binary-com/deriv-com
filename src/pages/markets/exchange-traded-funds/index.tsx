import React from 'react'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import MarketNav from 'features/components/templates/navigation/market-nav'
import ETFMarket from 'features/pages/markets/etf'

const StocksAndIndicesPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                '_t_Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets._t_',
            )}
            title={localize('_t_Stock market | Indices trading | Deriv_t_')}
        />
        {/* <DerivedFXHero
            title={localize('Stocks & indices')}
            description={localize(
                'Trade global stocks of your favourite household brands and international stock market indices on Deriv. Our stocks & indices offer competitively priced equities and asset baskets that you can trade outside the regular hours of major stock markets.',
            )}
        /> */}
        <MarketNav />
        <ETFMarket />

        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
