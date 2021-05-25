import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import PageNotFound from '../../404'
import WhatAreTheOptions from './_what-are-options'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'
import { DerivStore } from 'store'
<<<<<<< HEAD

=======
import TradingImage from 'images/common/og_deriv.png'
>>>>>>> f6d92f198bc44c7bf760fcd5ddab130d765c2b71
const HowOptionsWorks = Loadable(() => import('./_how-options-works'))
const OptionsToTrade = Loadable(() => import('./_options-to-trade'))
const StartTrading = Loadable(() => import('./_start-trading'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))

const meta_attributes = {
<<<<<<< HEAD
    og_title: <Localize translate_text="Options trading | Trading types | Deriv" />,
    og_description: (
        <Localize translate_text="Learn about options trading on Deriv. Earn payouts by correctly predicting price movements without needing to buy the underlying assets." />
    ),
=======
    og_title: 'Options trading | Trading types | Deriv',
    og_description:
        'Learn about options trading on Deriv. Earn payouts by correctly predicting price movements without needing to buy the underlying assets.',
    og_type: 'website',
    og_img_width: '600',
    og_img_height: '315',
    og_img: TradingImage,
>>>>>>> f6d92f198bc44c7bf760fcd5ddab130d765c2b71
}

const Options = () => {
    const { is_eu_country } = React.useContext(DerivStore)

    return !is_eu_country ? (
        <Layout>
            <SEO
                title={localize('Options trading | Trading types | Deriv')}
                description={localize(
                    'Learn about options trading on Deriv. Earn payouts by correctly predicting price movements without needing to buy the underlying assets.',
                )}
                meta_attributes={meta_attributes}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Options')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatAreTheOptions />
            <HowOptionsWorks />
            <OptionsToTrade />
            <StartTrading />
            <MarketsAvailable />
        </Layout>
    ) : (
        <PageNotFound />
    )
}

export default WithIntl()(Options)
