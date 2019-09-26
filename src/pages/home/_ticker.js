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
`
const CarouselWapper = styled.div`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 1.6rem;
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
    updateStateWithResponse = response => {
        if (response.error) {
            this.setState({
                quote: null,
                movement: null,
            })
        } else {
            if (this.state.quote > response.tick.quote) {
                this.setState({
                    quote: response.tick.quote,
                    movement: MovementRed,
                })
            } else if (this.state.quote < response.tick.quote) {
                this.setState({
                    quote: response.tick.quote,
                    movement: MovementGreen,
                })
            } else if (this.state.quote === response.tick.quote) {
                this.setState({
                    movement: null,
                })
            } else {
                this.setState({
                    quote: response.tick.quote,
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
    symbol: PropTypes.string,
}
const Ticker = () => {
    return (
        <CarouselWapper>
            <AutoCarousel carousel_width="100%" transition_duration={30000}>
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

export default Ticker
