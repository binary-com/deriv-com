import React, { HTMLAttributes, MouseEventHandler, useMemo } from 'react'
import * as styles from './menu-toggle.module.scss'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'
import dclsx from 'features/utils/dclsx'

interface IMobileMenuToggleProps extends HTMLAttributes<HTMLImageElement> {
    is_open: boolean
    onClick: MouseEventHandler
}

const MobileMenuToggle = ({ is_open, onClick }: IMobileMenuToggleProps) => {
    const toggle_image = useMemo(() => {
        return {
            src: is_open ? Close : Hamburger,
            alt: is_open ? 'close menu' : 'hamburger menu',
        }
    }, [is_open])

    return (
        <img
            className={dclsx(styles.menu_toggle)}
            src={toggle_image.src}
            alt={toggle_image.alt}
            onClick={onClick}
        />
    )
}

MobileMenuToggle.displayName = 'MobileMenuToggle'

export default MobileMenuToggle
