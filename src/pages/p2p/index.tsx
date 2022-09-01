import React from 'react'
import Loadable from '@loadable/component'
import PageNotFound from '../404'
import Hero from './components/_hero'
import DP2P from './components/_dp2p'
import Roadmap from 'components/elements/roadmap'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { localize, Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
const ExchangeSteps = Loadable(() => import('./components/_exchange-steps'))
const P2PBanner = Loadable(() => import('./components/_p2pbanner'))
const Numbers = Loadable(() => import('./components/_numbers'))
const Availability = Loadable(() => import('./components/_availability'))
import { DerivStore } from 'store'

const DP2P_CONTENT = [
    {
        title: <Localize translate_text="Save time" />,
        subtitle: (
            <Localize translate_text="Exchange in minutes. Less waiting, more trading. Deposit and withdraw in minutes." />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Exchange in minutes. Less waiting, more trading. Deposit and withdraw in <0 /> minutes."
                components={[<br key={0} />]}
            />
        ),

        image_name: 'buy_sell',
        image_alt: localize('Deriv’s P2P app buy and sell'),
    },
    {
        title: <Localize translate_text="Works with your local currency" />,
        subtitle: <Localize translate_text="Deal with fellow traders at pre-agreed rates." />,
        subtitle_mobile: (
            <Localize translate_text="Deal with fellow traders at pre-agreed rates." />
        ),

        image_name: 'local_currency',
        image_alt: localize('Deriv’s P2P app sending and receiving money'),
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
        image_alt: localize('“Deriv’s P2P web and mobile app'),
    },
]

const derivP2PPortalData = {
    paragraph: (
        <Localize translate_text="Take a look at Deriv P2P’s product roadmap, give us your feedback on what we’re building, and suggestions on what to build next." />
    ),
    frame: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m?hide_header=1',
    link: 'https://portal.productboard.com/hnv4nsfcbxgidym2hmbun56m',
}

const DP2PHome = () => {
    const [is_mounted] = usePageLoaded() // needed to fix the second Hero-component during page's loadin
    const { is_p2p_allowed_country } = React.useContext(DerivStore)
    if (is_p2p_allowed_country) {
        return (
            <Layout>
                <SEO
                    title={localize('Deriv P2P – peer-to-peer deposit and withdrawal service')}
                    description={localize(
                        'With Deriv P2P your deposits and withdrawals are easy, fast, and efficient. Access now via the desktop or mobile app.',
                    )}
                />

                {is_mounted && (
                    <>
                        <Hero />
                        <DP2P reverse P2P={DP2P_CONTENT} />
                        <Numbers />
                        <ExchangeSteps />
                        <Availability />
                        <P2PBanner
                            title={localize('Make hassle-free deposits and withdrawals today')}
                        />
                        <Roadmap portal={derivP2PPortalData} />
                    </>
                )}
            </Layout>
        )
    }
    return <PageNotFound />
}

export default WithIntl()(DP2PHome)
