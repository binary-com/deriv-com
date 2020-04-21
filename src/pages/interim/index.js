import React from 'react'
import PropTypes from 'prop-types'
import Hero from './_hero'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Interim = ({ referrer }) => {
    return (
        <Layout type="interim">
            <SEO title={localize('Interim | ') + referrer} />
            <Hero />
        </Layout>
    )
}

Interim.propTypes = {
    referrer: PropTypes.string,
}

export default WithIntl()(Interim)
