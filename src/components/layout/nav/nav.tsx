import React, { useEffect, useState } from 'react'
import { DesktopWrapper, MobileWrapper, NavWrapperMain, StyledNavMain } from './styles/nav-styles'
import { NavTypes } from './models/nav-types'
import NavDesktop from './components/nav-desktop'
import NavMobile from './nav-mobile'
import CFDWarning from './components/cfd-warning'
import { isLoggedIn } from 'common/utility'
import device from 'themes/device'

const Nav = ({
    base,
    is_ppc_redirect,
    is_ppc,
    hide_signup_login,
    academy_logo,
    no_language,
}: NavTypes) => {
    const [is_logged_in, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => clearInterval(checkCookieChange)
    }, [])

    return (
        <>
            <NavWrapperMain>
                <StyledNavMain>
                    <DesktopWrapper media={device.bp1060}>
                        <NavDesktop
                            hide_language_switcher={no_language}
                            base={base}
                            is_ppc={is_ppc}
                            is_ppc_redirect={is_ppc_redirect}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                            hide_get_trading={false}
                        />
                    </DesktopWrapper>

                    <MobileWrapper media={device.bp1060}>
                        <NavMobile
                            no_language={no_language}
                            academy_logo={academy_logo}
                            is_ppc={is_ppc}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                        />
                    </MobileWrapper>
                </StyledNavMain>
            </NavWrapperMain>
            <CFDWarning />
        </>
    )
}

export default Nav
