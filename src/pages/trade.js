import React from 'react'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'
import Layout from '../components/layout/layout'

const Trade = () => (
    <Layout>
        <SEO title="Trade" />
        <h1>
            <Localize translate="Trade" />
        </h1>
    </Layout>
)

export default Trade
