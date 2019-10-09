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
            { callback: this.updateStateWithResponse },
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
    updateStateWithResponse = response => {
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
        this.subscribe(this.props.symbol)
    }
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
    pip: PropTypes.number,
    symbol: PropTypes.string,
}

class Ticker extends React.Component {
    state = {
        markets: [],
    }
    onActiveSymbolReceive = response => {
        const random_index = []
        const random_daily = []
        response.active_symbols.forEach(symbol => {
            if (symbol.market === 'volidx') {
                symbol.submarket === 'random_index'
                    ? random_index.push(symbol)
                    : random_daily.push(symbol)
            }
        })
        const active_symbols = random_index.concat(random_daily)
        this.setState({
            markets: active_symbols,
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
                        transition_duration={45000}
                    >
                        {this.state.markets.map(symbol => (
                            <Tick
                                key={symbol.symbol}
                                display_name={symbol.display_name}
                                symbol={symbol.symbol}
                                pip={symbol.pip}
                            ></Tick>
                        ))}
                    </AutoCarousel>
                )}
            </CarouselWapper>
        )
    }
}

export default Ticker
