import React from 'react'
import Loadable from '@loadable/component'
import { Script } from 'gatsby'
import Hero from './_pa-hero'
import TapInto from './_tap-into'
import { faq_schema } from './_faq-schema'
import PremiumPaymentAgent from './_premium_payment_agent'
import PageNotFound from 'features/pages/404'
import Layout from 'components/layout/layout'
import { SEO, TMetaAttributes } from 'components/containers'
import { Divider } from 'components/elements'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { TGatsbyHead } from 'features/types'

const YourControl = Loadable(() => import('./_your-control'))
const WhoCanApply = Loadable(() => import('./_who-can-apply'))
const Faq = Loadable(() => import('./_faq'))
const P2PBanner = Loadable(() => import('./_p2p_banner'))

const meta_attributes: TMetaAttributes = {
    og_title: '_t_Payment agents | Partners | Deriv_t_',
    og_description:
        '_t_Know all the details about how you can become the payment agent on Deriv. Send us an email to apply!_t_',
}

const PaymentAgent = () => {
    const { is_row, is_p2p_allowed_country } = useRegion()

    return (
        <>
            {is_row ? (
                <Layout type="partners" padding_top="10">
                    <Hero />
                    <TapInto />
                    <YourControl />
                    <WhoCanApply />
                    {is_p2p_allowed_country && <P2PBanner />}
                    {is_row && <PremiumPaymentAgent />}
                    <Divider />
                    <Faq />
                </Layout>
            ) : (
                <PageNotFound
                    pageContext={{
                        locale: '',
                    }}
                />
            )}
        </>
    )
}

export default WithIntl()(PaymentAgent)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <>
        <SEO
            title="_t_Payment agents | Partnership programmes | Deriv_t_"
            description="_t_Find out how to become a payment agent on Deriv to expand your client base and earn extra revenue._t_"
            meta_attributes={meta_attributes}
            pageContext={pageContext}
        />
        <Script type="application/ld+json">{JSON.stringify(faq_schema)}</Script>
    </>
)
