import React, { HTMLAttributes, ReactNode, useCallback, useRef, useState } from 'react'
import { TNavItems } from '../types'
import DesktopMenu from './desktop-menu'
import * as styles from './nav.template.module.scss'
import MobileMenu from './mobile-menu'
import TopNav from './top-nav'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import useVisibleContent from 'components/hooks/use-visible-content'
import MobileMenuToggle from 'features/components/molecules/mobile-menu-toggle'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'
import useRegion from 'components/hooks/use-region'

interface NavTemplateProps<T extends string> extends HTMLAttributes<HTMLDivElement> {
    has_top_nav?: boolean
    renderLogo: () => ReactNode
    has_centered_items?: boolean
    has_centered_logo?: boolean
    render_bottom_nav?: () => ReactNode
    items?: TNavItems<T>
}

const NavTemplate = <T extends string>({
    renderLogo,
    render_bottom_nav,
    has_top_nav = false,
    items = [],
    children,
    className,
    has_centered_items,
    has_centered_logo,
}: NavTemplateProps<T>) => {
    const nav_wrapper_ref = useRef()

    const { is_eu } = useRegion()

    const [activeTab, setActiveTab] = useState<T>(null)

    const [is_menu_open, setIsMenuOpen] = useState(false)

    const { is_mobile_or_tablet } = useBreakpoints()

    const onMenuToggleClick = () => {
        setIsMenuOpen((prevState) => !prevState)
    }

    const onOutsideClick = useCallback(() => {
        setActiveTab(null)
        if (is_menu_open) {
            setIsMenuOpen(false)
        }
    }, [is_menu_open])

    useOutsideClick(nav_wrapper_ref, onOutsideClick)

    const onItemClick = (item: T) => {
        if (item === activeTab) {
            setActiveTab(null)
        } else {
            setActiveTab(item)
        }
    }

    const visible_items = useVisibleContent({
        content: items,
        config: { is_mobile: is_mobile_or_tablet, is_eu },
    })

    return (
        <Container.Fixed
            innerRef={nav_wrapper_ref}
            as="header"
            bgcolor="white"
            className={dclsx(styles.header_wrapper, className)}
        >
            {has_top_nav && <TopNav />}
            <Flex.Box
                as="nav"
                container="fluid"
                justify="between"
                align="center"
                gap="8x"
                className={styles.nav_container}
            >
                <Flex.Box
                    justify="center"
                    align="baseline"
                    grow={has_centered_logo && items.length === 0 ? '1' : undefined}
                >
                    <Flex.Item visible="phone-and-tablet">
                        <MobileMenuToggle is_open={is_menu_open} onClick={onMenuToggleClick} />
                    </Flex.Item>
                    {renderLogo()}
                </Flex.Box>

                <DesktopMenu
                    onItemClick={onItemClick}
                    activeTab={activeTab}
                    items={visible_items}
                    has_centered_items={has_centered_items}
                />
                <Flex.Box justify="end" align="center" gap={'8x'}>
                    {children}
                </Flex.Box>
                <MobileMenu is_open={is_menu_open} items={visible_items} />
            </Flex.Box>
            {render_bottom_nav?.()}
        </Container.Fixed>
    )
}

export default NavTemplate
