import React from 'react'

import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import withIntl from '../components/localization/withIntl'
import { localize } from '../components/localization/config'

const About = () => (
    <Layout>
        <SEO title={localize('About us')} />
        <h1>{localize('About us')}</h1>
    </Layout>
)

export default withIntl()(About)
