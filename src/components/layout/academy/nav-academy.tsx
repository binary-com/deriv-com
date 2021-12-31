import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavWrapperMain, StyledNavMain, NavDesktop, NavMobile } from '../nav'
import SearchBanner from '../../../pages/academy/components/_search-banner'
import { Show } from 'components/containers'
import { CFDWarning } from 'components/layout'
import { isLoggedIn } from 'common/utility'

type NavAcademyProps = {
    base: string
    is_ppc_redirect: boolean
    is_ppc: boolean
    hide_signup_login: boolean
    academy_logo: boolean
    no_language: boolean
}

const MainWrapper = styled(NavWrapperMain)`
    display: ${(props) => (props.background ? 'none' : 'block')};
    transition: opacity 1s ease-out;
`

const NavAcademy = ({
    base,
    is_ppc_redirect,
    is_ppc,
    hide_signup_login,
    academy_logo,
    no_language,
}: NavAcademyProps) => {
    const [is_logged_in, setLoggedIn] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        setPrevScrollPos(currentScrollPos)
        setVisible(currentScrollPos > 72)
    }

    useEffect(() => {
        setLoggedIn(isLoggedIn())

        const checkCookieChange = setInterval(() => {
            setLoggedIn(isLoggedIn())
        }, 800)
        return () => clearInterval(checkCookieChange)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])

    return (
        <>
            <MainWrapper background={visible}>
                <StyledNavMain>
                    <Show.Desktop max_width="bp1060">
                        <NavDesktop
                            no_language={no_language}
                            academy_logo={academy_logo}
                            base={base}
                            is_ppc={is_ppc}
                            is_ppc_redirect={is_ppc_redirect}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                        />
                    </Show.Desktop>
                    <Show.Mobile min_width="bp1060">
                        <NavMobile
                            no_language={no_language}
                            academy_logo={academy_logo}
                            is_ppc={is_ppc}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                        />
                    </Show.Mobile>
                </StyledNavMain>
            </MainWrapper>
            <SearchBanner hidden={visible} />
            <CFDWarning />
        </>
    )
}

export default NavAcademy
