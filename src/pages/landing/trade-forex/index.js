import React from 'react'
import Loadable from '@loadable/component'
import { Signup, WhatOurClientsSay } from '../../home/_lazy-load'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Titlebtn from './components/_title-btn'
import { localize, Localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const IconTextRow = Loadable(() => import('./components/_icon-text-row'))

const DP2P_CONTENT = [
    {
        title: <Localize translate_text="Step 1" />,
        subtitle1: (
            <Localize
                translate_text="Log in or sign up for a Deriv account.<0 />"
                components={[<br key={0} />]}
            />
        ),
        subtitle_mobile1: (
            <Localize
                translate_text="Log in or sign up for a Deriv account.<0 />"
                components={[<br key={0} />]}
            />
        ),

        image_name: 'login',
        image_alt: localize('Buy and sell'),
    },
    {
        title: <Localize translate_text="Step 2" />,
        subtitle1: (
            <Localize
                translate_text="Add a Deriv MT5 Financial real account.<0 />"
                components={[<br key={0} />]}
            />
        ),
        subtitle_mobile1: (
            <Localize
                translate_text="Add a Deriv MT5 Financial real account.<0 />"
                components={[<br key={0} />]}
            />
        ),

        image_name: 'dmt5_acc',
        image_alt: localize('Local currency'),
    },
    {
        title: <Localize translate_text="Step 3" />,
        subtitle1: (
            <Localize
                translate_text="Log in to Deriv MT5, select an asset, and start trading.<0 />"
                components={[<br key={0} />]}
            />
        ),
        subtitle_mobile1: (
            <Localize
                translate_text="Log in to Deriv MT5, select an asset, and start trading.<0 />"
                components={[<br key={0} />]}
            />
        ),

        image_name: 'dmt5_acc',
        image_alt: localize('Buy and sell'),
    },
]

const TradeForex = () => {
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('Weekends')}
                description={localize('Ride the trends even on weekends')}
            />
            <Hero
                title={localize('Our forex spreads are lower than ever')}
                content={
                    <Localize translate_text="Open forex trades at a lower cost and capitalise on the market more effectively." />
                }
            />
            <IconTextRow />
            <Titlebtn
                btnlabel={localize('Get trading on Deriv')}
                text={localize('Create your Deriv account now and start trading!')}
            />
            <ImageTextSwitching reverse P2P={DP2P_CONTENT} />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(TradeForex)
