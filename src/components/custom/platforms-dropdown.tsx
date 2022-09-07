import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { NavPlatform, NavCompany, NavResources, NavMarket } from 'components/custom/other-platforms'
import { Container, Show, Flex } from 'components/containers'

type PlatformsDropdownProps = {
    active_dropdown?: string
    current_ref?: {
        offsetWidth?: number
        offsetLeft?: number
    }
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    parent?: string
    setActiveDropdown?: (dropdownContainerRef) => void
}

type NavDropdownProps = {
    offset?: number
    is_trade?: boolean
    offset_arrow?: number
}

const FadeInDown = keyframes`
    from {
        opacity:0;
        transform: translateY(7.2rem) rotateY(-15deg);
    }
    to {
        opacity:1;
        transform: translateY(7.2rem) rotateY(0);
    }
`
const NavDropdown = styled.div<NavDropdownProps>`
    width: auto;
    max-width: 1200px;
    left: ${(props) => (props.offset ? props.offset + 'px !important' : 0)};
    position: absolute;
    padding: 2.2rem 0.8rem;
    z-index: -1;
    height: auto;
    transform: translateY(7.2rem);
    background-color: var(--color-white);
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    transition: opacity 0.3s, transform 0.3s;
    animation-name: ${FadeInDown};
    will-change: display, left, opacity;
    animation-fill-mode: both;
    animation-duration: 0.3s;
    overflow: visible;
`

const StyledContainer = styled(Container)`
    justify-content: flex-start;
    align-items: flex-start;
    width: 100% !important;

    .active {
        border: 0.2rem solid var(--color-green);
    }
`

const getNavigationContents = (parent, is_ppc, is_ppc_redirect) => {
    if (parent === 'trade') return <NavPlatform is_ppc={is_ppc} is_ppc_redirect={is_ppc_redirect} />
    if (parent === 'markets') return <NavMarket is_ppc={is_ppc} />
    if (parent === 'about') return <NavCompany />
    if (parent === 'resources') return <NavResources />
}

const PlatformsDropdown = ({
    current_ref,
    is_ppc,
    is_ppc_redirect,
    parent,
    setActiveDropdown,
    active_dropdown,
}: PlatformsDropdownProps) => {
    const dropdownContainerRef = useRef(null)
    const is_trade = active_dropdown === 'trade'

    const [left_offset, setLeftOffset] = useState(() => {
        if (is_trade) {
            return (current_ref as HTMLElement)?.getBoundingClientRect()?.x / 2
        }
        return (current_ref as HTMLElement)?.getBoundingClientRect()?.x
    })

    const updateOffsets = useCallback(() => {
        if (is_trade) {
            setLeftOffset((current_ref as HTMLElement).getBoundingClientRect().x / 2)
        } else if (current_ref && !is_trade) {
            setLeftOffset((current_ref as HTMLElement).getBoundingClientRect().x)
        }
    }, [current_ref])

    useEffect(() => {
        if (dropdownContainerRef) {
            setActiveDropdown(dropdownContainerRef)
        }
        window.addEventListener('resize', updateOffsets)
        return () => {
            window.removeEventListener('resize', updateOffsets)
        }
    }, [])

    return (
        <Show.Desktop>
            <Flex>
                <NavDropdown ref={dropdownContainerRef} offset={left_offset}>
                    <StyledContainer>
                        {getNavigationContents(parent, is_ppc, is_ppc_redirect)}
                    </StyledContainer>
                </NavDropdown>
            </Flex>
        </Show.Desktop>
    )
}

export default React.memo(PlatformsDropdown)
