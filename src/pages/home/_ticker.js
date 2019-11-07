import React from 'react'
import styled from 'styled-components'
import EventEmitter from './_event-emitter'
import Tick from './_tick.js'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { AutoCarousel } from 'components/elements'
// Icon
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
    let synthetic = []
    let forex = []
    let close_symbols = []
    let open_symbols = []

    active_symbols.forEach(symbol => {
        if (symbol.submarket === 'random_index' || symbol.submarket === 'random_daily') {
            synthetic.push(symbol)
        } else if (symbol.market === 'forex' && symbol.submarket === 'major_pairs') {
            if (!symbol.exchange_is_open) {
                volatility_count = 7
                forex_count = 3
            }
            forex.push(symbol)
        }
    })
    if (synthetic.length) {
        synthetic = shuffle(synthetic).slice(0, volatility_count)
    }
    if (forex.length) forex = shuffle(forex).slice(0, forex_count)
    const all_symbols = [...synthetic, ...forex]
    all_symbols.forEach(symbol =>
        symbol.exchange_is_open === 1
            ? open_symbols.push(symbol.symbol)
            : close_symbols.push(symbol.symbol),
    )

    return {
        all_symbols: all_symbols,
        open_symbols: open_symbols,
        close_symbols: close_symbols,
    }
}
class Ticker extends React.Component {
    state = {
        markets: {
            all_symbols: [],
            open_symbols: [],
            close_symbols: [],
        },
    }
    onActiveSymbolReceive = response => {
        const markets = getTickerMarkets(response.active_symbols)
        this.setState(
            {
                markets,
            },
            this.onSymbolsSubscribe,
        )
    }
    onSymbolsSubscribe = () => {
        if (this.state.markets.close_symbols.length !== 0) {
            this.state.markets.close_symbols.forEach(symbol => {
                BinarySocketBase.send(
                    {
                        ticks_history: symbol,
                        end: 'latest',
                        adjust_start_time: 1,
                        count: 1,
                    },
                    { callback: this.onCloseSymbolsReceive },
                )
            })
        }

        BinarySocketBase.send(
            {
                ticks: this.state.markets.open_symbols,
                subscribe: 1,
            },
            { callback: this.onOpenSymbolsReceive },
        )
    }
    onOpenSymbolsReceive = response => {
        EventEmitter.dispatch(response.tick.symbol, response.tick.quote)
    }
    onCloseSymbolsReceive = response => {
        EventEmitter.dispatch(response.echo_req.ticks_history, response.history.prices[0])
    }
    componentDidMount() {
        EventEmitter.reset()
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
                {this.state.markets.all_symbols.length === 0 ? null : (
                    <AutoCarousel carousel_width="100%" transition_duration={40000}>
                        {this.state.markets.all_symbols.map(symbol => {
                            return (
                                <Tick
                                    key={symbol.symbol}
                                    display_name={symbol.display_name}
                                    symbol={symbol.symbol}
                                    is_exchange_open={!!symbol.exchange_is_open}
                                    pip={symbol.pip}
                                />
                            )
                        })}
                    </AutoCarousel>
                )}
            </CarouselWapper>
        )
    }
}

export default Ticker
