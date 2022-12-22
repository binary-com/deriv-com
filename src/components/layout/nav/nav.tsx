import React from 'react'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'

type NavProps = {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    hide_signup_login?: boolean
    hide_language_switcher?: boolean
}

const Nav = (navProps: NavProps) => {
    return (
        <NavTemplate>
            <NavDesktop {...navProps} />
            <NavMobile {...navProps} />
        </NavTemplate>
    )
}

export default Nav
