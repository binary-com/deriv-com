import React, { useEffect, useState } from 'react'
import PageNotFound from '../404'
import { DerivGoContent, FooterBanner, StartDerivGo } from './_lazy-load.js'
import Banner from './_banner.js'
import OtherApps from './_other-apps'
import WhatIsDerivGo from './_what-is-deriv-go'
import WhyTradeDerivGo from './_why-trade-deriv-go'
import { SEO } from 'components/containers'
import Roadmap from 'components/elements/roadmap'
import { useCountryRule } from 'components/hooks/use-country-rule'
import Layout from 'components/layout/layout'
import { Localize, localize, WithIntl } from 'components/localization'

const items = [
    {
        title: <Localize translate_text="Multiply your profit and limit your loss" />,
        subtitle: (
            <Localize translate_text="Amplify your profits up to 1000x without losing more than your trade amount with multipliers." />
        ),
        image_name: 'multiply_profit',
        image_alt: 'Trading multipliers on Deriv GO',
    },
    {
        title: <Localize translate_text="Forex trading on the go" />,
        subtitle: (
            <Localize translate_text="Access the world’s most traded market and take advantage of currency price movements." />
        ),
        image_name: 'forex',
        image_alt: 'Trading forex pairs on Deriv GO',
    },
    {
        title: <Localize translate_text="Trade synthetic indices" />,
        subtitle: (
            <Localize translate_text="Trade Volatility and Crash/Boom indices that emulate the movements of real-world markets." />
        ),
        image_name: 'synthetic_indices',
        image_alt: 'Trading Volatility 100 Index on Deriv GO',
    },
    {
        title: <Localize translate_text="Better risk management" />,
        subtitle: (
            <Localize translate_text="Customise your contracts to suit your risk appetite using innovative features like stop loss, take profit, and deal cancellation." />
        ),
        image_name: 'better_risk',
        image_alt: 'Risk management on Deriv GO',
    },
]

const derivGoPortalData = {
    paragraph: (
        <Localize translate_text="Take a look at Deriv GO’s product roadmap, give us your feedback on what we’re building, and suggestions on what to build next." />
    ),
    frame: 'https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn?hide_header=1',
    link: 'https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn',
}
const DerivGo = () => {
    const { is_row } = useCountryRule()
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [useCountryRule])

    if (is_loaded) {
        if (is_row) {
            return (
                <Layout>
                    <SEO
                        title={localize(
                            'Trade forex, synthetics, and cryptocurrencies with our app — Deriv GO.',
                        )}
                        description={localize(
                            'Trade forex, synthetic indices, and cryptocurrencies wherever, whenever you want and maximise your potential profit with multipliers on Deriv GO.',
                        )}
                    />
                    <Banner />
                    <WhatIsDerivGo />
                    <WhyTradeDerivGo />
                    <DerivGoContent reverse P2P={items} />
                    <StartDerivGo />
                    <FooterBanner />
                    <OtherApps />
                    <Roadmap portal={derivGoPortalData} />
                </Layout>
            )
        }

        return <PageNotFound />
    }

    return (
        <>
            <SEO
                title={localize(
                    'Trade forex, synthetics, and cryptocurrencies with our app — Deriv GO',
                )}
                description={localize(
                    'Trade forex, synthetic indices, and cryptocurrencies wherever, whenever you want and maximise your potential profit with multipliers on Deriv GO.',
                )}
            />
        </>
    )
}

export default WithIntl()(DerivGo)
