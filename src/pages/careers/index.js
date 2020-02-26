import React from 'react'
import Hero from './_hero'
import WhoWeLookFor from './_who-we-look-for'
import EmployeeTestimonialCarousel from './_employee-testimonial-carousel'
import LifeAtDerivCarousel from './_life-at-deriv-carousel'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Careers = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Careers')} />
        <Hero />
        <LifeAtDerivCarousel />
        <WhoWeLookFor />
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>

        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>

        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>
        <h1>Careers</h1>

        <h1>Careers</h1>
        <EmployeeTestimonialCarousel />
    </Layout>
)

export default WithIntl()(Careers)
