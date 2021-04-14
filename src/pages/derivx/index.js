import React from 'react'
import Hero from './_hero'
import WhatIsDeriv from './_what-is-derivx'
import SellingPoints from './_selling-points'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const DerivX = () => {
    return (
        <Layout>
            <SEO title="Deriv X"/>
            <Hero />
            <SellingPoints />
            <WhatIsDeriv />
        </Layout>
    )
}

export default WithIntl()(DerivX)
