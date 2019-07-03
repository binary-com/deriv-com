import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import withIntl from '../components/localization/withIntl'
import { localize } from '../components/localization/config'

const Trade = () => (
    <Layout>
        <SEO title={localize('Trade')} />
        <h1>{localize('Trade')}</h1>
    </Layout>
)

export default withIntl()(Trade)
