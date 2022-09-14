import React from 'react'
import styled, { keyframes } from 'styled-components'
import Cookies from 'js-cookie'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { Text } from 'components/elements'
import { ReactComponent as Chevron } from 'images/svg/custom/chevron-bottom.svg'
import device from 'themes/device'

type DropdownProps = {
    default_option: {
        path: string
        short_name: string
    }
    onChange: (arg1: { target: { id: string } }) => void
    option_list: { path: string; value: string; text: string }[]
    is_high_nav?: boolean
    is_security?: boolean
}

type AbsoluteProps = { is_high_nav?: boolean; is_security?: boolean; is_open?: boolean }

const Container = styled.div`
    position: relative;

    @media ${device.mobileL} {
        position: static;
    }
`

const Display = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2.4rem;
    cursor: pointer;

    @media ${device.mobileL} {
        margin-right: 0.4rem;
    }
    @media ${device.mobileM} {
        margin: 0 0.2rem;
    }
`

const Arrow = styled((props) => <Chevron {...props} />)<{ expanded: boolean }>`
    ${({ expanded }) => (expanded ? 'transform: rotate(-180deg);' : '')}
    transition: transform 0.25s;

    & path {
        fill: var(--color-white);
    }
`

const Absolute = styled.div<AbsoluteProps>`
    position: absolute;
    z-index: -1;
    top: ${(props) => {
        if (props.is_high_nav) {
            return '4.8rem'
        } else if (props.is_security) {
            return '10.5rem'
        } else {
            return '5.5rem'
        }
    }};
    left: -7rem;
    max-height: 90vh;
    overflow: auto;
    background-color: var(--color-white);
    transition: opacity 0.35s ease-in-out;
    cursor: default;
    border-radius: 8px;
    will-change: opacity;
    display: ${({ is_open }) => !is_open && 'none'};

    @media ${device.mobileL} {
        top: ${({ is_high_nav }) => (is_high_nav ? '7rem' : '9rem')};
        left: 15rem;
    }
`
const FadeInDown = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`
const FadeOutUp = keyframes`
    from {
        opacity:1;
    }
    to {
        opacity:0;
    }
`

const ItemContainer = styled.div<{ is_open: boolean }>`
    background-color: var(--color-white);
    padding: 0.4rem 0.8rem 0.5rem 0;
    position: relative;
    width: auto;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.4rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    will-change: opacity;
    animation-name: ${({ is_open }) => (is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: 0.3s;
    @media ${device.mobileL} {
        width: 100vw;
        border-radius: 0;
    }

    &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 80%;
        top: 0;
        left: 50%;
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }
`

const Item = styled.div<{ disabled: boolean }>`
    display: flex;
    align-items: center;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 0.8rem 1.4rem 0.4rem 0.8rem;
    transition: background 0.25s;

    &:hover {
        background: rgba(245, 247, 250, 0.64);
    }
`

const ResponsiveText = styled(Text)`
    white-space: nowrap;
`
/* stylelint-enable */

const Dropdown = ({
    default_option,
    onChange,
    option_list,
    is_high_nav,
    is_security,
}: DropdownProps) => {
    const [is_open, setOpen] = React.useState(false)
    const dropdown_ref = React.useRef(null)
    useOutsideClick(dropdown_ref, () => setOpen(false))

    const toggleVisibility = () => setOpen(!is_open)

    const closeList = () => {
        setOpen(false)
    }

    const handleSelect = (value) => {
        onChange({ target: { id: value } })
        closeList()
    }

    return (
        <>
            <Container ref={dropdown_ref}>
                <Display onClick={toggleVisibility}>
                    <ResponsiveText color="white" ml="0.8rem" weight="bold" mr="0.4rem">
                        {default_option.short_name}
                    </ResponsiveText>
                    <Arrow expanded={is_open ? true : false} />
                </Display>

                <Absolute is_high_nav={is_high_nav} is_security={is_security} is_open={is_open}>
                    <ItemContainer is_open={is_open}>
                        {option_list.map((option, idx) => {
                            if (!option) return null
                            const current_option = default_option.path === option.path
                            return (
                                <Item
                                    disabled={current_option}
                                    id={option.value}
                                    onClick={() => {
                                        handleSelect(option.value)
                                        Cookies.set('lang_is_fixed', 'true')
                                    }}
                                    key={idx}
                                >
                                    <Text ml="0.8rem" color={current_option ? 'red' : 'black'}>
                                        {option.text}
                                    </Text>
                                </Item>
                            )
                        })}
                    </ItemContainer>
                </Absolute>
            </Container>
        </>
    )
}

export default Dropdown
