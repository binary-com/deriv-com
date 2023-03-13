import React, { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
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

interface NavTemplateProps<T extends string> {
    renderTopNav?: () => ReactNode
    renderLogo: () => ReactNode
    items: TNavItems<T>
    renderButtons: (scrolled: boolean) => ReactNode
    has_static_position?: boolean
}

const NavTemplate = <T extends string>({
    renderLogo,
    renderTopNav,
    renderButtons,
    has_static_position,
    items,
}: NavTemplateProps<T>) => {
    const scroll_watcher_ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(scroll_watcher_ref, {})
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

    const is_scrolled = useMemo(() => {
        if (entry) {
            return !entry.isIntersecting
        }
        return false
    }, [entry])

    const visible_items = useVisibleContent({
        content: items,
        config: { is_mobile: is_mobile_or_tablet },
    })

    return (
        <>
            <div className={styles.header_watcher} ref={scroll_watcher_ref} />
            <Container.Fixed
                innerRef={nav_wrapper_ref}
                as="header"
                className={clsx(styles.header_wrapper, {
                    [styles.header_wrapper_static]: has_static_position,
                    [styles.header_wrapper_scrolled]: is_scrolled,
                })}
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
                    {renderButtons(is_scrolled)}
                    {is_mobile_or_tablet && (
                        <MobileMenu is_open={is_menu_open} items={visible_items} />
                    )}
                </Container.Fluid>
            </Container.Fixed>
        </>
    )
}

export default NavTemplate
