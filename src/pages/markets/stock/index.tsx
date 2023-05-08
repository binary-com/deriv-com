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
            description={localize(
                'Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets.',
            )}
            title={localize('Stock market | Indices trading | Deriv')}
        />
        <DerivedFXHero
            title={localize('Stocks & indices')}
            description={localize(
                'Trade global stocks of your favourite household brands and international stock market indices on Deriv. Expand your trading opportunities with access to a wide range of stocks and indices at competitive prices, and the convenience to trade indices beyond standard market hours.',
            )}
            is_stocks_and_indices
        />
        <StockIndices simple_step_content={simple_step_content_stock} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
