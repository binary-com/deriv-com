import React from 'react'
import { DerivGoContent, FooterBanner, StartDerivGo } from './_lazy-load.js'
import Banner from './_banner.js'
import OtherApps from './_other-apps'
import WhatIsDerivGo from './_what-is-deriv-go'
import WhyTradeDerivGo from './_why-trade-deriv-go'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { Localize, WithIntl } from 'components/localization'

const items = [
    {
        title: <Localize translate_text="Multiply your profit and limit your loss" />,
        subtitle: (
            <Localize translate_text="Amplify your profits up to 1000x without losing more than your trade amount with multipliers." />
        ),
        image_name: 'multiply_profit',
        image_alt: 'multiplier trading',
    },
    {
        title: <Localize translate_text="Forex trading on the go" />,
        subtitle: (
            <Localize translate_text="Access the world’s most traded market and take advantage of currency price movements." />
        ),
        image_name: 'forex',
        image_alt: 'trade forex',
    },
    {
        title: <Localize translate_text="Trade synthetic indices" />,
        subtitle: (
            <Localize translate_text="Trade Volatility and Crash/Boom indices that emulate the movements of real-world markets." />
        ),
        image_name: 'synthetic_indices',
        image_alt: 'synthetic indices trading',
    },
    {
        title: <Localize translate_text="Better risk management" />,
        subtitle: (
            <Localize translate_text="Customise your contracts to suit your risk appetite using innovative features like stop loss, take profit, and deal cancellation." />
        ),
        image_name: 'better_risk',
        image_alt: 'risk management trading',
    },
]
const DerivGo = () => {
    return (
        <Layout>
            <SEO title="Deriv Go | Deriv" />
            <Banner />
            <WhatIsDerivGo />
            <WhyTradeDerivGo />
            <DerivGoContent reverse P2P={items} />
            <StartDerivGo />
            <FooterBanner />
            <OtherApps />
        </Layout>
    )
}

export default WithIntl()(DerivGo)
