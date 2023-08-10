import React from 'react'
import StockIndices from '../components/markets/_stock-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_stock } from '../static/content/_stock'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const StocksAndIndicesPage = () => (
    <Layout type="noNav">
        <DerivedFXHero
            title="_t_Stocks & indices_t_"
            description="_t_Trade global stocks of your favourite household brands and international stock market indices on Deriv. Expand your trading opportunities with access to a wide range of stocks and indices at competitive prices, and the convenience to trade indices beyond standard market hours._t_"
            is_stocks_and_indices
        />
        <StockIndices simple_step_content={simple_step_content_stock} />
        <SignupPublic />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets._t_"
        title="_t_Stock market | Indices trading | Deriv_t_"
        pageContext={pageContext}
    />
)
