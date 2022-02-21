import React, { useEffect, useState } from 'react'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'
import { isLoggedIn } from 'common/utility'

type NavProps = {
    is_ppc: boolean
    hide_signup_login?: boolean
    hide_language_switcher?: boolean
    is_ppc_redirect?: boolean
}

const Nav = ({ is_ppc, is_ppc_redirect, hide_language_switcher, hide_signup_login }: NavProps) => {
    const [is_logged_in, setLoggedIn] = useState(false)
    const navProps = {
        is_ppc,
        is_logged_in,
        is_ppc_redirect,
        hide_language_switcher,
        hide_signup_login,
    }

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => clearInterval(checkCookieChange)
    }, [])

    return (
        <NavTemplate is_ppc={is_ppc}>
            <NavDesktop {...navProps} />
            <NavMobile {...navProps} />
        </NavTemplate>
    )
}

export default Nav
