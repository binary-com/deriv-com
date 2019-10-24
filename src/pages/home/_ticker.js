import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Tick from './_tick'
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
const SeparateSymbols = symbols_array => {
    const open_symbols = []
    const close_symbols = []

    symbols_array.forEach(symbol =>
        symbol.exchange_is_open === 1
            ? open_symbols.push(symbol.symbol)
            : close_symbols.push(symbol.symbol),
    )
    return {
        selected_symbols: symbols_array,
        close_symbols: close_symbols,
        open_symbols: open_symbols,
    }
}
const Ticker = () => {
    const [markets, setMarkets] = useState({
        selected_symbols: [],
        close_symbols: [],
        open_symbols: [],
    })
    const [quotes, setQuotes] = useState()

    useEffect(() => {
        BinarySocketBase.send(
            {
                active_symbols: 'brief',
                product_type: 'basic',
            },
            { callback: onMarketReceive },
        )
    }, [])

    const initiateQuotes = incoming_symbols => {
        const initiatedQuotes = {}
        incoming_symbols.forEach(
            symbol => (initiatedQuotes[symbol.symbol] = null),
        )
        return initiatedQuotes
    }

    onMarketReceive = response => {
        const incoming_symbols = getTickerMarkets(response.active_symbols)
        const separate_symbols = SeparateSymbols(incoming_symbols)
        const init_quotes = initiateQuotes(incoming_symbols)
        setQuotes(init_quotes)
        setMarkets(separate_symbols)

        if (separate_symbols.close_symbols.length !== 0) {
            separate_symbols.close_symbols.forEach(symbol => {
                BinarySocketBase.send(
                    {
                        ticks_history: symbol,
                        end: 'latest',
                        adjust_start_time: 1,
                        count: 1,
                    },
                    { callback: onCloseSymbolsReceive },
                )
            })
        }
        BinarySocketBase.send(
            {
                ticks: separate_symbols.open_symbols,
                subscribe: 1,
            },
            { callback: onOpenSymbolsReceive },
        )
    }
    const onOpenSymbolsReceive = response => {
        console.log(JSON.stringify(quotes))
        const test = Object.assign({}, quotes)
        test[response.tick.symbol] = response.tick.quote
        setQuotes(test)
    }
    const onCloseSymbolsReceive = response => {
        // setQuotes(
        //     (quotes[response.echo_req.ticks_history] =
        //         response.history.prices[0]),
        // )
    }
    return (
        <CarouselWapper>
            {markets.selected_symbols.length === 0 ? null : (
                <AutoCarousel carousel_width="100%" transition_duration={37000}>
                    {markets.selected_symbols.map(symbol => {
                        return (
                            <div key={symbol.symbol}>
                                {symbol.display_name}: {quotes[symbol]}
                            </div>
                        )
                    })}
                </AutoCarousel>
            )}
        </CarouselWapper>
    )
}

// export function useQuotes(init = {}) {
//     const [quotes, setQuotes] = useState(init)
//     return [quotes, setQuotes]
// }
// function useMarkets(
//     init = {
//         selected_symbols: [],
//         close_symbols: [],
//         open_symbols: [],
//     },
// ) {
//     const [markets, setMarkets] = useState(init)
//     return [markets, setMarkets]
// }
export default Ticker
