import React from 'react'
import Loadable from '@loadable/component'
import Hero from './_hero'
import AboutDeriv from './_about-deriv'
import Layout from 'components/layout/layout'
import { SEO, TMetaAttributes } from 'components/containers'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const DerivNumber = Loadable(() => import('./_deriv-numbers'))
const WhyChooseUs = Loadable(() => import('./_why-choose-us'))
const PartnershipOpportunities = Loadable(() => import('./_partnership-opportunities'))

const meta_attributes: TMetaAttributes = {
    og_title: '_t_Partnership Programme | Deriv_t_',
    og_description:
        '_t_Explore Deriv’s partnership programme and get a chance to be a partner with a trusted pioneer. All our programmes are free of charge with no hidden fees._t_',
}

const Partner = () => {
    return (
        <Layout type="partners" padding_top="10">
            <Hero />
            <AboutDeriv />
            <DerivNumber />
            <WhyChooseUs />
            <PartnershipOpportunities />
        </Layout>
    )
}

export default WithIntl()(Partner)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Be our partner | Partnership programmes | Deriv_t_"
        description="_t_Explore Deriv’s partnership programmes and team up with a trusted online trading broker to earn extra income._t_"
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    />
)
