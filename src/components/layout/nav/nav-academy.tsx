import React, { useEffect, useState } from 'react'
import useAuthCheck from '../../hooks/use-auth-check'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { useScroll } from 'components/hooks/use-scroll'

const NavAcademy = () => {
    const [hide_nav, setHideNav] = useState(false)
    const [is_mounted] = usePageLoaded()
    const [is_logged_in] = useAuthCheck()
    const { scroll_y, scroll_direction } = useScroll()

    useEffect(() => {
        if (scroll_direction === 'down' && scroll_y > 72) {
            setHideNav(true)
        } else {
            setHideNav(false)
        }
    }, [scroll_direction, scroll_y])

    return (
        <NavTemplate show_academy_nav={is_mounted} hide_nav={hide_nav}>
            <NavDesktop is_logged_in={is_logged_in} hide_language_switcher />
            <NavMobile is_logged_in={is_logged_in} hide_language_switcher />
        </NavTemplate>
    )
}

export default NavAcademy
