import React from 'react'
import Hero from './_hero'
import WhatIsDeriv from './_what-is-derivx'
import SellingPoints from './_selling-points'
import WhyTradeDerivX from './_why-trade-derivx'
import StartDerivX from './_start-derivx'
import Accounts from './_accounts'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const DerivX = () => {
    return (
        <Layout>
            <SEO title="Deriv X | Deriv" />
            <Hero />
            <SellingPoints />
            <WhatIsDeriv />
            <WhyTradeDerivX />
            <StartDerivX />
            <Accounts />
        </Layout>
    )
}

export default WithIntl()(DerivX)
