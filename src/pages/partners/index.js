import React from 'react'
import Hero from './_hero'
import AboutDeriv from './_about-deriv'
import DerivNumber from './_deriv-numbers'
import WhyChooseUs from './_why-choose-us'
import PartnershipOpportunities from './_partnership-opportunities'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const Partner = () => {
    return (
        <Layout type="partners" margin_top="10rem" no_login_signup>
            <SEO
                title={localize('Partnership Programme | Deriv')}
                description={localize(
                    'Explore Deriv’s partnership programme and get a chance to be a partner with a trusted pioneer. All our programmes are free of charge with no hidden fees.',
                )}
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
