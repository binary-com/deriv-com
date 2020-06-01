import React from 'react'
import PropTypes from 'prop-types'
import Everything from '../_everything'
import FAQ from '../_faq'
import Hero from './_hero'
import LoveTrading from './_love-trading'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Interim = () => {
    return (
        <Layout type="interim" interim_type="dmt5">
            <SEO title={localize('Interim | DMT5')} no_index />
            <Hero />
            <Everything />
            <FAQ />
            <LoveTrading />
        </Layout>
    )
}

Interim.propTypes = {
    referrer: PropTypes.string,
}

export default WithIntl()(Interim)
