import React from 'react'
import Hero from './_hero'
import TapInto from './_tap-into'
import YourControl from './_your-control'
import WhoCanApply from './_who-can-apply'
import Faq from './_faq'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const PaymentAgent = () => {
    return (
        <Layout type="partners" margin_top="10rem" no_login_signup>
            <SEO
                title={localize('Payment agents | Partners | Deriv')}
                description={localize(
                    'Know all the details about how you can become the payment agent on Deriv. Send us an email to apply!',
                )}
            />
            <Hero />
            <TapInto />
            <YourControl />
            <WhoCanApply />
            <Faq />
        </Layout>
    )
}

export default WithIntl()(PaymentAgent)
