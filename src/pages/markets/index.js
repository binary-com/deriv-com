import React from 'react'
// import styled from 'styled-components'
// import { Forex } from './_forex'
// import { Commodities } from './_commodities'
// import SyntheticIndices from './_synthetic-indices'
// import StockIndices from './_stock-indices'
import { Hero } from './_hero'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const Markets = () => {
    return (
        <Layout>
            <SEO description={localize('')} title={localize('')} />
            <Hero />
        </Layout>
    )
}

export default WithIntl()(Markets)
