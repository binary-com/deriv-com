import React from 'react'
import Derived from '../components/markets/_derived'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_derived_fx } from '../static/content/_forex'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DerivedFxPage = () => {
    const { is_eu, is_row } = useRegion()
    const description_eu =
        '_t_Trade 24/7 on our proprietary synthetics that simulate real-world market movements. These indices are unaffected by regular<br /> market hours, global events, or market and liquidity risks. Manage your exposure by selecting the volatility level to suit your risk appetite._t_'
    const description_row =
        '_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX, and baskets._t_'

    return (
        <Layout type="noNav">
            <DerivedFXHero
                title="_t_Derived_t_"
                description={is_eu ? description_eu : description_row}
                is_derived_row={is_row ? true : false}
            />
            <NavTab route_from="derived-fx" />
            <Derived simple_step_content={simple_step_derived_fx} />
            <SignupPublic />
        </Layout>
    )
}

export default WithIntl()(DerivedFxPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX indices, and baskets._t_"
        title="_t_Derived Fx | Derived Fx demo account | Deriv_t_"
        pageContext={pageContext}
    />
)
