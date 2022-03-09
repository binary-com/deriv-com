import React, { useCallback, useEffect, useState } from 'react'
import useAuthCheck from '../../hooks/use-auth-check'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'

type NavTransparentProps = {
    is_ppc: boolean
    is_ppc_redirect: boolean
}

const NavTransparent = ({ is_ppc_redirect, is_ppc }: NavTransparentProps) => {
    const [is_logged_in] = useAuthCheck()
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

export default NavTransparent
