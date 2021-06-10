import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from 'themes/device.js'

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: text-bottom;
`

const Icon = styled.svg`
    fill: none;
    stroke: ${(props) => {
        if (props.secondary) return 'var(--color-white)'
        return 'var(--color-white)'
    }};
    stroke-width: 4px;
    background-color: var(--color-red);
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
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
    background: ${(props) => {
        if (props.secondary && props.checked) return 'var(--color-red)'
        else if (props.background) return props.background
        return 'var(--color-white)'
    }};
    border: ${(props) =>
        props.secondary && props.checked
            ? '2px solid var(--color-red)'
            : '2px solid var(--color-grey-5)'};
    margin-right: 0.8rem;

    @media ${device.mobileL} {
        width: 2rem;
        height: 2rem;
    }
`

const Checkbox = ({ checked, secondary, id, bg, ...props }) => (
    <CheckboxContainer id={id}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} secondary={secondary} background={bg}>
            <Icon viewBox="0 0 24 24" checked={checked} secondary={secondary}>
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

Checkbox.propTypes = {
    bg: PropTypes.string,
    checked: PropTypes.bool,
    id: PropTypes.string,
    secondary: PropTypes.bool,
}

export default Checkbox
