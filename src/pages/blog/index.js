import React from 'react'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const Blog = () => (
    <Layout>
        <SEO title={localize('Deriv Blog')} description={localize('Deriv Blog')} />
    </Layout>
)

export default WithIntl()(Blog)
