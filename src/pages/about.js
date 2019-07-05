import React from 'react'

import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'

const About = () => (
    <Layout>
        <SEO title={localize('About us')} />
        <h1>{localize('About us')}</h1>
    </Layout>
)

export default WithIntl()(About)
