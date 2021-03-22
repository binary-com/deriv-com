import React from 'react'
import Loadable from '@loadable/component'
import Hero from '../components/_hero'
import DP2P from '../components/_dp2p'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Show } from 'components/containers'
const ExchangeSteps = Loadable(() => import('../components/_exchange-steps'))
const P2PBanner = Loadable(() => import('../components/_p2pbanner'))
const Numbers = Loadable(() => import('../components/_numbers'))
const Availability = Loadable(() => import('../components/_availability'))

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

const DP2P_v2 = () => {
    return (
        <Layout type="p2p" no_live_chat>
            <SEO
                title={localize('DP2P')}
                description={localize('Faster deposits and withdrawals')}
            />
            <Show.Desktop>
                <Hero
                    title={
                        <Localize
                            translate_text="Faster <0 />deposits and withdrawals"
                            components={[<br key={0} />]}
                        />
                    }
                    content={
                        <Localize translate_text="Waiting on your deposits and withdrawals? With DP2P it takes minutes. So you can spend more time on important things - like trading." />
                    }
                    image_name="DP2P"
                />
            </Show.Desktop>
            <Show.Mobile>
                <Hero
                    title={localize('Faster deposits and withdrawals')}
                    content={
                        <Localize translate_text="Waiting on your deposits and withdrawals? With DP2P it takes minutes. So you can spend more time on important things - like trading." />
                    }
                    image_name="DP2P"
                />
            </Show.Mobile>
            <DP2P reverse P2P={DP2P_CONTENT} />
            <Numbers />
            <ExchangeSteps />
            <Availability />
            <P2PBanner
                title={localize('Get speedier deposits and withdrawals today')}
                image_name="DP2P"
            />
        </Layout>
    )
}

export default WithIntl()(DP2P_v2)
