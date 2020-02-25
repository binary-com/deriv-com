import React from 'react'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Locations = () => (
    <Layout type="careers">
        <SEO title={localize('Locations')} />
        <h1>Locations</h1>
    </Layout>
)

export default WithIntl()(Locations)
