import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import withIntl from '../components/localization/withIntl'
import { localize } from '../components/localization/config'

const NotFoundPage = () => (
    <Layout>
        <SEO title={localize('404: Not found')} />
        <h1>{localize('NOT FOUND')}</h1>
        <p>{localize("You just hit a route that doesn't exist.")}</p>
    </Layout>
)

export default withIntl()(NotFoundPage)
