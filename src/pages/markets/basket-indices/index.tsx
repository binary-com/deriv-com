import React from 'react'
import BasketIndices from '../components/markets/_basket-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_basket } from '../static/content/_basket'
import NavTab from '../components/sections/_nav-tab'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const BasketPage = () => (
    <Layout type="noNav">
        <DerivedFXHero
            title="_t_Derived_t_"
            description="_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX, and baskets._t_"
            is_derived_row
        />
        <NavTab route_from="basket-indices" />
        <BasketIndices simple_step_content={simple_step_content_basket} />
        <SignupPublic />
    </Layout>
)

export default WithIntl()(BasketPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade Basket indices online with Deriv. Open a demo account and enjoy a wide range of currency pairs on our responsive and intuitive trading platforms._t_"
        title="_t_Basket indices trading online | Basket indices trading demo account | Deriv_t_"
        pageContext={pageContext}
    />
)
