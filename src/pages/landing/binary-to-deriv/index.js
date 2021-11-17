import React from 'react'
import DHero from './_dHero'
import DBanner from './_dBanner'
import Favorite from './_favorite'
import Benefits from './_benefits'
import Exclusive from './_exclusive'
import FooterBanner from './_footerBanner'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const JumpIndices = () => {
    return (
        <Layout type="binary-to-deriv" margin_top="0">
            <SEO
                title={localize('Binary to Deriv')}
                description={localize('Trade jump indices, the new synthetics with a twist')}
                no_index
            />
            <DHero />
            <DBanner />
            <Favorite />
            <Benefits />
            <Exclusive />
            <FooterBanner />
        </Layout>
    )
}

export default WithIntl()(JumpIndices)
