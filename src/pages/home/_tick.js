import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from 'components/elements/typography.js'
import { BinarySocketBase } from 'common/websocket/socket_base'
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

export default Tick
