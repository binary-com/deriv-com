import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'

const NotFoundPage = () => (
    <Layout>
        <SEO title={localize('404: Not found')} />
        <h1>{localize('NOT FOUND')}</h1>
        {/* prettier-ignore */}
        <p>{localize('You just hit a route that doesn\'t exist.')}</p>
    </Layout>
)

export default WithIntl()(NotFoundPage)
