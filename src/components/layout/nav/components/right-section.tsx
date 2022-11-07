import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { handleGetTrading, handleScroll, useMoveButton } from '../util/nav-methods'
import { NavRight } from '../styles/nav-styles'
import { localize, LanguageSwitcher } from 'components/localization'
import { Button } from 'components/form'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

type RightSectionProps = {
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
const SignupButton = styled(Button)`
    margin-left: 1.6rem;
    opacity: 0;
`

const Language = ({ hide_component }: LanguageProps) =>
    !hide_component && <LanguageSwitcher has_short_name is_high_nav />

const RightSection = ({
    is_ppc_redirect,
    hide_language_switcher,
    hide_signup_login,
}: RightSectionProps) => {
    const button_ref = useRef(null)
    const [is_mounted] = usePageLoaded()
    const [has_scrolled, setHasScrolled] = useState(false)
    const [show_button, showButton, hideButton] = useMoveButton()
    const { is_loading } = useCountryRule()
    const handleLogin = useHandleLogin()
    const handleSignup = useHandleSignup(is_ppc_redirect)
    const [is_logged_in] = useAuthCheck()

    const buttonHandleScroll = useCallback(() => {
        setHasScrolled(true)
        handleScroll(showButton, hideButton)
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', buttonHandleScroll, { passive: true })
        return () => document.removeEventListener('scroll', buttonHandleScroll)
    }, [])

    return (
        <NavRight
            move={show_button}
            hide_signup_login={hide_signup_login}
            button_ref={button_ref}
            mounted={is_mounted}
            has_scrolled={has_scrolled}
        >
            <Language hide_component={hide_language_switcher} />

            {!hide_signup_login && (
                <>
                    {is_logged_in ? (
                        <StyledButton
                            disabled={is_loading}
                            id="dm-nav-login-button"
                            onClick={handleLogin}
                            primary
                        >
                            {localize('Log in')}
                        </StyledButton>
                    ) : (
                        <StyledButton
                            disabled={is_loading}
                            onClick={handleGetTrading}
                            id="dm-hero-signup"
                            primary
                        >
                            {localize('Get Trading')}
                        </StyledButton>
                    )}

                    <SignupButton
                        disabled={is_loading}
                        onClick={handleSignup}
                        id="dm-nav-signup"
                        ref={button_ref}
                        secondary
                    >
                        {localize('Create free demo account')}
                    </SignupButton>
                </>
            )}
        </NavRight>
    )
}

export default RightSection
