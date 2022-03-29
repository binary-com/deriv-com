import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import useAuthCheck from '../../hooks/use-auth-check'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const NavAcademy = () => {
    const [prev_scroll_position, setPrevScrollPosition] = useState(0)
    const [visible, setVisible] = useState(true)
    const [is_mounted] = usePageLoaded()
    const [is_logged_in] = useAuthCheck()

    const scrollHandler = useCallback(() => {
        const current_scroll_position = window.scrollY
        setPrevScrollPosition(current_scroll_position)
        setVisible(current_scroll_position > 72)
    }, [])

    useLayoutEffect(() => {
        is_mounted && scrollHandler()
    })

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, { passive: true })
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [prev_scroll_position, visible, scrollHandler])

    return (
        <NavTemplate show_academy_nav={is_mounted} hide_nav={visible}>
            <NavDesktop is_logged_in={is_logged_in} hide_language_switcher />
            <NavMobile is_logged_in={is_logged_in} hide_language_switcher />
        </NavTemplate>
    )
}

export default NavAcademy
