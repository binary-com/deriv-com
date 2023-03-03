import React, { forwardRef, HTMLAttributes, useMemo } from 'react'
import clsx from 'clsx'
import * as styles from './desktop-main-nav.module.scss'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'

interface IMenuToggleButtonProps extends HTMLAttributes<HTMLImageElement> {
    is_open: boolean
}

const MenuToggleButton = forwardRef<HTMLImageElement, IMenuToggleButtonProps>(
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

MenuToggleButton.displayName = 'MenuToggleButton'

export default MenuToggleButton
