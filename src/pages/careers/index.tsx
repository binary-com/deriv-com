import React from 'react'
import Hero from './_hero'
import {
    WhoWeLookFor,
    LifeAtDerivCarousel,
    OurValues,
    EmployeeTestimonial,
    OurHiringProcess,
    JoinYourTeam,
    BeSquareBanner,
} from './_lazy-load'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const meta_attributes = {
    og_title: 'Deriv Careers | Join and grow with us',
    og_description: 'Join our incredible team where your growth is just as important as ours.',
}

const Careers = () => (
    <Layout type="careers">
        <SEO
            title={'Deriv Careers | Join and grow with us'}
            description={'Join our incredible team where your growth is just as important as ours.'}
            meta_attributes={meta_attributes}
        />
        <Hero />
        <WhoWeLookFor />
        <JoinYourTeam />
        <OurValues />
        <LifeAtDerivCarousel />
        <EmployeeTestimonial />
        <OurHiringProcess />
        <BeSquareBanner />
    </Layout>
)

export default WithIntl()(Careers)
