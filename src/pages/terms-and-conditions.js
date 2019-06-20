import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const TermsAndConditions = () => (
    <Layout>
        <SEO title="Terms and Conditions" />
        <h1>
            <Localize i18n_text="Terms and Conditions" />
        </h1>
    </Layout>
)

export default TermsAndConditions
