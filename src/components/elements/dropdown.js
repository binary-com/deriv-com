import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { useDropdown } from 'components/hooks/use-dropdown'
import { Text } from 'components/elements/typography'
import { ReactComponent as Chevron } from 'images/svg/custom/chevron-bottom.svg'
import device from 'themes/device'
import { Flex } from 'components/containers'

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

export const DropdownContainer = styled.ul`
    @media ${device.mobileL} {
        height: 43px;
    }

    list-style: none;
    position: relative;
    border: 1px solid var(--color-grey-7);
    cursor: pointer;
    padding: 0;
    border-radius: 4px;
    height: 40px;
    margin-bottom: ${(props) => props.mb ?? '0'};

    /* ul has no focus attributes, it needs to pass on active props instead */
    ${(props) =>
        props.active &&
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

const StyledDiv = styled.div`
    position: relative;
    top: -30px;
`

const DropdownSelected = styled.li`
    color: var(--color-grey-6);
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

const ListItem = styled.li`
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

export const Arrow = styled((props) => <Chevron {...props} />)`
    position: absolute;
    right: 8px;
    top: 25%;
    transition: transform 0.2s linear;
    ${(props) => (props.expanded === 'true' ? 'transform: rotate(-180deg);' : '')}

    & path {
        fill: var(--color-black);
    }
`

export const StyledLabel = styled.label`
    color: gray;
    background: var(--color-white);
    font-size: 1.6rem;
    position: absolute;
    pointer-events: none;
    left: 0.8rem;
    top: 1.1rem;
    height: 2rem;
    transition: 0.25s ease transform;
    transform: translateZ(0);
    padding: 0 0.4rem;

    @media ${device.tabletL} {
        font-size: 1.65rem;
        top: 1.4rem;
    }

    @media ${device.mobileL} {
        font-size: 1.5rem;
        top: 1.6rem;
    }

    ${(props) =>
        props.active &&
        css`
            color: var(--color-green);
            transform: translate(-0.6rem, -2.2rem) scale(0.7);

            @media ${device.tabletL} {
                top: 9px;
            }
        `}
`

const ErrorMessages = styled(Text)`
    position: absolute;
    padding-left: 0.8rem;
    font-size: 1.2rem;
    min-height: 16px;
    color: var(--color-red-1);
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

export const ItemList = ({ error, handleChange, is_open, nodes, option_list, selected_option }) => {
    return (
        <ListContainer aria-expanded={is_open ? 'true' : 'false'} role="list">
            <UnorderedList open={is_open}>
                {option_list &&
                    option_list.map(
                        (option) =>
                            option && (
                                <ListItem
                                    tabIndex="0"
                                    id={option?.name}
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

ItemList.propTypes = {
    default_option: PropTypes.any,
    error: PropTypes.any,
    handleChange: PropTypes.func,
    is_open: PropTypes.bool,
    nodes: PropTypes.object,
    option_list: PropTypes.array,
    selected_option: PropTypes.any,
}

export const BottomLabel = ({ error, contractSize }) => {
    return (
        <StyledDiv>
            <ErrorMessages lh="1.4" align="left">
                {error}
            </ErrorMessages>

            {contractSize && (
                <ContractSizeWrapper lh="1.4" align="left">
                    Contract size : {contractSize}
                </ContractSizeWrapper>
            )}
        </StyledDiv>
    )
}

BottomLabel.propTypes = {
    contractSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

const Dropdown = ({
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
    const [is_open, dropdown_ref, nodes, handleChange, toggleListVisibility] = useDropdown(onChange)

    return (
        <>
            <DropdownContainer
                active={is_open}
                ref={dropdown_ref}
                has_short_name={has_short_name}
                error={error}
                {...props}
            >
                <StyledLabel active={is_open || (!is_open && selected_option)}>{label}</StyledLabel>
                <DropdownSelected
                    id="selected_dropdown"
                    role="button"
                    tabIndex="0"
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
                    <Arrow expanded={is_open ? 'true' : 'false'} />
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
            <BottomLabel contractSize={contractSize} error={error} />
        </>
    )
}

Dropdown.propTypes = {
    contractSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    default_option: PropTypes.any,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    has_short_name: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    option_list: PropTypes.array,
    selected_option: PropTypes.any,
}

export default Dropdown
