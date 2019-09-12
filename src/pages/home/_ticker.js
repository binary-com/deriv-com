import React from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'
import AutoCarousel from 'components/elements/auto-carousel'
import styled from 'styled-components'

class Tick extends React.Component {
    state = {
        quote: '',
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
        const TickWrapper = styled.div`
            width: 200px;
        `
        return (
            <TickWrapper>
                <span>
                    {this.props.symbol}: {this.state.quote}
                </span>
            </TickWrapper>
        )
    }
}
class Ticker extends React.Component {
    render() {
        return (
            <div>
                <AutoCarousel
                    carousel_width="100%"
                    transition_duration={2000}
                    transition_delay={0}
                    transition_timing_function="linear"
                >
                    <Tick symbol="R_10" />
                    <Tick symbol="R_25" />
                    <Tick symbol="R_50" />
                    <Tick symbol="R_75" />
                    <Tick symbol="R_10" />
                    <Tick symbol="R_25" />
                    <Tick symbol="R_50" />
                    <Tick symbol="R_75" />
                    <Tick symbol="R_10" />
                    <Tick symbol="R_25" />
                </AutoCarousel>
            </div>
        )
    }
}

export default Ticker
