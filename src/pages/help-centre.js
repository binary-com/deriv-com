import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const HelpCentre = () => (
    <Layout>
        <SEO title="Help centre" />
        <h1>
            <Localize translate="Help Centre" />
        </h1>
    </Layout>
)

export default HelpCentre
