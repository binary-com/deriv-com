import React from 'react'
import Loadable from '@loadable/component'
import { Signup, WhatOurClientsSay } from '../../home/_lazy-load'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Tablebtn from './components/_table-btn'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { localize, WithIntl, Localize } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const IconTextRow = Loadable(() => import('./components/_icon-text-row'))

const TradeForex = () => {
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
                        title={localize('Our forex spreads are lower than ever')}
                        content={
                            <Localize translate_text="Open forex trades at a lower cost and capitalise on the market more effectively." />
                        }
                    />
                    <IconTextRow />
                    <Tablebtn
                        btnlabel={localize('Get trading on Deriv')}
                        text={localize('*available for selected pairs:')}
                    />
                    <ImageTextSwitching reverse />
                    <WhatOurClientsSay />
                    <Signup appearance={Appearances.public} />
                </>
            )}
        </Layout>
    )
}

export default WithIntl()(TradeForex)
