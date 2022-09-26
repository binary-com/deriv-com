import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import {
    Arrow,
    BottomLabel,
    DropdownContainer,
    DropdownProps,
    ItemList,
    StyledLabel,
} from './dropdown'
import {
    FormikErrorsType,
    SelectedType,
    ToggleListVisibilityType,
    useDropdown,
} from 'components/hooks/use-dropdown'
import device from 'themes/device'
import { Flex } from 'components/containers'

type DropdownInputProps = {
    tabIndex?: number
    onClick?: ToggleListVisibilityType
    onFocus?: ToggleListVisibilityType
    onKeyDown?: ToggleListVisibilityType
    value?: string
    is_active?: boolean
    is_selected?: boolean
    placeholder?: string
} & Pick<DropdownProps, 'has_short_name' | 'id' | 'onChange'>

const DropdownInput = styled.input<DropdownInputProps>`
    color: var(--color-black-3);
    width: calc(100% - 2px);
    border: none;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 1rem;
    font-size: var(--text-size-xs);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${(props) =>
        props.has_short_name &&
        css`
            color: var(--color-white);
        `}

    &:focus {
        outline: none;
    }

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }

    @media ${device.mobileL} {
        font-size: 1.5rem;
    }
`

const DropdownSearch = ({
    contractSize,
    error,
    has_short_name,
    items,
    label,
    onChange,
    selected_item,
    ...props
}: DropdownProps) => {
    const [input_value, setInputValue] = useState('')
    const [dropdown_items, setDropdownItems] = useState([...items])
    const [is_open, dropdown_ref, nodes, handleChange, toggleListVisibility, setOpen] =
        useDropdown(onChange)

    // Auto select default value
    useEffect(() => {
        if (selected_item) {
            setInputValue(selected_item?.name)
        }
    }, [selected_item])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        toggleListVisibility(e)
    }

    const handleSelectItem = (option: SelectedType, handled_error: FormikErrorsType) => {
        setInputValue(option.display_name ?? '')
        handleChange(option, handled_error)
    }

    const handleKeyUp = (e) => {
        const filtered_items =
            input_value === ''
                ? items
                : items.filter((i) => {
                      if (!/^[\w\d\s]/.test(input_value)) return false
                      const regex = new RegExp(input_value, 'gi')
                      return !!regex.test(String(i.name))
                  })
        setDropdownItems(filtered_items)
        toggleListVisibility(e)
        if (e.key !== 'Escape') {
            setOpen(true)
        }
    }

    return (
        <>
            <DropdownContainer
                active={is_open}
                ref={dropdown_ref}
                has_short_name={has_short_name}
                error={error}
                mb="36px"
                {...props}
            >
                <Flex>
                    <StyledLabel active={is_open || (!is_open && selected_item)}>
                        {label}
                    </StyledLabel>
                    <DropdownInput
                        id="selected_dropdown"
                        tabIndex={0}
                        onClick={toggleListVisibility}
                        onChange={handleInputChange}
                        onFocus={toggleListVisibility}
                        onKeyDown={toggleListVisibility}
                        onKeyUp={handleKeyUp}
                        has_short_name={has_short_name}
                        value={input_value}
                        is_active={is_open}
                        placeholder={label}
                    />
                    <Arrow onClick={toggleListVisibility} expanded={is_open} />
                </Flex>
                <ItemList
                    error={error}
                    handleChange={handleSelectItem}
                    is_open={is_open}
                    nodes={nodes}
                    option_list={dropdown_items}
                    selected_option={selected_item}
                />
            </DropdownContainer>
            <BottomLabel contractSize={contractSize} error={error} />
        </>
    )
}

export default DropdownSearch
