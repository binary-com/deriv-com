import React from 'react'
import StockIndices from '../components/markets/_stock-indices'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_stock } from '../static/content/_stock'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const StocksAndIndicesPage = () => (
    <Layout>
        <SEO
            description={localize(
                '_t_Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets._t_',
            )}
            title={localize('_t_Stock market | Indices trading | Deriv_t_')}
        />
        <Hero />
        <NavTab route_from={'stock'} route_offset={240} />
        <StockIndices simple_step_content={simple_step_content_stock} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
