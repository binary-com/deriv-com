import React from 'react'
import PropTypes from 'prop-types'
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

Interim.propTypes = {
    referrer: PropTypes.string,
}

export default WithIntl()(Interim)
