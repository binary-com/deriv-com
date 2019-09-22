import React from 'react'
import { localize } from 'components/localization'
import Layout from 'components/layout/layout'
import SEO from 'components/containers/seo'
import Hero from './_hero.js'
import Numbers from './_numbers.js'

const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('Dtrader')} />
            <Hero />
            <Numbers />
        </Layout>
    )
}

export default Dtrader
