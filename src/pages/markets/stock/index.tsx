import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import StocksAndIndicesMarket from 'features/pages/markets/stocks-and-indices'

const StocksAndIndicesPage = () => {
    return <StocksAndIndicesMarket />
}

export default WithIntl()(StocksAndIndicesPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets._t_"
        title="_t_Stock market | Indices trading | Deriv_t_"
        pageContext={pageContext}
    />
)
