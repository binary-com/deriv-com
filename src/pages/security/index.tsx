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
        <Layout type="security" margin_top={10}>
            <SEO
                title={localize('Bug bounty program')}
                description={localize('Security is a collaboration. Report bugs and be rewarded.')}
            />
            <Hero />
            <AboutDeriv />
            <Scope />
            <Rewards />
            <SubmitABugReport />
        </Layout>
    )
}

export default WithIntl()(Security)
