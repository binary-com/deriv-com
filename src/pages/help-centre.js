import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'

const HelpCentre = () => (
    <Layout>
        <SEO title={localize('Help centre')} />
        <h1>{localize('Help centre')}</h1>
    </Layout>
)

export default WithIntl()(HelpCentre)
