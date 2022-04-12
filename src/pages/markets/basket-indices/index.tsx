import React from 'react'
import BasketIndices from '../components/markets/_basket-indices'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_basket } from '../static/content/_basket'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const BasketPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Trade Basket indices online with Deriv. Open a demo account and enjoy a wide range of currency pairs on our responsive and intuitive trading platforms.',
            )}
            title={localize(
                'Basket indices trading online | Basket indices trading demo account | Deriv',
            )}
        />
        <Hero />
        <NavTab route_from={'basket-indices'} route_offset={650} />
        <BasketIndices simple_step_content={simple_step_content_basket} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(BasketPage)
