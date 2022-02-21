import React, { useEffect, useState } from 'react'
import NavTemplate from './components/nav-template'
import NavDesktop from './components/nav-desktop'
import NavMobile from './components/nav-mobile'
import { isLoggedIn } from 'common/utility'

type NavProps = {
    base: string
    is_ppc_redirect: boolean
    is_ppc: boolean
    hide_signup_login?: boolean
    hide_language_switcher?: boolean
    hide_get_trading?: boolean
}

const Nav = ({ base, hide_get_trading, is_ppc, ...rest }: NavProps) => {
    const [is_logged_in, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => clearInterval(checkCookieChange)
    }, [])

    return (
        <NavTemplate is_ppc={is_ppc}>
            <NavDesktop
                base={base}
                hide_get_trading={hide_get_trading}
                is_ppc={is_ppc}
                is_logged_in={is_logged_in}
                {...rest}
            />
            <NavMobile is_ppc={is_ppc} is_logged_in={is_logged_in} {...rest} />
        </NavTemplate>
    )
}

export default Nav
