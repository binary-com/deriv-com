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
    const { scrollY, scrollDirection } = useScroll()

    useEffect(() => {
        const scrollHandler = () => {
            if (scrollDirection === 'up') {
                setHideNav(true)
            } else if (scrollY > 100) {
                setHideNav(false)
            }
        }

        window.addEventListener('scroll', scrollHandler, { passive: true })
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [scrollDirection, scrollY])

    return (
        <NavTemplate show_academy_nav={is_mounted} hide_nav={hide_nav}>
            <NavDesktop is_logged_in={is_logged_in} hide_language_switcher />
            <NavMobile is_logged_in={is_logged_in} hide_language_switcher />
        </NavTemplate>
    )
}

export default NavAcademy
