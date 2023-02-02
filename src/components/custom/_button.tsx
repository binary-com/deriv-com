import React from 'react'
import styled from 'styled-components'
import { TString } from 'types/generics'

type TProps = {
    label: TString
    onClick?: VoidFunction
    primary?: boolean
    secondary?: boolean
    tertiary?: boolean
    outline?: boolean
    hero?: boolean
}

type TLabelProps = Omit<TProps, 'label' | 'onClick'>

type TContainerProps = Omit<TProps, 'label'>

const Label = styled.span<TLabelProps>`
    font-family: Ubuntu, sans-serif;
    font-weight: 700;
    line-height: ${({ hero }) => (hero ? '20px' : '14px')};
    font-size: ${({ hero }) => (hero ? '20px' : '14px')};
    color: var(--color-white);
    ${({ tertiary, outline }) => (tertiary && outline ? 'color: var(--color-black-3)' : '')};
    ${({ secondary }) => (secondary ? 'color: var(--color-red)' : '')};
    ${({ primary }) => (primary ? 'color: var(--color-white)' : '')};
    ${({ secondary, outline }) => (secondary && outline ? 'color: var(--color-white)' : '')};
    ${({ primary, outline }) => (primary && outline ? 'color: var(--color-red)' : '')};
`

const Container = styled.div<TContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin: 6px;
    background-color: transparent;
    transition: all 0.2s;
    padding: ${({ hero }) => (hero ? '17px 40px' : '10px 24px')};
    height: ${({ hero }) => (hero ? '64px' : '40px')};
    border-radius: ${({ hero }) => (hero ? '20px' : '16px')};
    ${({ tertiary, outline }) => (tertiary && !outline ? 'background-color: #41465266' : '')};
    ${({ secondary, outline }) =>
        secondary && !outline ? 'background-color: var(--color-white)' : ''};
    ${({ primary, outline }) => (primary && !outline ? 'background-color: var(--color-red)' : '')};
    ${({ outline }) => (outline ? 'border: 1.5px solid var(--color-white)' : '')};
    ${({ tertiary, outline }) => (tertiary && outline ? 'border: 1.5px solid #41465266' : '')};
    ${({ secondary, outline }) =>
        secondary && outline ? 'border: 1.5px solid var(--color-white)' : ''};
    ${({ primary, outline }) => (primary && outline ? 'border: 1.5px solid var(--color-red)' : '')};

    &:hover {
        cursor: pointer;
        ${({ primary, outline }) =>
            primary && outline ? 'background-color: var(--color-red)' : ''};
        ${({ primary, outline }) =>
            primary && !outline ? 'background-color: var(--color-red-6)' : ''};
        ${({ tertiary, outline }) =>
            tertiary && outline ? 'background-color: var(--color-grey-43)' : ''};
        ${({ secondary, outline }) =>
            secondary && !outline ? 'background-color: var(--color-red)' : ''};
    }
    &:hover ${Label} {
        ${({ primary, outline }) => (primary && outline ? 'color: var(--color-white)' : '')};
        ${({ secondary, outline }) => (secondary && !outline ? 'color: var(--color-white)' : '')};
    }
`

const Button: React.FC<TProps> = ({
    label,
    onClick,
    primary = false,
    secondary = false,
    tertiary = false,
    outline = false,
    hero = false,
}) => {
    return (
        <Container
            onClick={onClick}
            primary={primary}
            secondary={secondary}
            tertiary={tertiary}
            outline={outline}
            hero={hero}
        >
            <Label
                primary={primary}
                secondary={secondary}
                tertiary={tertiary}
                outline={outline}
                hero={hero}
            >
                {label}
            </Label>
        </Container>
    )
}
export default Button
