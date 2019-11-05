import React, { createRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const DropdownContainer = styled.ul`
    list-style: none;
    position: relative;
    border: 1px solid #a2a4b2;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 250px;
    height: 40px;
    cursor: pointer;
    margin: 100px;
    padding: 0;
`

const DropdownSelected = styled.li`
    color: var(--color-black-3);
    padding: 1rem 0;
    padding-left: 1.5rem;
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;

    &:focus {
        outline: 1px solid var(--color-green);
    }
`

const DropdownLabel = styled.li`
    position: absolute;
    top: -9px;
    left: 15px;
    background: var(--color-grey-1);
    color: var(--color-black-3);
    font-size: var(--text-size-s);
    font-family: Lato, sans-serif;
`

const ListContainer = styled.li`
    position: relative;
`

const ListItem = styled.li`
    color: var(--color-black-3);
    padding: 1rem 0;
    padding-left: 1.5rem;
    transition: background-color 0.1s linear, color 0.1s linear;
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover,
    &:focus {
        background-color: var(--color-grey-2);
        color: white;
    }
`

const UnorderedList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
    left: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    box-shadow: 0 3px 2px 0 #a2a4b2;
    transition: opacity 0.1s cubic-bezier(0, 0, 0.38, 0.9),
        max-height 0.5s cubic-bezier(0, 0, 0.38, 0.9);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    ${props =>
        props.open &&
        css`
            opacity: 1;
            overflow: auto;
            max-height: 15rem;
        `}
`

const Arrow = styled.svg`
    position: absolute;
    right: 10px;
    top: 50%;
    transition: transform 0.2s linear;
    ${props => props.expanded && 'transform: rotate(-180deg);'}
`

const Dropdown = ({ label }) => {
    const SPACEBAR_KEY_CODE = [0, 32]
    const ENTER_KEY_CODE = 13
    const DOWN_ARROW_KEY_CODE = 40
    const UP_ARROW_KEY_CODE = 38
    const ESCAPE_KEY_CODE = 27
    const dropdown_label = createRef()
    const [is_open, setOpen] = useState(false)

    const toggleListVisibility = e => {
        if (e.type === 'click') {
            setOpen(true)
        }
    }

    return (
        <DropdownContainer>
            <DropdownLabel id="dropdown-label">{label}</DropdownLabel>
            <DropdownSelected
                role="button"
                aria-labelledby="dropdown-label"
                id="dropdown__selected"
                tabIndex="0"
                onClick={toggleListVisibility}
                onKeyDown={toggleListVisibility}
            >
                Option 1
            </DropdownSelected>
            <Arrow width="10" height="5" viewBox="0 0 10 5" fillRule="evenodd" expanded={is_open}>
                <title>Open drop down</title>
                <path d="M10 0L5 5 0 0z" />
            </Arrow>
            <ListContainer aria-expanded={`${is_open ? 'true' : 'false'}`} role="list">
                <UnorderedList open={is_open}>
                    <ListItem tabIndex="0" id="option-1">
                        Option 1
                    </ListItem>
                    <ListItem tabIndex="0" id="option-2">
                        Option 2
                    </ListItem>
                </UnorderedList>
            </ListContainer>
        </DropdownContainer>
    )
}

Dropdown.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
}

// const StyledSelect = styled.select`
//     color: var(--color-black-3);
//     border: 1px solid var(--color-grey-1);
//     padding: 1rem;
//     margin: 1rem;
//     background-color: 1px solid var(--color-grey-1);
// `

export default Dropdown
