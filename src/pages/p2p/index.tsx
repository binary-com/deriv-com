import React from 'react'
import Loadable from '@loadable/component'
import PageNotFound from '../404'
import Hero from './components/_hero'
import DP2P, { P2PType } from './components/_dp2p'
import Roadmap, { RoadmapProps } from 'components/elements/roadmap'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import useRegion from 'components/hooks/use-region'

const ExchangeSteps = Loadable(() => import('./components/_exchange-steps'))
const P2PBanner = Loadable(() => import('./components/_p2pbanner'))
const Numbers = Loadable(() => import('./components/_numbers'))
const Availability = Loadable(() => import('./components/_availability'))

const DP2P_CONTENT: P2PType[] = [
    {
        title: '_t_Save time_t_',
        subtitle:
            '_t_Exchange in minutes. Less waiting, more trading. Deposit and withdraw in minutes._t_',
        subtitle_mobile:
            '_t_Exchange in minutes. Less waiting, more trading. Deposit and withdraw in <0 /> minutes._t_',
        subtitle_mobile_components: [<br key={0} />],
        image_name: 'buy_sell',
        image_alt: 'Deriv’s P2P app buy and sell',
    },
    {
        title: '_t_Works with your local currency_t_',
        subtitle: '_t_Deal with fellow traders at pre-agreed rates._t_',
        subtitle_mobile: '_t_Deal with fellow traders at pre-agreed rates._t_',
        image_name: 'local_currency',
        image_alt: 'Deriv’s P2P app sending and receiving money',
    },
    {
        title: '_t_Available as web and mobile apps_t_',
        subtitle: '_t_Easily make deposits and withdrawals on your desktop and mobile devices._t_',
        subtitle_mobile:
            '_t_Easily make deposits and withdrawals on your desktop and mobile devices._t_',

        image_name: 'web_and_mobile',
        image_alt: '“Deriv’s P2P web and mobile app',
    },
]

const derivP2PPortalData: RoadmapProps['portal'] = {
    paragraph:
        '_t_Take a look at Deriv P2P’s product roadmap, give us your feedback on what we’re building, and suggestions on what to build next._t_',
    frame: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m?hide_header=1',
    link: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m',
}

const DP2PHome = () => {
    const [is_mounted] = usePageLoaded() // needed to fix the second Hero-component during page's loadin
    const { is_p2p_allowed_country } = useRegion()

    if (is_p2p_allowed_country) {
        return (
            <Layout>
                <SEO
                    title="_t_Deriv P2P – peer-to-peer deposit and withdrawal service_t_"
                    description="_t_With Deriv P2P your deposits and withdrawals are easy, fast, and efficient. Access now via the desktop or mobile app._t_"
                />

                {is_mounted && (
                    <>
                        <Hero />
                        <DP2P reverse P2P={DP2P_CONTENT} />
                        <Numbers />
                        <ExchangeSteps />
                        <Availability />
                        <P2PBanner title="_t_Make hassle-free deposits and withdrawals today_t_" />
                        <Roadmap portal={derivP2PPortalData} />
                    </>
                )}
            </Layout>
        )
    }
    return <PageNotFound />
}

export default WithIntl()(DP2PHome)
