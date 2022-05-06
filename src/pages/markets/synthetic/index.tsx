import React from 'react'
import SyntheticIndices from '../components/markets/_synthetic-indices'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_synthetic } from '../static/content/_synthetic'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { Localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const Markets = () => (
    <Layout>
        <SEO
            description={
                <Localize translate_text="Deriv’s proprietary synthetic indices are free of market and liquidity risks. Enjoy 24/7 synthetic trading on Deriv MT5, DTrader, and our other platforms." />
            }
            title={<Localize translate_text="Synthetic indices | Volatility indices | Deriv" />}
        />
        <Hero />
        <NavTab route_from={'synthetic'} route_offset={50} />
        <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(Markets)
