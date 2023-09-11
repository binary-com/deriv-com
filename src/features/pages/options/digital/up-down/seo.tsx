import React from 'react'
import { Helmet } from 'react-helmet'
import { faq_schema } from './_faq-schema'
import { SEO } from 'components/containers'

const UpDownSEO = () => {
    return (
        <>
            <SEO
                title="_t_Up/Down | Digital options contract | Deriv_t_"
                description="_t_Open a digital options contract with an Up/Down trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            </Helmet>
        </>
    )
}

export default UpDownSEO
