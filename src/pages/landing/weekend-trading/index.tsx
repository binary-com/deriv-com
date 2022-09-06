import React from 'react'
import Loadable from '@loadable/component'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Titlebtn from './components/_title-btn'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const IconTextRow = Loadable(() => import('./components/_icon-text-row'))
import { ContentType } from 'pages/landing/_types'

const DP2P_CONTENT: ContentType[] = [
    {
        title: <Localize translate_text="Synthetic indices" />,
        subtitle1: (
            <Localize
                translate_text="Deriv's synthetic indices mimic real-world market movements and offer various volatility levels to suit your risk appetite.<0 />"
                components={[<br key={0} />]}
            />
        ),
        subtitle2: (
            <Localize translate_text="Available to trade on Deriv MT5 and Deriv X (with margin), DTrader (with options and multipliers), and Deriv GO (with multipliers)." />
        ),
        subtitle_mobile1: (
            <Localize
                translate_text="Deriv's synthetic indices mimic real-world market movements and offer various volatility levels to suit your risk appetite.<0 />"
                components={[<br key={0} />]}
            />
        ),
        subtitle_mobile2: (
            <Localize translate_text="Available to trade on Deriv MT5 and Deriv X (with margin), DTrader (with options and multipliers), and Deriv GO (with multipliers)." />
        ),
        image_name: 'buy_sell',
        image_alt: localize('Buy and sell'),
    },
    {
        title: <Localize translate_text="Cryptocurrency" />,
        subtitle1: (
            <Localize
                translate_text="Correctly predict the price movements of the world's most popular cryptocurrencies. Over 17 crypto pairs to trade on.<0 />"
                components={[<br key={0} />]}
            />
        ),
        subtitle2: (
            <Localize translate_text="Available to trade on Deriv MT5 and Deriv X (with margin) and DTrader (with multipliers)." />
        ),
        subtitle_mobile1: (
            <Localize
                translate_text="Correctly predict the price movements of the world's most popular cryptocurrencies. Over 17 crypto pairs to trade on.<0 />"
                components={[<br key={0} />]}
            />
        ),
        subtitle_mobile2: (
            <Localize translate_text="Available to trade on Deriv MT5 and Deriv X (with margin) and DTrader (with multipliers)." />
        ),

        image_name: 'local_currency',
        image_alt: localize('Local currency'),
    },
]

const WeekenLP = () => {
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('Weekends')}
                description={localize('Ride the trends even on weekends')}
            />
            <Hero />
            <IconTextRow />
            <ImageTextSwitching reverse P2P={DP2P_CONTENT} />
            <Titlebtn
                btnlabel={localize('Get trading')}
                text={localize('Create your Deriv account now and start trading!')}
            />
        </Layout>
    )
}

export default WithIntl()(WeekenLP)
