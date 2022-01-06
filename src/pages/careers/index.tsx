import React from 'react'
import { Helmet } from 'react-helmet'
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

const meta_attributes = {
    og_title: 'Deriv Careers | Join and grow with us',
    og_description: 'Join our incredible team where your growth is just as important as ours.',
}

const Careers = () => (
    <Layout type="careers">
        <Helmet>
            <link
                rel="stylesheet"
                href="https://css.zohostatic.com/recruit/embed_careers_site/css/v1.0/embed_jobs.css"
                type="text/css"
            />
            <script
                type="text/javascript"
                src="https://js.zohostatic.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.js"
            />
        </Helmet>
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
        {/* <BeSquareBanner /> */}
    </Layout>
)

export default WithIntl()(Careers)
