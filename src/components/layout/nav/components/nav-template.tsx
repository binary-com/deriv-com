import React, { ReactNode } from 'react'
import styled from 'styled-components'
import SearchBanner from 'pages/academy/components/search_banner/_search-banner'
import { CFDWarning } from 'components/layout/layout'
import device from 'themes/device'

type NavTemplateProps = NavProps &
    Wrapper & {
        children: ReactNode
        is_ppc?: boolean
        show_academy_nav?: boolean
    }

type NavProps = {
    transparent_background?: boolean
    nav_height?: string
    nav_height_mobile?: string
}

type Wrapper = {
    static_position?: boolean
    hide_nav?: boolean
}

const Wrapper = styled.div<Wrapper>`
    position: ${({ static_position }) => (static_position ? 'static' : 'fixed')};
    display: ${({ hide_nav }) => (hide_nav ? 'none' : 'block')};
    transition: opacity 1s ease-out;
    z-index: 100;
    top: 0;
    width: 100%;
`

const Nav = styled.nav<NavProps>`
    background-color: ${({ transparent_background }) =>
        transparent_background ? 'transparent' : 'var(--color-black)'};
    height: ${({ nav_height }) => nav_height || '7.2rem'};
    width: 100%;
    position: relative;
    z-index: 1;

    @media ${device.tabletL} {
        height: ${({ nav_height_mobile }) => nav_height_mobile || 'auto'};
    }
`

const NavTemplate = ({
    is_ppc,
    children,
    transparent_background,
    nav_height,
    static_position,
    show_academy_nav,
    hide_nav,
    nav_height_mobile,
}: NavTemplateProps) => {
    return (
        <>
            <Wrapper static_position={static_position} hide_nav={hide_nav}>
                <Nav
                    nav_height={nav_height}
                    nav_height_mobile={nav_height_mobile}
                    transparent_background={transparent_background}
                >
                    {children}
                </Nav>
            </Wrapper>
            {show_academy_nav && <SearchBanner hidden={hide_nav} />}
            <CFDWarning is_ppc={is_ppc} />
        </>
    )
}

export default NavTemplate
