import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import FAQ from './_faq'
import Hero from './_hero'
import LoveTrading from './_love-trading'
import WhatTodoNext from './_what-todo-next'
import { faq_schema } from './_faq-schema'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Interim = () => {
    return (
        <Layout type="interim" interim_type="faq">
            <SEO title={localize('Interim | FAQ')} no_index />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
            </Helmet>
            <Hero />
            <FAQ />
            <WhatTodoNext />
            <LoveTrading />
        </Layout>
    )
}

Interim.propTypes = {
    referrer: PropTypes.string,
}

export default WithIntl()(Interim)
