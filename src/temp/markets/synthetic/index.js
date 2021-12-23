import React from 'react'
import SyntheticIndices from '../components/markets/_synthetic-indices.js'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/markets/trade.svg'
import WithdrawIcon from 'images/svg/markets/withdraw.svg'

const simple_step_content_synthetic = [
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
            <Localize translate_text="Open a real account, make a deposit, and start trading synthetic indices and other markets." />
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

const Markets = () => (
    <Layout>
        <SEO
            description={localize(
                'Deriv’s proprietary synthetic indices are free of market and liquidity risks. Enjoy 24/7 synthetic trading on Deriv MT5, DTrader, and our other platforms.',
            )}
            title={localize('Synthetic indices | Volatility indices | Deriv')}
        />
        <Hero />
        <NavTab route_from={'synthetic'} route_offset={50} />
        <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(Markets)
