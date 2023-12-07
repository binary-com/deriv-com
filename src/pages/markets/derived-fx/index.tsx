import React from 'react'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import DerivedMarket from 'features/pages/markets/derived'

const DerivedFxPage = () => {
    return <DerivedMarket />
}

export default WithIntl()(DerivedFxPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX indices, and baskets._t_"
        title="_t_Derived Fx | Derived Fx demo account | Deriv_t_"
        pageContext={pageContext}
    />
)
