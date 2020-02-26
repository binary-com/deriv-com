import React from 'react'
import Hero from './_hero'
import WhoWeLookFor from './_who-we-look-for'
import OurValues from './_our-values'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Careers = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Careers')} />
        <Hero />
        <WhoWeLookFor />
        <OurValues />
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
    </Layout>
)

export default WithIntl()(Careers)
