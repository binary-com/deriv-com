import React from 'react'
import Loadable from '@loadable/component'
import Hero from './_hero'
import AboutDeriv from './_about-deriv'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
const DerivNumber = Loadable(() => import('./_deriv-numbers'))
const WhyChooseUs = Loadable(() => import('./_why-choose-us'))
const PartnershipOpportunities = Loadable(() => import('./_partnership-opportunities'))

const meta_attributes = {
    og_title: <Localize translate_text="Partnership Programme | Deriv" />,
    og_description: (
        <Localize translate_text="Explore Deriv’s partnership programme and get a chance to be a partner with a trusted pioneer. All our programmes are free of charge with no hidden fees." />
    ),
}

const Partner = () => {
    return (
        <Layout type="partners" margin_top={10} no_login_signup>
            <SEO
                title={localize('Partnership Programme | Deriv')}
                description={localize(
                    'Explore Deriv’s partnership programme and get a chance to be a partner with a trusted pioneer. All our programmes are free of charge with no hidden fees.',
                )}
                meta_attributes={meta_attributes}
            />
            <Hero />
            <AboutDeriv />
            <DerivNumber />
            <WhyChooseUs />
            <PartnershipOpportunities />
        </Layout>
    )
}

export default WithIntl()(Partner)
