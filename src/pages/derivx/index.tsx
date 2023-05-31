import React, { useState, useEffect } from 'react'
import PageNotFound from '../404'
import Hero from './_hero'
import WhatIsDeriv from './_what-is-derivx'
import SellingPoints from './_selling-points'
import WhyTradeDerivX from './_why-trade-derivx'
import StartDerivX from './_start-derivx'
import DerivXGetApp from './_get-derivx'
import OurPlatforms from './_other-apps'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

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
                    <SEO
                        title={localize(
                            'Deriv X - a multi-asset CFD trading platform available on Deriv',
                        )}
                        description={localize(
                            'Deriv X is a fully customisable, easy-to-use online trading platform offering CFDs on forex, commodities, cryptocurrencies, and synthetic indices.',
                        )}
                    />
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

    return (
        <>
            <SEO
                title={localize('Deriv X - a multi-asset CFD trading platform available on Deriv')}
                description={localize(
                    'Deriv X is a fully customisable, easy-to-use online trading platform offering CFDs on forex, commodities, cryptocurrencies, and synthetic indices.',
                )}
            />
        </>
    )
}

export default WithIntl()(DerivX)
