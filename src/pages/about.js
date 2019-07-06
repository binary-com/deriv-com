import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import NoImageHeroWrapper from '../components/elements/no-image-hero'
import OurGoalsWrapper from '../components/elements/our-goals'
import OurNumbersWrapper from '../components/elements/our-numbers'
import OurLocationsWrapper from '../components/elements/our-locations'

const About = () => (
    <Layout>
        <SEO title={localize('About us')} />
        <NoImageHeroWrapper />
        <OurGoalsWrapper />
        <OurNumbersWrapper />
        <OurLocationsWrapper />
    </Layout>
)

export default WithIntl()(About)
