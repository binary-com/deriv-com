import React, { Suspense } from 'react'
import Hero from './_hero'
import WhoWeLookFor from './_who-we-look-for'
import OurValues from './_our-values'
import EmployeeTestimonial from './_employee-testimonial'
import LifeAtDerivCarousel from './_life-at-deriv-carousel'
import OurHiringProcess from './_our-hiring-process'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Careers = () => (
    <Layout type="careers" margin_top="7rem">
        <SEO
            title={localize('Careers | Join and grow with us | Deriv')}
            description={localize(
                'Looking for a great place to work? Deriv is looking for smart, talented, and dedicated people who are up for a challenging and rewarding career.',
            )}
        />
        <Hero />
        <WhoWeLookFor />
        <LifeAtDerivCarousel />
        <OurValues />
        <Suspense fallback={null}>
            <EmployeeTestimonial />
        </Suspense>
        <OurHiringProcess />
    </Layout>
)

export default WithIntl()(Careers)
