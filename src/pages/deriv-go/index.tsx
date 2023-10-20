import React, { useEffect, useState } from 'react'
import { DerivGoContent, FooterBanner, StartDerivGo } from './_lazy-load'
import Banner from './_banner'
import OtherApps from './_other-apps'
import WhatIsDerivGo from './_what-is-deriv-go'
import WhyTradeDerivGo from './_why-trade-deriv-go'
import PageNotFound from 'features/pages/404'
import { SEO } from 'components/containers'
import Roadmap, { TPortal } from 'components/elements/roadmap'
import useRegion from 'components/hooks/use-region'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { ContentType } from 'pages/landing/_types'
import { TGatsbyHead } from 'features/types'

const items: ContentType[] = [
    {
        title: '_t_Multiply your profit and limit your loss_t_',
        subtitle:
            '_t_Amplify your profits up to 1000x without losing more than your stake with multipliers._t_',
        image_name: 'multiply_profit',
        image_alt: '_t_Trading multipliers on Deriv GO_t_',
    },
    {
        title: '_t_Forex trading on the go_t_',
        subtitle:
            '_t_Access the world’s most traded market and take advantage of currency price movements._t_',
        image_name: 'forex',
        image_alt: '_t_Trading forex pairs on Deriv GO_t_',
    },
    {
        title: '_t_Trade synthetics_t_',
        subtitle:
            '_t_Trade Volatility and Crash/Boom indices that simulate the movements of real-world markets._t_',
        image_name: 'synthetic_indices',
        image_alt: '_t_Trading Volatility 100 Index on Deriv GO_t_',
    },
    {
        title: '_t_Better risk management_t_',
        subtitle:
            '_t_Customise your contracts to suit your risk appetite using innovative features like stop loss, take profit, and deal cancellation._t_',
        image_name: 'better_risk',
        image_alt: '_t_Risk management on Deriv GO_t_',
    },
]

const derivGoPortalData: TPortal = {
    paragraph:
        '_t_Take a look at Deriv GO’s product roadmap, give us your feedback on what we’re building and suggestions on what to build next._t_',
    frame: 'https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn?hide_header=1',
    link: 'https://portal.productboard.com/gfueayjjwpmfhdysrrn3n3wn',
}

const DerivGo = () => {
    const { is_row } = useRegion()
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (is_loaded) {
        if (is_row) {
            return (
                <Layout>
                    <Banner />
                    <WhatIsDerivGo />
                    <WhyTradeDerivGo />
                    <DerivGoContent reverse P2P={items} />
                    <StartDerivGo />
                    <Roadmap portal={derivGoPortalData} />
                    <FooterBanner />
                    <OtherApps />
                </Layout>
            )
        }

        return <PageNotFound />
    }

    return <React.Fragment></React.Fragment>
}

export default WithIntl()(DerivGo)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Trade forex, synthetics, and cryptocurrencies with our app — Deriv GO._t_"
        description="_t_Trade forex, synthetic indices, and cryptocurrencies wherever, whenever you want and maximise your potential profit with multipliers on Deriv GO._t_"
        pageContext={pageContext}
    />
)
