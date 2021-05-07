import React from 'react'
import styled from 'styled-components'
import Commodities from './components/markets/_commodities.js'
import Forex from './components/markets/_forex'
import StockIndices from './components/markets/_stock-indices.js'
import SyntheticIndices from './components/markets/_synthetic-indices.js'
import { Hero } from './components/sections/_hero'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO, Flex } from 'components/containers'
import device from 'themes/device'
import { Tabs } from 'components/elements'
import PractiseIcon from 'images/svg/aim.svg'
import TradeIcon from 'images/svg/trade.svg'
import WithdrawIcon from 'images/svg/withdraw.svg'

const simple_step_content_forex = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="aim" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading forex and other markets." />
        ),
        icon: <img src={TradeIcon} alt="trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="withdraw" width="32" height="32" />,
    },
]
const simple_step_content_synthetic = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="aim" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading synthetic indices and other markets." />
        ),
        icon: <img src={TradeIcon} alt="trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="withdraw" width="32" height="32" />,
    },
]
const simple_step_content_stock = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="aim" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading stock indices and other markets. " />
        ),
        icon: <img src={TradeIcon} alt="trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="withdraw" width="32" height="32" />,
    },
]
const simple_step_content_commodities = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
        icon: <img src={PractiseIcon} alt="aim" width="32" height="32" />,
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
        ),
        icon: <img src={TradeIcon} alt="trade" width="32" height="28" />,
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
        icon: <img src={WithdrawIcon} alt="withdraw" width="32" height="32" />,
    },
]

const TabsContainer = styled(Flex)`
    background-color: var(--color-grey-23);
    padding-top: 2rem;

    @media ${device.tabletL} {
        justify-content: flex-start;
        overflow: scroll;
    }
`

const Markets = () => (
    <Layout>
        <SEO
            description={localize(
                'Learn about the markets that you can trade online with Deriv, including forex, commodities, synthetic indices, and stock indices.',
            )}
            title={localize('Markets | Markets to trade | Deriv')}
        />
        <Hero />
        <TabsContainer>
            <Tabs tab_list={['forex', 'synthetic', 'stock', 'commodities']} route_from="markets">
                <Tabs.Panel label={localize('Forex')}>
                    <Forex simple_step_content={simple_step_content_forex} />
                </Tabs.Panel>
                <Tabs.Panel label={localize('Synthetic indices')}>
                    <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
                </Tabs.Panel>
                <Tabs.Panel label={localize('Stocks & indices')}>
                    <StockIndices simple_step_content={simple_step_content_stock} />
                </Tabs.Panel>
                <Tabs.Panel label={localize('Commodities')}>
                    <Commodities simple_step_content={simple_step_content_commodities} />
                </Tabs.Panel>
            </Tabs>
        </TabsContainer>
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(Markets)
