import React from 'react'
import SyntheticIndices from '../components/markets/_synthetic-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_synthetic } from '../static/content/_synthetic'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { TGatsbyHead } from 'features/types'

const Markets = () => {
    const { is_eu, is_row } = useRegion()
    const { is_deriv_go } = usePlatformQueryParam()
    const description_eu =
        '_t_Trade on asset prices derived from simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite._t_'
    const description_row =
        '_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX, and baskets._t_'

    return (
        <Layout type="noNav">
            <DerivedFXHero
                title="_t_Derived indices_t_"
                description={is_eu ? description_eu : description_row}
                is_derived_eu={is_eu ? true : false}
                is_derived_row={is_row ? true : false}
            />
            <NavTab route_from="synthetic" />
            <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
            {!is_deriv_go && <SignupPublic />}
        </Layout>
    )
}

export default WithIntl()(Markets)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Deriv's proprietary synthetics are free of market and liquidity risks. Enjoy 24/7 synthetic trading on Deriv MT5, DTrader, and our other platforms._t_"
        title="_t_Synthetic indices | Volatility indices | Deriv_t_"
        pageContext={pageContext}
    />
)
