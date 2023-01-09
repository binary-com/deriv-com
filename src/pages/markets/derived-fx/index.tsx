import React from 'react'
import Derived from '../components/markets/_derived'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_forex } from '../static/content/_forex'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { SEO } from 'components/containers'

const DerivedFxPage = () => {
    const { is_eu } = useCountryRule()
    const description_eu = localize(
        'Trade 24/7 on our proprietary synthetics that simulate real-world market movements. These indices are unaffected by regular<br /> market hours, global events, or market and liquidity risks. Manage your exposure by selecting the volatility level to suit your risk appetite.',
    )
    const description_row = localize(
        'Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX indices, and basket indices.',
    )
    return (
        <Layout type="noNav">
            <SEO
                description={localize(
                    'Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX indices, and basket indices.',
                )}
                title={localize('Derived Fx | Derived Fx demo account | Deriv')}
            />
            <DerivedFXHero
                title={localize('Derived')}
                description={is_eu ? description_eu : description_row}
            />
            <NavTab route_from={'derived-fx'} route_offset={500} />
            <Derived simple_step_content={simple_step_content_forex} />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(DerivedFxPage)
