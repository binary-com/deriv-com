import React from 'react'

import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'
import Layout from '../components/layout/layout'

const About = () => (
    <Layout>
        <SEO title="About" />
        <h1>
            <Localize translate="About us" />
        </h1>
    </Layout>
)

export default About
