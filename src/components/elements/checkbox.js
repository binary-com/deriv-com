import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CheckboxComponent = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 0.8rem;
    width: 1.6rem;
    height: 1.6rem;
`

const CheckboxWrapper = styled.div`
    text-align: left;
`
class Checkbox extends React.Component {
    state = { checked: false }

    handleCheckboxChange = event => this.setState({ checked: event.target.checked })

    render() {
        return (
            <CheckboxWrapper>
                <label>
                    <CheckboxComponent
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                    <span style={{ fontSize: 'var(--text-size-xs)' }}>{this.props.label}</span>
                </label>
            </CheckboxWrapper>
        )
    }
}

Checkbox.propTypes = {
    label: PropTypes.string,
}

export default Checkbox
