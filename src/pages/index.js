import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
// import Ticker from './home/_ticker'
import {
    TradeTypesMobile,
    TradeTypes,
    Markets,
    Trade,
    WhatOurClientsSay,
    SimpleSteps,
    Signup,
} from './home/_lazy-load'
import Hero from './home/_hero'
import TradeTheWayYouLike from './home/_trade-the-way-you-like'
import { SEO, Show } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import { getLanguage, getLiveChatStorage, removeLocalStorage } from 'common/utility'
import { live_chat_redirection_link } from 'common/constants'
import PractiseIcon from 'images/svg/aim.svg'
import TradeIcon from 'images/svg/trade.svg'
import WithdrawIcon from 'images/svg/withdraw.svg'

const simple_step_content = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="aim" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more." />
        ),
        icon: <img src={TradeIcon} alt="trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Get your funds quickly and easily. We support a variety of withdrawal options." />
        ),
        icon: <img src={WithdrawIcon} alt="withdraw" width="32" height="32" />,
    },
]
const Home = () => {
    /* redirect livechat for en to open live chat popup */
    const [is_mounted, setMounted] = useState(false)
    const lang = getLanguage()
    const live_chat_key = 'live_chat_redirection'
    let script_timeout = null
    let function_timeout = null

    const live_chat_enable = getLiveChatStorage()

    const checkLiveChatRedirection = () => {
        if (lang == 'en') {
            if (live_chat_enable) {
                removeLocalStorage(live_chat_key)
                navigate(live_chat_redirection_link, { replace: true })
            } else {
                removeLocalStorage(live_chat_key)
            }
        } else {
            removeLocalStorage(live_chat_key)
        }
    }

    script_timeout = setTimeout(() => {
        setMounted(true)
    }, 2000)

    useEffect(() => {
        if (is_mounted) {
            checkLiveChatRedirection()
        }

        return () => {
            clearTimeout(script_timeout)
            clearTimeout(function_timeout)
        }
    }, [is_mounted])

    return (
        <Layout>
            <SEO
                title={localize('Online trading platform | Forex, commodities and indices | Deriv')}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
                has_organization_schema
            />
            <Hero />

            <Show.Mobile>
                <TradeTheWayYouLike />
            </Show.Mobile>
            <Show.Desktop>
                <Trade />
            </Show.Desktop>

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
