import React from 'react'
import Loadable from '@loadable/component'
import Hero from './_hero'
import AboutDeriv from './_about-deriv'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
const DerivNumber = Loadable(() => import('./_deriv-numbers'))
const WhyChooseUs = Loadable(() => import('./_why-choose-us'))
const PartnershipOpportunities = Loadable(() => import('./_partnership-opportunities'))

const meta_attributes = {
    og_title: localize('Partnership Programme | Deriv'),
    og_description: localize(
        'Explore Deriv’s partnership programme and get a chance to be a partner with a trusted pioneer. All our programmes are free of charge with no hidden fees.',
    ),
}

const Partner = () => {
    return (
        <Layout type="partners" margin_top={10} no_login_signup>
            <SEO
                title={localize('Be our partner | Partnership programmes | Deriv')}
                description={localize(
                    'Explore Deriv’s partnership programmes and team up with a trusted online trading broker to earn extra income.',
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
