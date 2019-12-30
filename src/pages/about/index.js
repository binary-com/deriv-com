import React from 'react'
import Hero from './_hero'
import OurLocations from './_our-locations'
import OurNumbers from './_our-numbers'
import OurGoals from './_our-goals'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const About = () => {
    return (
        <Layout>
            <SEO title={localize('About us')} />
            <Hero />
            <OurGoals />
            <OurNumbers />
            <OurLocations />
        </Layout>
    )
}

export default WithIntl()(About)
