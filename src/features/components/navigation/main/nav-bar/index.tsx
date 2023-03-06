import clsx from 'clsx'
import React, { HTMLAttributes, useRef, useState } from 'react'
import NavLogo from '../nav-logo'
import NavMenu from '../nav-menu'
import { TActiveNav } from '../types'
import NavRightContainer from '../nav-right-container'
import NavMenuToggle from '../nav-menu-toggle'
import DesktopNavbar from '../nav-items'
import * as styles from './nav-bar.module.scss'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import useBreakpoints from 'components/hooks/use-breakpoints'

interface DesktopTransparentNav extends HTMLAttributes<HTMLDivElement> {
    scrolled: boolean
}

const MainNavItems = ({ className, scrolled, ...rest }: DesktopTransparentNav) => {
    const navigation_bar_ref = useRef<HTMLUListElement>()
    const menu_nav_ref = useRef<HTMLDivElement>()
    const menu_toggle_ref = useRef<HTMLImageElement>()

    const [activeTab, setActiveTab] = useState<TActiveNav>('none')

    const [is_menu_open, setIsMenuOpen] = useState(false)

    const { is_mobile_or_tablet } = useBreakpoints()

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
                {is_mobile_or_tablet && (
                    <NavMenuToggle
                        is_open={is_menu_open}
                        onClick={onMenuToggleClick}
                        ref={menu_toggle_ref}
                    />
                )}
                <NavLogo />
                {!is_mobile_or_tablet && (
                    <DesktopNavbar
                        ref={navigation_bar_ref}
                        onItemClick={onItemClick}
                        activeTab={activeTab}
                    />
                )}
                <NavRightContainer scrolled={scrolled} />
            </div>
            {is_mobile_or_tablet && <NavMenu ref={menu_nav_ref} is_open={is_menu_open} />}
        </div>
    )
}

export default MainNavItems
