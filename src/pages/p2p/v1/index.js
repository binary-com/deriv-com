import React from 'react'
import Hero from '../components/_hero'
import DP2P from '../components/_dp2p'
import ExchangeSteps from '../components/_exchange-steps'
import P2PBanner from '../components/_p2pbanner'
import Numbers from '../components/_numbers'
import Availability from '../components/_availability'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const DP2P_CONTENT = [
    {
        title: <Localize translate_text="Save time" />,
        subtitle: <Localize translate_text="Exchange in minutes. Less waiting, more trading." />,

        image_name: 'buy_sell',
        image_alt: localize('Buy and sell'),
    },
    {
        title: <Localize translate_text="Works in your local currency" />,
        subtitle: <Localize translate_text="Exchange with fellow traders at pre-agreed rates." />,

        image_name: 'local_currency',
        image_alt: localize('Local currency'),
    },
    {
        title: <Localize translate_text="Available as web and mobile apps" />,
        subtitle: (
            <Localize translate_text="Easily make deposits and withdrawals on your desktop and mobile devices." />
        ),

        image_name: 'web_and_mobile',
        image_alt: localize('Web and mobile apps'),
    },
]

const DP2P_v1 = () => {
    return (
        <Layout type="p2p" nav_type="p2p-v1" no_live_chat>
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

export default WithIntl()(DP2P_v1)
