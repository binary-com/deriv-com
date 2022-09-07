import React from 'react'
import SyntheticIndices from '../components/markets/_synthetic-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_synthetic } from '../static/content/_synthetic'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const Markets = () => (
    <Layout>
        <SEO
            description={localize(
                "Deriv's proprietary synthetic indices are free of market and liquidity risks. Enjoy 24/7 synthetic trading on Deriv MT5, DTrader, and our other platforms.",
            )}
            title={localize('Synthetic indices | Volatility indices | Deriv')}
        />
        <DerivedFXHero
            title="Derived"
            description="Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetic indices, derived FX indices, and basket indices."
        />
        <NavTab route_from={'synthetic'} route_offset={50} />
        <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(Markets)
