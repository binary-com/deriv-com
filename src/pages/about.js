import React from 'react'

import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const About = () => (
    <>
        <SEO title="About" />
        <h1>
            <Localize translate="About us" />
        </h1>
    </>
)

export default About
