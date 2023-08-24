import React, { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react'
import { NavItems } from '../types'
import DesktopMenu from './desktop-menu'
import * as styles from './nav.template.module.scss'
import MobileMenu from './mobile-menu'
import TopNav from './top-nav'
import { NavProvider } from './nav-context'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'
import MobileMenuToggle from 'features/components/molecules/mobile-menu-toggle'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import { useOutsideClick } from 'components/hooks/use-outside-click'

interface NavTemplateProps extends HTMLAttributes<HTMLDivElement> {
    has_top_nav?: boolean
    renderLogo: () => ReactNode
    has_centered_items?: boolean
    has_centered_logo?: boolean
    render_bottom_nav?: () => ReactNode
    items?: NavItems
}

const NavTemplate = ({
    renderLogo,
    render_bottom_nav,
    has_top_nav = false,
    items = [],
    children,
    className,
    has_centered_items,
    has_centered_logo,
}: NavTemplateProps) => {
    const nav_wrapper_ref = useRef()
    const nav_toggle_ref = useRef()

    const has_items = items.length !== 0

    const [is_menu_open, setIsMenuOpen] = useState(false)

    const { is_mobile_or_tablet } = useBreakpoints()

    const handleScroll = () => {
        document.body.style.overflow = is_menu_open && is_mobile_or_tablet ? 'hidden' : 'scroll'
        document.body.style.position = is_menu_open && is_mobile_or_tablet ? 'fixed' : ''
        const overlay_container = document.getElementById('overlay-container')
        overlay_container
            ? (overlay_container.style.display = is_menu_open && is_mobile_or_tablet ? 'none' : '')
            : null
    }
    useEffect(() => {
        handleScroll()
    }, [is_menu_open])

    const onMenuToggleClick = () => {
        setIsMenuOpen((prevState) => !prevState)
    }

    useOutsideClick(
        nav_wrapper_ref,
        () => {
            setIsMenuOpen(false)
        },
        nav_toggle_ref,
    )

    return (
        <>
            <Container.Fixed
                as="header"
                bgcolor="white"
                className={dclsx(styles.header_wrapper, className)}
            >
                {has_top_nav ? <TopNav /> : null}
                <Flex.Box
                    container="fluid"
                    justify="between"
                    align="center"
                    gap="8x"
                    className={styles.nav_container}
                >
                    <NavProvider
                        is_menu_open={is_menu_open}
                        onCloseMenu={onMenuToggleClick}
                        items={items}
                    >
                        <Flex.Box
                            justify="center"
                            align="center"
                            grow={has_centered_logo && items.length === 0 ? '1' : undefined}
                        >
                            {has_items ? (
                                <Flex.Item visible="phone-and-tablet" innerRef={nav_toggle_ref}>
                                    <MobileMenuToggle
                                        is_open={is_menu_open}
                                        onClick={onMenuToggleClick}
                                    />
                                </Flex.Item>
                            ) : null}
                            {renderLogo()}
                        </Flex.Box>

                        {has_items ? (
                            <>
                                {is_mobile_or_tablet ? (
                                    <span ref={nav_wrapper_ref}>
                                        <MobileMenu has_top_nav={has_top_nav} />
                                    </span>
                                ) : (
                                    <DesktopMenu has_centered_items={has_centered_items} />
                                )}
                            </>
                        ) : null}
                        {children}
                    </NavProvider>
                </Flex.Box>
                {render_bottom_nav?.()}
            </Container.Fixed>
        </>
    )
}

export default NavTemplate
