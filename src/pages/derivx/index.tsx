import React, { useState, useEffect } from 'react'
import Hero from './_hero'
import WhatIsDeriv from './_what-is-derivx'
import SellingPoints from './_selling-points'
import WhyTradeDerivX from './_why-trade-derivx'
import StartDerivX from './_start-derivx'
import DerivXGetApp from './_get-derivx'
import OurPlatforms from './_other-apps'
import PageNotFound from 'features/pages/404'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import { TGatsbyHead } from 'features/types'

const DerivX = () => {
    const { is_row } = useRegion()
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (is_loaded) {
        if (is_row) {
            return (
                <Layout>
                    <Hero />
                    <SellingPoints />
                    <WhatIsDeriv />
                    <WhyTradeDerivX />
                    <StartDerivX />
                    <DerivXGetApp />
                    <OurPlatforms />
                </Layout>
            )
        }

        return <PageNotFound />
    }

    return <React.Fragment></React.Fragment>
}

export default WithIntl()(DerivX)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Deriv X - a multi-asset CFD trading platform available on Deriv_t_"
        description="_t_Deriv X is a fully customisable, easy-to-use online trading platform offering CFDs on forex, commodities, cryptocurrencies, and synthetic indices._t_"
        pageContext={pageContext}
    />
)
