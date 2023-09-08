import React from 'react'
import { Script } from 'gatsby'
import { WithIntl } from 'components/localization'
import DerivPrime from 'features/pages/partners/deriv-prime'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import { faq_schema } from 'features/pages/partners/deriv-prime/browse-our-faq/_faq-schema'

const DerivPrimePage = () => {
    return <DerivPrime />
}

export default WithIntl()(DerivPrimePage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            description="_t_With Deriv Prime’s liquidity solutions for online trading, you get unbeatable spreads on the commodities, cryptocurrencies, and forex markets._t_"
            title="_t_Liquidity solutions provider | Deriv Prime_t_"
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
