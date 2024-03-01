import React from 'react'
import styled, { css } from 'styled-components'
import {
    FormikErrorsType,
    HandleChangeType,
    NodesType,
    OptionOrSelectedType,
    OptionsType,
    SelectedType,
    ToggleListVisibilityType,
    useDropdown,
} from 'components/hooks/use-dropdown'
import { Text } from 'components/elements/typography'
import { ReactComponent as Chevron } from 'images/svg/custom/chevron-bottom.svg'
import device from 'themes/device'
import { Flex } from 'components/containers'

type DropdownStyledProps = {
    open?: boolean
    active?: boolean | React.SetStateAction<OptionOrSelectedType>
    is_alternate_style?: boolean
} & Pick<DropdownProps, 'has_short_name'>

type DropdownSelectedProps = {
    role?: string
    id?: string
    tabIndex?: number
    onClick?: ToggleListVisibilityType
    onKeyDown?: ToggleListVisibilityType
} & Pick<DropdownProps, 'has_short_name'>

type ListItemProps = {
    is_selected?: boolean
    tabIndex?: number
    id?: string
    key?: number
    ref?: ((instance: HTMLLIElement) => void) & ((c: number) => void)
    onClick?: () => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLLIElement>) => void
}
type ArrowType = {
    is_alternate_style?: boolean
    expanded?: boolean
    onClick?: React.KeyboardEventHandler<HTMLInputElement> &
        React.FocusEventHandler<HTMLInputElement> &
        React.MouseEventHandler<HTMLInputElement> &
        React.MouseEventHandler<SVGSVGElement>
}
type DropdownContainerProps = {
    mb?: string
} & Pick<DropdownProps, 'has_short_name' | 'active' | 'error' | 'is_alternate_style'>

const Symbol = styled(Flex)`
    width: fit-content;
    margin-top: 8px;

    img {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;

        @media ${device.tabletL} {
            width: unset;
            height: 36px;
        }

        @media ${device.tabletM} {
            width: unset;
            height: 24px;
            margin-top: 4px;
        }
    }
    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
        margin-top: 10px;

        @media ${device.mobileL} {
            font-size: 14px;
        }
    }
`

export const DropdownContainer = styled.ul<DropdownContainerProps>`
    ${(props) =>
        !props.is_alternate_style &&
        css`
            @media ${device.mobileL} {
                height: 43px;
            }
        `}

    inline-size: 100%;
    list-style: none;
    position: relative;
    ${(props) =>
        props.is_alternate_style
            ? 'border: 1.5px solid var(--color-grey-7);'
            : 'border: 1px solid var(--color-grey-7);'}
    ${(props) => (props.is_alternate_style ? 'border-radius: 16px;' : 'border-radius: 4px;')}
    ${(props) => (props.is_alternate_style ? 'height: 42px;' : 'height: 40px;')}
    cursor: pointer;
    padding: 0;
    margin-bottom: ${(props) => props.mb ?? '0'};

    /* ul has no focus attributes, it needs to pass on active props instead */
    ${(props) =>
        props.active &&
        !props.is_alternate_style &&
        css`
            border-color: var(--color-green) !important;
        `}

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

    ${(props) => {
        if (props.error)
            if (props.is_alternate_style)
                return css`
                    border-color: var(--color-red) !important;

                    label {
                        color: var(--color-red) !important;
                    }
                `
            else
                return css`
                    border-color: var(--color-red-1) !important;
                    & > label {
                        color: var(--color-red-1) !important;
                    }
                `

        return css`
            border-color: var(--color-grey-7);
        `
    }}
`

const StyledDiv = styled.div<Pick<DropdownProps, 'is_alternate_style'>>`
    position: relative;
    width: 100%;
    top: -30px;

    ${(props) =>
        props.is_alternate_style &&
        css`
            width: 100%;
            top: -12px;
        `}
`

const DropdownSelected = styled.li<DropdownSelectedProps>`
    color: var(--color-grey-6);
    cursor: pointer;
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 1rem;
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

    @media ${device.mobileL} {
        font-size: 14px;
    }
`

const ListContainer = styled.li`
    position: relative;
    list-style: none;
`

const ListItem = styled.li<ListItemProps>`
    color: var(--color-grey-6);
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
        background-color: var(--color-grey-6);
        font-weight: bold;
    }
    &:focus,
    &:active {
        outline: none;
    }

    @media ${device.mobileL} {
        font-size: 14px;
    }

    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
        margin-top: 8px;
        color: ${(props) => (props.is_selected ? 'var(--color-red-1)' : 'var(--color-black-3)')};

        @media ${device.mobileL} {
            font-size: 14px;
        }
    }
`

const UnorderedList = styled.ul<DropdownStyledProps>`
    z-index: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0.8rem;
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

export const Arrow = styled((props) => <Chevron {...props} />)<ArrowType>`
    position: absolute;
    right: 8px;
    ${(props) => (props.is_alternate_style ? ' top: 25%;' : 'top: 30%;')}
    transition: transform 0.2s linear;
    ${(props) => (props.expanded ? 'transform: rotate(-180deg);' : '')}
    & path {
        fill: var(--color-black);
    }
`

export const StyledLabel = styled.label<DropdownStyledProps>`
    ${(props) => (props.is_alternate_style ? 'color: gray;' : 'color: var(--color-grey-5);')}
    ${(props) =>
        props.is_alternate_style ? 'font-size: var(--text-size-xs);' : 'font-size: 1.6rem;'}
    background: var(--color-white);
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    ${(props) => (props.is_alternate_style ? 'top: 1.3rem;' : 'top: 1.1rem;')}
    height: 2rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.8rem;
    margin-top: 3px;

    ${(props) =>
        !props.is_alternate_style &&
        css`
            @media ${device.tabletL} {
                font-size: 1.65rem;
                top: 1.4rem;
                margin-top: 0px;
            }
            @media ${device.mobileL} {
                font-size: 1.5rem;
                top: 1.6rem;
                margin-top: 0px;
            }
        `}

    ${(props) => {
        if (props.active)
            if (props.is_alternate_style)
                return css`
                    color: var(--color-grey-5);
                    transform: translate(0, -2rem);
                `
            else
                return css`
                    color: var(--color-green);
                    transform: translate(-0.6rem, -2.2rem) scale(0.7);
                    @media ${device.tabletL} {
                        top: 15px;
                    }
                `
    }}
`

const ErrorMessages = styled(Text)<Pick<DropdownProps, 'is_alternate_style'>>`
    position: absolute;
    padding-left: 0.8rem;
    font-size: 1.2rem;
    min-height: 16px;
    ${(props) =>
        props.is_alternate_style ? 'color: var(--color-red);' : 'color: var(--color-red-1);'}
`

const ContractSizeWrapper = styled(Text)`
    padding-left: 0.8rem;
    font-size: 1.2rem;
    min-height: 16px;
    position: absolute;
    cursor: text;
    color: var(--color-grey-5);
`

const DefaultOptionText = styled(Text)`
    color: var(--color-grey-5);
`

type ItemListProps = {
    is_open?: boolean
    nodes?: NodesType
    handleChange?: (option: HandleChangeType, error: FormikErrorsType) => void
} & Pick<DropdownProps, 'option_list' | 'error' | 'selected_option'>

export const ItemList = ({
    error,
    handleChange,
    is_open,
    nodes,
    option_list,
    selected_option,
}: ItemListProps) => {
    return (
        <ListContainer aria-expanded={is_open ? 'true' : 'false'} role="list">
            <UnorderedList open={is_open}>
                {option_list &&
                    option_list.map(
                        (option) =>
                            option && (
                                <ListItem
                                    tabIndex={0}
                                    id={String(option?.name)}
                                    key={option?.name}
                                    ref={(c) => nodes.set(option?.display_name, c)}
                                    onClick={() => handleChange(option, error)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Tab' || e.key === 'Enter') {
                                            handleChange(option, error)
                                        }
                                    }}
                                    is_selected={option?.name === selected_option?.name}
                                >
                                    <Symbol>
                                        {option?.icon}
                                        <Text>{option?.display_name}</Text>
                                    </Symbol>
                                </ListItem>
                            ),
                    )}
            </UnorderedList>
        </ListContainer>
    )
}

export const BottomLabel = ({
    error,
    contractSize,
    is_alternate_style,
}: Pick<DropdownProps, 'error' | 'contractSize' | 'is_alternate_style'>) => {
    return (
        <StyledDiv is_alternate_style={is_alternate_style}>
            {error && (
                <ErrorMessages lh="1.4" align="start" is_alternate_text={is_alternate_style}>
                    {error}
                </ErrorMessages>
            )}

            {contractSize && (
                <ContractSizeWrapper lh="1.4" align="start">
                    Contract size : {contractSize}
                </ContractSizeWrapper>
            )}
        </StyledDiv>
    )
}
type ItemsType = {
    contractSize?: string
    margin?: number
    marginSymbol?: string
    volume?: string
    assetPrice?: string
    accountType?: string
    symbol?: string
    leverage?: string
    optionList?: SelectedType[]
} & OptionsType

export type DropdownProps = {
    id?: string
    active?: boolean
    default_item?: SelectedType
    default_option?: SelectedType
    onBlur?: {
        (e: React.FocusEvent<Element>): void
    }
    autoComplete?: string
    has_short_name?: boolean
    items?: ItemsType[]
    label?: string
    error?: FormikErrorsType
    onChange?: (value: { symbol?: string } & string) => void
    option_list?: ItemsType[]
    selected_option?: OptionOrSelectedType
    selected_item?: SelectedType
    value?: string
    disabled?: boolean
    autocomplete?: string
    placeholder?: string
    mb?: string
    is_alternate_style?: boolean
    onClearInput?: () => void
} & Pick<ItemsType, 'contractSize'>

const Dropdown = ({
    default_option,
    onChange,
    option_list,
    has_short_name,
    label,
    error,
    selected_option,
    contractSize,
    is_alternate_style,
    ...props
}: DropdownProps) => {
    const [is_open, dropdown_ref, nodes, handleChange, toggleListVisibility] = useDropdown(onChange)

    return (
        <>
            <DropdownContainer
                active={is_open}
                ref={dropdown_ref}
                has_short_name={has_short_name}
                error={error}
                is_alternate_style={is_alternate_style}
                {...props}
            >
                <StyledLabel
                    active={is_open || (!is_open && selected_option)}
                    is_alternate_style={is_alternate_style}
                >
                    {label}
                </StyledLabel>
                <DropdownSelected
                    id="selected_dropdown"
                    role="button"
                    tabIndex={0}
                    onClick={toggleListVisibility}
                    onKeyDown={toggleListVisibility}
                    has_short_name={has_short_name}
                >
                    <Symbol>
                        {selected_option ? (
                            <Text>{selected_option.display_name}</Text>
                        ) : (
                            <DefaultOptionText>{default_option.display_name}</DefaultOptionText>
                        )}
                    </Symbol>
                    <Arrow expanded={is_open} is_alternate_style={is_alternate_style} />
                </DropdownSelected>
                <ItemList
                    error={error}
                    handleChange={handleChange}
                    is_open={is_open}
                    nodes={nodes}
                    option_list={option_list}
                    selected_option={selected_option}
                />
            </DropdownContainer>
            <BottomLabel
                contractSize={contractSize}
                error={error}
                is_alternate_style={is_alternate_style}
            />
        </>
    )
}

export default Dropdown
