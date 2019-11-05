import React, { useState, useEffect } from 'react'
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

const Dropdown = ({ option_list }) => {
    const SPACEBAR_KEY_CODE = [0, 32]
    const ENTER_KEY_CODE = 13
    const DOWN_ARROW_KEY_CODE = 40
    const UP_ARROW_KEY_CODE = 38
    const ESCAPE_KEY_CODE = 27
    const [is_open, setOpen] = useState(false)
    const [selected_option, setSelectedOption] = useState('Option 1')
    const nodes = new Map()

    useEffect(() => {
        setSelectedOption(option_list[0].text)
    })

    const toggleListVisibility = e => {
        e.preventDefault()
        const open_dropdown = SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE
        Array.from(nodes.values())
            .filter(node => node !== null)
            .forEach(node => getPosition(node))

        if (e.keyCode === ESCAPE_KEY_CODE) {
            closeList()
        }
        if (e.type === 'click' || open_dropdown) {
            setOpen(true)
        }
        if (e.keyCode === DOWN_ARROW_KEY_CODE) {
            focusNextListItem(DOWN_ARROW_KEY_CODE)
        }
        if (e.keyCode === UP_ARROW_KEY_CODE) {
            focusNextListItem(UP_ARROW_KEY_CODE)
        }
    }
    const closeList = () => {
        setOpen(false)
    }
    const focusNextListItem = direction => {
        const activeElement = document.activeElement
        if (activeElement.id === 'dropdown__selected') {
            Array.from(nodes.values())[0].focus()
        } else {
            const active_nodes = nodes.get(activeElement.id)
            if (active_nodes) {
                if (direction === DOWN_ARROW_KEY_CODE) {
                    active_nodes.nextSibling && active_nodes.nextSibling.focus()
                } else if (direction === UP_ARROW_KEY_CODE) {
                    active_nodes.previousSibling && active_nodes.previousSibling.focus()
                }
            }
        }
    }
    const getPosition = node => {
        node.addEventListener('click', e => {
            e.preventDefault()
            setSelectedItem(e)
            closeList()
        })
        node.addEventListener('keydown', e => {
            e.preventDefault()
            switch (e.keyCode) {
                case ENTER_KEY_CODE:
                    setSelectedItem(e)
                    closeList()
                    break
                case DOWN_ARROW_KEY_CODE:
                    focusNextListItem(DOWN_ARROW_KEY_CODE)
                    break
                case UP_ARROW_KEY_CODE:
                    focusNextListItem(UP_ARROW_KEY_CODE)
                    break
                case ESCAPE_KEY_CODE:
                    closeList()
                    break
                default:
                    break
            }
        })
    }
    const setSelectedItem = e => {
        const text = e.target.innerText
        setSelectedOption(text)
    }

    return (
        <DropdownContainer>
            <DropdownSelected
                role="button"
                id="dropdown__selected"
                tabIndex="0"
                onClick={toggleListVisibility}
                onKeyDown={toggleListVisibility}
            >
                {selected_option}
            </DropdownSelected>
            <Arrow width="10" height="5" viewBox="0 0 10 5" fillRule="evenodd" expanded={is_open}>
                <title>Open drop down</title>
                <path d="M10 0L5 5 0 0z" />
            </Arrow>
            <ListContainer aria-expanded={`${is_open ? 'true' : 'false'}`} role="list">
                <UnorderedList open={is_open}>
                    {option_list.map(option => (
                        <ListItem
                            tabIndex="0"
                            id={option.value}
                            key={option.value}
                            ref={c => nodes.set(option.value, c)}
                        >
                            {option.text}
                        </ListItem>
                    ))}
                </UnorderedList>
            </ListContainer>
        </DropdownContainer>
    )
}

Dropdown.propTypes = {
    option_list: PropTypes.array,
}

export default Dropdown
