import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import NoImageHeroWrapper from '../components/elements/no-image-hero'
import OurGoalsWrapper from '../components/elements/our-goals'
import OurNumbersWrapper from '../components/elements/our-numbers';
import OurLocationsWrapper from '../components/elements/our-locations'

const About = () => (
    <Layout>
        <SEO title="About" />
            <NoImageHeroWrapper />
            <OurGoalsWrapper />
            <OurNumbersWrapper />
            <OurLocationsWrapper />
    </Layout>
)

export default About
