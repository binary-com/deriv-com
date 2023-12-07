import { FluidContainer, Tab } from '@deriv/quill-design'
import {
    IllustrativeCommoditiesIcon,
    IllustrativeCryptocurrenciesIcon,
    IllustrativeDerivedIcon,
    IllustrativeEtfIcon,
    IllustrativeForexIcon,
    IllustrativeStocksAndIndicesIcon,
} from '@deriv/quill-icons'
import React, { useState } from 'react'
import { Breadcrumbs } from '@deriv-com/components'
import ForexPage from '../../../../pages/markets/forex'
import ETFMarketPage from '../../../../pages/markets/exchange-traded-funds'
import CommoditiesPage from '../../../../pages/markets/commodities'
import CryptocurrenciesPage from '../../../../pages/markets/cryptocurrencies'
import StocksAndIndicesPage from '../../../../pages/markets/stock'
import DerivedFxPage from '../../../../pages/markets/derived-fx'
import ForexContent from '../forex/forex-content'
import ETFContent from '../etfs/etf-content'
import CommoditiesContent from '../commodities/commodity-content'
import CryptoContent from '../cryptocurrency/crypto-content'
import StocksAndIndicesContent from '../stocks-and-indices/stock-indices-content'
import DerivedContent from '../derived/derived-content'

const MarketTab = () => {
    const [tabId, setTabId] = useState('forex')
    const [tabName, setTabName] = useState('Forex')
    const marketTabs = [
        {
            tabId: 'forex',
            name: 'Forex',
            to: <ForexPage />,
            icon: <IllustrativeForexIcon iconSize="md" />,
        },
        {
            tabId: 'derivedIndices',
            name: 'Derived Indices',
            to: <DerivedFxPage />,
            icon: <IllustrativeDerivedIcon iconSize="md" />,
        },
        {
            tabId: 'stocksAndIndices',
            name: 'Stocks & indices',
            to: <StocksAndIndicesPage />,
            icon: <IllustrativeStocksAndIndicesIcon iconSize="md" />,
        },
        {
            tabId: 'commodities',
            name: 'Commodities',
            to: <CommoditiesPage />,
            icon: <IllustrativeCommoditiesIcon iconSize="md" />,
        },
        {
            tabId: 'cryptocurrencies',
            name: 'Cryptocurrencies',
            to: <CryptocurrenciesPage />,
            icon: <IllustrativeCryptocurrenciesIcon iconSize="md" />,
        },
        {
            tabId: 'etfs',
            name: 'ETFs',
            to: <ETFMarketPage />,
            icon: <IllustrativeEtfIcon iconSize="md" />,
        },
    ]
    const getContentForTab = (tabId) => {
        switch (tabId) {
            case 'forex':
                return <ForexContent />
            case 'derivedIndices':
                return <DerivedContent />
            case 'stocksAndIndices':
                return <StocksAndIndicesContent />
            case 'commodities':
                return <CommoditiesContent />
            case 'cryptocurrencies':
                return <CryptoContent />
            case 'etfs':
                return <ETFContent />
            default:
                return <ForexContent />
        }
    }

    const handleTabClick = (tabId: string, tabName: string) => {
        setTabId(tabId)
        setTabName(tabName)
        const url = new URL(window.location.href)
        url.searchParams.set('tab', tabId)
        window.history.pushState({}, '', url.toString())
    }
    return (
        <>
            <FluidContainer>
                <Breadcrumbs
                    className="py-general-md"
                    links={[
                        {
                            content: 'Home',
                            href: '/',
                        },
                        {
                            content: tabName,
                            href: '',
                        },
                    ]}
                />
            </FluidContainer>
            <Tab.Container id="test" size="md" iconPosition="top">
                <Tab.List className="justify-center">
                    {marketTabs.map((item) => (
                        <Tab.Trigger
                            key={item.tabId}
                            onClick={() => handleTabClick(item.tabId, item.name)}
                            size="md"
                            className="gap-gap-md"
                        >
                            {item.icon}
                            {item.name}
                        </Tab.Trigger>
                    ))}
                </Tab.List>

                <Tab.Content>{getContentForTab(tabId)}</Tab.Content>
            </Tab.Container>
        </>
    )
}

export default MarketTab
