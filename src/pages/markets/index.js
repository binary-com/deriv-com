import React from 'react'
import styled from 'styled-components'
import Forex from './forex/_forex.js'
import Commodities from './commodities/_commodities.js'
import SyntheticIndices from './synthetic/_synthetic-indices.js'
import StockIndices from './stock/_stock-indices.js'
import { Hero } from './_hero'
import Signup, { Appearances } from 'components/custom/signup'
import { getLocationHash, isBrowser } from 'common/utility'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO, Flex, Box } from 'components/containers'
import { Header } from 'components/elements'
import PractiseIcon from 'images/svg/aim.svg'
import TradeIcon from 'images/svg/trade.svg'
import WithdrawIcon from 'images/svg/withdraw.svg'

const simple_step_content = [
    {
        header: localize('Practise'),
        text: localize(
            'Open a demo account and practise with an unlimited amount of virtual funds.',
        ),
        icon: <PractiseIcon />,
    },
    {
        header: localize('Trade'),
        text: localize(
            'Open a real account, make a deposit, and start trading Synthetic Indices and other markets.',
        ),
        icon: <TradeIcon />,
    },
    {
        header: localize('Withdraw'),
        text: localize(
            'Conveniently withdraw your funds through any of our supported withdrawal methods.',
        ),
        icon: <WithdrawIcon />,
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
`

const Separator = styled.div`
    position: absolute;
    width: 100%;
    top: -2px;
    height: 2px;
    background-color: var(--color-grey-21);
`
const Markets = () => {
    const [active_tab, setTab] = useTabState()
    React.useEffect(() => {
        if (getLocationHash() === active_tab) return
        if (getLocationHash().length === 0) {
            setTab('forex')
            isBrowser() && window.history.pushState(null, null, '#forex')
        } else {
            setTab(getLocationHash())
        }
    })
    const handleTabChange = (tab_name) => {
        setTab(tab_name)
        isBrowser() && window.history.pushState(null, null, `#${tab_name}`)
    }
    return (
        <Layout>
            <SEO description={localize('')} title={localize('')} />
            <Hero />
            <Flex mt="4rem">
                <Item onClick={() => handleTabChange('forex')} active_tab={active_tab} name="forex">
                    <Header as="h4">{localize('Forex')}</Header>
                </Item>
                <Item
                    onClick={() => handleTabChange('synthetic')}
                    active_tab={active_tab}
                    name="synthetic"
                >
                    <Header as="h4">{localize('Synthetic Indices')}</Header>
                </Item>
                <Item onClick={() => handleTabChange('stock')} active_tab={active_tab} name="stock">
                    <Header as="h4">{localize('Stock indices')}</Header>
                </Item>
                <Item
                    onClick={() => handleTabChange('commodities')}
                    active_tab={active_tab}
                    name="commodities"
                >
                    <Header as="h4">{localize('Commodities')}</Header>
                </Item>
            </Flex>
            <Box position="relative">
                <Separator />
                {active_tab === 'forex' && <Forex simple_step_content={simple_step_content} />}
                {active_tab === 'commodities' && (
                    <Commodities simple_step_content={simple_step_content} />
                )}
                {active_tab === 'stock' && (
                    <StockIndices simple_step_content={simple_step_content} />
                )}
                {active_tab === 'synthetic' && (
                    <SyntheticIndices simple_step_content={simple_step_content} />
                )}
            </Box>
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

const useTabState = () => {
    const [active_tab, setActiveTab] = React.useState('forex')
    const setTab = (tab) => {
        if (tab === active_tab) return
        setActiveTab(tab)
    }
    return [active_tab, setTab]
}

export default WithIntl()(Markets)
