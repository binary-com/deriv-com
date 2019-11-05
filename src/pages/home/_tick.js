import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EventEmitter from './_event-emitter'
import { Text, DotLoader } from 'components/elements'
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
                        <span style={{ fontWeight: 'normal' }}>{this.props.display_name}: </span>
                        {this.state.quote === null ? (
                            <DotLoader />
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

export default Tick
