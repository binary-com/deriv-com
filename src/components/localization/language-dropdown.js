import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import Cookies from 'js-cookie'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { Text } from 'components/elements'
import { language_images } from 'components/localization'
import { ReactComponent as Chevron } from 'images/svg/custom/chevron-bottom.svg'
import device from 'themes/device'

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

const Arrow = styled(Chevron)`
    ${(props) => (props.expanded === 'true' ? 'transform: rotate(-180deg);' : '')}
    transition: transform 0.25s;

    & path {
        fill: var(--color-white);
    }
    @media ${device.mobileL} {
        display: none;
    }
`

const Absolute = styled.div`
    position: absolute;
    z-index: -1;
    top: ${(props) => {
        if (props.is_high_nav) {
            return '4.8rem'
        } else if (props.security) {
            return '10.5rem'
        } else {
            return '5.5rem'
        }
    }};
    left: -22rem;
    height: auto;
    background-color: var(--color-white);
    transition: opacity 0.35s ease-in-out;
    cursor: default;
    border-radius: 4px;
    will-change: opacity;
    display: ${(props) => !props.is_open && 'none'};

    @media ${device.mobileL} {
        top: ${(props) => (props.is_high_nav ? '7rem' : '9rem')};
        left: 0;
    }
`
/* stylelint-disable */
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

const ItemContainer = styled.div`
    background-color: var(--color-white);
    padding: 1.6rem 0.8rem;
    position: relative;
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.4rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    will-change: opacity;
    animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
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
        background: var(--color-grey-8);
        height: 80%;
        top: 0;
        left: 50%;
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding: 0.8rem 1.6rem;
    transition: background 0.25s;

    ${(props) => {
        if (props.not_available) {
            return css`
                filter: brightness(30%);
                opacity: 0.4;
            `
        }
    }}

    &:hover {
        background: rgba(245, 247, 250, 0.64);
    }
`

const ResponsiveText = styled(Text)`
    white-space: nowrap;

    @media ${device.mobileL} {
        display: none;
    }
`

const Dropdown = ({ default_option, onChange, option_list, is_high_nav, security }) => {
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

    const default_abbreviation = default_option.path.substring(0, 2)

    return (
        <>
            <Container ref={dropdown_ref}>
                <Display onClick={toggleVisibility}>
                    <img
                        src={language_images.find((l) => l.id === default_abbreviation)?.icon}
                        width={24}
                        alt="language icon"
                        loading="eager"
                    />
                    <ResponsiveText color="white" ml="0.8rem" weight="bold" mr="0.4rem">
                        {default_option.short_name}
                    </ResponsiveText>
                    <Arrow expanded={`${is_open ? 'true' : 'false'}`} />
                </Display>

                <Absolute is_high_nav={is_high_nav} is_open={is_open} security={security}>
                    <ItemContainer is_open={is_open}>
                        {option_list.map((option, idx) => {
                            if (!option) return null
                            const abbreviation = option.path.substring(0, 2)
                            const current_option = default_option.path === option.path

                            return (
                                <Item
                                    disabled={current_option}
                                    not_available={option.is_disabled}
                                    id={option.value}
                                    onClick={() => {
                                        if (!option.is_disabled) {
                                            handleSelect(option.value)
                                            Cookies.set('lang_is_fixed', 'true')
                                        }
                                    }}
                                    key={idx}
                                >
                                    <img
                                        src={
                                            language_images.find((l) => l.id === abbreviation)?.icon
                                        }
                                        width={24}
                                        alt="language icon"
                                        loading="eager"
                                    />
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

Dropdown.propTypes = {
    default_option: PropTypes.object,
    is_high_nav: PropTypes.bool,
    onChange: PropTypes.func,
    option_list: PropTypes.array,
    security: PropTypes.bool,
}

export default Dropdown
