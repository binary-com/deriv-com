import React, { HTMLAttributes, ReactNode, useRef, useState } from 'react'
import { TNavItems } from '../types'
import DesktopMenu from './desktop-menu'
import * as styles from './nav.template.module.scss'
import MobileMenu from './mobile-menu'
import TopNav from './top-nav'
import { NavProvider } from './nav-context'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useVisibleContent from 'components/hooks/use-visible-content'
import MobileMenuToggle from 'features/components/molecules/mobile-menu-toggle'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import useRegion from 'components/hooks/use-region'
import { useOutsideClick } from 'components/hooks/use-outside-click'

interface NavTemplateProps extends HTMLAttributes<HTMLDivElement> {
    has_top_nav?: boolean
    renderLogo: () => ReactNode
    has_centered_items?: boolean
    has_centered_logo?: boolean
    render_bottom_nav?: () => ReactNode
    items?: TNavItems
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

    const { is_eu } = useRegion()

    const [is_menu_open, setIsMenuOpen] = useState(false)

    const { is_mobile_or_tablet } = useBreakpoints()

    const onMenuToggleClick = () => {
        setIsMenuOpen((prevState) => !prevState)
    }

    const visible_items = useVisibleContent({
        content: items,
        config: { is_mobile: is_mobile_or_tablet, is_eu },
    })

    useOutsideClick(
        nav_wrapper_ref,
        () => {
            setIsMenuOpen(false)
        },
        nav_toggle_ref,
    )

    return (
        <Container.Fixed
            as="header"
            bgcolor="white"
            className={dclsx(styles.header_wrapper, className)}
        >
            {has_top_nav && <TopNav />}
            <Flex.Box
                container="fluid"
                justify="between"
                align="center"
                gap="8x"
                className={styles.nav_container}
            >
                <NavProvider is_menu_open={is_menu_open} onCloseMenu={onMenuToggleClick}>
                    <Flex.Box
                        justify="center"
                        align="center"
                        grow={has_centered_logo && items.length === 0 ? '1' : undefined}
                    >
                        {items.length !== 0 ? (
                            <Flex.Item visible="phone-and-tablet" innerRef={nav_toggle_ref}>
                                <MobileMenuToggle
                                    is_open={is_menu_open}
                                    onClick={onMenuToggleClick}
                                />
                            </Flex.Item>
                        ) : null}
                        {renderLogo()}
                    </Flex.Box>

                    {items.length !== 0 ? (
                        <>
                            <DesktopMenu
                                items={visible_items}
                                has_centered_items={has_centered_items}
                            />
                            <span ref={nav_wrapper_ref}>
                                <MobileMenu items={visible_items} has_top_nav={has_top_nav} />
                            </span>
                        </>
                    ) : null}
                    {children}
                </NavProvider>
            </Flex.Box>
            {render_bottom_nav?.()}
        </Container.Fixed>
    )
}

export default NavTemplate
