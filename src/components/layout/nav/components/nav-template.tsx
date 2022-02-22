import React, { ReactNode } from 'react'
import styled from 'styled-components'
import CFDWarning from './cfd-warning'
import SearchBanner from 'pages/academy/components/_search-banner'

// TODO is ppc props
// TODO rename styles

type NavTemplateProps = StyledNavMainProps &
    NavWrapperMain & {
        children: ReactNode
        is_ppc: boolean
        show_academy_nav?: boolean
    }

type StyledNavMainProps = {
    transparent_background?: boolean
    nav_height?: string
    nav_height_mobile?: string
}

type NavWrapperMain = {
    static_position?: boolean
    hide_nav?: boolean
}

const NavWrapperMain = styled.div<NavWrapperMain>`
    position: ${({ static_position }) => (static_position ? 'static' : 'fixed')};
    display: ${({ hide_nav }) => (hide_nav ? 'none' : 'block')};
    transition: opacity 1s ease-out;
    z-index: 100;
    top: 0;
    width: 100%;
`

const StyledNavMain = styled.nav<StyledNavMainProps>`
    background-color: ${({ transparent_background }) =>
        transparent_background ? 'transparent' : 'var(--color-black)'};
    height: ${({ nav_height }) => nav_height || '7.2rem'};
    width: 100%;
    position: relative;
    z-index: 1;

    @media (max-width: 1060px) {
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
            <NavWrapperMain static_position={static_position} hide_nav={hide_nav}>
                <StyledNavMain
                    nav_height={nav_height}
                    nav_height_mobile={nav_height_mobile}
                    transparent_background={transparent_background}
                >
                    {children}
                </StyledNavMain>
            </NavWrapperMain>
            {show_academy_nav && <SearchBanner hidden={hide_nav} />}
            <CFDWarning is_ppc />
        </>
    )
}

export default NavTemplate
