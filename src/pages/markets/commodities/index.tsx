import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import CommoditiesMarket from 'features/pages/markets/commodities'

const CommoditiesPage = () => {
    return <CommoditiesMarket />
}

export default WithIntl()(CommoditiesPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade the commodities market and speculate on the price movements of oil and precious metals like gold and silver. Enjoy low spreads and zero commission._t_"
        title="_t_Commodities trading | Commodities market online trading | Deriv_t_"
        pageContext={pageContext}
    />
)
