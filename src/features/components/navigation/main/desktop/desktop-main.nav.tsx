import clsx from 'clsx'
import React, { HTMLAttributes, useRef, useState } from 'react'
import * as styles from './desktop-main-nav.module.scss'
import { TActiveNav } from './types'
import MenuToggleButton from './menu-toggle.button'
import DesktopNavbar from './desktop.navbar'
import NavRightContainer from './nav-right-container'
import NavMenu from './nav-menu'
import NavLogo from './nav-logo'
import { useOutsideClick } from 'components/hooks/use-outside-click'

interface DesktopTransparentNav extends HTMLAttributes<HTMLDivElement> {
    scrolled: boolean
}

const DesktopMainNav = ({ className, scrolled, ...rest }: DesktopTransparentNav) => {
    const navigation_bar_ref = useRef<HTMLUListElement>()
    const menu_nav_ref = useRef<HTMLDivElement>()
    const menu_toggle_ref = useRef<HTMLImageElement>()

    const [activeTab, setActiveTab] = useState<TActiveNav>('none')

    const [is_menu_open, setIsMenuOpen] = useState(false)

    const onMenuToggleClick = () => {
        setIsMenuOpen((prevState) => !prevState)
    }

    useOutsideClick(navigation_bar_ref, () => setActiveTab('none'))
    useOutsideClick(menu_nav_ref, () => setIsMenuOpen(false), menu_toggle_ref)

    const onItemClick = (item: TActiveNav) => {
        if (item === activeTab) {
            setActiveTab('none')
        } else {
            setActiveTab(item)
        }
    }

    return (
        <div className={clsx(styles.desktop_nav, className)} {...rest}>
            <div className={styles.desktop_nav_container}>
                <MenuToggleButton
                    is_open={is_menu_open}
                    onClick={onMenuToggleClick}
                    ref={menu_toggle_ref}
                />
                <NavLogo />
                <DesktopNavbar
                    ref={navigation_bar_ref}
                    onItemClick={onItemClick}
                    activeTab={activeTab}
                />
                <NavRightContainer scrolled={scrolled} />
            </div>
            <NavMenu ref={menu_nav_ref} is_open={is_menu_open} />
        </div>
    )
}

export default DesktopMainNav
