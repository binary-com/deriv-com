import React from 'react'
import Loadable from '@loadable/component'
import { Helmet } from 'react-helmet'
import Hero from './_pa-hero'
import TapInto from './_tap-into'
import { faq_schema } from './_faq-schema'
import PageNotFound from 'pages/404'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { DerivStore } from 'store'
const YourControl = Loadable(() => import('./_your-control'))
const WhoCanApply = Loadable(() => import('./_who-can-apply'))
const Faq = Loadable(() => import('./_faq'))
const P2PBanner = Loadable(() => import('./_p2p_banner'))

const meta_attributes = {
    og_title: localize('Payment agents | Partners | Deriv'),
    og_description: localize(
        'Know all the details about how you can become the payment agent on Deriv. Send us an email to apply!',
    ),
}

const PaymentAgent = () => {
    const { is_row } = useCountryRule()
    const { is_p2p_allowed_country } = React.useContext(DerivStore)
    return (
        <>
            <SEO
                title={localize('Payment agents | Partnership programmes | Deriv')}
                description={localize(
                    'Find out how to become a payment agent on Deriv to expand your client base and earn extra revenue.',
                )}
                meta_attributes={meta_attributes}
            />
            {is_row ? (
                <Layout type="partners" margin_top={10} no_login_signup>
                    <Helmet>
                        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
                    </Helmet>
                    <Hero />
                    <TapInto />
                    <YourControl />
                    <WhoCanApply />
                    {is_p2p_allowed_country && <P2PBanner />}
                    <Faq />
                </Layout>
            ) : (
                <PageNotFound />
            )}
        </>
    )
}

export default WithIntl()(PaymentAgent)
