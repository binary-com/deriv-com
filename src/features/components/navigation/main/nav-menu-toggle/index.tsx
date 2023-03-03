import React, { forwardRef, HTMLAttributes, useMemo } from 'react'
import clsx from 'clsx'
import * as styles from './menu-toggle.module.scss'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'

interface INavMenuToggleProps extends HTMLAttributes<HTMLImageElement> {
    is_open: boolean
}

const NavMenuToggle = forwardRef<HTMLImageElement, INavMenuToggleProps>(
    ({ is_open, className, onClick, ...rest }, ref) => {
        const toggle_image = useMemo(() => {
            return {
                src: is_open ? Close : Hamburger,
                alt: is_open ? 'close menu' : 'hamburger menu',
            }
        }, [is_open])

        return (
            <img
                ref={ref}
                className={clsx(className, styles.menu_toggle)}
                src={toggle_image.src}
                alt={toggle_image.alt}
                onClick={onClick}
                {...rest}
            />
        )
    },
)

NavMenuToggle.displayName = 'NavMenuToggle'

export default NavMenuToggle
