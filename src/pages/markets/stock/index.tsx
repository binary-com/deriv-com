import React from 'react'
import StockIndices from '../components/markets/_stock-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_stock } from '../static/content/_stock'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const StocksAndIndicesPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets.',
            )}
            title={localize('Stock market | Indices trading | Deriv')}
        />
        <DerivedFXHero
            title={<Localize translate_text="Stocks & indices" />}
            description={
                <Localize translate_text="Trade global stocks of your favourite household brands and international stock market indices on Deriv. Our stocks & indices offer competitively priced equities and asset baskets that you can trade outside the regular hours of major stock markets." />
            }
        />
        <StockIndices simple_step_content={simple_step_content_stock} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
