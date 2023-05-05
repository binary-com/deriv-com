import React from 'react'
import Loadable from '@loadable/component'
import Hero from './_pa-hero'
import TapInto from './_tap-into'
import { faq_schema } from './_faq-schema'
import PageNotFound from 'pages/404'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { WithIntl, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { MetaAttributesType } from 'types/page.types'

const YourControl = Loadable(() => import('./_your-control'))
const WhoCanApply = Loadable(() => import('./_who-can-apply'))
const Faq = Loadable(() => import('./_faq'))
const P2PBanner = Loadable(() => import('./_p2p_banner'))

const meta_attributes: MetaAttributesType = {
    og_title: localize('_t_Payment agents | Partners | Deriv_t_'),
    og_description: localize(
        '_t_Know all the details about how you can become the payment agent on Deriv. Send us an email to apply!_t_',
    ),
}

const PaymentAgent = () => {
    const { is_row, is_p2p_allowed_country } = useRegion()

    return (
        <>
            <SEO
                title={localize('_t_Payment agents | Partnership programmes | Deriv_t_')}
                description={localize(
                    '_t_Find out how to become a payment agent on Deriv to expand your client base and earn extra revenue._t_',
                )}
                meta_attributes={meta_attributes}
            />
            {is_row ? (
                <Layout type="partners" margin_top={10} no_login_signup>
                    <Hero />
                    <TapInto />
                    <YourControl />
                    <WhoCanApply />
                    {is_p2p_allowed_country && <P2PBanner />}
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

export const Head = () => <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
