import React from 'react'
import Commodities from '../components/markets/_commodities'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_commodities } from '../static/content/_commodities'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const CommoditiesPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Sign up with Deriv to start trading on commodities and speculate on the price movements of gold, silver, oil, and other assets.',
            )}
            title={localize('Commodities market | Commodities trading | Deriv')}
        />
        <DerivedFXHero
            title="Commodities"
            description="Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetic indices, derived FX indices, and basket indices."
        />
        <NavTab route_from={'commodities'} route_offset={1200} />
        <Commodities simple_step_content={simple_step_content_commodities} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(CommoditiesPage)
