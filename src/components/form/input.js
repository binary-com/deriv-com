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
    font-size: var(--text-size-s);
    padding: 1rem 1rem 1rem 0.8rem;
    width: 95%;
    display: block;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--color-grey-2);

    &::placeholder {
        opacity: 0;
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
            color: var(--color-green);
        }
        & ~ span::before {
            width: 100%;
        }
        &::placeholder {
            opacity: 0.5;
        }
    }
    &:valid {
        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
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
        transform: translateZ(0);
    }
`

const StyledLabel = styled.label`
    color: var(--color-grey);
    font-size: var(--text-size-s);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1rem;
    transition: 0.25s ease all;
    transform: translateZ(0);
`

const Input = ({ label, id, ...props }) => (
    <InputWrapper>
        <StyledInput {...props} />
        <Bar />
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </InputWrapper>
)

Input.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    id: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
}

export default Input
