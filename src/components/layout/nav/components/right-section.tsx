import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { handleGetTrading, handleLogin, handleScroll, moveButton } from '../util/nav-methods'
import { NavRight } from '../styles/nav-styles'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { Button } from 'components/form'

type RightSectionProps = {
    is_logged_in: boolean
    is_ppc_redirect: boolean
    hide_language_switcher: boolean
    hide_signup_login: boolean
}

type LanguageProps = {
    hide_component: boolean
}

const StyledButton = styled(Button)`
    white-space: nowrap;
`
const Wrapper = styled.div`
    display: inline-flex;
    text-align: right;
    align-items: center;
    justify-content: center;
    padding: 0;
`
const SignupButton = styled(Button)`
    margin-left: 1.6rem;
    opacity: 0;
`

const Language = ({ hide_component }: LanguageProps) =>
    !hide_component && <LanguageSwitcher has_short_name is_high_nav />

const RightSection = ({
    is_logged_in,
    is_ppc_redirect,
    hide_language_switcher,
    hide_signup_login,
}: RightSectionProps) => {
    const button_ref = useRef(null)
    const signup_url = is_ppc_redirect ? '/landing/signup/' : '/signup/'

    const [mounted, setMounted] = useState(false)
    const [has_scrolled, setHasScrolled] = useState(false)
    const [show_button, showButton, hideButton] = moveButton()

    const buttonHandleScroll = useCallback(() => {
        setHasScrolled(true)
        handleScroll(showButton, hideButton)
    }, [])

    useEffect(() => {
        setMounted(true)
        document.addEventListener('scroll', buttonHandleScroll, { passive: true })
        return () => document.removeEventListener('scroll', buttonHandleScroll)
    }, [mounted])

    if (is_logged_in) {
        return (
            <Wrapper>
                <Language hide_component={hide_language_switcher} />
                <StyledButton onClick={handleGetTrading} primary>
                    {localize('Get Trading')}
                </StyledButton>
            </Wrapper>
        )
    }
    return (
        <NavRight
            move={show_button}
            hide_signup_login={hide_signup_login}
            button_ref={button_ref}
            mounted={mounted}
            has_scrolled={has_scrolled}
        >
            <Language hide_component={hide_language_switcher} />

            {!hide_signup_login && (
                <>
                    <StyledButton id="dm-nav-login-button" onClick={handleLogin} primary>
                        {localize('Log in')}
                    </StyledButton>

                    <LocalizedLink id="dm-signup" to={signup_url}>
                        <SignupButton id="dm-nav-signup" ref={button_ref} secondary="true">
                            {localize('Create free demo account')}
                        </SignupButton>
                    </LocalizedLink>
                </>
            )}
        </NavRight>
    )
}

export default RightSection
