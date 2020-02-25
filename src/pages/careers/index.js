import React from 'react'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Careers = () => (
    <Layout>
        <SEO title={localize('Careers')} />
        <h1>Careers</h1>
    </Layout>
)

export default WithIntl()(Careers)
