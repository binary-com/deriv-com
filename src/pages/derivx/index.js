import React from 'react'
import WhatIsDeriv from './_what-is-derivx.js'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const DerivX = () => {
    return (
        <Layout>
            <SEO title="Deriv X"/>
            <WhatIsDeriv />
        </Layout>
    )
}

export default WithIntl()(DerivX)
