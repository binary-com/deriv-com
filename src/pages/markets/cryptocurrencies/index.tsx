import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import CryptoMarket from 'features/pages/markets/cryptocurrency'

const CryptocurrenciesPage = () => <CryptoMarket />

export default WithIntl()(CryptocurrenciesPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Start trading the world's most popular cryptocurrencies on Deriv, and take advantage of a highly volatile market with round-the-clock trading._t_"
        title="_t_Cryptocurrency market | Crypto trading | Deriv_t_"
        pageContext={pageContext}
    />
)
