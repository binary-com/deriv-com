import React, { useState, useEffect, useCallback } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { DBanner } from '../dmt5/_lazy-load'
import PageNotFound from '../404'
import Hero from './_hero'
import WhatIsDeriv from './_what-is-derivx'
import SellingPoints from './_selling-points'
import WhyTradeDerivX from './_why-trade-derivx'
import StartDerivX from './_start-derivx'
import Accounts from './_accounts'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, localize } from 'components/localization'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import BackgroundPatternDerivX from 'images/svg/deriv-x/derivx-footer.svg'
import BackgroundPatternDerivXMobile from 'images/svg/deriv-x/derivx-footer-mobile.svg'
import useRegion from 'components/hooks/use-region'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "deriv-x/derivx-footer-banner.png" }) {
            ...fadeIn
        }
    }
`

const DerivX = () => {
    const [is_mobile, setMobile] = useState(false)
    const [is_loaded, setLoaded] = useState(false)
    const { is_row } = useRegion()

    const handleResizeWindow = useCallback(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    }, [setMobile])

    useEffect(() => {
        setLoaded(true)
    }, [])

    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    if (is_loaded) {
        if (is_row) {
            return (
                <Layout>
                    <SEO
                        title={localize(
                            '_t_Deriv X - a multi-asset CFD trading platform available on Deriv_t_',
                        )}
                        description={localize(
                            '_t_Deriv X is a fully customisable, easy-to-use online trading platform offering CFDs on forex, commodities, cryptocurrencies, and synthetic indices._t_',
                        )}
                    />
                    <Hero />
                    <SellingPoints />
                    <WhatIsDeriv />
                    <WhyTradeDerivX />
                    <StartDerivX />
                    <Accounts />
                    <StaticQuery
                        query={query}
                        render={(data) => (
                            <DBanner
                                background_pattern={
                                    is_mobile
                                        ? BackgroundPatternDerivXMobile
                                        : BackgroundPatternDerivX
                                }
                                title="_t_Get trading with Deriv X_t_"
                                data={data}
                            />
                        )}
                    />
                </Layout>
            )
        }

        return <PageNotFound />
    }

    return (
        <>
            <SEO
                title={localize(
                    '_t_Deriv X - a multi-asset CFD trading platform available on Deriv_t_',
                )}
                description={localize(
                    '_t_Deriv X is a fully customisable, easy-to-use online trading platform offering CFDs on forex, commodities, cryptocurrencies, and synthetic indices._t_',
                )}
            />
        </>
    )
}

export default WithIntl()(DerivX)
