import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const Trade = () => (
    <Layout>
        <SEO title="Trade" />
        <h1>
            <Localize translate="Trade" />
        </h1>
    </Layout>
)

export default Trade
