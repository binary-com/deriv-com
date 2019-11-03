import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EventEmitter from './_event-emitter'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { AutoCarousel, Text, DotLoader } from 'components/elements'
// Icon
import MovementGreen from 'images/svg/price-movement-green.svg'
import MovementRed from 'images/svg/price-movement-red.svg'

const Divider = styled.div`
    width: 1px;
    height: 2.6rem;
    background-color: var(--color-grey-6);
`
const TickWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.7rem 0;
    width: 38rem;
`
const StyledText = styled(Text)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    font-size: var(--text-size-sm);
`
const Qoute = styled.span`
    font-weight: bold;
    text-decoration: none;
    padding: 0 5px;
`
const CarouselWapper = styled.div`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
`
class Tick extends React.PureComponent {
    state = {
        quote: null,
        movement: null,
    }

    reformatQuote(number) {
        // calculate that how many decimal each quote should have, based on pip value
        return number.toFixed(
            Math.max(
                (this.props.pip.toString().split('.')[1] || []).length,
                (number.toString().split('.')[1] || []).length,
            ),
        )
    }

    componentDidMount() {
        EventEmitter.subscribe(this.props.symbol, quote => {
            if (this.state.quote > quote)
                this.setState({
                    quote: quote,
                    movement: MovementRed,
                })
            else if (this.state.quote < quote)
                this.setState({
                    quote: quote,
                    movement: MovementGreen,
                })
            else {
                this.setState({
                    movement: null,
                })
            }
        })
    }

    render() {
        const Movement = this.state.movement
        return (
            <TickWrapper>
                <StyledText>
                    <Qoute>
                        <span style={{ fontWeight: 'normal' }}>
                            {this.props.display_name}:{' '}
                        </span>
                        {this.state.quote === null ? (
                            <Loader />
                        ) : (
                            this.reformatQuote(this.state.quote)
                        )}{' '}
                    </Qoute>
                    <span style={{ width: '12px', display: 'block' }}>
                        {Movement === null ? null : <Movement />}
                    </span>
                </StyledText>
                <Divider />
            </TickWrapper>
        )
    }
}

Tick.propTypes = {
    display_name: PropTypes.string,
    is_exchange_open: PropTypes.bool,
    pip: PropTypes.number,
    symbol: PropTypes.string,
}

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
        if (symbol.market === 'synthetic_index') {
            synthetic.push(symbol)
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
    if (synthetic.length) {
        synthetic = shuffle(synthetic).slice(0, volatility_count)
    }
    if (forex.length) forex = shuffle(forex).slice(0, forex_count)
    ;[...volidx, ...forex].forEach(symbol =>
        symbol.exchange_is_open === 1
            ? open_symbols.push(symbol.symbol)
            : close_symbols.push(symbol.symbol),
    )

    return {
        all_symbols: [...volidx, ...forex],
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
        EventEmitter.dispatch(
            response.echo_req.ticks_history,
            response.history.prices[0],
        )
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
    shouldComponentUpdate() {
        if (this.count < 20) {
            this.count += 1
            return false
        }
        this.count = 0
        return true
    }
    render() {
        return (
            <CarouselWapper>
                {this.state.markets.all_symbols.length === 0 ? null : (
                    <AutoCarousel
                        carousel_width="100%"
                        transition_duration={37000}
                    >
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
