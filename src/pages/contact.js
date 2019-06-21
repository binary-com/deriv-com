import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>
            <Localize translate="Contact" />
        </h1>
    </Layout>
)

export default Contact
