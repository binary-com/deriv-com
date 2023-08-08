import React from 'react'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import Cryptocurrencies from '../components/markets/_cryptocurrencies'
import { simple_step_content_cryptocurrencies } from '../static/content/_cryptocurrencies'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import SignupPublic from 'features/components/templates/signup/with-banner'
import { TGatsbyHead } from 'features/types'

const CryptocurrenciesPage = () => (
    <Layout type="noNav">
        <DerivedFXHero
            title="_t_Cryptocurrencies_t_"
            description="_t_Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of the world's most popular cryptocurrencies._t_"
            is_cryptocurrencies
        />
        <Cryptocurrencies simple_step_content={simple_step_content_cryptocurrencies} />
        <SignupPublic />
    </Layout>
)

export default WithIntl()(CryptocurrenciesPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Start trading the world's most popular cryptocurrencies on Deriv, and take advantage of a highly volatile market with round-the-clock trading._t_"
        title="_t_Cryptocurrency market | Crypto trading | Deriv_t_"
        pageContext={pageContext}
    />
)
