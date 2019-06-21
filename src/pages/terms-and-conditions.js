import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const TermsAndConditions = () => (
    <Layout>
        <SEO title="Terms and Conditions" />
        <h1>
            <Localize translate="Terms and Conditions" />
        </h1>
    </Layout>
)

export default TermsAndConditions
