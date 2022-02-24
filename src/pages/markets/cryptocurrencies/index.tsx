import React from 'react'
import { Hero } from '../components/sections/_hero'
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
        <Hero />
        <NavTab route_from={'cryptocurrencies'} route_offset={500} />
        <Cryptocurrencies simple_step_content={simple_step_content_cryptocurrencies} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(CryptocurrenciesPage)
