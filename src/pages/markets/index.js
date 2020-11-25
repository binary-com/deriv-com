import React from 'react'
import styled from 'styled-components'
import Forex from './forex/_forex.js'
import Commodities from './commodities/_commodities.js'
import SyntheticIndices from './synthetic/_synthetic-indices.js'
import StockIndices from './stock/_stock-indices.js'
import { Hero } from './_hero'
import Signup, { Appearances } from 'components/custom/signup'
import { useTabState } from 'components/hooks/use-tab-state'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import { SEO, Flex, Box } from 'components/containers'
import device from 'themes/device'
import { Header } from 'components/elements'
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
            <Localize translate_text="Open a real account, make a deposit, and start trading stock indices and other markets." />
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

const Item = styled.div`
    padding: 1.2rem 2.4rem;
    border-bottom: ${(props) =>
        props.name === props.active_tab ? '2px solid var(--color-red)' : ''};
    cursor: pointer;
    z-index: 10;

    h4 {
        color: var(--color-red);
        opacity: ${(props) => (props.name === props.active_tab ? '1' : '0.32')};
        font-weight: ${(props) => (props.name === props.active_tab ? 'bold' : 'normal')};
    }
    @media ${device.tabletL} {
        padding: 1.5rem 3rem;

        ${Header} {
            font-size: 3rem;
            width: max-content;
        }
    }
`

const Separator = styled.div`
    position: absolute;
    width: 100%;
    top: -2px;
    height: 2px;
    background-color: var(--color-grey-21);
`
const TabsContainer = styled(Flex)`
    @media ${device.tabletL} {
        justify-content: flex-start;
        overflow: scroll;
        padding-top: 2rem;
    }
`

const Markets = () => {
    const [active_tab, setActiveTab] = useTabState(['forex', 'synthetic', 'stock', 'commodities'])

    return (
        <Layout>
            <SEO description={localize('Markets to trade')} title={localize('Markets')} />
            <Hero />
            <TabsContainer pt="4rem" background="var(--color-grey-23)">
                <Item onClick={() => setActiveTab('forex')} active_tab={active_tab} name="forex">
                    <Header id="forex" as="h4">
                        {localize('Forex')}
                    </Header>
                </Item>
                <Item
                    onClick={() => setActiveTab('synthetic')}
                    active_tab={active_tab}
                    name="synthetic"
                >
                    <Header id="synthetic" as="h4">
                        {localize('Synthetic indices')}
                    </Header>
                </Item>
                <Item onClick={() => setActiveTab('stock')} active_tab={active_tab} name="stock">
                    <Header id="stock" as="h4">
                        {localize('Stock indices')}
                    </Header>
                </Item>
                <Item
                    onClick={() => setActiveTab('commodities')}
                    active_tab={active_tab}
                    name="commodities"
                >
                    <Header id="commodities" as="h4">
                        {localize('Commodities')}
                    </Header>
                </Item>
            </TabsContainer>
            <Box position="relative">
                <Separator />
                {active_tab === 'forex' && (
                    <Forex simple_step_content={simple_step_content_forex} />
                )}
                {active_tab === 'commodities' && (
                    <Commodities simple_step_content={simple_step_content_commodities} />
                )}
                {active_tab === 'stock' && (
                    <StockIndices simple_step_content={simple_step_content_stock} />
                )}
                {active_tab === 'synthetic' && (
                    <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
                )}
            </Box>
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(Markets)
