import React from 'react'
import Hero from './_hero'
import {
    WhoWeLookFor,
    LifeAtDerivCarousel,
    OurValues,
    EmployeeTestimonial,
    OurHiringProcess,
    JoinYourTeam,
} from './_lazy-load'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const meta_attributes = {
    og_title: 'Deriv Careers | Join and grow with us',
    og_description: 'Join our incredible team where your growth is just as important as ours.',
}

const Careers = () => (
    <Layout type="careers">
        <Hero />
        <WhoWeLookFor />
        <JoinYourTeam />
        <OurValues />
        <LifeAtDerivCarousel />
        <EmployeeTestimonial />
        <OurHiringProcess />
    </Layout>
)

export default WithIntl()(Careers)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="Deriv Careers | Join and grow with us"
        description="Join our incredible team where your growth is just as important as ours."
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    />
)
