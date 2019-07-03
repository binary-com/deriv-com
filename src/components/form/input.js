import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`

const StyledInput = styled.input`
    background: none;
    color: var(--color-black);
    font-size: 1.6rem;
    padding: 1rem 1rem 1rem 0.5rem;
    width: 95%;
    display: block;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--color-grey-2);

    &:focus {
        outline: none;

        & ~ label {
            top: -1.2rem;
            font-size: 1.2rem;
            color: var(--color-green);
        }
        & ~ span::before {
            width: 100%;
        }
    }
    &:valid {
        & ~ label {
            top: -1.2rem;
            font-size: 1.2rem;
            color: var(--color-green);
        }
    }
`

const Bar = styled.span`
    position: relative;
    display: block;
    background: var(--color-green);

    &::before {
        content: '';
        height: 2px;
        width: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        background: var(--color-green);
        transition: 0.25s ease all;
    }
`

const StyledLabel = styled.label`
    color: var(--color-grey);
    font-size: 1.6rem;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.25s ease all;
`

const Input = ({ label, ...props }) => (
    <InputWrapper>
        <StyledInput {...props} />
        <Bar />
        <StyledLabel>{label}</StyledLabel>
    </InputWrapper>
)

Input.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    label: PropTypes.string,
    width: PropTypes.string,
}

export default Input
