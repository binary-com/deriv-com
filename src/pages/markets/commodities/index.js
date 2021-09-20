import React from 'react'
import Commodities from '../components/markets/_commodities.js'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/trade.svg'
import WithdrawIcon from 'images/svg/withdraw.svg'

const simple_step_content_commodities = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
        ),
        icon: <img src={TradeIcon} alt="" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="" width="32" height="32" />,
    },
]

const CommoditiesPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Sign up with Deriv to start trading on commodities and speculate on the price movements of gold, silver, oil, and other assets.',
            )}
            title={localize('Commodities market | Commodities trading | Deriv')}
        />
        <Hero />
        <NavTab route_from={'commodities'} route_offset={360} />
        <Commodities simple_step_content={simple_step_content_commodities} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(CommoditiesPage)
