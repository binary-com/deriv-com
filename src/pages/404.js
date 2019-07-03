import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
    </Layout>
)

export default NotFoundPage
