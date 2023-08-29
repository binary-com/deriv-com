import React from 'react'
import { Helmet } from 'react-helmet'
import { faq_schema } from './_faq-schema'
import { SEO } from 'components/containers'

const VanillaSEO = () => {
    return (
        <>
            <SEO
                title="_t_Vanilla options | Trade options | Deriv_t_"
                description="_t_Earn a potentially high payout by trading vanilla options on Deriv, if your market prediction is right within a limited timeframe._t_"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            </Helmet>
        </>
    )
}

export default VanillaSEO
