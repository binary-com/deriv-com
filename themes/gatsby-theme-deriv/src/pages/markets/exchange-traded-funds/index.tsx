import React from 'react'
import { WithIntl } from 'components/localization'
import ETFMarket from 'features/pages/markets/etf'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const ETFMarketPage = ({pageContext}: TGatsbyHead) => {
    const {region} = pageContext
    return <ETFMarket region={region}/>
}

export default WithIntl()(ETFMarketPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade ETFs on Deriv and diversify your portfolio with assets that track bonds, commodities, and indices, without needing to own the underlying assets._t_"
        title="_t_Exchange-traded funds | ETF trading | Deriv_t_"
        pageContext={pageContext}
    />
)
