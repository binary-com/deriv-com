import React from 'react'
import Loadable from '@loadable/component'
import Hero from './components/_hero'
import DP2P from './components/_dp2p'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const ExchangeSteps = Loadable(() => import('./components/_exchange-steps'))
const P2PBanner = Loadable(() => import('./components/_p2pbanner'))
const Numbers = Loadable(() => import('./components/_numbers'))
const Availability = Loadable(() => import('./components/_availability'))

const DP2P_CONTENT = [
    {
        title: <Localize translate_text="Save time" />,
        subtitle: <Localize translate_text="Exchange in minutes. Less waiting, more trading." />,
        subtitle_mobile: (
            <Localize
                translate_text="Exchange in minutes.<0 />Less waiting, more trading."
                components={[<br key={0} />]}
            />
        ),

        image_name: 'buy_sell',
        image_alt: localize('Buy and sell'),
    },
    {
        title: <Localize translate_text="Works in your local currency" />,
        subtitle: <Localize translate_text="Exchange with fellow traders at pre-agreed rates." />,
        subtitle_mobile: (
            <Localize translate_text="Exchange with fellow traders at pre-agreed rates." />
        ),

        image_name: 'local_currency',
        image_alt: localize('Local currency'),
    },
    {
        title: <Localize translate_text="Available as web and mobile apps" />,
        subtitle: (
            <Localize translate_text="Easily make deposits and withdrawals on your desktop and mobile devices." />
        ),
        subtitle_mobile: (
            <Localize translate_text="Easily make deposits and withdrawals on your desktop and mobile devices." />
        ),

        image_name: 'web_and_mobile',
        image_alt: localize('Web and mobile apps'),
    },
]

const DP2PHome = () => {
    return (
        <Layout>
            <SEO
                title={localize('DP2P')}
                description={localize('Hassle-free deposits and withdrawals')}
            />
            <Hero
                title={localize('Hassle-free deposits and withdrawals')}
                content={
                    <Localize translate_text="Can’t make deposits and withdrawals in your local currency? No problem. Exchange with fellow traders in minutes." />
                }
                image_name="DP2P"
            />
            <DP2P reverse P2P={DP2P_CONTENT} />
            <Numbers />
            <ExchangeSteps />
            <Availability />
            <P2PBanner
                title={localize('Get hassle-free deposits and withdrawals today')}
                image_name="DP2P"
            />
        </Layout>
    )
}

export default WithIntl()(DP2PHome)
