import React from 'react'
import styled from 'styled-components'
// icons
import Forex from 'images/svg/market-forex.svg'
import Commodities from 'images/svg/market-commodities.svg'
import StockIndices from 'images/svg/market-stock-indices.svg'
import SyntheticIndices from 'images/svg/market-synthetic-indices.svg'

const trade_type = {
    'forex': {
        icon: Forex,
        title: 'Forex',
        content: 'Forex gives you the chance to profit from changes in the relative values of currencies on the forex market.'
    },
    'stock': {
        icon: StockIndices,
        title: 'Stock indices',
        content: 'Stock indices trading allows you to profit from the price movements in a market without buying assets.'
    },
    'synthetic': {
        icon: SyntheticIndices,
        title: 'Synthetic Indices',
        content: 'Synthetic Indices are our proprietary indices that simulate real-world market movements while being free of market and liquidity risks.'
    },
    'commodities': {
        icon: Commodities,
        title: 'Commodities trading',
        content: 'Commodities on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil.'
    },
}
const Card = ({ name }) => {
    const Icon = styled(trade_type[name].icon)`
        width: 64px;
        height: 64px;
    `
    return (
        < Flex >
            <Icon />
        </Flex >
    )
}
const OtherMarkets = ({ except }) => {
    return (
        <Flex>
            {except !== 'forex' &&
                <Card name={except} />
            }
            {except !== 'stock' &&
                <Card name={except} />
            }
            {except !== 'commodities' &&
                <Card name={except} />
            }
            {except !== 'synthetic' &&
                <Card name={except} />
            }
        </Flex>
    )
}

export default OtherMarkets
