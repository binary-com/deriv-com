import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Chevron from 'images/svg/chevron-bottom.svg'

const DropdownContainer = styled.ul`
    list-style: none;
    position: relative;
    border: 1px solid var(--color-grey-7);
    cursor: pointer;
    padding: 0;
    border-radius: 4px;
    width: 15.2rem;
    height: 3.2rem;
    top: 25%;
    ${props => props.active && 'border-color: var(--color-green) !important;'}

    &:hover {
        border-color: var(--color-grey-5);
    }
`

const DropdownSelected = styled.li`
    color: var(--color-black-3);
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 1.6rem;
    text-overflow: ellipsis;
    height: 100%;
    font-size: var(--text-size-xs);
    display: flex;
    align-items: center;

    &:focus {
        outline: none;
    }
`

const ListContainer = styled.li`
    position: relative;
`

const ListItem = styled.li`
    color: var(--color-black-3);
    padding: 1rem 1.6rem;
    transition: background-color 0.1s linear, color 0.1s linear;
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--text-size-xs);

    &:hover {
        background-color: var(--color-grey-6);
    }
    &:focus {
        background-color: var(--color-grey-7);
        font-weight: bold;
    }
    &:focus,
    &:active {
        outline: none;
    }
`

const UnorderedList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0.8rem;
    border-radius: 4px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
    transition: opacity 0.1s cubic-bezier(0, 0, 0.38, 0.9),
        max-height 0.25s cubic-bezier(0, 0, 0.38, 0.9);
    max-height: 0;
    overflow: hidden;
    background-color: var(--color-white);
    opacity: 0;
    ${props =>
        props.open &&
        css`
            opacity: 1;
            overflow: auto;
            max-height: 17rem;
        `}
`

const Arrow = styled(Chevron)`
    position: absolute;
    right: 8px;
    top: 25%;
    transition: transform 0.2s linear;
    ${props => (props.expanded ? 'transform: rotate(-180deg);' : '')}
`

const Dropdown = ({ default_option, onChange, option_list }) => {
    const SPACEBAR_KEY_CODE = [0, 32]
    const ENTER_KEY_CODE = 13
    const TAB_KEY_CODE = 9
    const DOWN_ARROW_KEY_CODE = 40
    const UP_ARROW_KEY_CODE = 38
    const ESCAPE_KEY_CODE = 27
    const [is_open, setOpen] = useState(false)
    const [selected_option, setSelectedOption] = useState('')
    const nodes = new Map()
    const dropdown_ref = useRef(null)

    useEffect(() => {
        setSelectedOption(default_option)

        const handleClickOutside = e => {
            if (!dropdown_ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const toggleListVisibility = e => {
        e.preventDefault()
        const open_dropdown =
            SPACEBAR_KEY_CODE.includes(e.keyCode) ||
            e.keyCode === ENTER_KEY_CODE ||
            e.keyCode === TAB_KEY_CODE
        Array.from(nodes.values())
            .filter(node => node !== null)
            .forEach(node => getPosition(node))

        if (e.keyCode === ESCAPE_KEY_CODE) {
            closeList()
        }
        if (e.type === 'click' || open_dropdown) {
            setOpen(!is_open)
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
        if (activeElement.id === 'selected_dropdown') {
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
            onChange(e)
            closeList()
        })
        node.addEventListener('keydown', e => {
            e.preventDefault()
            switch (e.keyCode) {
                case ENTER_KEY_CODE:
                    setSelectedItem(e)
                    onChange(e)
                    closeList()
                    break
                case TAB_KEY_CODE:
                    setSelectedItem(e)
                    onChange(e)
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
        <DropdownContainer active={is_open} ref={dropdown_ref}>
            <DropdownSelected
                role="button"
                id="selected_dropdown"
                tabIndex="0"
                onClick={toggleListVisibility}
                onKeyDown={toggleListVisibility}
            >
                {selected_option}
            </DropdownSelected>
            <Arrow expanded={is_open} />
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
    default_option: PropTypes.string,
    onChange: PropTypes.func,
    option_list: PropTypes.array,
}

export default Dropdown
