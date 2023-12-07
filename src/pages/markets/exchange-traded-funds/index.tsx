import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import ETFsMarket from 'features/pages/markets/etfs'

const ETFMarketPage = () => {
    return <ETFsMarket />
}

export default WithIntl()(ETFMarketPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade ETFs on Deriv and diversify your portfolio with assets that track bonds, commodities, and indices, without needing to own the underlying assets._t_"
        title="_t_Exchange-traded funds | ETF trading | Deriv_t_"
        pageContext={pageContext}
    />
)
