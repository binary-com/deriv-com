// global styles of nav components
import styled from 'styled-components'
import device from 'themes/device'
import { getBaseRef } from 'common/utility'
import { Container, Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import { SharedLinkStyle } from 'components/localization/localized-link'

type NavRightProps = {
    button_ref: HTMLButtonElement
    mounted: boolean
    move?: boolean
    has_scrolled: boolean
    hide_signup_login: boolean
}

type WrapperProps = {
    offset_px_mobile?: number
}

type DesktopWrapperProps = {
    media?: string
}

type LogoLinkProps = {
    max_width?: string
}

export const HamburgerMenu = styled.img`
    width: 16px;
    cursor: pointer;
`
export const CloseIcon = styled.img`
    width: 16px;
    cursor: pointer;
`

export const Wrapper = styled(Container)<WrapperProps>`
    font-size: var(--text-size-s);
    padding-block: 1.2rem;
    padding-inline: 0;
    justify-content: space-between;
    block-size: 7.2rem;
    @media ${device.laptopL} {
        inline-size: ${({ width }) => width ?? '90%'};
    }
    @media ${device.laptop} {
        font-size: var(--text-size-xxs);
    }
    @media ${device.mobileM} {
        ${({ offset_px_mobile }) =>
            offset_px_mobile && `inline-size: calc(100% - ${offset_px_mobile}px)`};
    }
`

export const DesktopWrapper = styled.div<DesktopWrapperProps>`
    display: block;
    @media ${({ media }) => media || device.tabletL} {
        display: none;
    }
`

export const MobileWrapper = styled.div<DesktopWrapperProps>`
    display: none;
    @media ${({ media }) => media || device.tabletL} {
        display: block;
    }
`

export const NavRight = styled.div<NavRightProps>`
    display: inline-flex;
    align-items: center;
    text-align: end;
    justify-content: center;
    padding-block: 0;
    padding-inline: 0;
    opacity: ${({ mounted }) => (mounted ? '1' : '0')};
    transition: ${({ move, has_scrolled }) =>
        move ? 'all 0.25s' : has_scrolled ? 'all 0.25s' : 'none'};
    transform: translateX(
        ${({ button_ref, hide_signup_login, move, mounted }) => {
            const ref_base = getBaseRef(button_ref)

            if (hide_signup_login) {
                return 0
            } else if (move && !hide_signup_login) {
                if (ref_base && mounted) {
                    ref_base.style.opacity = 1
                }
                return 0
            } else {
                if (ref_base && mounted) {
                    ref_base.style.opacity = 0
                    // Disabled this just for RTL Test Link
                    /* const calculation = ref_base.offsetWidth + 2 */
                    /* return `${calculation}px` */
                    return 0
                }
                return '300px'
            }
        }}
    );

    > a {
        pointer-events: ${({ move }) => (move ? 'visible' : 'none')};
        cursor: ${({ move }) => (move ? 'pointer' : 'default')};
    }

    @media (max-width: 991px) {
        display: none;
    }
`

export const LogoDescription = styled(Flex)`
    @media (max-width: 525px) {
        display: none;
    }
`

export const LogoLinkMobile = styled(LocalizedLink)`
    cursor: pointer;
    display: none;

    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
        margin-inline-start: 2rem;
    }
    @media ${device.tabletS} {
        margin-inline-start: 0;
    }
`

export const LogoLink = styled(LocalizedLink)<LogoLinkProps>`
    text-decoration: none;
    max-inline-size: ${({ max_width }) => max_width || '16rem'};
    inline-size: 100%;

    @media ${device.tabletS} {
        & svg,
        .gatsby-image-wrapper {
            inline-size: 10rem;
        }
    }
    @media ${device.mobileL} {
        & svg,
        .gatsby-image-wrapper {
            inline-size: 12rem;
        }
    }
`

type NavLinkProps = {
    isOpen: boolean
    margin?: boolean
}

export const NavLink = styled.li<NavLinkProps>`
    list-style-type: none;
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    margin-inline-end: 2.4rem;

    &:last-child {
        margin-inline-end: 0;
    }

    @media ${device.laptopM} {
        margin-inline-end: 1rem;
    }

    ${({ margin }) => margin && 'margin: 0 4rem;'}

    @keyframes fadeIn {
        from {
            visibility: hidden;
        }
        to {
            visibility: visible;
        }
    }

    ${({ isOpen }) =>
        isOpen &&
        `
     ::after {
        visibility: hidden;
        animation: 1s fadeIn;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        content: ' ';
        position: absolute;
        inset-block-start: 40px;
        inset-inline-start: 15px;
        border-block-start: none;
        border-inline-end: 15px solid transparent;
        border-inline-start: 15px solid transparent;
        border-block-end: 15px solid white;
    }
   `}
`

export const Line = styled.div`
    inline-size: 1px;
    block-size: 28px;
    margin-inline-end: 8px;
    margin-inline-start: 8px;
    background-color: var(--color-white);
`

export const StyledLink = styled(LocalizedLink)`
    ${SharedLinkStyle}
`

export const PartnerNavigationBarWrapper = styled.nav`
    background-color: var(--color-black);
    block-size: 7.2rem;
    inline-size: 100%;
    position: relative;
    z-index: 1;
    @media ${device.tabletL} {
        block-size: auto;
    }
`

export const PartnerWrapper = styled.div`
    inline-size: 100%;
    position: fixed;
    inset-block-start: 0;
    z-index: 100;
`
