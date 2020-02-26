import React from 'react'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Locations = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Locations')} />
        <h1>Locations</h1>
    </Layout>
)

export default WithIntl()(Locations)
