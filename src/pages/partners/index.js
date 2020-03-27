import React from 'react'
import Hero from './_hero'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const Partner = () => {
    return (
        <Layout type="partners" padding_top="10rem" no_login_signup>
            <SEO
                title={localize('Partners')}
                description={localize('Partner with a trusted online trading provider')}
            />
            <Hero />
        </Layout>
    )
}

export default WithIntl()(Partner)
