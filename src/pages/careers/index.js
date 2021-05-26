import React from 'react'
import Hero from './_hero'
import {
    WhoWeLookFor,
    LifeAtDerivCarousel,
    OurValues,
    EmployeeTestimonial,
    OurHiringProcess,
} from './_lazy-load'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'

const meta_attributes = {
    og_title: localize('Careers | Join and grow with us | Deriv'),
    og_description: localize(
        'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
    ),
}

const Careers = () => (
    <Layout type="careers" margin_top={7}>
        <SEO
            title={localize('Careers | Join and grow with us | Deriv')}
            description={localize(
                'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
            )}
            meta_attributes={meta_attributes}
        />
        <Hero />
        <WhoWeLookFor />
        <LifeAtDerivCarousel />
        <OurValues />
        <EmployeeTestimonial />
        <OurHiringProcess />
    </Layout>
)

export default WithIntl()(Careers)
