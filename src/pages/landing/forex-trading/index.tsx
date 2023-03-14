import React from 'react'
import Loadable from '@loadable/component'
import { Signup, WhatOurClientsSay } from '../../home/_lazy-load'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Tablebtn from './components/_table-btn'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { localize, WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { ContentType } from 'pages/landing/_types'

const IconTextRow = Loadable(() => import('./components/_icon-text-row'))

const DP2P_CONTENT: ContentType[] = [
    {
        title: '_t_Step 1_t_',
        subtitle1: '_t_Log in or sign up for a Deriv account.<0 />_t_',
        subtitle1_component: [<br key={0} />],
        subtitle_mobile1: '_t_Log in or sign up for a Deriv account.<0 />_t_',
        subtitle_mobile1_components: [<br key={0} />],
        image_name: 'login',
        image_alt: localize('_t_Login_t_'),
    },
    {
        title: '_t_Step 2_t_',
        subtitle1: '_t_Add a Deriv MT5 Financial real account.<0 />_t_',
        subtitle1_component: [<br key={0} />],
        subtitle_mobile1: '_t_Add a Deriv MT5 Financial real account.<0 />_t_',
        subtitle_mobile1_components: [<br key={0} />],
        image_name: 'dmt5_acc',
        image_alt: localize('_t_DMT5 account_t_'),
    },
    {
        title: '_t_Step 3_t_',
        subtitle1: '_t_Log in to Deriv MT5, select an asset, and start trading.<0 />_t_',
        subtitle1_component: [<br key={0} />],
        subtitle_mobile1: '_t_Log in to Deriv MT5, select an asset, and start trading.<0 />_t_',
        subtitle_mobile1_components: [<br key={0} />],
        image_name: 'dmt5_login',
        image_alt: localize('_t_DMT5 login_t_'),
    },
]

const ForexTrading = () => {
    const [is_mounted] = usePageLoaded() // needed to fix the second Hero-component during page's loading

    return (
        <Layout type="landing-page" is_ppc_redirect>
            <SEO title="_t_Weekends_t_" description="_t_Ride the trends even on weekends_t_" />
            {is_mounted && (
                <>
                    <Hero
                        title="_t_Take advantage of the best trading conditions by Deriv_t_"
                        content="_t_Your trusted broker with intuitive forex trading platforms, convenient payment options, and a 24/7 support team._t_"
                    />
                    <IconTextRow />
                    <Tablebtn
                        btnlabel="_t_Get trading on Deriv_t_"
                        text="_t_*available for selected pairs:_t_"
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
