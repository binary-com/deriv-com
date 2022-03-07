import React, { useCallback, useEffect, useState } from 'react'
import useAuth from '../../hooks/use-auth'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'

type NavStickyProps = {
    is_ppc: boolean
    is_ppc_redirect: boolean
}

const NavSticky = ({ is_ppc_redirect, is_ppc }: NavStickyProps) => {
    const [is_logged_in] = useAuth()
    const [prev_scroll_position, setPrevScrollPosition] = useState(0)
    const [visible, setVisible] = useState(true)

    const backgroundHandler = useCallback(() => {
        const current_scroll_position = window.pageYOffset
        setVisible(
            (prev_scroll_position > current_scroll_position &&
                prev_scroll_position - current_scroll_position > 70) ||
                current_scroll_position < 10,
        )
        setPrevScrollPosition(current_scroll_position)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', backgroundHandler, { passive: true })
        return () => window.removeEventListener('scroll', backgroundHandler)
    }, [])

    return (
        <NavTemplate transparent_background={visible}>
            <NavDesktop
                is_logged_in={is_logged_in}
                is_ppc={is_ppc}
                is_ppc_redirect={is_ppc_redirect}
            />
            <NavMobile
                is_logged_in={is_logged_in}
                is_ppc={is_ppc}
                is_ppc_redirect={is_ppc_redirect}
            />
        </NavTemplate>
    )
}

export default NavSticky
