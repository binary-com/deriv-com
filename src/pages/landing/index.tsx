import React, { ReactElement } from 'react'
import { Markets, WhatOurClientsSay, SimpleSteps, Signup } from '../home/_lazy-load'
import Hero from '../home/_hero'
import Trade from '../home/_trade'
import TradeTheWayYouLike from '../home/_trade-the-way-you-like'
import { Desktop, Mobile, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl, Localize, localize } from 'components/localization'
import { Appearances } from 'components/custom/signup'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/markets/trade.svg'
import WithdrawIcon from 'images/svg/markets/withdraw.svg'

type SimpleStepContentTypes = {
    header: ReactElement
    text: ReactElement
    icon: ReactElement
}

const simple_step_content: SimpleStepContentTypes[] = [
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
    return (
        <Layout is_ppc_redirect={true} is_ppc={true}>
            <SEO
                title={localize(
                    'Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv',
                )}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on',
                )}
                has_organization_schema
                no_index
            />
            <Hero is_ppc={true} />
            <Desktop>
                <Trade is_ppc_redirect={true} />
            </Desktop>
            <Mobile>
                <TradeTheWayYouLike is_ppc_redirect={true} />
            </Mobile>
            <Markets is_ppc={true} />
            <SimpleSteps
                content={simple_step_content}
                header={<Localize translate_text="3 simple steps" />}
                sign_up={true}
            />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(Home)
