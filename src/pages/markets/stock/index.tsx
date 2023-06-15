import React from 'react'
import StockIndices from '../components/markets/_stock-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_stock } from '../static/content/_stock'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const StocksAndIndicesPage = () => (
    <Layout type="noNav">
        <DerivedFXHero
            title={localize('Stocks & indices')}
            description={localize(
                'Trade global stocks of your favourite household brands and international stock market indices on Deriv. Expand your trading opportunities with access to a wide range of stocks and indices at competitive prices, and the convenience to trade indices beyond standard market hours.',
            )}
            is_stocks_and_indices
        />
        <StockIndices simple_step_content={simple_step_content_stock} />
        <SignupPublic />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
