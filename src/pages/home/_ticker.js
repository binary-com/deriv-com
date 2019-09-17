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
    padding: 2.7rem 0;
    width: 29rem;
`
const StyledText = styled(Text)`
    width: 100%;
    text-align: center;
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
                <StyledText>
                    {this.props.display_name}:<Qoute>{this.state.quote}</Qoute>
                </StyledText>
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
        <CarouselWapper>
            <AutoCarousel carousel_width="100%" transition_duration={20000}>
                <Tick symbol="R_10" display_name="Volatility 10 Index" />
                <Tick symbol="R_25" display_name="Volatility 25 Index" />
                <Tick symbol="R_50" display_name="Volatility 50 Index" />
                <Tick symbol="R_75" display_name="Volatility 75 Index" />
                <Tick symbol="R_100" display_name="Volatility 100 Index" />
                <Tick symbol="RDBULL" display_name="Bull Market Index" />
                <Tick symbol="RDBEAR" display_name="Bear Market Index" />
            </AutoCarousel>
        </CarouselWapper>
    )
}
const CarouselWapper = styled.div`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 1.6rem;
`
export default Ticker
