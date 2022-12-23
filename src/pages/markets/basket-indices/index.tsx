import React from 'react'
import BasketIndices from '../components/markets/_basket-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_basket } from '../static/content/_basket'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const BasketPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                'Trade Basket indices online with Deriv. Open a demo account and enjoy a wide range of currency pairs on our responsive and intuitive trading platforms.',
            )}
            title={localize(
                'Basket indices trading online | Basket indices trading demo account | Deriv',
            )}
        />
        <DerivedFXHero
            title={localize('Derived')}
            description={localize(
                'Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX indices, and basket indices.',
            )}
        />
        <NavTab route_from={'basket-indices'} route_offset={650} />
        <BasketIndices simple_step_content={simple_step_content_basket} />
    </Layout>
)

export default WithIntl()(BasketPage)
