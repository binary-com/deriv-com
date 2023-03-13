import React from 'react'
import StockIndices from '../components/markets/_stock-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_stock } from '../static/content/_stock'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const StocksAndIndicesPage = () => (
    <Layout type="noNav">
        <SEO
            description="_t_Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets._t_"
            title="_t_Stock market | Indices trading | Deriv_t_"
        />
        <DerivedFXHero
            title={localize('Stocks & indices')}
            description={localize(
                'Trade global stocks of your favourite household brands and international stock market indices on Deriv. Our stocks & indices offer competitively priced equities and asset baskets that you can trade outside the regular hours of major stock markets.',
            )}
        />
        <StockIndices simple_step_content={simple_step_content_stock} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
