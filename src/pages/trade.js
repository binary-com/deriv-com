import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'

const Trade = () => (
    <Layout>
        <SEO title={localize('Trade')} />
        <h1>{localize('Trade')}</h1>
    </Layout>
)

export default WithIntl()(Trade)
