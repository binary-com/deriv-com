import React from 'react'
import Loadable from '@loadable/component'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Titlebtn from './components/_title-btn'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const IconTextRow = Loadable(() => import('./components/_icon-text-row'))

const DP2P_CONTENT = [
    {
        title: <Localize translate_text="Synthetic indices" />,
        subtitle: (
            <Localize
                translate_text="Deriv's synthetic indices mimic real-world market movements and offer various volatility levels to suit your risk appetite.<0 /><0 /> Available to trade on Deriv MT5 and Deriv X (with margin), DTrader (with options and multipliers), and Deriv GO (with multipliers)."
                components={[<br key={0} />]}
            />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Deriv's synthetic indices mimic real-world market movements and offer various volatility levels to suit your risk appetite.<0 /><0 /> Available to trade on Deriv MT5 and Deriv X (with margin), DTrader (with options and multipliers), and Deriv GO (with multipliers)."
                components={[<br key={0} />]}
            />
        ),

        image_name: 'buy_sell',
        image_alt: localize('Buy and sell'),
    },
    {
        title: <Localize translate_text="Cryptocurrency" />,
        subtitle: (
            <Localize
                translate_text="Correctly predict the price movements of the world's most popular cryptocurrencies. Over 17 crypto pairs to trade on.<0 /><0 />Available to trade on Deriv MT5 and Deriv X (with margin) and DTrader (with multipliers)."
                components={[<br key={0} />]}
            />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Correctly predict the price movements of the world's most popular cryptocurrencies. Over 17 crypto pairs to trade on.<0 /><0 />Available to trade on Deriv MT5 and Deriv X (with margin) and DTrader (with multipliers)."
                components={[<br key={0} />]}
            />
        ),

        image_name: 'local_currency',
        image_alt: localize('Local currency'),
    },
]

const DP2PHome = () => {
    return (
        <Layout>
            <SEO
                title={localize('Weekends')}
                description={localize('Ride the trends even on weekends')}
            />
            <Hero
                title={localize('Ride the trends even on weekends')}
                content={
                    <Localize translate_text="Trade even when most financial markets are closed" />
                }
            />
            <IconTextRow />
            <ImageTextSwitching reverse P2P={DP2P_CONTENT} />
            <Titlebtn></Titlebtn>
        </Layout>
    )
}

export default WithIntl()(DP2PHome)
