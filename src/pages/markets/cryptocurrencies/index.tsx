import React from 'react'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import Cryptocurrencies from '../components/markets/_cryptocurrencies'
import { simple_step_content_cryptocurrencies } from '../static/content/_cryptocurrencies'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const CryptocurrenciesPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                "Start trading the world's most popular cryptocurrencies on Deriv, and take advantage of a highly volatile market with round-the-clock trading.",
            )}
            title={localize('Cryptocurrency market | Crypto trading | Deriv')}
        />
        <DerivedFXHero
            title={localize('Cryptocurrencies')}
            description={localize(
                "Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of world's most popular cryptocurrencies.",
            )}
        />
        <Cryptocurrencies simple_step_content={simple_step_content_cryptocurrencies} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(CryptocurrenciesPage)
