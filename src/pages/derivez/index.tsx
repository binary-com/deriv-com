import React from 'react'
import PageNotFound from '../404'
import Hero from './_hero'
import Numbers from './_numbers'
import WhatIsDerivEZ from './what-derivez-have'
import WhyTradeEZ from 'pages/derivez/_why-trade-derivez'
import StartDerivEZ from 'pages/derivez/_how-to-start-deriv-ez'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { TString } from 'types/generics'

const seo_title: TString = '_t_Deriv EZ – a CFD trading platform | Deriv_t_'
const seo_description: TString =
    '_t_Deriv EZ is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_'

const DerivEZ = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return (
            <Layout>
                <SEO title={localize(seo_title)} description={localize(seo_description)} />
                <Hero />
                <Numbers />
                <WhyTradeEZ />
                <WhatIsDerivEZ />
                <StartDerivEZ />
            </Layout>
        )
    }

    return <PageNotFound />
}

export default WithIntl()(DerivEZ)
