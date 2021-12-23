import React from 'react'
import DHero from './mtd/_dHero'
import DBanner from './mtd/_dBanner'
import Favorite from './mtd/_favorite'
import Benefits from './mtd/_benefits'
import Exclusive from './mtd/_exclusive'
import FooterBanner from './mtd/_footerBanner'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const MoveToDeriv = () => {
    return (
        <Layout
            type="binary-to-deriv"
            margin_top="0"
            is_ppc={true}
            no_live_chat={true}
            is_ppc_redirect={true}
        >
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

export default WithIntl()(MoveToDeriv)
