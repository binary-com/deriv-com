import React from 'react'
import { Helmet } from 'react-helmet'
import DHero from './_dHero'
import DBanner from './_dBanner'
import Favorite from './_favorite'
import Benefits from './_benefits'
import Exclusive from './_exclusive'
import FooterBanner from './_footerBanner'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const MoveToDeriv = () => {
    return (
        <Layout type="binary-to-deriv" margin_top="0">
            <SEO
                title={localize('Binary to Deriv')}
                description={localize('Trade jump indices, the new synthetics with a twist')}
                no_index
            />
            <Helmet>
                <link
                    id="favicon"
                    rel="icon"
                    href="/images/common/binary-to-deriv/favicons/favicon-96x96.png"
                    type="image/x-icon"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-180x180.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-180x180.png"
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/apple-touch-icon-180x180.png"
                />
                <link
                    rel="icon"
                    sizes="192x192"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/favicon-192x192.png"
                />
                <link
                    rel="icon"
                    sizes="160x160"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/favicon-160x160.png"
                />
                <link
                    rel="icon"
                    sizes="96x96"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    sizes="16x16"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    sizes="32x32"
                    type="image/x-icon"
                    href="/images/common/binary-to-deriv/favicons/favicon-32x32.png"
                />
            </Helmet>
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
