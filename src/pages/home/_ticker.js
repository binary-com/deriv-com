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
    width: 29rem;
`
const StyledText = styled(Text)`
    width: 100%;
    text-align: center;
`
const Qoute = styled.span`
    font-weight: bold;
    text-decoration: none;
`
const CarouselWapper = styled.div`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
`
class Tick extends React.Component {
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
            if (this.state.quote > response.tick.quote) {
                this.setState({
                    quote: this.reformatQuote(response.tick.quote),
                    movement: MovementRed,
                })
            } else if (this.state.quote < response.tick.quote) {
                this.setState({
                    quote: this.reformatQuote(response.tick.quote),
                    movement: MovementGreen,
                })
            } else if (this.state.quote === response.tick.quote) {
                this.setState({
                    movement: null,
                })
            } else {
                this.setState({
                    quote: this.reformatQuote(response.tick.quote),
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

    // TODO: move to parent to avoid sending 10x
    componentWillUnmount() {
        BinarySocketBase.send({
            forget_all: 'ticks',
        })
    }

    render() {
        const Movement = this.state.movement
        return (
            <TickWrapper>
                <StyledText>
                    {this.props.display_name}:{' '}
                    <Qoute>
                        {this.state.quote === null ? (
                            <Loader />
                        ) : (
                            this.state.quote
                        )}{' '}
                    </Qoute>
                    {Movement === null ? null : <Movement />}
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

const makeMarkets = active_symbols => {
    let volatility_count = 4
    let forex_count = 6
    const random_index = []
    const random_daily = []
    const forex_major_pairs = []

    active_symbols.forEach(symbol => {
        if (symbol.market === 'volidx') {
            if (symbol.submarket === 'random_index') {
                random_index.push(symbol)
            } else {
                random_daily.push(symbol)
            }
        } else if (
            symbol.market === 'forex' &&
            symbol.submarket === 'major_pairs'
        ) {
            if (!symbol.exchange_is_open) {
                volatility_count = 6
                forex_count = 4
            }
            forex_major_pairs.push(symbol)
        }
    })

    const volatility_markets = [...random_index, ...random_daily].slice(
        0,
        volatility_count,
    )
    const forex_markets = [...forex_major_pairs].slice(0, forex_count)
    const markets = [...volatility_markets, ...forex_markets]

    return {
        markets,
    }
}
class Ticker extends React.Component {
    state = {
        markets: [],
    }
    onActiveSymbolReceive = response => {
        const { markets } = makeMarkets(response.active_symbols)

        this.setState({
            markets,
        })
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
    render() {
        return (
            <CarouselWapper>
                {this.state.markets.length === 0 ? null : (
                    <AutoCarousel
                        carousel_width="100%"
                        transition_duration={30000}
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
