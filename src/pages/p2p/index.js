import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import Hero from './components/_hero'
import DP2P from './components/_dp2p'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
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
        subtitle: (
            <Localize translate_text="Exchange in minutes. Less waiting, more trading. Deposit and withdraw in minutes." />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Exchange in minutes.<0 />Less waiting, more trading.<0 />Deposit and withdraw in minutes."
                components={[<br key={0} />]}
            />
        ),

        image_name: 'buy_sell',
        image_alt: localize('Buy and sell'),
    },
    {
        title: <Localize translate_text="Works with your local currency" />,
        subtitle: <Localize translate_text="Deal with fellow traders at pre-agreed rates." />,
        subtitle_mobile: (
            <Localize translate_text="Deal with fellow traders at pre-agreed rates." />
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
const ContentWrapper = styled.div`
    width: 100%;
`

const DP2PHome = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix the second Hero-component during page's loading
    return (
        <Layout>
            <SEO
                title={localize('Deriv P2P')}
                description={localize('Hassle-free deposits and withdrawals')}
            />

            {is_mounted && (
                <ContentWrapper>
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
                </ContentWrapper>
            )}
        </Layout>
    )
}

export default WithIntl()(DP2PHome)
