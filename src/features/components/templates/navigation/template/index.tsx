import React, { HTMLAttributes, ReactNode, useCallback, useRef, useState } from 'react'
import clsx from 'clsx'
import { TNavItems } from '../types'
import DesktopMenu from './desktop-menu'
import * as styles from './nav.template.module.scss'
import MobileMenu from './mobile-menu'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import useVisibleContent from 'components/hooks/use-visible-content'
import MobileMenuToggle from 'features/components/molecules/mobile-menu-toggle'
import { LanguageSwitcher } from 'components/localization'

interface NavTemplateProps<T extends string> extends HTMLAttributes<HTMLDivElement> {
    renderTopNav?: () => ReactNode
    renderLogo: () => ReactNode
    items: TNavItems<T>
}

const NavTemplate = <T extends string>({
    renderLogo,
    renderTopNav,
    items,
    children,
    className,
}: NavTemplateProps<T>) => {
    const nav_wrapper_ref = useRef()

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
        config: { is_mobile: is_mobile_or_tablet },
    })

    return (
        <Container.Fixed
            innerRef={nav_wrapper_ref}
            as="header"
            bgcolor="white"
            className={clsx(styles.header_wrapper, className)}
        >
            {renderTopNav?.()}
            <Container.Fluid as="nav" className={styles.nav_container}>
                {is_mobile_or_tablet && (
                    <MobileMenuToggle is_open={is_menu_open} onClick={onMenuToggleClick} />
                )}
                {renderLogo()}
                {!is_mobile_or_tablet && (
                    <DesktopMenu
                        onItemClick={onItemClick}
                        activeTab={activeTab}
                        items={visible_items}
                    />
                )}
                {children}
                <LanguageSwitcher is_high_nav />
                {is_mobile_or_tablet && <MobileMenu is_open={is_menu_open} items={visible_items} />}
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default NavTemplate
