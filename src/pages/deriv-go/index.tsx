import React, { ReactElement } from 'react'
import PageNotFound from '../404'
import { DerivGoContent, FooterBanner, StartDerivGo } from './_lazy-load'
import Banner from './_banner'
import OtherApps from './_other-apps'
import WhatIsDerivGo from './_what-is-deriv-go'
import WhyTradeDerivGo from './_why-trade-deriv-go'
import { SEO } from 'components/containers'
import Roadmap from 'components/elements/roadmap'
import { useCountryRule } from 'components/hooks/use-country-rule'
import Layout from 'components/layout/layout'
import { Localize, localize, WithIntl } from 'components/localization'

export type ContentType = {
    id?: number
    title: ReactElement | string
    subtitle?: ReactElement
    content?: ReactElement
    url?: ReactElement | ReactElement[]
    icon?: string
    image_name?: string
    image_alt?: string
}

const items: ContentType[] = [
    {
        title: <Localize translate_text="_t_Multiply your profit and limit your loss_t_" />,
        subtitle: (
            <Localize translate_text="_t_Amplify your profits up to 1000x without losing more than your trade amount with multipliers._t_" />
        ),
        image_name: 'multiply_profit',
        image_alt: 'Trading multipliers on Deriv GO',
    },
    {
        title: <Localize translate_text="_t_Forex trading on the go_t_" />,
        subtitle: (
            <Localize translate_text="_t_Access the world’s most traded market and take advantage of currency price movements._t_" />
        ),
        image_name: 'forex',
        image_alt: 'Trading forex pairs on Deriv GO',
    },
    {
        title: <Localize translate_text="_t_Trade synthetic indices_t_" />,
        subtitle: (
            <Localize translate_text="_t_Trade Volatility and Crash/Boom indices that emulate the movements of real-world markets._t_" />
        ),
        image_name: 'synthetic_indices',
        image_alt: 'Trading Volatility 100 Index on Deriv GO',
    },
    {
        title: <Localize translate_text="_t_Better risk management_t_" />,
        subtitle: (
            <Localize translate_text="_t_Customise your contracts to suit your risk appetite using innovative features like stop loss, take profit, and deal cancellation._t_" />
        ),
        image_name: 'better_risk',
        image_alt: 'Risk management on Deriv GO',
    },
]

type DerivGoPortalType = {
    paragraph: ReactElement
    frame: string
    link: string
}

const derivGoPortalData: DerivGoPortalType = {
    paragraph: (
        <Localize translate_text="_t_Take a look at Deriv GO’s product roadmap, give us your feedback on what we’re building, and suggestions on what to build next._t_" />
    ),
    frame: 'https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn?hide_header=1',
    link: 'https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn',
}

const DerivGo = () => {
    const { is_loading, is_row } = useCountryRule()

    if (!is_loading && is_row) {
        return (
            <Layout>
                <SEO
                    title={localize(
                        '_t_Trade forex, synthetics, and cryptocurrencies with our app — Deriv GO._t_',
                    )}
                    description={localize(
                        '_t_Trade forex, synthetic indices, and cryptocurrencies wherever, whenever you want and maximise your potential profit with multipliers on Deriv GO._t_',
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

export default WithIntl()(DerivGo)
