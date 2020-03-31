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
        <Layout type="partners" padding_top="10rem" no_login_signup>
            <SEO
                title={localize('Partners')}
                description={localize('Partner with a trusted online trading provider')}
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
