import React from 'react'
import Loadable from '@loadable/component'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Titlebtn from './components/_title-btn'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const IconTextRow = Loadable(() => import('./components/_icon-text-row'))
import { ContentType } from 'pages/landing/_types'

const DP2P_CONTENT: ContentType[] = [
    {
        title: '_t_Synthetic indices_t_',
        subtitle1:
            "_t_Deriv's synthetic indices mimic real-world market movements and offer various volatility levels to suit your risk appetite.<0 />_t_",
        subtitle1_component: [<br key={0} />],
        subtitle2:
            '_t_Available to trade on Deriv MT5 and Deriv X (with margin), DTrader (with options and multipliers), and Deriv GO (with multipliers)._t_',
        subtitle_mobile1:
            "_t_Deriv's synthetic indices mimic real-world market movements and offer various volatility levels to suit your risk appetite.<0 />_t_",
        subtitle_mobile1_components: [<br key={0} />],
        subtitle_mobile2:
            '_t_Available to trade on Deriv MT5 and Deriv X (with margin), DTrader (with options and multipliers), and Deriv GO (with multipliers)._t_',
        image_name: 'buy_sell',
        image_alt: localize('_t_Buy and sell_t_'),
    },
    {
        title: '_t_Cryptocurrency_t_',
        subtitle1:
            "_t_Correctly predict the price movements of the world's most popular cryptocurrencies. Over 17 crypto pairs to trade on.<0 />_t_",
        subtitle1_component: [<br key={0} />],
        subtitle2:
            '_t_Available to trade on Deriv MT5 and Deriv X (with margin) and DTrader (with multipliers)._t_',
        subtitle_mobile1:
            "_t_Correctly predict the price movements of the world's most popular cryptocurrencies. Over 17 crypto pairs to trade on.<0 />_t_",
        subtitle_mobile1_components: [<br key={0} />],
        subtitle_mobile2:
            '_t_Available to trade on Deriv MT5 and Deriv X (with margin) and DTrader (with multipliers)._t_',
        image_name: 'local_currency',
        image_alt: localize('_t_Local currency_t_'),
    },
]

const WeekenLP = () => {
    return (
        <Layout type="landing-page" is_ppc_redirect>
            <SEO title="_t_Weekends_t_" description="_t_Ride the trends even on weekends_t_" />
            <Hero />
            <IconTextRow />
            <ImageTextSwitching reverse P2P={DP2P_CONTENT} />
            <Titlebtn
                btnlabel="_t_Get trading_t_"
                text="_t_Create your Deriv account now and start trading!_t_"
            />
        </Layout>
    )
}

export default WithIntl()(WeekenLP)
