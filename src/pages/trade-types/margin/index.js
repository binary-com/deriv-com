import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import WhatIsMargin from './_what_is_margin'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
<<<<<<< HEAD
import { localize, WithIntl, Localize } from 'components/localization'
=======
import { localize, WithIntl } from 'components/localization'
import TradingImage from 'images/common/og_deriv.png'
>>>>>>> f6d92f198bc44c7bf760fcd5ddab130d765c2b71
const WhyTradeMargin = Loadable(() => import('./_why-trade-margin'))
const Contracts = Loadable(() => import('./_contracts'))
const Policies = Loadable(() => import('./_policies'))
const StartTrading = Loadable(() => import('./_start-trading'))
const RelationshipWithLeverge = Loadable(() => import('./_relationship-with-leverge'))
const AvailableMarkets = Loadable(() => import('./_available-markets'))

const meta_attributes = {
<<<<<<< HEAD
    og_title: <Localize translate_text="Margin trading | Trade types | Deriv" />,
    og_description:
    <Localize translate_text="Learn about margin trading on Deriv MT5 (DMT5). Enjoy 24/7 trading, high leverage, and zero commissions on forex, synthetic indices, and other assets." />,
}

=======
    og_title: 'Margin trading | Trade types | Deriv',
    og_description:
        'Learn about margin trading on Deriv MT5 (DMT5). Enjoy 24/7 trading, high leverage, and zero commissions on forex, synthetic indices, and other assets.',
    og_type: 'website',
    og_img_width: '600',
    og_img_height: '315',
    og_img: TradingImage,
}
>>>>>>> f6d92f198bc44c7bf760fcd5ddab130d765c2b71
const Margin = () => {
    return (
        <Layout>
            <SEO
                title={localize('Margin trading | Trade types | Deriv')}
                description={localize(
                    'Learn about margin trading on Deriv MT5 (DMT5). Enjoy 24/7 trading, high leverage, and zero commissions on forex, synthetic indices, and other assets.',
                )}
                meta_attributes={meta_attributes}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Margin trading')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatIsMargin />
            <RelationshipWithLeverge />
            <WhyTradeMargin />
            <Contracts />
            <Policies />
            <StartTrading />
            <AvailableMarkets />
        </Layout>
    )
}

export default WithIntl()(Margin)
