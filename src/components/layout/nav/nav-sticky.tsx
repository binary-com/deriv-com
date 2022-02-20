import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { DesktopWrapper, MobileWrapper } from './styles/nav-styles'
import NavDesktop from './components/nav-desktop'
import NavMobile from './nav-mobile'
import CFDWarning from './components/cfd-warning'
import { SectionContainer } from 'components/containers'
import device from 'themes/device'
import { isLoggedIn } from 'common/utility'

const Section = styled(SectionContainer)<{ background?: boolean }>`
    background-color: ${({ background }) => (background ? 'transparent' : 'var(--color-black)')};
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    padding: 4px 1%;
    height: 7.2rem;
    @media ${device.tabletL} {
        padding: 4px;
        height: 64px;
    }
    @media ${device.mobileL} {
        padding: 4px 0;
    }
`

type NavStickyProps = {
    is_ppc: boolean
    hide_signup_login?: boolean
    no_language?: boolean
}

const NavSticky = ({ is_ppc, hide_signup_login, no_language }: NavStickyProps) => {
    const [is_logged_in, setLoggedIn] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScrollBG = useCallback(() => {
        const currentScrollPos = window.pageYOffset
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
                currentScrollPos < 10,
        )
        setPrevScrollPos(currentScrollPos)
    }, [])

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        window.addEventListener('scroll', handleScrollBG)
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => {
            clearInterval(checkCookieChange)
            window.removeEventListener('scroll', handleScrollBG)
        }
    }, [])

    return (
        <>
            <Section background={visible}>
                <DesktopWrapper media={device.bp1060}>
                    <NavDesktop
                        no_language={no_language}
                        is_ppc={is_ppc}
                        is_logged_in={is_logged_in}
                        hide_signup_login={hide_signup_login}
                    />
                </DesktopWrapper>
                <MobileWrapper media={device.bp1060}>
                    <NavMobile
                        no_language={no_language}
                        is_ppc={is_ppc}
                        is_logged_in={is_logged_in}
                        hide_signup_login={hide_signup_login}
                    />
                </MobileWrapper>
            </Section>
            <CFDWarning no_eu_banner={true} />
        </>
    )
}

export default NavSticky
