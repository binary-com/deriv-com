import React from 'react'
import Loadable from '@loadable/component'
import { Signup, WhatOurClientsSay } from '../../home/_lazy-load'
import Hero from './components/_hero'
import ImageTextSwitching from './components/_image-text-switching'
import Tablebtn from './components/_table-btn'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { WithIntl } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const IconTextRow = Loadable(() => import('./components/_icon-text-row'))

const TradeForex = () => {
    const [is_mounted] = usePageLoaded() // needed to fix the second Hero-component during page's loading

    return (
        <Layout type="landing-page" is_ppc_redirect>
            {is_mounted && (
                <>
                    <Hero
                        title="_t_Our forex spreads are lower than ever_t_"
                        content="_t_Open forex trades at a lower cost and capitalise on the market more effectively._t_"
                    />
                    <IconTextRow />
                    <Tablebtn
                        btnlabel="_t_Get trading on Deriv_t_"
                        text="_t_*available for selected pairs:_t_"
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

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Weekends_t_"
        description="_t_Ride the trends even on weekends_t_"
        pageContext={pageContext}
    />
)
