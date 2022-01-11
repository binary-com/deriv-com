import React from 'react'
import Loadable from '@loadable/component'
import Hero from './_hero'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
const FAQ = Loadable(() => import('./_faq'))
const LoveTrading = Loadable(() => import('./_love-trading'))
const WhatToKnow = Loadable(() => import('./_what-to-know'))

const Interim = () => {
    return (
        <Layout type="interim" interim_type="affiliate">
            <SEO title={localize('Interim | Affiliate')} no_index />
            <Hero />
            <FAQ />
            <WhatToKnow />
            <LoveTrading />
        </Layout>
    )
}

export default WithIntl()(Interim)
