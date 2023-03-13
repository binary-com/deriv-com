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
import { MetaAttributesType } from 'types/page.types'

const meta_attributes: MetaAttributesType = {
    og_title: '_t_Deriv Careers | Join and grow with us_t_',
    og_description:
        '_t_Join our incredible team where your growth is just as important as ours._t_',
}

const Careers = () => (
    <Layout type="careers">
        <SEO
            title="_t_Deriv Careers | Join and grow with us_t_"
            description="_t_Join our incredible team where your growth is just as important as ours._t_"
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
