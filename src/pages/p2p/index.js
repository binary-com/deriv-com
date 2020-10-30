import React, { useEffect, useState } from 'react'
import Hero from './_hero.js'
import DP2P from './_dp2p'
import ExchangeSteps from './_exchange-steps.js'
import P2PBanner from './_p2pbanner'
import Numbers from './_numbers'
import Availability from './_availability'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'

const trading = [
    {
        title: <Localize translate_text="Save time" />,
        subtitle: <Localize translate_text="Exchange in minutes. Less waiting, more trading." />,

        image_name: 'buy_sell',
        image_alt: localize('Charts'),
    },
    {
        title: <Localize translate_text="Works in your local currency" />,
        subtitle: <Localize translate_text="Exchange with fellow traders at pre-agreed rates." />,

        image_name: 'local_currency',
        image_alt: localize('Trading Market'),
    },
    {
        title: <Localize translate_text="Available as web and mobile apps" />,
        subtitle: (
            <Localize translate_text="Easily make deposits and withdrawals on your desktop and mobile devices." />
        ),

        image_name: 'web_and_mobile',
        image_alt: localize('Trade Types'),
    },
]

const P2P = () => {
    const [is_mobile, setMobile] = useState('')

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.tabletS : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tabletS : false)
        window.addEventListener('resize', handleResizeWindow)
    })

    return (
        <Layout type="p2p" no_live_chat>
            <SEO title={localize('P2P')} description={localize('')} />
            <Hero
                title={localize('Hassle-free deposits and withdrawals')}
                content={
                    <Localize translate_text="Can’t make deposits and withdrawals in your local currency? No problem. Exchange with fellow traders in minutes." />
                }
                image_name="dmt5"
            />
            <DP2P reverse trading={trading} />
            <Numbers />
            <ExchangeSteps />
            <Availability />
            <P2PBanner
                title={localize('Get hassle-free deposits and withdrawals today')}
                image_name="dmt5"
                is_mobile={is_mobile}
            />
        </Layout>
    )
}

export default WithIntl()(P2P)
