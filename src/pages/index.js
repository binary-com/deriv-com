import React from 'react'
// import Ticker from './home/_ticker'
import {
    Markets,
    Signup,
    SimpleSteps,
    TradeTypes,
    TradeTypesMobile,
    WhatOurClientsSay,
} from './home/_lazy-load'
import Hero from './home/_hero'
import Trade from './home/_trade'
import TradeTheWayYouLike from './home/_trade-the-way-you-like'
import { default_server_url } from 'common/constants'
import { getAppId } from 'common/websocket/config'
import { useLocalStorageState } from 'components/hooks/use-localstorage-state'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/markets/trade.svg'
import WithdrawIcon from 'images/svg/markets/withdraw.svg'

const simple_step_content = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more." />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Get your funds quickly and easily. We support a variety of withdrawal options." />
        ),
        icon: <img src={WithdrawIcon} alt="" width="32" height="32" />,
    },
]

const Home = () => {
    const [, setServerUrl] = useLocalStorageState(default_server_url, 'config.server_url')
    const [, setAppId] = useLocalStorageState(getAppId(), 'config.app_id')

    React.useEffect(() => {
        if (window?.location) {
            const search_params = new URLSearchParams(window.location.search)
            const q_server_url = search_params.get('qa_server')
            const q_app_id = search_params.get('app_id')

            if (q_server_url) {
                setServerUrl(q_server_url)
            }
            if (q_app_id) {
                setAppId(q_app_id)
            }
        }
    }, [])

    /* redirect livechat for en to open live chat popup */
    useOpenLiveChat()

    return (
        <Layout>
            <SEO
                title={localize(
                    'Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv',
                )}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
                has_organization_schema
            />
            <Hero />
            <Show.Desktop>
                <Trade />
            </Show.Desktop>
            <Show.Mobile>
                <TradeTheWayYouLike />
            </Show.Mobile>

            <Show.Mobile>
                <TradeTypesMobile />
            </Show.Mobile>
            <Show.Desktop>
                <TradeTypes />
            </Show.Desktop>
            <Markets />
            <SimpleSteps
                content={simple_step_content}
                header={<Localize translate_text="3 simple steps" />}
                sign_up={true}
            />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
            {/* TODO: investigate performance and enable later */}
            {/* {!isProduction() && <Ticker />} */}
        </Layout>
    )
}

export default WithIntl()(Home)
