import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const About = () => (
    <Layout>
        <SEO title="About" />
        <h1>
            <Localize i18n_text="About" />
        </h1>
    </Layout>
)

export default About
