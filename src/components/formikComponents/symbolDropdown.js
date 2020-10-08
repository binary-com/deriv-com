import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Keycodes from 'common/keycodes'
import { useOutsideClick } from 'components/hooks/outside-click'
import Chevron from 'images/svg/chevron-bottom.svg'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
// SVG Component
// import CrossIcon from 'images/svg/cross.svg'

const Symbol = styled(Flex)`
    width: fit-content;
    margin-top: 8px;

    svg {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
        margin-top: 8px;

        @media ${device.mobileL} {
            font-size: 14px;
        }
    }
`

const DropdownContainer = styled.ul`
    list-style: none;
    position: relative;
    border: 1px solid var(--color-grey-7);
    cursor: pointer;
    padding: 0;
    border-radius: 4px;
    height: 40px;

    /* ul has no focus attributes, it needs to pass on active props instead */
    ${(props) => props.active && 'border-color: var(--color-green) !important;'}

    &:hover {
        border-color: var(--color-grey-5);
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

    ${(props) =>
        !props.error &&
        css`
            border-color: var(--color-grey-7);
        `}

    ${(props) =>
        props.error &&
        css`
            border-color: var(--color-red-1) !important;

            & > label {
                color: var(--color-red-1) !important;
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

    @media ${device.mobileL} {
        font-size: 14px;
    }
`

const UnorderedList = styled.ul`
    z-index: 1;
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
    overflow-y: scroll;
    background-color: var(--color-white);
    opacity: 0;
    ${(props) =>
        props.open &&
        css`
            opacity: 1;
            max-height: 30rem;
        `}
`

const Arrow = styled(Chevron)`
    position: absolute;
    right: 8px;
    top: 25%;
    transition: transform 0.2s linear;
    ${(props) => (props.expanded === 'true' ? 'transform: rotate(-180deg);' : '')}

    & path {
        fill: var(--color-black);
    }
`

const StyledLabel = styled.label`
    /* prettier-ignore */
    color: var(--color-${(props) => props.labelColor || 'grey'});
    background: var(--color-${(props) => props.labelColor || 'white'});
    font-size: var(--text-size-xs);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1.4rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;
    ${(props) =>
        props.active &&
        css`
            transform: translate(-0.6rem, -2.2rem) scale(0.7);
        `}
`

// const StyledError = styled(CrossIcon)`
//     position: absolute;
//     right: 0.8rem;
//     top: 1.2rem;
//     height: 1.6rem;
//     width: 1.6rem;
//     cursor: pointer;

//     @media ${device.tablet} {
//         right: 2rem;
//         top: 1.6rem;
//     }
// `
const ErrorMessages = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
    min-height: 16px;
`

const ContractSizeWrapper = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
    min-height: 16px;
    position: absolute;
    bottom: -20px;
    color: var(--color-grey-5);
`

const DefaultOptionText = styled(Text)`
    color: var(--color-grey-5);
`

const FormikSymbolDropdown = ({
    default_option,
    onChange,
    option_list,
    has_short_name,
    label,
    error,
    selected_option,
    contractSize,
    ...props
}) => {
    const [is_open, setOpen] = useState(false)
    const nodes = new Map()
    const dropdown_ref = useRef(null)

    useOutsideClick(dropdown_ref, () => setOpen(false))

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
        node.addEventListener('keydown', (e) => {
            e.preventDefault()
            switch (e.keyCode) {
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

    const handleChange = (option) => {
        onChange(option)
        closeList()
    }

    return (
        <DropdownContainer
            active={is_open}
            ref={dropdown_ref}
            has_short_name={has_short_name}
            error={error}
            {...props}
        >
            <StyledLabel active={true}>{label}</StyledLabel>
            <DropdownSelected
                role="button"
                id="selected_dropdown"
                tabIndex="0"
                onClick={toggleListVisibility}
                onKeyDown={toggleListVisibility}
                has_short_name={has_short_name}
            >
                <Symbol>
                    {selected_option ? (
                        <>
                            {selected_option.icon}
                            <Text>{selected_option.displayName}</Text>
                        </>
                    ) : (
                        <>
                            {default_option.icon}
                            <DefaultOptionText>{default_option.displayName}</DefaultOptionText>
                        </>
                    )}
                </Symbol>
                <Arrow expanded={`${is_open ? 'true' : 'false'}`} />
            </DropdownSelected>
            <ListContainer aria-expanded={`${is_open ? 'true' : 'false'}`} role="list">
                <UnorderedList open={is_open}>
                    {option_list &&
                        option_list.map(
                            (option) =>
                                option && (
                                    <ListItem
                                        tabIndex="0"
                                        id={option?.name}
                                        key={option?.name}
                                        ref={(c) => nodes.set(option?.displayName, c)}
                                        onClick={() => handleChange(option, error)}
                                        onKeyDown={(e) => {
                                            switch (e.keyCode) {
                                                case Keycodes.TAB:
                                                case Keycodes.ENTER:
                                                    handleChange(option, error)
                                                    break
                                                default:
                                                    break
                                            }
                                        }}
                                        is_selected={option?.name === selected_option?.name}
                                    >
                                        <Symbol>
                                            {option?.icon}
                                            <Text>{option?.displayName}</Text>
                                        </Symbol>
                                    </ListItem>
                                ),
                        )}
                </UnorderedList>
            </ListContainer>
            <ErrorMessages lh="1.4" align="left" color="red-1">
                {error}
            </ErrorMessages>

            {contractSize && (
                <ContractSizeWrapper lh="1.4" align="left">
                    Contract size : {contractSize}
                </ContractSizeWrapper>
            )}
        </DropdownContainer>
    )
}

FormikSymbolDropdown.propTypes = {
    contractSize: PropTypes.any,
    default_option: PropTypes.any,
    error: PropTypes.any,
    has_short_name: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    option_list: PropTypes.array,
    selected_option: PropTypes.any,
}

export default FormikSymbolDropdown
