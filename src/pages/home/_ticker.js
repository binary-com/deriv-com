import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { BinarySocketBase } from 'common/websocket/socket_base'
import AutoCarousel from 'components/elements/auto-carousel'
import { Text } from 'components/elements/typography.js'

const Divider = styled.div`
    width: 1px;
    height: 2.6rem;
    background-color: var(--color-grey-6);
`
const TickWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.7rem 2rem;
    width: 23.5rem;
`
const Qoute = styled.span`
    font-weight: bold;
`
class Tick extends React.Component {
    state = {
        quote: 'loading...',
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
    updateStateWithResponse = response => {
        this.setState({
            quote: response.tick.quote,
        })
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
        return (
            <TickWrapper>
                <Divider />
                <Text>
                    {this.props.display_name}: <Qoute>{this.state.quote}</Qoute>
                </Text>
                <Divider />
            </TickWrapper>
        )
    }
}

Tick.propTypes = {
    display_name: PropTypes.string,
    symbol: PropTypes.string,
}
const Ticker = () => {
    return (
        <AutoCarousel carousel_width="100%" transition_duration={20000}>
            <Tick symbol="frxAUDJPY" display_name="AUD/JPY" />
            <Tick symbol="frxAUDUSD" display_name="AUD/USD" />
            <Tick symbol="frxEURAUD" display_name="EUR/AUD" />
            <Tick symbol="frxEURCAD" display_name="EUR/CAD" />
            <Tick symbol="frxEURCHF" display_name="EUR/CHF" />
            <Tick symbol="frxEURGBP" display_name="EUR/GPB" />
            <Tick symbol="frxEURJPY" display_name="EUR/JPY" />
        </AutoCarousel>
    )
}

export default Ticker
