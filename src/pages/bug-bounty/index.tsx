import React from 'react'
import Hero from './_hero'
import { Rewards, SubmitABugReport } from './_lazy-load'
import AboutDeriv from './_about-deriv'
import Scope from './_scope'
import OutOfScope from './_out_of_scope'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'
import { MetaAttributesType } from 'types/page.types'

const meta_attributes: MetaAttributesType = {
    og_title: '_t_Bug bounty program | Trading platform and apps security | Deriv_t_',
    og_description:
        '_t_Report bugs on Deriv or our third-party trading platforms and apps and get rewarded based on the impact and severity of the error you have reported._t_',
}

const Security = () => {
    return (
        <Layout type="security">
            <SEO
                title="_t_Bug bounty program | Trading platform and apps security | Deriv_t_"
                description="_t_Report bugs on Deriv or our third-party trading platforms and apps and get rewarded based on the impact and severity of the error you have reported._t_"
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
