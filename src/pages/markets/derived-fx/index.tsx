import React from 'react'
import Derived from '../components/markets/_derived-fx'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_forex } from '../static/content/_forex'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const DerivedFxPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetic indices, derived FX indices, and basket indices.',
            )}
            title={localize('Derived Fx | Derived Fx demo account | Deriv')}
        />
        <DerivedFXHero
            title="Derived"
            description="Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetic indices, derived FX indices, and basket indices."
        />
        <NavTab route_from={'derived-fx'} route_offset={500} />
        <Derived simple_step_content={simple_step_content_forex} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(DerivedFxPage)
