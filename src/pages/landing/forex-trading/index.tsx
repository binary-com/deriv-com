import React from 'react'
import Loadable from '@loadable/component'
import { Signup, WhatOurClientsSay } from '../../home/_lazy-load'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Tablebtn from './components/_table-btn'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { localize, Localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { ContentType } from 'pages/landing/_types'
const IconTextRow = Loadable(() => import('./components/_icon-text-row'))

const DP2P_CONTENT: ContentType[] = [
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
        image_alt: localize('Login'),
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
        image_alt: localize('DMT5 account'),
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

        image_name: 'dmt5_login',
        image_alt: localize('DMT5 login'),
    },
]

const ForexTrading = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix the second Hero-component during page's loading
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('Weekends')}
                description={localize('Ride the trends even on weekends')}
            />
            {is_mounted && (
                <>
                    <Hero
                        title={localize('Take advantage of the best trading conditions by Deriv')}
                        content={
                            <Localize translate_text="Your trusted broker with intuitive forex trading platforms, convenient payment options, and a 24/7 support team." />
                        }
                    />
                    <IconTextRow />
                    <Tablebtn
                        btnlabel={localize('Get trading on Deriv')}
                        text={localize('*available for selected pairs:')}
                    />
                    <ImageTextSwitching reverse P2P={DP2P_CONTENT} />
                    <WhatOurClientsSay />
                    <Signup appearance={Appearances.public} />
                </>
            )}
        </Layout>
    )
}

export default WithIntl()(ForexTrading)
