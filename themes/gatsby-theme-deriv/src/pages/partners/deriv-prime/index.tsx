import React from 'react'
import { WithIntl } from 'components/localization'
import DerivPrime from 'features/pages/partners/deriv-prime'
import { faq_schema } from 'features/pages/partners/deriv-prime/browse-our-faq/_faq-schema'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DerivPrimePage = ({ pageContext }: TGatsbyHead) => {
    return <DerivPrime region={pageContext.region} />
}

export default WithIntl()(DerivPrimePage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_With Deriv Prime’s liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
        title="_t_Liquidity solutions provider | Deriv Prime_t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
