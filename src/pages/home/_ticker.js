import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Tick from './_tick.js'
import { BinarySocketBase } from 'common/websocket/socket_base'
import AutoCarousel from 'components/elements/auto-carousel'

const CarouselWapper = styled.div`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
`

//  Fisher-Yates shuffle
function shuffle(array) {
    let j, x, i
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = array[i]
        array[i] = array[j]
        array[j] = x
    }
    return array
}

const getTickerMarkets = active_symbols => {
    let volatility_count = 3
    let forex_count = 7
    let volidx = []
    let forex = []

    active_symbols.forEach(symbol => {
        if (symbol.market === 'volidx') {
            volidx.push(symbol)
        } else if (
            symbol.market === 'forex' &&
            symbol.submarket === 'major_pairs'
        ) {
            if (!symbol.exchange_is_open) {
                volatility_count = 7
                forex_count = 3
            }
            forex.push(symbol)
        }
    })
    if (volidx.length) volidx = shuffle(volidx).slice(0, volatility_count)
    if (forex.length) forex = shuffle(forex).slice(0, forex_count)

    return [...volidx, ...forex]
}
class Ticker extends React.Component {
    close_symbols = []
    open_symbols = []

    state = {
        markets: [],
        quotes: {},
    }

    onActiveSymbolReceive = response => {
        const markets = getTickerMarkets(response.active_symbols)
        const quotes = {}
        markets.forEach(symbol => {
            quotes[symbol.symbol] = null
            symbol.exchange_is_open === 1
                ? this.open_symbols.push(symbol.symbol)
                : this.close_symbols.push(symbol.symbol)
        })
        this.setState(
            {
                markets: markets,
                quotes: quotes,
            },
            this.onMarketsUpdate,
        )
    }
    onMarketsUpdate = () => {
        if (this.close_symbols.length !== 0) {
            BinarySocketBase.send(
                {
                    ticks: this.close_symbols,
                    subscribe: 1,
                },
                { callback: this.onCloseSymbolsReceive },
            )
        }
        BinarySocketBase.send(
            {
                ticks: this.open_symbols,
                subscribe: 1,
            },
            { callback: this.onOpenSymbolsReceive },
        )
    }
    onCloseSymbolsReceive = response => {
        const quotes = { ...this.state.quotes }
        if (response.error) {
            quotes[response.tick.symbol] = null
            this.setState({
                quotes: quotes,
            })
        } else {
            quotes[response.echo_req.ticks_history] = response.history.prices[0]
            this.setState({
                quotes: quotes,
            })
        }
    }
    onOpenSymbolsReceive = response => {
        const quotes = { ...this.state.quotes }
        if (response.error) {
            quotes[response.tick.symbol] = null
            this.setState({
                quotes: quotes,
            })
        } else {
            quotes[response.tick.symbol] = response.tick.quote
            this.setState({ quotes })
        }
    }
    componentDidMount() {
        BinarySocketBase.send(
            {
                active_symbols: 'brief',
                product_type: 'basic',
            },
            { callback: this.onActiveSymbolReceive },
        )
    }
    componentWillUnmount() {
        BinarySocketBase.send({
            forget_all: 'ticks',
        })
    }

    render() {
        return (
            <CarouselWapper>
                {this.state.markets.length === 0 ? null : (
                    <AutoCarousel
                        carousel_width="100%"
                        transition_duration={37000}
                    >
                        <TickList
                            quotes={this.state.quotes}
                            markets={this.state.markets}
                        />
                    </AutoCarousel>
                )}
            </CarouselWapper>
        )
    }
}
const TickList = ({ markets, quotes }) => (
    <>
        {markets.map(symbol => {
            return (
                <Tick
                    key={symbol.symbol}
                    display_name={symbol.display_name}
                    quote={quotes[symbol.symbol]}
                    pip={symbol.pip}
                ></Tick>
            )
        })}
    </>
)

TickList.propTypes = {
    markets: PropTypes.array,
    quotes: PropTypes.object,
}

export default Ticker
