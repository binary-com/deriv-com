import React from 'react'
import Hero from './_hero'
import WhoWeLookFor from './_who-we-look-for'
import OurValues from './_our-values'
import EmployeeTestimonialCarousel from './_employee-testimonial-carousel'
import LifeAtDerivCarousel from './_life-at-deriv-carousel'
import FindPlace from './_find-place'
import OurHiringProcess from './_our-hiring-process'
import { RoleBanner } from './_layout-components/_banner'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const Careers = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={'Careers'} />
        <Hero />
        <WhoWeLookFor />
        <LifeAtDerivCarousel />
        <OurValues />
        <EmployeeTestimonialCarousel />
        <FindPlace />
        <OurHiringProcess />
        <RoleBanner />
    </Layout>
)

export default WithIntl()(Careers)
