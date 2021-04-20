import React from 'react'
import Loadable from '@loadable/component'
import { Helmet } from 'react-helmet'
import Hero from './_hero'
import TapInto from './_tap-into'
import { faq_schema } from './_faq-schema.js'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
const YourControl = Loadable(() => import('./_your-control'))
const WhoCanApply = Loadable(() => import('./_who-can-apply'))
const Faq = Loadable(() => import('./_faq'))

const PaymentAgent = () => {
    return (
        <Layout type="partners" margin_top={10} no_login_signup>
            <SEO
                title={localize('Payment agents | Partners | Deriv')}
                description={localize(
                    'Know all the details about how you can become the payment agent on Deriv. Send us an email to apply!',
                )}
            />
            <Helmet>
                    <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            </Helmet>
            <Hero />
            <TapInto />
            <YourControl />
            <WhoCanApply />
            <Faq />
        </Layout>
    )
}

export default WithIntl()(PaymentAgent)
