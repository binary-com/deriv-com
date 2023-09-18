import React from 'react'
import Loadable from '@loadable/component'
import Hero from './_hero'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'

const FAQ = Loadable(() => import('./_faq'))
const LoveTrading = Loadable(() => import('./_love-trading'))
const WhatToKnow = Loadable(() => import('./_what-to-know'))

const Interim = () => {
    return (
        <Layout type="interim">
            <Hero />
            <FAQ />
            <WhatToKnow />
            <LoveTrading />
        </Layout>
    )
}

export default WithIntl()(Interim)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO title="_t_Interim | Affiliate_t_" no_index pageContext={pageContext} />
)
