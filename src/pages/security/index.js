import React from 'react'
import Hero from './_hero'
import { Rewards, SubmitABugReport } from './_lazy-load'
import AboutDeriv from './_about-deriv'
import Scope from './_scope'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const Security = () => {
    return (
        <Layout type="partners" margin_top={10} no_login_signup>
            <SEO title={localize('Some title')} description={localize('Some description')} />
            <Hero />
            <AboutDeriv />
            <Scope />
            <Rewards />
            <SubmitABugReport />
        </Layout>
    )
}

export default WithIntl()(Security)
