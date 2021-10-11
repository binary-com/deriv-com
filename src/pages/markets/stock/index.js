import React from 'react'
import StockIndices from '../components/markets/_stock-indices.js'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import PractiseIcon from 'images/svg/markets/aim.svg'
import TradeIcon from 'images/svg/markets/trade.svg'
import WithdrawIcon from 'images/svg/markets/withdraw.svg'

const simple_step_content_stock = [
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
            <Localize translate_text="Open a real account, make a deposit, and start trading stocks & indices and other markets." />
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

const StocksAndIndicesPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Trade global stocks and stock market indices on Deriv. Enjoy our competitively priced equities even outside regular hours of major stock markets.',
            )}
            title={localize('Stock market | Indices trading | Deriv')}
        />
        <Hero />
        <NavTab route_from={'stock'} route_offset={240} />
        <StockIndices simple_step_content={simple_step_content_stock} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(StocksAndIndicesPage)
