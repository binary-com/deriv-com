import React, { useState, useEffect, useCallback } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { DBanner } from '../dmt5/_lazy-load'
import Hero from './_hero'
import WhatIsDeriv from './_what-is-derivx'
import SellingPoints from './_selling-points'
import WhyTradeDerivX from './_why-trade-derivx'
import StartDerivX from './_start-derivx'
import Accounts from './_accounts'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, Localize } from 'components/localization'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import BackgroundPatternDerivX from 'images/svg/deriv-x/derivx-footer.svg'
import BackgroundPatternDerivXMobile from 'images/svg/deriv-x/derivx-footer-mobile.svg'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "deriv-x/derivx-footer-banner.png" }) {
            ...fadeIn
        }
    }
`

const DerivX = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = useCallback(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    }, [setMobile])

    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    return (
        <Layout>
            <SEO title="Deriv X | Deriv" />
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
                            is_mobile ? BackgroundPatternDerivXMobile : BackgroundPatternDerivX
                        }
                        title={<Localize translate_text="Get trading with Deriv X" />}
                        data={data}
                    />
                )}
            />
        </Layout>
    )
}

export default WithIntl()(DerivX)
