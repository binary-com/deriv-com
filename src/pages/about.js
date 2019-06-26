import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import NoImageHeroWrapper from '../components/elements/no-image-hero'
import OurGoalsWrapper from '../components/elements/our-goals'

const About = () => (
    <Layout>
        <SEO title="About" />
            <NoImageHeroWrapper />
            <OurGoalsWrapper />
    </Layout>
)

export default About
