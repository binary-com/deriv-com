import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from '../elements'
import device from 'themes/device.js'
// SVG Component
import CrossIcon from 'images/svg/cross.svg'

const RelativeWrapper = styled.div`
    position: relative;
`
const InputWrapper = styled.div`
    width: 100%;
    border: ${props => props.border || '1px solid var(--color-grey-2)'};
    border-radius: 4px;

    &:hover {
        border-color: var(--color-grey-5);

        & > label {
            color: var(--color-black-3);
        }
    }
    &:focus-within {
        border-color: ${props => props.focusBorder || 'var(--color-green)'};
    }

    ${props =>
        props.error &&
        css`
            border-color: var(--color-red-1) !important;

            & > label {
                color: var(--color-red-1) !important;
            }
        `}
`

const StyledError = styled(CrossIcon)`
    position: absolute;
    right: 0.8rem;
    top: 1.2rem;
    height: 1.6rem;
    width: 1.6rem;
    cursor: pointer;
`

const StyledInput = styled.input`
    background: none;
    color: var(--color- ${props => props.inputColor || 'black'});
    font-size: var(--text-size-s);
    padding: 1rem 1rem 1rem 0.8rem;
    width: 95%;
    display: block;
    border: none;
    border-radius: 0;

    &::placeholder {
        opacity: 0;
        transition: opacity 0.25s;
        padding-left: 0.3rem;
    }
    &:focus {
        outline: none;

        & ~ label {
            transform: translate(-0.6rem, -2rem) scale(0.7);
            color: var(--color- ${props => props.labelFocusColor || 'green'});
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

const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
`

const StyledLabel = styled.label`
    color: var(--color-grey);
    font-size: var(--text-size-s);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;

    /* prettier-ignore */
    background-color: var(--color-${props => props.background || 'grey-1'});

    @media ${device.tablet} {
        background-color: var(--color-${props => props.tabletBackground || 'grey-1'});
    }
`

const Input = ({ label, border, focusBorder, id, error, background, tabletBackground, handleError, ...props }) => (
    <RelativeWrapper>
        <InputWrapper border={border} focusBorder={focusBorder} error={error}>
            <StyledInput id={id} {...props} />
            <StyledLabel background={background} tabletBackground={tabletBackground} error={error} htmlFor={id}>
                {label}
            </StyledLabel>
        </InputWrapper>
        {error && (
            <>
                <ErrorMessages lh="1.4" align="left" color="red-1">
                    {error}
                </ErrorMessages>
                <StyledError onClick={handleError} />
            </>
        )}
    </RelativeWrapper>
)

Input.propTypes = {
    background: PropTypes.string,
    border: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    error: PropTypes.string,
    focusBorder: PropTypes.string,
    handleError: PropTypes.func,
    id: PropTypes.string,
    label: PropTypes.string,
    tabletBackground: PropTypes.string,
    width: PropTypes.string,
}

export default Input
