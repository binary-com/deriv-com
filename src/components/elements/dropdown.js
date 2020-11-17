import React, { useRef, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Scrollbar from 'react-perfect-scrollbar'
import Keycodes from 'common/keycodes'
import { useOutsideClick } from 'components/hooks/outside-click'
import { ReactComponent as Chevron } from 'images/svg/chevron-bottom.svg'
import device from 'themes/device'

const DropdownContainer = styled.ul`
    list-style: none;
    position: relative;
    border: 1px solid var(--color-grey-7);
    cursor: pointer;
    padding: 0;
    border-radius: 4px;
    width: 152px;
    height: 32px;

    /* ul has no focus attributes, it needs to pass on active props instead */
    ${(props) => props.active && 'border-color: var(--color-green) !important;'}

    &:hover {
        border-color: var(--color-grey-5);
    }
    @media ${device.tabletL} {
        width: 136px;
        top: 12px;
    }

    ${(props) =>
        props.has_short_name &&
        css`
            width: auto;
            min-width: 6.5rem;

            @media ${device.tabletL} {
                top: inherit;
                width: auto;
                min-width: 8rem;
            }
            @media ${device.mobileL} {
                min-width: 7rem;
            }
        `}
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
    ${(props) =>
        props.has_short_name &&
        css`
            color: var(--color-white);
        `}
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
    background-color: ${(props) =>
        props.is_selected ? 'var(--color-grey-6)' : 'var(--color-white)'};

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
    ${(props) =>
        props.open &&
        css`
            opacity: 1;
            max-height: 17rem;
        `}
`

const Arrow = styled(Chevron)`
    position: absolute;
    right: 8px;
    top: 25%;
    transition: transform 0.2s linear;
    ${(props) => (props.expanded === 'true' ? 'transform: rotate(-180deg);' : '')}

    & path {
        fill: var(--color-white);
    }
`

const Dropdown = ({ default_option, onChange, option_list, has_short_name }) => {
    const [is_open, setOpen] = useState(false)
    const [selected_option, setSelectedOption] = useState('')
    const nodes = new Map()
    const dropdown_ref = useRef(null)

    useOutsideClick(dropdown_ref, () => setOpen(false))

    useEffect(() => setSelectedOption(default_option), [])

    const toggleListVisibility = (e) => {
        e.preventDefault()
        const open_dropdown =
            e.keyCode === Keycodes.SPACE ||
            e.keyCode === Keycodes.ENTER ||
            e.keyCode === Keycodes.TAB

        // adding each item nodes a listener (click and keys)
        // and filter if there is null nodes in the array
        Array.from(nodes.values())
            .filter((node) => node !== null)
            .forEach((node) => addItemListener(node))

        if (e.keyCode === Keycodes.ESCAPE) {
            closeList()
        }
        if (e.type === 'click' || open_dropdown) {
            setOpen(!is_open)
        }
        if (e.keyCode === Keycodes.DOWN_ARROW) {
            focusNextListItem(Keycodes.DOWN_ARROW)
        }
        if (e.keyCode === Keycodes.UP_ARROW) {
            focusNextListItem(Keycodes.UP_ARROW)
        }
    }

    const closeList = () => {
        setOpen(false)
    }

    const focusNextListItem = (direction) => {
        const activeElement = document.activeElement

        if (activeElement.id === 'selected_dropdown') {
            Array.from(nodes.values())[0].focus()
        } else {
            const active_nodes = nodes.get(activeElement.id)
            if (active_nodes) {
                if (direction === Keycodes.DOWN_ARROW) {
                    active_nodes.nextSibling && active_nodes.nextSibling.focus()
                } else if (direction === Keycodes.UP_ARROW) {
                    active_nodes.previousSibling && active_nodes.previousSibling.focus()
                }
            }
        }
    }

    const addItemListener = (node) => {
        node.addEventListener('click', (e) => {
            e.preventDefault()
            onChange(e)
            closeList()
        })
        node.addEventListener('keydown', (e) => {
            e.preventDefault()
            switch (e.keyCode) {
                case Keycodes.ENTER:
                    onChange(e)
                    closeList()
                    break
                case Keycodes.TAB:
                    onChange(e)
                    closeList()
                    break
                case Keycodes.DOWN_ARROW:
                    focusNextListItem(Keycodes.DOWN_ARROW)
                    break
                case Keycodes.UP_ARROW:
                    focusNextListItem(Keycodes.UP_ARROW)
                    break
                case Keycodes.escape:
                    closeList()
                    break
                default:
                    break
            }
        })
    }

    return (
        <DropdownContainer active={is_open} ref={dropdown_ref} has_short_name={has_short_name}>
            <Helmet>
                <link
                    rel="stylesheet"
                    as="stylesheet"
                    type="text/css"
                    href="/css/perfect-scrollbar.css"
                />
            </Helmet>
            <DropdownSelected
                role="button"
                id="selected_dropdown"
                tabIndex="0"
                onClick={toggleListVisibility}
                onKeyDown={toggleListVisibility}
                has_short_name={has_short_name}
            >
                {selected_option}
                <Arrow expanded={`${is_open ? 'true' : 'false'}`} />
            </DropdownSelected>
            <ListContainer aria-expanded={`${is_open ? 'true' : 'false'}`} role="list">
                <UnorderedList open={is_open}>
                    <Scrollbar style={{ maxHeight: '17rem' }}>
                        {option_list.map(
                            (option) =>
                                option && (
                                    <ListItem
                                        tabIndex="0"
                                        id={option.value}
                                        key={option.value}
                                        ref={(c) => nodes.set(option.value, c)}
                                        is_selected={option.is_selected}
                                    >
                                        {option.text}
                                    </ListItem>
                                ),
                        )}
                    </Scrollbar>
                </UnorderedList>
            </ListContainer>
        </DropdownContainer>
    )
}

Dropdown.propTypes = {
    default_option: PropTypes.string,
    has_short_name: PropTypes.bool,
    onChange: PropTypes.func,
    option_list: PropTypes.array,
}

export default Dropdown
