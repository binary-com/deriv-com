import React from 'react'
import Loadable from '@loadable/component'
import { faq_schema } from './_faq-schema'
import AffiliateIbHero from './_affiliate-ib-hero'
import Numbers from './_numbers'
import PrimeAndVolume from './_prime-and-volume'
import Layout from 'components/layout/layout'
import { SEO, TMetaAttributes } from 'components/containers'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const WhyUs = Loadable(() => import('./_why-us'))
const WhoCanAplly = Loadable(() => import('./_who-can-apply'))
const DerivAffiliateProgramme = Loadable(() => import('./_deriv-affiliate-programme'))
const MoreReason = Loadable(() => import('./_more-reason'))
const Faq = Loadable(() => import('./_faq'))
const PartnerCTA = Loadable(() => import('./_partner-cta'))

const meta_attributes: TMetaAttributes = {
    og_title: '_t_Affiliate and IB programme | Deriv_t_',
    og_description:
        '_t_Join Deriv’s affiliate and IB programmes and get a chance to be a partner with a trusted online trading provider._t_',
}

const AffiliateIb = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return (
        <Layout region={region} type="partners" padding_top="8">
            <AffiliateIbHero />
            <Numbers />
            <DerivAffiliateProgramme />
            <PrimeAndVolume/>
            <WhyUs />
            <WhoCanAplly />
            <MoreReason />
            <Faq />
            <PartnerCTA />
        </Layout>
    )
}

export default WithIntl()(AffiliateIb)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Affiliate and IB programmes | Partnership programmes | Deriv_t_"
        description="_t_Join the Deriv affiliate partnership programme and introducing broker (IB) programme to earn commissions from various income opportunities._t_"
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
