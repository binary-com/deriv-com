import React from 'react'
import Hero from './_hero'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Careers = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Careers')} />
        <Hero />
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
