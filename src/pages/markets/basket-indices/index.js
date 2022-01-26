import React from 'react'
import BasketIndices from '../components/markets/_basket-indices.js'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/markets/trade.svg'
import WithdrawIcon from 'images/svg/markets/withdraw.svg'

const simple_step_content_basket = [
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
            <Localize translate_text="Open a real account, make a deposit, and start trading forex and other markets." />
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

const BasketPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Trade Basket indices online with Deriv. Open a demo account and enjoy a wide range of currency pairs on our responsive and intuitive trading platforms.',
            )}
            title={localize(
                'Basket indices trading online | Basket indices trading demo account | Deriv',
            )}
        />
        <Hero />
        <NavTab route_from={'basket-indices'} route_offset={650} />
        <BasketIndices simple_step_content={simple_step_content_basket} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(BasketPage)
