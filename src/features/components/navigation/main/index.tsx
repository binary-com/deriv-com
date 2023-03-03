import clsx from 'clsx'
import React, { HTMLAttributes, useMemo, useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import DesktopMainNav from './desktop/desktop-main.nav'
import * as styles from './main-nav.module.scss'

interface IMainNavProps extends HTMLAttributes<HTMLDivElement> {
    is_hidden?: boolean
    has_static_position?: boolean
}
const MainNav = ({ is_hidden, has_static_position }: IMainNavProps) => {
    const scroll_watcher_ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(scroll_watcher_ref, {})
    const is_watcher_visible = useMemo(() => {
        if (entry) {
            return !!entry.isIntersecting
        }
        return true
    }, [entry])

    return (
        <>
            <div className={styles.navigation__watcher} ref={scroll_watcher_ref} />
            <div
                className={clsx(styles.navigation__wrapper, {
                    [styles.navigation__wrapper_static]: has_static_position,
                    [styles.navigation__wrapper_hidden]: is_hidden,
                })}
            >
                <div
                    className={clsx(styles.navigation__nav, {
                        [styles.navigation__nav_scrolled]: !is_watcher_visible,
                    })}
                >
                    <DesktopMainNav scrolled={!is_watcher_visible} />
                </div>
            </div>
        </>
    )
}

export default MainNav
