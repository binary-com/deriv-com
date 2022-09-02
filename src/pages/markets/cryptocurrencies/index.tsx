import React from 'react'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import Cryptocurrencies from '../components/markets/_cryptocurrencies'
import { simple_step_content_cryptocurrencies } from '../static/content/_cryptocurrencies'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const CryptocurrenciesPage = () => (
    <Layout>
        <SEO
            description={localize(
                "Start trading the world's most popular cryptocurrencies on Deriv, and take advantage of a highly volatile market with round-the-clock trading.",
            )}
            title={localize('Cryptocurrency market | Crypto trading | Deriv')}
        />
        <DerivedFXHero
            title="Derived"
            description="Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetic indices, derived FX indices, and basket indices."
        />
        <NavTab route_from={'cryptocurrencies'} route_offset={500} />
        <Cryptocurrencies simple_step_content={simple_step_content_cryptocurrencies} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(CryptocurrenciesPage)
