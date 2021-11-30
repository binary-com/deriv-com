import React from 'react'
import Hero from './_hero'
import { Rewards, AboutDeriv, Scope } from './_lazy-load'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const Security = () => {
    return (
        <Layout type="partners" margin_top={10} no_login_signup>
            <SEO title={localize('Some title')} description={localize('Some description')} />
            <Hero />
            <AboutDeriv />
            <Scope />
            <Rewards />
        </Layout>
    )
}

export default WithIntl()(Security)
