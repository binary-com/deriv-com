import React from 'react'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'
import useAuth from './util/useAuth'

type NavProps = {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    hide_signup_login?: boolean
    hide_language_switcher?: boolean
}

const Nav = ({ is_ppc, is_ppc_redirect, hide_language_switcher, hide_signup_login }: NavProps) => {
    const [is_logged_in] = useAuth()
    const navProps = {
        is_ppc,
        is_logged_in,
        is_ppc_redirect,
        hide_language_switcher,
        hide_signup_login,
    }

    return (
        <NavTemplate>
            <NavDesktop {...navProps} />
            <NavMobile {...navProps} />
        </NavTemplate>
    )
}

export default Nav
