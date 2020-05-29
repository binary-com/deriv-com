import React from 'react'
import PropTypes from 'prop-types'
import FAQ from './_faq'
import Hero from './_hero'
import LoveTrading from './_love-trading'
import WhatToKnow from './_what-to-know'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Interim = () => {
    return (
        <Layout type="interim" interim_type="affiliate">
            <SEO title={localize('Interim | Affiliate')} no_index />
            <Hero />
            <FAQ />
            <WhatToKnow />
            <LoveTrading />
        </Layout>
    )
}

Interim.propTypes = {
    referrer: PropTypes.string,
}

export default WithIntl()(Interim)
