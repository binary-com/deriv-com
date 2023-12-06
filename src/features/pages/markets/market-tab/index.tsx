import { Tab } from '@deriv/quill-design'
import {
    IllustrativeCommoditiesIcon,
    IllustrativeCryptocurrenciesIcon,
    IllustrativeDerivedIcon,
    IllustrativeEtfIcon,
    IllustrativeForexIcon,
    IllustrativeStocksAndIndicesIcon,
} from '@deriv/quill-icons'
import React from 'react'

const MarketTab = () => {
    const marketTabs = [
        {
            tabId: 'forex',
            name: 'Forex',
            to: '/markets/forex',
            icon: <IllustrativeForexIcon iconSize="md" />,
        },
        {
            tabId: 'derivedIndices',
            name: 'Derived Indices',
            to: '/markets/synthetic/',
            icon: <IllustrativeDerivedIcon iconSize="md" />,
        },
        {
            tabId: 'stocksAndIndices',
            name: 'Stocks & indices',
            to: '/markets/stock/',
            icon: <IllustrativeStocksAndIndicesIcon iconSize="md" />,
        },
        {
            tabId: 'commodities',
            name: 'Commodities',
            to: '/markets/commodities/',
            icon: <IllustrativeCommoditiesIcon iconSize="md" />,
        },
        {
            tabId: 'cryptocurrencies',
            name: 'Cryptocurrencies',
            to: '/markets/cryptocurrencies/',
            icon: <IllustrativeCryptocurrenciesIcon iconSize="md" />,
        },
        {
            tabId: 'etfs',
            name: 'ETFs',
            to: '/markets/exchange-traded-funds/',
            icon: <IllustrativeEtfIcon iconSize="md" />,
        },
    ]
    const handleTabClick = (to) => {
        window.location.href = to
    }
    return (
        <Tab.Container id="test" size="md" iconPosition="top">
            <Tab.List className="justify-center">
                {marketTabs.map((item) => (
                    <Tab.Trigger
                        key={item.tabId}
                        onClick={() => handleTabClick(item.to)}
                        size="md"
                        className="gap-gap-md"
                    >
                        {item.icon}
                        {item.name}
                    </Tab.Trigger>
                ))}
            </Tab.List>
        </Tab.Container>
    )
}

export default MarketTab
