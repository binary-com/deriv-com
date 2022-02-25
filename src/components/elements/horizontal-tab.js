import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { button } from 'components/form'
import styled, { css } from 'styled-components'
// import { Text, Header } from './typography'
// import device, { size } from 'themes/device'
// import { getWindowWidth } from 'common/utility'
// import { Button } from 'components/form'
// import { Desktop } from 'components/containers/show'
// import { useTabStateQuery } from 'components/hooks/use-tab-state-query'
import ChartThumbnail from 'images/svg/markets/chart.svg'

// Temporary data
const market_data = {
    all: [
        {
            market_name: 'AUD/JPY',
            market_price: 80.582,
            price_change: 0.01,
        },
        {
            market_name: 'BTC/USD',
            market_price: 44015.8,
            price_change: 0.01,
        },
        {
            market_name: 'US Index',
            market_price: 4471.98,
            price_change: 0.01,
        },
        {
            market_name: 'Volatility 75',
            market_price: 668341.4427,
            price_change: -0.02,
        },
        {
            market_name: 'Gold/USD',
            market_price: 1750.2,
            price_change: 0,
        },
    ],

    forex: [
        {
            market_name: 'AUD/JPY',
            market_price: 80.582,
            price_change: 0.01,
        },
    ],

    synthetic: [
        {
            market_name: 'Volatility 75',
            market_price: 668341.4427,
            price_change: -0.02,
        },
    ],

    stocks: [
        {
            market_name: 'US Index',
            market_price: 4471.98,
            price_change: 0.01,
        },
    ],

    stock_indices: [
        {
            market_name: 'US Index',
            market_price: 4471.98,
            price_change: 0.01,
        },
    ],

    crypto: [
        {
            market_name: 'BTC/USD',
            market_price: 44015.8,
            price_change: 0.01,
        },
    ],

    commodities: [
        {
            market_name: 'Gold/USD',
            market_price: 1750.2,
            price_change: 0,
        },
    ],
}

const market_tabs = [
    {
        market_type: 'All',
        market_alt: 'all',
    },
    {
        market_type: 'Forex',
        market_alt: 'forex',
    },
    {
        market_type: 'Synthetic indices',
        market_alt: 'synthetic',
    },
    {
        market_type: 'Stocks',
        market_alt: 'stocks',
    },
    {
        market_type: 'Stock indices',
        market_alt: 'stock_indices',
    },
    {
        market_type: 'Cryptocurrencies',
        market_alt: 'crypto',
    },
    {
        market_type: 'Commodities',
        market_alt: 'commodities',
    },
]

const StyledUl = styled.ul`
    display: flex;
    height: 60px;
    border-radius: 10px;
    padding: 6px;
    justify-content: center;
    align-items: flex-start;
    position: static;
    background: #f2f3f4;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 24px 0;
`

const StyledLi = styled.li`
    position: static;
    height: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #333333;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0 8px;
    align-self: center;

    &:hover {
        cursor: pointer;
    }

    ${(props) => {
        if (props.is_active)
            return css`
                background: #ffffff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08), 0px 0px 10px rgba(0, 0, 0, 0.08);
                border-radius: 8px;
                line-height: 48px;
                height: 48px;
                cursor: unset;
            `
    }}
`

const StyledRow = styled.ul`
    height: 104px;
    width: 100%;
    padding: 32px, 24px, 32px, 24px;
    display: flex;
    justify-content: space-between;
    box-shadow: inset 0 -2px 0 #f2f3f4;
`

const StyledButton = styled.div`
    height: 40px;
    width: 69px;
    border: 1px solid #333333;
    border-radius: 4px;
    padding: 5px 15px;
    align-self: end;
    font-size: 14px;
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledCell = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    line-height: 30px;
    color: #333333;
    flex: none;
    order: 1;
    flex-grow: 0;
    width: 22.5%;

    &:last-child {
        width: 69px;
    }
`

const PositivePriceChange = styled.span`
    color: #4bb4b3;
`

const NegativePriceChange = styled.span`
    color: #ff3333;
`

const MarketTab = ({ market_name, is_active, key, onClick }) => {
    return (
        <StyledLi key={key} is_active={is_active} onClick={onClick}>
            {market_name}
        </StyledLi>
    )
}

MarketTab.propTypes = {
    is_active: PropTypes.bool,
    key: PropTypes.any,
    market_name: PropTypes.string,
    onClick: PropTypes.func,
}

const PriceChange = ({ price_change }) => {
    return price_change >= 0 ? (
        <PositivePriceChange>+{price_change.toFixed(2)}%</PositivePriceChange>
    ) : (
        <NegativePriceChange>{price_change.toFixed(2)}%</NegativePriceChange>
    )
}

PriceChange.propTypes = {
    price_change: PropTypes.any,
}

const MarketTabs = ({ markets, setSelectedMarket, selectedMarket }) => {
    // const handleFilter = () => {
    //     console.log('')
    //     console.log('MARKEET TAB')
    //     console.log()
    // }

    return (
        <div>
            <StyledUl>
                {markets.map((market, idx) => {
                    return (
                        <MarketTab
                            key={idx}
                            market_name={market.market_type}
                            onClick={() => {
                                setSelectedMarket(market.market_alt)
                            }}
                            is_active={market.market_alt == selectedMarket}
                        />
                    )
                })}
            </StyledUl>
        </div>
    )
}

MarketTabs.propTypes = {
    markets: PropTypes.object,
    selectedMarket: PropTypes.string,
    setSelectedMarket: PropTypes.func,
}

const TabsContent = ({ market_type }) => {
    return (
        <StyledColumn>
            {market_data[market_type].map((d, idx) => {
                return (
                    <MarketRow
                        key={idx}
                        market_name={d.market_name}
                        market_price={d.market_price}
                        market_chart={d.market_chart}
                        price_change={d.price_change}
                    />
                )
            })}
        </StyledColumn>
    )
}

TabsContent.propTypes = {
    market_type: PropTypes.string,
}

const MarketRow = ({ market_name, market_price, price_change }) => {
    return (
        <StyledRow>
            <StyledCell>{market_name}</StyledCell>
            <StyledCell>{market_price}</StyledCell>
            <StyledCell>
                <PriceChange price_change={price_change} />
            </StyledCell>
            <StyledCell>
                <img src={ChartThumbnail} alt="" width="146" height="50" />
            </StyledCell>
            <StyledCell>
                <StyledButton tertiary>Trade</StyledButton>
            </StyledCell>
        </StyledRow>
    )
}

MarketRow.propTypes = {
    market_name: PropTypes.string,
    market_price: PropTypes.any,
    price_change: PropTypes.any,
}

const HorizontalTab = () => {
    const [selectedMarket, setSelectedMarket] = useState('all')
    // const onFilter = (e) => {
    //     console.log('');
    //     console.log('HERE: ')
    //     console.log(e)
    // }

    return (
        <>
            <MarketTabs
                markets={market_tabs}
                setSelectedMarket={setSelectedMarket}
                selectedMarket={selectedMarket}
            />
            <TabsContent market_type={selectedMarket}>{/* <Button></Button> */}</TabsContent>
        </>
    )
}

export default HorizontalTab
