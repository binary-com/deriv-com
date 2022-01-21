import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavWrapperMain, StyledNavMain, NavDesktop, NavMobile } from '../nav'
import SearchBanner from '../../../pages/academy/components/_search-banner'
import { Desktop, Mobile } from 'components/containers'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
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
    const [is_mounted] = usePageLoaded(false)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        setPrevScrollPos(currentScrollPos)
        setVisible(currentScrollPos > 72)
    }

    useEffect(() => {
        is_mounted && handleScroll()
    }, [is_mounted])

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
                    <Desktop breakpoint={1060}>
                        <NavDesktop
                            no_language={no_language}
                            academy_logo={academy_logo}
                            base={base}
                            is_ppc={is_ppc}
                            is_ppc_redirect={is_ppc_redirect}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                        />
                    </Desktop>
                    <Mobile breakpoint={1060}>
                        <NavMobile
                            no_language={no_language}
                            academy_logo={academy_logo}
                            is_ppc={is_ppc}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                        />
                    </Mobile>
                </StyledNavMain>
            </MainWrapper>
            {is_mounted && <SearchBanner hidden={visible} />}
            <CFDWarning />
        </>
    )
}

export default NavAcademy
