import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BinarySocketBase } from 'common/websocket/socket_base'
import AutoCarousel from 'components/elements/auto-carousel'
import { Text } from 'components/elements/typography.js'
import Loader from 'components/elements/dot_loader.js'
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
    width: 36rem;
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

    subscribe = symbol => {
        BinarySocketBase.send(
            {
                ticks: symbol,
                subscribe: 1,
            },
            { callback: this.onSubscribe },
        )
    }

    getHistory = symbol => {
        BinarySocketBase.send(
            {
                ticks_history: symbol,
                end: 'latest',
                adjust_start_time: 1,
                count: 1,
            },
            { callback: this.onTicksHistory },
        )
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

    onTicksHistory = response => {
        if (response.error) {
            this.setState({
                quote: null,
                movement: null,
            })
        } else {
            this.setState({
                quote: this.reformatQuote(response.history.prices[0]),
                movement: null,
            })
        }
    }

    onSubscribe = response => {
        if (response.error) {
            this.setState({
                quote: null,
                movement: null,
            })
        } else {
            const quote = this.reformatQuote(response.tick.quote)
            if (this.state.quote > response.tick.quote) {
                this.setState({
                    quote,
                    movement: MovementRed,
                })
            } else if (this.state.quote < response.tick.quote) {
                this.setState({
                    quote,
                    movement: MovementGreen,
                })
            } else if (this.state.quote === response.tick.quote) {
                this.setState({
                    movement: null,
                })
            } else {
                this.setState({
                    quote,
                    movement: null,
                })
            }
        }
    }

    componentDidMount() {
        const { symbol, is_exchange_open } = this.props

        if (is_exchange_open) {
            this.subscribe(symbol)
        } else {
            this.getHistory(symbol)
        }
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
                            this.state.quote
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
    state = {
        markets: [],
        shoul_render: true,
    }
    onActiveSymbolReceive = response => {
        const markets = getTickerMarkets(response.active_symbols)

        this.setState(
            {
                markets,
                shoul_render: false,
            },
            () => {
                const symbol_name = this.state.markets.map(
                    symbol => symbol.symbol,
                )
                BinarySocketBase.send(
                    {
                        ticks: symbol_name,
                        subscribe: 1,
                    },
                    { callback: this.onTest },
                )
            },
        )
    }
    onTest = res => {
        console.log(res)
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
    shouldComponentUpdate() {
        return this.state.shoul_render
    }
    render() {
        return (
            <CarouselWapper>
                {this.state.markets.length === 0 ? null : (
                    <AutoCarousel
                        carousel_width="100%"
                        transition_duration={37000}
                    >
                        {this.state.markets.map(symbol => {
                            return (
                                <Tick
                                    key={symbol.symbol}
                                    display_name={symbol.display_name}
                                    symbol={symbol.symbol}
                                    is_exchange_open={!!symbol.exchange_is_open}
                                    pip={symbol.pip}
                                ></Tick>
                            )
                        })}
                    </AutoCarousel>
                )}
            </CarouselWapper>
        )
    }
}

export default Ticker
