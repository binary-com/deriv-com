import React, { useEffect, useState } from 'react'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { isLoggedIn } from 'common/utility'

type NavAcademyProps = {
    is_ppc: boolean
}

const NavAcademy = ({ is_ppc }: NavAcademyProps) => {
    const [is_logged_in, setLoggedIn] = useState(false)
    const [prev_scroll_position, setPrevScrollPosition] = useState(0)
    const [visible, setVisible] = useState(true)
    const [is_mounted] = usePageLoaded(false)

    const scrollHandler = () => {
        const current_scroll_position = window.scrollY
        setPrevScrollPosition(current_scroll_position)
        setVisible(current_scroll_position > 72)
    }

    useEffect(() => {
        is_mounted && scrollHandler()
    }, [is_mounted])

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => clearInterval(checkCookieChange)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [prev_scroll_position, visible, scrollHandler])

    return (
        <NavTemplate is_ppc={is_ppc} show_academy_nav={is_mounted} hide_nav={visible}>
            <NavDesktop is_logged_in={is_logged_in} hide_language_switcher />
            <NavMobile is_logged_in={is_logged_in} hide_language_switcher />
        </NavTemplate>
    )
}

export default NavAcademy
