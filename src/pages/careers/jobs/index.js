import React from 'react'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Jobs = () => (
    <Layout>
        <SEO title={localize('Jobs')} />
        <h1>Jobs</h1>
    </Layout>
)

export default WithIntl()(Jobs)
