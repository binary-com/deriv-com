import React from 'react'
import SyntheticIndices from '../components/markets/_synthetic-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_synthetic } from '../static/content/_synthetic'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

const Markets = () => {
    const { is_eu } = useRegion()
    const { is_deriv_go } = usePlatformQueryParam()
    const description_eu = localize(
        'Trade on asset prices derived from simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite.',
    )
    const description_row = localize(
        'Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX indices, and basket indices.',
    )
    return (
        <Layout type="noNav">
            <SEO
                description={localize(
                    '_t_Trade synthetic indices on Deriv 24/7. Enjoy a variety of instruments with different volatility, including the Volatility 75 Index and Volatility 100 Index._t_',
                )}
                title={localize(
                    '_t_Synthetic indices trading | Trade volatility indices online - Deriv_t_',
                )}
            />

            <DerivedFXHero
                title={localize('Derived')}
                description={is_eu ? description_eu : description_row}
            />
            <NavTab route_from={'synthetic'} route_offset={50} />
            <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
            {!is_deriv_go && <Signup appearance={Appearances.public} />}
        </Layout>
    )
}

export default WithIntl()(Markets)
