import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`

const Icon = styled.svg`
    fill: none;
    stroke: var(--color-black);
    stroke-width: 4px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    position: absolute;
`

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background: var(--color-white);
    border-radius: 3px;
    margin-right: 0.8rem;
    border: 2px solid var(--color-grey-5);

    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }
`

const Checkbox = ({ checked, ...props }) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

Checkbox.propTypes = {
    checked: PropTypes.bool,
}

export default Checkbox
