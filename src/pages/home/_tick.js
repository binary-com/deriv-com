import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

class Tick extends React.Component {
    state = {
        quote: null,
        movement: null,
    }
    static reformatQuote(number) {
        return number.toFixed(
            Math.max(
                (this.props.pip.toString().split('.')[1] || []).length,
                (number.toString().split('.')[1] || []).length,
            ),
        )
    }
    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.quote > prevState.quote) {
            return { quote: nextProps.quote, movement: MovementGreen }
        }
        if (nextProps.quote < prevState.quote) {
            return { quote: nextProps.quote, movement: MovementRed }
        }
        return { movement: null }
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