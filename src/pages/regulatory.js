import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'

const Regulatory = () => (
    <Layout>
        <SEO title={localize('Licenses and regulations')} />
        <h1>{localize('Licenses and regulations')}</h1>
    </Layout>
)

export default WithIntl()(Regulatory)
