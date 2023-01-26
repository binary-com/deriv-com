import React from 'react'
import Hero from './_hero'
import { Rewards, SubmitABugReport } from './_lazy-load'
import AboutDeriv from './_about-deriv'
import Scope from './_scope'
import OutOfScope from './_out_of_scope'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { TString } from 'types/generics'

const meta_attributes = {
    og_title: 'Bug bounty program | Trading platform and apps security | Deriv',
    og_description:
        'Report bugs on Deriv or our third-party trading platforms and apps and get rewarded based on the impact and severity of the error you have reported.',
}

const title_text: TString = '_t_Bug bounty program | Trading platform and apps security | Deriv_t_'
const description_text: TString =
    '_t_Report bugs on Deriv or our third-party trading platforms and apps and get rewarded based on the impact and severity of the error you have reported._t_'

const Security = () => {
    return (
        <Layout type="security">
            <SEO
                title={localize(title_text)}
                description={localize(description_text)}
                meta_attributes={meta_attributes}
            />
            <Hero />
            <AboutDeriv />
            <Scope />
            <OutOfScope />
            <Rewards />
            <SubmitABugReport />
        </Layout>
    )
}

export default WithIntl()(Security)
