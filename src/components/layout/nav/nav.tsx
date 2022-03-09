import React from 'react'
import useAuthCheck from '../../hooks/use-auth-check'
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
    const [is_logged_in] = useAuthCheck()

    return (
        <NavTemplate>
            <NavDesktop is_logged_in={is_logged_in} {...navProps} />
            <NavMobile is_logged_in={is_logged_in} {...navProps} />
        </NavTemplate>
    )
}

export default Nav
