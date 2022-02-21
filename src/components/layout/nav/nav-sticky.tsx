import React, { useCallback, useEffect, useState } from 'react'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'
import { isLoggedIn } from 'common/utility'

type NavStickyProps = {
    is_ppc: boolean
}

const NavSticky = ({ is_ppc }: NavStickyProps) => {
    const [is_logged_in, setLoggedIn] = useState(true)
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
        setLoggedIn(isLoggedIn())
        window.addEventListener('scroll', backgroundHandler)
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => {
            clearInterval(checkCookieChange)
            window.removeEventListener('scroll', backgroundHandler)
        }
    }, [])

    return (
        <NavTemplate is_ppc={is_ppc} transparent_background={visible}>
            <NavDesktop is_logged_in={is_logged_in} is_ppc={is_ppc} />
            <NavMobile is_logged_in={is_logged_in} is_ppc={is_ppc} />
        </NavTemplate>
    )
}

export default NavSticky
