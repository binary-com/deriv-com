import React from 'react'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'
import Layout from '../components/layout/layout'

const HelpCentre = () => (
    <Layout>
        <SEO title="Help centre" />
        <h1>
            <Localize translate="Help Centre" />
        </h1>
    </Layout>
)

export default HelpCentre
