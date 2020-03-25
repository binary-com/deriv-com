import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import Forex from './_forex'
import Commodities from './_commodities'
import SyntheticIndices from './_synthetic-indices'
import StockIndices from './_stock-indices'
import { Hero } from './_hero'
import { getLocationHash } from 'common/utility'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO, Flex } from 'components/containers'
import { Header } from 'components/elements'

const useTabState = () => {
    const [active_tab, setActiveTab] = React.useState('forex')
    const setTab = tab => {
        if (tab === active_tab) return
        setActiveTab(tab)
        navigate(`#${tab}`)
    }
    return [active_tab, setTab]
}
const Tabs = styled(Flex)``
const Item = styled.div`
    padding: 1.2rem 2.4rem;
    border-bottom: ${props => props.name === props.active_tab ? '2px solid var(--color-red)' : ''};
    cursor: pointer;
    z-index: 10;

    h4 {
        color: var(--color-red);
        opacity: ${props => props.name === props.active_tab ? '1' : '0.32'};
        font-weight: ${props => props.name === props.active_tab ? 'bold' : 'normal'};
    }
`
const TabWrapper = styled.div`
    position: relative;
`
const Separator = styled.div`
    position: absolute;
    width: 100%;
    top: -2px;
    height: 2px;
    background-color: var(--color-grey-21);
`
const Markets = () => {
    const [active_tab, setTab] = useTabState('forex');
    React.useEffect(() => {
        const new_tab = getLocationHash() || 'forex'
        setTab(new_tab)
    })
    return (
        <Layout>
            <SEO description={localize('')} title={localize('')} />
            <Hero />
            <Tabs>
                <Item onClick={() => setTab('forex')} active_tab={active_tab} name='forex'>
                    <Header as='h4'>{localize('Forex')}</Header>
                </Item>
                <Item onClick={() => setTab('commodities')} active_tab={active_tab} name='commodities'>
                    <Header as='h4'>{localize('Commodities')}</Header>
                </Item>
                <Item onClick={() => setTab('stock')} active_tab={active_tab} name='stock'>
                    <Header as='h4'>{localize('Stock indices')}</Header>
                </Item>
                <Item onClick={() => setTab('synthetic')} active_tab={active_tab} name='synthetic'>
                    <Header as='h4'>{localize('Synthetic indices')}</Header>
                </Item>
            </Tabs>
            <TabWrapper>
                <Separator />
                {active_tab === 'forex' && <Forex />}
                {active_tab === 'commodities' && <Commodities />}
                {active_tab === 'stock' && <StockIndices />}
                {active_tab === 'synthetic' && <SyntheticIndices />}
            </TabWrapper>
        </Layout>
    )
}

export default WithIntl()(Markets)
